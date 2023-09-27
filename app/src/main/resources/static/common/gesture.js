import { GestureRecognizer, FilesetResolver } from "../mediapipe/tasks-vision/0-10-3/task-vision-0.10.3.js";

let gestureRecognizer;
const videoElement = document.getElementById("videoImpt");
var canvasElement = document.getElementById("outCnvs");
var canvasCtx = canvasElement.getContext("2d");
var logCanvas = document.getElementById("logCnvs");
var logCanvasCtx = logCanvas.getContext("2d");
var screenCanvas = document.getElementById("screenCnvs");
var screenCnvsCtx = screenCanvas.getContext("2d");
const tasksCanvas = document.createElement("canvas")

var mapCanvas = null;
var NUM_HANDS = 2;
var hands = [];
var tfliteModel = null;
var keypointLabels = [];
const handLabels = ["RIGHT", "LEFT"];
var loadedModel = null;
var snapshotArray = [];
var markersConfig = [];
var printBuffer = [];
var cameraControl = null;

const HAND_CONNECTIONS = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]];

const WRIST 		= 0;
const THUMB_CMC		= 1;
const THUSM_MCP		= 2;
const THUMB_IP		= 3;
const THUMB_TIP		= 4;
const INDEX_MCP		= 5;
const INDEX_PIP		= 6;
const INDEX_DIP		= 7;
const INDEX_TIP		= 8;
const MIDDLE_MCP	= 9;
const MIDDLE_PIP	= 10;
const MIDDLE_DIP	= 11;
const MIDDLE_TIP	= 12;
const RING_MCP		= 13;
const RING_PIP		= 14;
const RING_DIP		= 15;
const RING_TIP		= 16;
const PINKY_MCP		= 17;
const PINKY_PIP		= 18;
const PINKY_DIP		= 19;
const PINKY_TIP		= 20;
const DEBUG_MODE 	= true;
const ONE_KM 		= 1000;
const GEOHASH_PRECISION = 8; // 8=19m 7=76m 6=610m 5=2.4Km 4=20Km
const LEFT_HAND = 1;
const RIGHT_HAND = 0;
// Isto ativa ou desativa o segundo modelo preditivo que usa TensorFlow
// baseado em
// https://github.com/Kazuhito00/hand-keypoint-classification-model-zoo
// O resultado é uma segunda predição baseada no modelo escolhido da pasta "/mediapiper/models"
// e que podem ser encontrados no Github acima. Não percebi mudanças significativas em desempenho.
// A segunda predição vai ser enviada no objeto "hands[index].gesture.prediction2"
// Exemplo: O modelo principal informa um punho fechado como "CLOSE" em "hands[index].gesture.category"
// e a segunda predição informa como "HALT" em "hands[index].gesture.prediction2.label"
// Use isso se o modelo principal não lhe atender. O Github achima contém
// informações sobre como treinar novos modelos baseados em sua necessidade.
// Você pode alterar os nomes dos gestos no arquivo "keypoint_labels.json" que acompanha cada modelo,
// pois os tensores de retorno informam apenas o índice do gesto que foi treinado, logo, a ordem no array importa. 
const USE_SECONDARY_PREDICT = false;
const VARIANCE_BUFFER_SIZE = 100;

// Posso exibir os marcadores que não possuem função? 
const CAN_SHOW_NON_PARTICIPANTS = true; 

