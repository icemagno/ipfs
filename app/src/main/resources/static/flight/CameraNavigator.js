
function startTest(){
	let camera = new CameraNavigator( viewer, 'cameraPanel', -42, -19, 4000, 0, -10, 0);
	let captureKey = function( e ){
		camera.moveCamera( e );
	}
	document.addEventListener('keydown', captureKey );
}


class CameraNavigator {
	
	// Sensor
	// Referência: Pitch = 90 // Roll = 0 // Heading = 0
	// Pitch :   0 = Chão
	// Pitch :  90 = Horizonte
	// Pitch : 180 = Céu
	// Pitch : 270 = Horizonte a ré
	
	
	// Camera
	// Pitch : -90 = Chão
	// Pitch :   0 = Horizonte 
	// pitch :  90 = Céu	
	
	constructor( otherMapViewer, element, lon, lat, alt, h, p, r ) {
		this.otherMapViewer = otherMapViewer;
		this.deltaRadians = Cesium.Math.toRadians(1.0);
		this.canMove = false;
		this.externalDrones = [];
		this.fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator('north', 'west');
		this.speedVector = new Cesium.Cartesian3();
		this.cameraMarker = null;
		
		this.lon 		= lon;
		this.lat 		= lat;
		this.altitude 	= alt;
		
		this.heading 	= Cesium.Math.toRadians( h );
		this.pitch 		= Cesium.Math.toRadians( p );
		this.roll 		= Cesium.Math.toRadians( r );		
		
		this.position = Cesium.Cartesian3.fromDegrees(lon, lat, alt);
		this.hpr = new Cesium.HeadingPitchRoll(this.heading, this.pitch, this.roll);
		
		
		this.hpRange = new Cesium.HeadingPitchRange();
		
		this.baseOsmProvider = new Cesium.OpenStreetMapImageryProvider({
		    url : 'https://a.tile.openstreetmap.org/'
		});
			
		this.map01 = new Cesium.UrlTemplateImageryProvider({
		    url : 'https://stamen-tiles-d.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
		});	
			
		this.map02 = new Cesium.UrlTemplateImageryProvider({
		    url : 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
		});	

		this.map03 = new Cesium.UrlTemplateImageryProvider({
		    url : 'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
		});			
		
		this.viewer = new Cesium.Viewer( element ,{
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
			sceneModePicker : false,
			selectionIndicator : false,
			navigationHelpButton : false,
		    imageryProvider: this.map02,
		    requestRenderMode : true,
		    scene3DOnly : true
		});
		
		this.camera = this.viewer.camera;
		this.scene = this.viewer.scene;
		this.canvas = this.viewer.canvas;

		this.scene.highDynamicRange = false; // HDR
		this.scene.globe.enableLighting = false;
		this.scene.globe.baseColor = Cesium.Color.WHITE;
		this.scene.screenSpaceCameraController.enableLook = false;
		this.scene.screenSpaceCameraController.enableCollisionDetection = true;
		this.scene.screenSpaceCameraController.inertiaZoom = 0;
		this.scene.screenSpaceCameraController.inertiaTranslate = 0;
		this.scene.screenSpaceCameraController.inertiaSpin = 0;
		this.scene.globe.depthTestAgainstTerrain = false;
		this.scene.pickTranslucentDepth = false;
		this.scene.useDepthPicking = false;
		this.scene.globe.tileCacheSize = 50;
		this.ellipsoid = viewer.scene.globe.ellipsoid;		
		
	    $(".cesium-viewer-bottom").hide();
	    $(".cesium-viewer-navigationContainer").hide();
	    $(".navigation-controls").hide();

	    this.sensor = null;
		// this.drawMarker();
	    
		setInterval( ( ) => {
			this.speedVector = Cesium.Cartesian3.multiplyByScalar( Cesium.Cartesian3.UNIT_X, 5, this.speedVector);
			this.position = Cesium.Matrix4.multiplyByPoint( this.getModelMatrix() , this.speedVector, this.position);
			this.update();
			this.scene.requestRender();
			//this.otherMapViewer.scene.requestRender();
		}, 80 );
		
		this.otherMapViewer.camera.setView({
		    destination : this.position,
		    orientation: {
		        heading : this.heading,
		        pitch : this.pitch,
		        roll : this.roll
		    }
		});	
		
		
    	this.viewshed3D = new Cesium.ViewShed3D( this.otherMapViewer );
        this.viewshed3D.hintLineColor = Cesium.Color.ORANGE;
        this.viewshed3D.hiddenAreaColor = Cesium.Color.ORANGERED.withAlpha(0.2); 
        this.viewshed3D.visibleAreaColor = Cesium.Color.LIME.withAlpha(0.2);
    	this.viewshed3D.viewPosition = Cesium.Cartesian3.fromDegrees(lon, lat, 20);
    	this.viewshed3D.direction = 0;
    	this.viewshed3D.pitch = this.pitch;
    	this.viewshed3D.distance = 50000;
    	this.viewshed3D.horizontalFov = 90;
    	this.viewshed3D.verticalFov = 30;	
    			
		console.log( this.viewshed3D );
    	
		
	      var e = new Cesium.ViewShed3D(this.otherMapViewer, {
	          horizontalAngle: 180,
	          verticalAngle: 180,
	          distance: 1000,
	          viewPosition : [lon, lat, 20000],
	          calback: function ( t ) {
	            console.log( t );
	          }
	      });		
		console.log( e );
	}
	
