package br.com.cmabreu;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import io.ipfs.multihash.Multihash;

@Service
public class IPFSService {
	// https://github.com/ipfs-shipyard/java-ipfs-http-client/blob/master/src/main/java/io/ipfs/api/demo/UsageMFSFilesAPI.java
	private IPFS ipfs;

	private void addFile() throws Exception {
		
        // InputStream inputStream = new ByteArrayInputStream(file.getBytes());
        // NamedStreamable.InputStreamWrapper is = new NamedStreamable.InputStreamWrapper(inputStream);		
		
		NamedStreamable.FileWrapper file = new NamedStreamable.FileWrapper(new File("/layers/config.json"));
		MerkleNode response = this.ipfs.add(file).get(0);
		Multihash hash = response.hash;
		System.out.println("Hash (base 58): " + hash.toBase58() );
	}

	private void getFile( String cid ) throws Exception {
		Multihash filePointer = Multihash.fromBase58( cid );
		byte[] fileContents = ipfs.cat(filePointer);
		System.out.println(" > Content Size: " + fileContents.length );
	}
	
	private void removeDir() throws Exception {
		ipfs.files.rm("/my", true, true);
	}
	
	private void createDir() throws Exception {
		 // To create a new directory nested under others that don't yet exist, you need to explicitly set the value of parents to true
		ipfs.files.mkdir("/my/directory/example", true);		
	}
	
	private void checkDirStatus() throws Exception{
        String directoryPath = "/my/directory/example";
        Map exampleDirectory = ipfs.files.stat(directoryPath);
        //{Hash=QmV1a2QoUnB9fPzjZd1GunGR53isuhcWWNCS5Bg3mJyv8N, Size=0, CumulativeSize=57, Blocks=1, Type=directory}
	}
	
	private void addFileToDir() throws Exception{
		String directoryPath = "/my/directory/example";
        String contents = "hello world!";
        String filename = "hello.txt";
        String filePath = directoryPath + "/" + filename;
        NamedStreamable ns = new NamedStreamable.ByteArrayWrapper(filename, contents.getBytes());
        String resp = ipfs.files.write(filePath, ns, true, true);
	}
	
	private void checkFileStatus() throws Exception {
        String directoryPath = "/my/directory/example";
        String filename = "hello.txt";
        String filePath = directoryPath + "/" + filename;
        Map exampleFile = ipfs.files.stat(filePath);
        System.out.println( new JSONObject( exampleFile ).toString(5)  );
	}
	
	private void readFileContents() throws Exception {
		String directoryPath = "/my/directory/example";
        String filename = "hello.txt";
        String filePath = directoryPath + "/" + filename;
        String fileContents = new String(ipfs.files.read(filePath));
        System.out.println(fileContents);		
	}
	
	private void listDir( String directoryPath ) throws Exception {
		
        List<Map> ls = ipfs.files.ls(directoryPath, true, true);
        System.out.println("Contents of " + directoryPath );
        for(Map entry : ls) {
            // System.out.println( "  > " + entry.get("Name") );
            System.out.println( "  > " + new JSONObject( entry ) );
        }		
	}
	
	private void copyFile() throws Exception{
        // Copy file to another directory
        String copyDirectoryPath = "/my/copy/";
		String directoryPath = "/my/directory/example";
        String filename = "hello.txt";
        String filePath = directoryPath + "/" + filename;
        ipfs.files.cp( filePath, copyDirectoryPath + filename, true);
        List<Map> ls = ipfs.files.ls(copyDirectoryPath);
        for(Map entry : ls) {
            System.out.println( entry.get("Name") );
        }		
	}
	
	private void moveFile() throws Exception  {
        String duplicateDirectoryPath = "/my/duplicate/";
        String copyDirectoryPath = "/my/copy/";
		String directoryPath = "/my/directory/example";
        String filename = "hello.txt";
        String filePath = directoryPath + "/" + filename;
        ipfs.files.mkdir(duplicateDirectoryPath, false);
        ipfs.files.mv(copyDirectoryPath + filename, duplicateDirectoryPath + filename);
        List<Map> ls = ipfs.files.ls(duplicateDirectoryPath);
        for(Map entry : ls) {
            System.out.println(entry.get("Name"));
        }		
	}

	
	private void createPinService( String serviceName ) throws Exception {
        ipfs.pin.remote.addService(serviceName, "http://172.21.81.48:3000", "dbcdbdebed71d71621cef9e4a4bd9eb0b603564bbef90888e57e5fe7386ff8ca");
        List<Map> services = ipfs.pin.remote.lsService(true);
        for(Map service : services) {
            System.out.println(service);
        }			
	}
	
	private void removePinService( String serviceName ) throws Exception {
		ipfs.pin.remote.rmService(serviceName); 
	}
	
	
	private void pinFile( Multihash  hashCid, String serviceName ) throws Exception {
        Map addHashResult = ipfs.pin.remote.add(serviceName, hashCid, Optional.empty(), true);
        System.out.println(addHashResult);		
	}
	
	private void listPinned( String serviceName ) throws Exception {
        List<IPFS.PinStatus> statusList = List.of(IPFS.PinStatus.values()); // all statuses
        Map ls = ipfs.pin.remote.ls(serviceName, Optional.empty(), Optional.of(statusList));
        System.out.println(ls);		
	}
	
	private void removePinned( Multihash  hashCid, String serviceName ) throws Exception {
		List<IPFS.PinStatus> queued = List.of(IPFS.PinStatus.queued);
		ipfs.pin.remote.rm(serviceName, Optional.empty(), Optional.of(queued), Optional.of(List.of(hashCid)));		
	}
	
	@PostConstruct
	private void init() {
		this.ipfs = new IPFS("/ip4/172.21.81.48/tcp/5001");
		
		try {
			ipfs.refs.local();
			
			// removePinService("PinService-01");
			// createPinService( "PinService-01" );
			// listPinned( "PinService-01" );
			
			//createDir();
			//addFileToDir();
			//readFileContents();
			//listDir( "/" ); // "/my/directory/example"
			//checkFileStatus();
			
			this.getFile("QmP9LrV6cEmYeof8MyFD5oonpguAe4iUA7E8YKmhLdwJy1");
			// this.getFile("QmPALQupxi1U6K6JAJwhjDtbtsWmHw1WYSs5w3BaXYES9u");
			//this.getFile("QmWN5eWpgUjYrWNR5FP2QKJjJrCPig57bCp4WohGacqYdK");
			//this.getFile("QmbX6of2zo1BwwiQLcvy4PAXU1jtFBS3XzUqeSy4T4xgtg");
			//this.getFile("Qmb8JbffTZuh899wzZeSKZk1n6fZcrJ1rfLGHVa3tbiPHt");
			
			
		} catch (Exception ex) {
			throw new RuntimeException("Error whilst communicating with the IPFS node", ex);
		}		
	}
	
}