// Desenha os marcadores no mapa e armazena os dados de cada um para uso futuro
// Chamado a cada frame de imagem do video
function plotMarkers( handIndex, landmarks ){
	if( !landmarks || handIndex > NUM_HANDS ) return;
	
	let canMove = true;
	
	
	// Verifico a variância no movimento da ponta do indicador.
	// Se estiver dentro da média, não move menhum marcador.
	let meanVariance = 1;
	let pixelDistance = 999;
	let varianceArray = [1];
	let suddenMovement = false;
	if( hands[handIndex][ INDEX_TIP ].location ){
		varianceArray = hands[handIndex].varianceArray;

		// Distanca em pixels entre a posicao antiga e a nova da ponta do indicador 
		const xOldPos = hands[handIndex][INDEX_TIP].location.xPos;
		const yOldPos = hands[handIndex][INDEX_TIP].location.yPos;
		const x = landmarks[INDEX_TIP].x; 
    	const y = landmarks[INDEX_TIP].y;
		var xPos =  mapCanvas.width - ( x * mapCanvas.width );
		var yPos =  y * mapCanvas.height;		
		const diffX = Math.abs( xOldPos - xPos );
		const diffY = Math.abs( yOldPos - yPos );
		pixelDistance = Math.round( Math.hypot(diffX, diffY) );
		
		// Se o buffer estiver cheio, retiro o elemento mais antigo
		if( varianceArray.length > VARIANCE_BUFFER_SIZE ) varianceArray.shift();

		// Calculo a media de todas as variacoes de distancia do marcador da ponta do indicador		
		meanVariance =  Math.round( varianceArray.reduce((a, b) => a + b) / varianceArray.length );
		
		// Para não prejudicar a média com valores muito altos, detecto se houve uma variação muito grande 
		// na distancia entre o ponto antigo e o novo ( a mao se movimentou muito rapido )
		// Se for o caso eu nao incluo a variancia no array. Assim a media varia de forma mais suave
		// e permite mais precisao no movimento. Aqui exsite uma decisão entre RESPOSTA x PRECISÃO
		// Resposta rápida implica em mais variância do marcador. Mais precisão implica em uma latência alta
		// Altere o número mágico abaixo ( 2.3 ) para experimentar mais opções. 
		suddenMovement = ( pixelDistance > ( 2.3 * meanVariance ) );
		if( !suddenMovement ) varianceArray.push( pixelDistance );
		
		// Verifico se a ponta do indicador pode se mover. Se sim, então todos os outros marcadores podem
		canMove = ( pixelDistance > meanVariance );
	}
	hands[handIndex].varianceArray = varianceArray;
	
    for( let index=0; index < landmarks.length; index++ ){
		let x = landmarks[index].x; 
    	let y = landmarks[index].y; 
    	let z = landmarks[index].z;
    	
    	// Normaliza X,Y para a matriz de pixel do canvas
		var xPos =  mapCanvas.width - ( x * mapCanvas.width );
		var yPos =  y * mapCanvas.height;
		
		// Normaliza X,Y para as coordenadas geográficas ( como se o canvas fosse sempre um mapa plano na mesma escala).
		// Isso desconecta as distancias geográficas dos marcadores do zoom do mapa.
		const worldX = ( 360 - ( x * 360 ) ) - 180;
		const worldY = ( 180 - ( y * 180 ) ) - 90;
		
		// Projeta o pixel do canvas no mapa. Isso considera se o mapa está em 3D ou 2D.
		try{
			const mp = getMapPosition3D2D( {"x": xPos, "y": yPos} );
			const cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic( mp );
			const lonDeg = Cesium.Math.toDegrees(cartographic.longitude);
			const latDeg = Cesium.Math.toDegrees(cartographic.latitude);    	    
			const height = Math.abs( z ) * ( ONE_KM * 5 );
			// Armazena todos os dados obtidos das posições dos marcadores para cálculos posteriores
			// O geohash é útil para determinar proximidades dos marcadores (similaridade do hash)
			// ... mas infelizmente só funciona bem em alto nível de zoom
			const geohash = encodeGeoHash( worldX, worldY, GEOHASH_PRECISION );
	
			// So atualiza o marcador se o marcador da ponta do indicador der permissao
			if( canMove ) hands[handIndex][index].position = Cesium.Cartesian3.fromDegrees(lonDeg, latDeg, height );

			hands[handIndex][index].show = hands[handIndex][index].config.canShow;
			
			hands[handIndex][index].location = { 
				lat: latDeg, 
				lon: lonDeg, 
				alt: height,
				xPos: xPos,
				yPos: yPos,
				worldX: worldX,
				worldY: worldY,
				geohash: geohash,
				movAmpplitude: pixelDistance,
				suddenMovement: suddenMovement
			};
			
			
		} catch( err ) {
			hands[handIndex][index].show = false;
		}
	}
	// viewer.scene.requestRender();
}


