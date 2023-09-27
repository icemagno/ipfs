var viewer;
var scene;
var camera;
var canvas;
var mainEventHandler = null;
var ellipsoid = null;

var baseOsmProvider;
var map01;
var map02;
var map03;

$( document ).ready(function() {
	initMap();
	mainEventHandler = new Cesium.ScreenSpaceEventHandler( scene.canvas );
	bindInterfaceElements();
	
	setTimeout( function(){
		$("#videoImpt").width( scene.canvas.width ).height( scene.canvas.height);
		$("#outCnvs").width( scene.canvas.width / 5 ).height( scene.canvas.height / 5 );
		window.initGesture( viewer, "avazahedi" );	
	},3000);
	
	
	setTimeout( function(){
		startTest();
	}, 3100);	
	
  	
});


function baseLayer( provider ){
	var layers = viewer.imageryLayers;
	var baseLayer = layers.get(0);
	layers.remove(baseLayer);
	layers.addImageryProvider(provider);	
}

function initMap(){

		baseOsmProvider = new Cesium.OpenStreetMapImageryProvider({
		    url : 'https://a.tile.openstreetmap.org/'
		});
			
		map01 = new Cesium.UrlTemplateImageryProvider({
		    url : 'https://stamen-tiles-d.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
		});	
			
		map02 = new Cesium.UrlTemplateImageryProvider({
		    url : 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
		});	

		map03 = new Cesium.UrlTemplateImageryProvider({
		    url : 'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
		});	
		
		viewer = new Cesium.Viewer('cesiumContainer',{
			sceneMode : Cesium.SceneMode.SCENE3D,
			timeline: false,
			animation: false,
			baseLayerPicker: false,
			skyAtmosphere: false,
			fullscreenButton : false,
			geocoder : false,
			homeButton : false,
			infoBox : false,
			skyBox : false,
			sceneModePicker : true,
			selectionIndicator : false,
			navigationHelpButton : false,
		    imageryProvider: map02,
		    requestRenderMode : false,
		});
		
		camera = viewer.camera;
		scene = viewer.scene;
		canvas = viewer.canvas;

		scene.highDynamicRange = false; // HDR
		scene.globe.enableLighting = false;
		scene.globe.baseColor = Cesium.Color.WHITE;
		scene.screenSpaceCameraController.enableLook = false;
		scene.screenSpaceCameraController.enableCollisionDetection = true;
		scene.screenSpaceCameraController.inertiaZoom = 0;
		scene.screenSpaceCameraController.inertiaTranslate = 0;
		scene.screenSpaceCameraController.inertiaSpin = 0;
		scene.globe.depthTestAgainstTerrain = false;
		scene.pickTranslucentDepth = false;
		scene.useDepthPicking = false;
		scene.globe.tileCacheSize = 50;
		ellipsoid = viewer.scene.globe.ellipsoid;
		
		var imageryLayers = scene.imageryLayers;
		var helper = new Cesium.EventHelper();
		var totalTilesToLoad = 0;
		helper.add( viewer.scene.globe.tileLoadProgressEvent, function (event) {
			if( event > totalTilesToLoad ) totalTilesToLoad = event;
			if (event == 0) {
				$('.layerCounter').hide();
				$("#lyrCount").text( "" );
				$("#activeLayerContainer").height('90vh');
				var totalHeight= $("#activeLayerContainer").height() - 110 + 'px' ;
				$('#layerContainer').height( totalHeight );
				$("#loadingMap").remove();
			} else {
				var percent = 0;
				if ( totalTilesToLoad > 0 )	percent =  100 - Math.round( (event * 100) / totalTilesToLoad) ;
				$("#lyrCount").text( percent + " %" );
				$('.layerCounter').show();
			}
		});	

		
		imageryLayers.layerShownOrHidden.addEventListener(function (event) {
			//
		});
		imageryLayers.layerAdded.addEventListener(function (event) {
			//
		});
		imageryLayers.layerRemoved.addEventListener(function (event) {
			//
		});	
		
		// -18.813/
		var initialPosition = Cesium.Cartesian3.fromDegrees(-42, -19, 4000000);
		var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
		scene.camera.setView({
		    destination: initialPosition,
		    orientation: initialOrientation,
		    endTransform: Cesium.Matrix4.IDENTITY
		});	
		
};

function bindInterfaceElements() {
	
    $(".cesium-viewer-bottom").hide();
    $(".cesium-viewer-navigationContainer").hide();
    $(".navigation-controls").hide();
    
    $("#optionsRadios1").click( function(){
		baseLayer(baseOsmProvider);
	});
    
    $("#optionsRadios2").click( function(){
		baseLayer(map03);
	});

    $("#optionsRadios3").click( function(){
		baseLayer(map01);
	});

    $("#optionsRadios4").click( function(){
		baseLayer(map02);
	});
    
    setTimeout( function(){
    	$("#loadingContainer").hide();
    },1500);
    
};

function getMapPosition3D2D(movement) {
	if ( viewer.scene.mode === Cesium.SceneMode.SCENE2D) {
      const position = viewer.camera.pickEllipsoid( movement, viewer.scene.globe.ellipsoid );
      return position ? position : null;
    }

    if ( viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
      const ray = camera.getPickRay(movement);
      const position = viewer.scene.globe.pick(ray, viewer.scene);
      return Cesium.defined(position) ? position : null;
    }
}