    addRectangularSensor() {
		this.sensor = new CesiumSensorVolumes.RectangularPyramidSensorVolume();
    	this.sensor.modelMatrix = this.getModelMatrix();
    	this.sensor.radius = 400.0;
    	this.sensor.xHalfAngle = Cesium.Math.toRadians(15.0);
    	this.sensor.yHalfAngle = Cesium.Math.toRadians(10.0);
    	this.sensor.lateralSurfaceMaterial = Cesium.Material.fromType('Color');
    	this.sensor.lateralSurfaceMaterial.uniforms.color = new Cesium.Color(0.5, 1.0, 1.0, 0.5);
    	this.sensor.intersectionWidth=1;
    	this.sensor.showIntersection=false;
    	this.otherMapViewer.scene.primitives.add( this.sensor );
    }	
	
    getModelMatrix( correction = 0 ) {
        var modelMatrix = Cesium.Transforms.northEastDownToFixedFrame( this.position );
        var orientation = Cesium.Matrix3.multiply(
        	Cesium.Matrix3.multiply(
        			Cesium.Matrix3.fromRotationZ(this.heading), 							// Azul
        			Cesium.Matrix3.fromRotationY(this.pitch + Cesium.Math.toRadians( correction ) ), new Cesium.Matrix3()),		// Verde
        			Cesium.Matrix3.fromRotationX(this.roll),   	new Cesium.Matrix3()		// Vermelho
        );
        return Cesium.Matrix4.multiply(modelMatrix, Cesium.Matrix4.fromRotationTranslation( orientation, Cesium.Cartesian3.ZERO), new Cesium.Matrix4());    	
    };	
	
	update(){
		
		let modelMatrix = this.getModelMatrix();
		this.speedVector = Cesium.Cartesian3.multiplyByScalar(Cesium.Cartesian3.UNIT_X, 0, this.speedVector);
		this.hpr = new Cesium.HeadingPitchRoll(this.heading, this.pitch, this.roll);
		Cesium.Transforms.headingPitchRollToFixedFrame( this.position, this.hpr, Cesium.Ellipsoid.WGS84, this.fixedFrameTransform, modelMatrix );		
		var cartographic = Cesium.Cartographic.fromCartesian(this.position);
		var longitude = Cesium.Math.toDegrees(cartographic.longitude);
		var latitude = Cesium.Math.toDegrees(cartographic.latitude);
		var height = cartographic.height;		
		this.lat = latitude;
		this.lon = longitude;
		this.altitude = height;
		
		// this.position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
		
		this.hpRange.heading = this.heading;
		this.hpRange.pitch = this.pitch;
		this.hpRange.range = 1500;		
		
		let tempPosition = Cesium.Cartesian3.fromDegrees(
			this.lon,
			this.lat,
			this.altitude
		);
		

		this.camera.setView({
		    destination : tempPosition,
		    orientation: {
		        heading : this.heading,
		        pitch : this.pitch,
		        roll : this.roll
		    }
		});
		
		this.position = tempPosition;
		
		
		if( this.sensor ) { 
			this.sensor.modelMatrix = this.getModelMatrix( 90 ); 
		} else {
			this.addRectangularSensor();
		}
		
		
	}
	
	moveCamera( e ){
		// console.log( e.keyCode );
		// console.log( this.orientation );

		switch (e.keyCode) {
		case 87:
			// W
			this.camera.moveForward(500);
			this.position = this.camera.position;
			break;
		case 83:
			// S
			this.camera.moveBackward(500);
			this.position = this.camera.position;
			break;
		case 40:
			// Arrow Down
			if (e.shiftKey) {
				// speed down
				// speed = Math.max(--speed, 1);
			} else {
				// pitch down
				this.pitch -= this.deltaRadians;
				if (this.pitch < -Cesium.Math.TWO_PI) {
					this.pitch += Cesium.Math.TWO_PI;
				}
			}
			break;
		case 38:
			// Arrow Up
			if (e.shiftKey) {
				// speed up
				//speed = Math.min(++speed, 100);
			} else {
				// pitch up
				this.pitch += this.deltaRadians;
				if (this.pitch > Cesium.Math.TWO_PI) {
					this.pitch -= Cesium.Math.TWO_PI;
				}
			}
			break;
		case 39:
			// Arrow Right
			if (e.shiftKey) {
				// roll right
				this.roll += this.deltaRadians;
				if (this.roll > Cesium.Math.TWO_PI) {
					this.roll -= Cesium.Math.TWO_PI;
				}
			} else {
				// turn right
				this.heading += this.deltaRadians;
				if (this.heading > Cesium.Math.TWO_PI) {
					this.heading -= Cesium.Math.TWO_PI;
				}
			}
			break;
		case 37:
			// Arrow Left
			if (e.shiftKey) {
				// roll left until
				this.roll -= this.deltaRadians;
				if (this.roll < 0.0) {
					this.roll += Cesium.Math.TWO_PI;
				}
			} else {
				// turn left
				this.heading -= this.deltaRadians;
				if (this.heading < 0.0) {
					this.heading += Cesium.Math.TWO_PI;
				}
			}
			break;
		default:
		}
		
		this.update();
	}	

	
}