// Toma decisões baseadas nas posições dos marcadores ou dos gestos 
// determinados pelos modelos IA
// A frequencia de chamada é determinada pelo "setInterval()" em "prepareEnvironment()"
// Fiz isso para dar tempo do sistema "pensar" sobre o gesto encontrado. O modelo fica variando 
// os gestos com alguma frequencia indesejada. Então essa demora pode "equalizar" essa variância.

function processMapCommand( index ){
	
	if( !hands[index] || !hands[index].gesture) return;
	
	const cameraHeight = ellipsoid.cartesianToCartographic( viewer.camera.position ).height;
	const gesture = hands[index].gesture;
	const category = gesture.category.toUpperCase();
	const handIndex = gesture.handIndex;
	const handLabel = gesture.handLabel;
	const bbox = gesture.bbox;
	var category2 = null;
	var category2Index = null;
	const landmarks = gesture.landmarks;
	let labelPos = 10;
	if( handIndex == 0 ) labelPos = 135;

	if( hands[index].gesture.prediction2 ){
		category2 = gesture.prediction2.label.toUpperCase();
		category2Index = gesture.prediction2.index;
	} 

	// Pega informações sobre os dedos indicador e polegar
	const indexTip   = hands[index][ INDEX_TIP ];
	const middleTip  = hands[index][ MIDDLE_TIP ];
	const wrist      = hands[index][ WRIST ];
	const thumbTip   = hands[index][ THUMB_TIP ];
	const pinkyTip   = hands[index][ PINKY_TIP ];
	const ringTip    = hands[index][ RING_TIP ];

	// Interrogação de Entity no mapa
	// ao passar a ponta do indicador sobre ela ( simula Mouse Over )
	const px = hands[index][ INDEX_TIP ].location.xPos;
	const py = hands[index][ INDEX_TIP ].location.yPos;
	const mousePosition = {"x": px, "y": py};
	try {
		const pickedObjects = viewer.scene.drillPick( mousePosition );
		if ( Cesium.defined(pickedObjects) ) {
			for (let i = 0; i < pickedObjects.length; ++i) {
				const entity = pickedObjects[i].id;
				if( entity ) {
					// Evita pegar o próprio marcador do dedo
					if( entity.name == "HAND_MARKER" ) continue;
					// Faça o que quiser com a entity agora...
					writeScreenCanvas( entity.name, indexTip.location.xPos -50, indexTip.location.yPos -50, "lime");
					writeLog( "QUERY LAYER", 10, 95, "#FF0000");
				}
			}
		}
	} catch(err) {
		console.log( err )
	}	

	const indexThumb  = getRelativeInfo( indexTip, thumbTip );
	const indexMiddle = getRelativeInfo( indexTip, middleTip );
	const indexWrist  = getRelativeInfo( indexTip, wrist );
	const indexPinky  = getRelativeInfo( indexTip, pinkyTip );
	const thumbPinky  = getRelativeInfo( thumbTip, pinkyTip );
	const thumbMiddle = getRelativeInfo( thumbTip, middleTip );
	const thumbRing   = getRelativeInfo( thumbTip, ringTip );
	
	const lon = pinkyTip.location.lon;
	const lat = pinkyTip.location.lat;
	

	const velocityMultiplier = indexPinky.pixelDistance;	
	
	deactivate( middleTip );
	deactivate( indexTip );
	deactivate( thumbTip );
	deactivate( ringTip );
	
	// Aproximar polegar do anelar habilita o zoom
	// Somente a mao direita controla o zoom
	if( thumbRing.isClose && thumbMiddle.isClose && handIndex == RIGHT_HAND) {
		writeLog( "ZOOM ENABLED", 10, 95, "#FF0000");
		activate( thumbTip );
		activate( ringTip );
		activate( middleTip );
		if( indexWrist.orientation.west ) cameraControl.moveForward( velocityMultiplier );
		if( indexWrist.orientation.east ) cameraControl.moveBackward( velocityMultiplier );
		writeScreenCanvas( cameraControl.getCameraHeight().toFixed(2) + "m", wrist.location.xPos -50, wrist.location.yPos -50 , "white");
		return;
	} 


	if( thumbRing.isClose && thumbMiddle.isClose && handIndex == LEFT_HAND) snapshot();
	
	// Aproximar o médio do indicador em ambas as mãos habilita o movimento do mapa
	// As mãos precisam estar de costas
	if( indexMiddle.isClose ) {
		writeLog( "MOVE ENABLED", 10, 95, "#FF0000");
		
		activate( middleTip );
		activate( indexTip );
		
		if( handIndex == RIGHT_HAND ){
			if( thumbPinky.orientation.north && indexWrist.orientation.west ){
				writeLog( "WEST", labelPos, 55, "lime");
				cameraControl.moveLeft(velocityMultiplier);
			}
			if( thumbPinky.orientation.east && indexWrist.orientation.north ){
				writeLog( "NORTH", labelPos, 55, "lime");
				cameraControl.moveUp(velocityMultiplier);
			}
			if( thumbPinky.orientation.west && indexWrist.orientation.south ){
				writeLog( "SOUTH", labelPos, 55, "lime");
				cameraControl.moveDown(velocityMultiplier);
			} 
		}
		
		if( handIndex == LEFT_HAND ){
			if( thumbPinky.orientation.north && indexWrist.orientation.east ){
				writeLog( "EAST", labelPos, 55, "lime");
				cameraControl.moveRight(velocityMultiplier);
			}
			if( thumbPinky.orientation.east && indexWrist.orientation.south ){
				writeLog( "SOUTH", labelPos, 55, "lime");
				cameraControl.moveDown(velocityMultiplier);
			}
			if( thumbPinky.orientation.west && indexWrist.orientation.north ){
				writeLog( "NORTH", labelPos, 55, "lime");
				cameraControl.moveUp(velocityMultiplier);
			}
		}

		writeLog( "I->W: " + indexWrist.xQuadrant + " " + indexWrist.yQuadrant, 10, 65, "lime");
		writeLog( "T->P: " + thumbPinky.xQuadrant + " " + thumbPinky.yQuadrant, 10, 75, "lime");
		
		return;
	}	

}

