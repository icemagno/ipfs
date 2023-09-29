package br.com.cmabreu.service;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class KeyStoreService {
	private Logger logger = LoggerFactory.getLogger( KeyStoreService.class );
	private boolean initialized = false;
	
	@Scheduled( fixedDelay = 5000 )
	private void waitConfig() {
		if( initialized ) return;
		logger.info("Waiting config file ... ");
		File config = new File( "/root/.conf" );
		if( !config.exists() ) return;
		logger.info("Config loaded. ");
		initialized = true;
		
		// Gravar zeros antes de apagar!
		config.delete();
	}

}
