package br.com.cmabreu.service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class StartupService {
	private Logger logger = LoggerFactory.getLogger( StartupService.class );
	private boolean initialized = false;
	private JSONObject configObj;
	private String password;
	
	@Autowired private IPFSService iPFSService; 
	
	@Scheduled( fixedDelay = 5000 )
	private void waitConfig() {
		if( initialized ) return;
		logger.info("Waiting password ... ");
		File config = new File( "/root/.conf" );
		if( !config.exists() ) return;
		initialized = true;
		
		try {
			this.password = readFile("/root/.password", StandardCharsets.UTF_8);
			String configData = readFile("/config.json", StandardCharsets.UTF_8);
			this.configObj = new JSONObject(configData);
			// Gravar zeros antes de apagar!
			config.delete();
			logger.info("Config loaded. ");
			postConfig();
		} catch ( Exception e ) {
			e.printStackTrace();
		}
	}
	
	private void postConfig() {
		iPFSService.init( configObj.getString("nodeAddress") );
	}
	
	private String readFile(String path, Charset encoding)  throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}		

}