function activate( marker ){
	marker.point.color = Cesium.Color.CRIMSON;
	marker.point.pixelSize = 20;	
}

function deactivate( marker ){
	marker.point.color = marker.config.color.withAlpha( marker.config.alpha );
	marker.point.pixelSize = marker.config.size;	
}


function getRelativeInfo( mark1, mark2 ){
	
	// ----------------------------  DATA COLLECT ---------------------------
	const startPX = mark1.location.worldX;
	const startPY = mark1.location.worldY;
	
	const endPX   = mark2.location.worldX;
	const endPY   = mark2.location.worldY;
	
	const startHeight = Math.round(mark1.location.alt);
	const endHeight = Math.round(mark2.location.alt);		
	
	const startPixelX = mark1.location.xPos;
	const startPixelY = mark1.location.yPos;
	
	const endPixelX = mark2.location.xPos;
	const endPixelY = mark2.location.yPos;

	const diffX = Math.abs( startPixelX - endPixelX );
	const diffY = Math.abs( startPixelY - endPixelY );

	const c3StartPoint = Cesium.Cartesian3.fromDegrees( startPX, startPY );
	const c3EndPoint = Cesium.Cartesian3.fromDegrees( endPX, endPY );
	
	const startCartographicPoint = Cesium.Cartographic.fromCartesian(c3StartPoint);
	const endCartographicPoint = Cesium.Cartographic.fromCartesian(c3EndPoint);

	// -----------------  CALCULATIONS ---------------------------------------
	// mark1 em relação a mark2 está :
	let orientation = {
		north : ( startPixelY < endPixelY ),
		south : ( startPixelY > endPixelY ),
		east  : ( startPixelX > endPixelX ),
		west  : ( startPixelX < endPixelX )
	}
	
	let xQuadrant = "EAST";
	let yQuadrant = "NORTH";
	if( orientation.south ) yQuadrant = "SOUTH";
	if( orientation.west ) xQuadrant = "WEST";
	
	const meanHeight = ( startHeight + endHeight ) / 2;
	var pixelDistance = Math.hypot(diffX, diffY);
	
	pixelDistance =  Math.round( ( pixelDistance * pixelDistance ) / ( 2 * meanHeight ) );
	
	const distance = surfaceDistance( startCartographicPoint, endCartographicPoint );	
	const az = bearing( startCartographicPoint, endCartographicPoint ) + 180;

	const isClose = ( pixelDistance < 20 );
	// -----------------------------------------------------------------------
	return {
		mapDistance : distance,
		pixelDistance: pixelDistance,
		bearing: az,
		isClose: isClose,
		orientation: orientation,
		xQuadrant: xQuadrant,
		yQuadrant: yQuadrant
	};
}

