
class CesiumCamera {
	
	constructor( cesiumCamera ) {
		this.camera = cesiumCamera;
	}

	move( lon, lat ){
		var target = Cesium.Cartesian3.fromDegrees( lon, lat, 0 );
		this.camera.move( target, this.getMoveRate() );
	}	

	moveForward( multiplier ) {
		this.camera.moveForward( this.getMoveRate( multiplier ) );
	}
	
	moveBackward( multiplier ) {
    	this.camera.moveBackward( this.getMoveRate( multiplier ) );
	}
	
	moveUp( multiplier ) {
    	this.camera.moveUp( this.getMoveRate( multiplier / 5  ) );
  	}
	moveDown( multiplier ) {
    	this.camera.moveDown( this.getMoveRate( multiplier / 5  ) );
	}
	
	moveLeft( multiplier ){
    	this.camera.moveLeft( this.getMoveRate( multiplier / 5  ) );
	}
	
	moveRight( multiplier ){
    	this.camera.moveRight( this.getMoveRate( multiplier / 5 ) );
	}
	
	getCameraHeight(){
		return this.camera.positionCartographic.height;
	}

	getMoveRate( multiplier ){
		const mr = ( this.getCameraHeight() / 500.0 );
		const result = mr + ( ( mr * multiplier ) / 10 );
  		return result;		
	}

	
}