function surfaceDistance( startCartographicPoint, endCartographicPoint ){
	var ellipsoidGeodesic = new Cesium.EllipsoidGeodesic(startCartographicPoint, endCartographicPoint );
	var distance = ellipsoidGeodesic.surfaceDistance;
	var distanceInKm = distance * 0.001;
	return Math.round( distance );
}

function bearing( cartoStart, cartoEnd ){
	const y = Math.sin(cartoEnd.longitude - cartoStart.longitude) * Math.cos(cartoEnd.latitude);
	const x = Math.cos(cartoStart.latitude) * Math.sin(cartoEnd.latitude) -
	    Math.sin(cartoStart.latitude) * Math.cos(cartoEnd.latitude) *
	    Math.cos(cartoEnd.longitude - cartoStart.longitude);
	const bearing = Math.atan2(y, x);
	return Math.round( Cesium.Math.toDegrees(bearing) );
}


function preProcessLandmark(landmarkList) {
    const tempLandmarkList = JSON.parse(JSON.stringify(landmarkList));
    let baseX = 0;
    let baseY = 0;
    for (let index = 0; index < tempLandmarkList.length; index++) {
        const landmarkPoint = tempLandmarkList[index];
        if (index === 0) {
            baseX = landmarkPoint[0];
            baseY = landmarkPoint[1];
        }
        tempLandmarkList[index][0] = tempLandmarkList[index][0] - baseX;
        tempLandmarkList[index][1] = tempLandmarkList[index][1] - baseY;
    }
    const flattenedLandmarkList = tempLandmarkList.flat();
    const maxAbsValue = Math.max(...flattenedLandmarkList);
    function normalize(n) {
        return n / maxAbsValue;
    }
    const normalizedLandmarkList = flattenedLandmarkList.map(normalize);
    return normalizedLandmarkList;
}


function calcLandmarkList(landmarks){
	const imageWidth = mapCanvas.width;
	const imageHeight = mapCanvas.height;
	let landmarkPoint = [];
    for (let i = 0; i < landmarks.length; i++) {
        const landmark = landmarks[i];
        const landmarkX = Math.min(Math.floor(landmark.x * imageWidth), imageWidth - 1);
        const landmarkY = Math.min(Math.floor(landmark.y * imageHeight), imageHeight - 1);
    	landmarkPoint.push([landmarkX, landmarkY])
    }	
	return landmarkPoint;
}


function calcBoundingRect(landmarks) {
	const imageWidth = mapCanvas.width;
	const imageHeight = mapCanvas.height;
    const landmarkArray = [];
    for (let i = 0; i < landmarks.length; i++) {
        const landmark = landmarks[i];
        const landmarkX = Math.min(Math.floor(landmark.x * imageWidth), imageWidth - 1);
        const landmarkY = Math.min(Math.floor(landmark.y * imageHeight), imageHeight - 1);
        const landmarkPoint = [landmarkX, landmarkY];
        landmarkArray.push(landmarkPoint);
    }
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;
    for (const point of landmarkArray) {
        const [x, y] = point;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    }
    const width = maxX - minX;
    const height = maxY - minY;
    return [minX, minY, width, height];
}

function showOnlyHand( hand ){
	for(let h=0; h < NUM_HANDS; h++) {
		if( h != hand ){
			hands[h].gesture = null
			for( let x=0; x < 21; x++  ) {
				hands[h][x].show = false;
			}
		}
	}
	// viewer.scene.requestRender();
}

function prepareEnvironment(){
	// Este timer eh para controle da suavização de resposta
	// Ele que eh encarregado de processar os gestos sem "soluços"
	// Pois um modelo pode não ser bem treinado e ficar alternando 
	// a identificação dos gestos muito rápido (indecisão)
	
	setInterval( function(){
	    videoElement.width = mapCanvas.width;
	    videoElement.height = mapCanvas.height;
		for( let index=0; index < NUM_HANDS; index++ ) {
			processMapCommand( index );
		}
		updateLogPanel();
	},40);	
	
	for( let x=0; x < 21; x++  ) {
		markersConfig[ x ] = {  
			color: Cesium.Color.ALICEBLUE,
			size : 30,
			alpha: 0.01,
			canShow: CAN_SHOW_NON_PARTICIPANTS
		}
	}

	markersConfig[ WRIST ]      = { color :Cesium.Color.DARKORANGE , size: 25, alpha: 1, canShow: true };
	markersConfig[ INDEX_TIP ]  = { color :Cesium.Color.DODGERBLUE , size: 10, alpha: 1, canShow: true };
	markersConfig[ THUMB_TIP ]  = { color :Cesium.Color.DODGERBLUE , size: 10, alpha: 1, canShow: true };
	markersConfig[ PINKY_TIP ]  = { color :Cesium.Color.DODGERBLUE , size: 10, alpha: 1, canShow: true };
	markersConfig[ MIDDLE_TIP ] = { color :Cesium.Color.DODGERBLUE , size: 10, alpha: 1, canShow: true };
	markersConfig[ RING_TIP ]   = { color :Cesium.Color.DODGERBLUE , size: 10, alpha: 1, canShow: true };
	
	for(let h=0; h < NUM_HANDS; h++) {
		hands[h] = [];
		for( let x=0; x < 21; x++  ) {
			// Cada indice desse array eh uma mão e cada indice do array de mão eh um marcador
			hands[h][x] = viewer.entities.add({
				show: false,			
			  	position: Cesium.Cartesian3.fromDegrees(0, 0, 0),
			  	point:{
					outlineColor: Cesium.Color.BLACK,
					outlineWidth: 1,
			    	pixelSize: markersConfig[x].size,
			    	color: markersConfig[x].color.withAlpha( markersConfig[x].alpha )
			  	}
			});
			hands[h][x].name = "HAND_MARKER";
			hands[h][x].config = markersConfig[x];
		}
	}
	
	cameraControl = new CesiumCamera( viewer.camera );
	
	/*
	const planePlayer = viewer.entities.add({
	  name: "Video Player",
	  position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
	  plane: {
	    plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Y, 0.0),
	    dimensions: new Cesium.Cartesian2(400000.0, 300000.0),
	    material: videoElement,
	    outline: true,
	    outlineColor: Cesium.Color.BLACK,
	  },
	});
	*/	
	
}


function updateLogPanel(){
	if( !DEBUG_MODE ) return;
	
	logCanvasCtx.clearRect(0, 0, logCanvas.width, logCanvas.height);
	screenCnvsCtx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);	
	
	for( let ele in printBuffer ) {
		const line = printBuffer[ele];
	    line.context.fillStyle = line.color;    
		line.context.strokeText( line.text , line.x, line.y);
		line.context.fillText( line.text , line.x, line.y);
	}

	printBuffer = [];
}

function writeLog( text, x, y, color = "yellow" ){
	write( logCanvasCtx, text, x, y, color );
}

function writeScreenCanvas( text, x, y, color = "yellow" ){
	write( screenCnvsCtx, text, x, y, color );
}

function write( context, text, x, y, color = "yellow" ){
	if( !DEBUG_MODE ) return;
	printBuffer[x+y] = {
		text: text,
		x: x,
		y: y,
		color: color,
		context: context
	}	
}

async function loadPredictionModel( modelName ) {
	loadedModel = modelName;
	tfliteModel = await tflite.loadTFLiteModel(
		"mediapipe/models/"+modelName+"/keypoint_classifier.tflite",  /* { numThreads: 4 } */
	);
	fetch("mediapipe/models/"+modelName+"/keypoint_labels.json")
	    .then( (response) => response.json() )
	    .then( (json) => { 
			keypointLabels = json; 
	    });	
}	


function enableCam( viewer ) {
	mapCanvas = viewer.canvas;
    videoElement.width = mapCanvas.width;
    videoElement.height = mapCanvas.height;

	screenCanvas.width = mapCanvas.width;
	screenCanvas.height = mapCanvas.height;


    screenCnvsCtx.font = "9pt Monospace";
    screenCnvsCtx.strokeStyle = 'black';
    screenCnvsCtx.textAlign = "left";
    screenCnvsCtx.lineWidth = 1;

    logCanvasCtx.font = "9pt Monospace";
    logCanvasCtx.strokeStyle = 'black';
    logCanvasCtx.textAlign = "left";
    logCanvasCtx.lineWidth = 1;


    tf.enableProdMode();
    
	if (!gestureRecognizer) {
		$("#spinDiv").hide();
		$("#cameraDiv").hide();		
	    return;
	}
	const camera = new Camera(videoElement, {
		onFrame: async () => {
			await predictWebcam({image: videoElement});
		},
		width: mapCanvas.width,
		height: mapCanvas.height
	});
	
	prepareEnvironment();
	camera.start().then( () => {
		console.log("Cam Started")
	});
	
}

export function initGesture( viewer, modelName ){
	createGestureRecognizer( ()=>{
		if ( USE_SECONDARY_PREDICT ) loadPredictionModel( modelName );
		$("#spinDiv").hide();
		$("#cameraDiv").show();
		enableCam( viewer );
	});
}

const createGestureRecognizer = async ( callbackWhenReady ) => {
	
    const vision = await FilesetResolver.forVisionTasks("mediapipe/tasks-vision/0-10-3/wasm");
    
    
    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: "mediapipe/models/gesture_recognizer.task",
            delegate: "GPU"
        },
        numHands                   : NUM_HANDS,
        minTrackingConfidence      : 0.6,
        minHandPresenceConfidence  : 0.6,
        minHandDetectionConfidence : 0.6,
        runningMode                : "VIDEO",
        canvas                     : tasksCanvas
    });
    if( callbackWhenReady ) callbackWhenReady();
};


async function predictWebcam( frame ) {
	
	if ( DEBUG_MODE ){
		$("#outCnvs").show();
		$("#cameraIcon").css("color","#dd4b39");
		canvasCtx.drawImage( frame.image , 0, 0, canvasElement.width, canvasElement.height);
	}	
	
	let results = gestureRecognizer.recognizeForVideo( frame.image, Date.now() );
	if( results == null ) return;

	if (results.landmarks) {
		if( results.handednesses.length == 0 ) {
			// Nenhuma mao na tela. Apaga todas
			showOnlyHand( 999 );
			return;	
		}
		
		
		let handIndex = 0;
		for ( let index=0; index < results.landmarks.length; index++ ){
			const landmarks = results.landmarks[index];
			const hand = results.handednesses[index][0];
            const gesture = results.gestures[index][0];
			const handLabel = handLabels[ hand.index ];
			const handIndex = hand.index;

			let bbox = calcBoundingRect(landmarks);
			hands[index].gesture = { 
				"handIndex": handIndex,
				"handLabel": handLabel,
				"landmarks": landmarks, 
				"category" : gesture.categoryName, 
				"bbox"     : bbox 
			};
			
			if( USE_SECONDARY_PREDICT ) await predict( index );
			
			plotMarkers( index, landmarks );

			if ( DEBUG_MODE ){
			    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: "#F4B400", lineWidth: 1  });
			    drawLandmarks(canvasCtx, landmarks, { color: "#DB4437", lineWidth: 2, radius: 5, fillColor: "#4285F4" });
				let labelPos = 10;
				if( handIndex == 0 ) labelPos = 135;
				writeLog( handLabel, labelPos, 20 );
				writeLog( gesture.categoryName, labelPos, 30);
				if( hands[index].gesture.prediction2 ){
					let category2 = hands[index].gesture.prediction2.label.toUpperCase();
					let category2Index = hands[index].gesture.prediction2.index;
					if( category2 ) writeLog( category2Index+":"+category2, labelPos, 40);								
				}
			}
		}
		if( results.landmarks.length == 1 ) showOnlyHand( handIndex );
	}
	
    
}

async function predict( index ) {
	let landmarks = hands[index].gesture.landmarks;
	// From: https://github.com/Kazuhito00/hand-keypoint-classification-model-zoo
	let ppList = preProcessLandmark( calcLandmarkList(landmarks) );
	const inputArray = new Float32Array(ppList);
	let input = {
		"serving_default_input_1:0": tf.tensor(new Float32Array(inputArray), [1,42], "float32")
	}
	let output = await tfliteModel.predict(input);
	hands[index].gesture.prediction2 = null;
	await output.data().then( result => {
		const resultIndex = result.reduce((maxIndex, currentValue, currentIndex, array) => {
		    return currentValue > array[maxIndex] ? currentIndex : maxIndex;
		}, 0);
		hands[index].gesture.prediction2 = { 
			"label" : keypointLabels[ resultIndex ],
			"index" : resultIndex,
			"loadedModel" : loadedModel
		}
		
	}); 
	output.dispose();
}	

function snapshot(){
	if( snapshotArray.length > 0 ) return;
	for( let index=0; index < NUM_HANDS; index++ ) {
		if( !hands[index] ) continue;
		let hand = hands[index];
		for( let lm=0; lm < hand.length; lm++ ) {
			if( !hand[lm].show ) continue;
			let position = hand[lm].position.getValue(viewer.clock.currentTime).clone();
			var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic( position );
			var lonDeg = Cesium.Math.toDegrees(cartographic.longitude);
			var latDeg = Cesium.Math.toDegrees(cartographic.latitude);    	    
			snapshotArray[ lm+index ] = viewer.entities.add({
			  	position: Cesium.Cartesian3.fromDegrees(lonDeg, latDeg, 37500.0 ),
				ellipsoid: {
					radii: new Cesium.Cartesian3(35500.0, 35500.0, 35500.0),
				    outline: true,
				    outlineColor: Cesium.Color.WHITE,
				    outlineWidth: 4,
				    material: Cesium.Color.fromRandom({ alpha: 0.8 })
				}
			});
			snapshotArray[ lm+index ].name = "Entity " + lm;					
		} 
			
	}
}



