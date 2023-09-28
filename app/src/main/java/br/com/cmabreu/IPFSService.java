package br.com.cmabreu;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import io.ipfs.api.IPFS;
import io.ipfs.api.IPFS.PinType;
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

	private void pinFile( Multihash  hashCid, String serviceName ) throws Exception {
        List<Multihash> addHashResult = ipfs.pin.add(hashCid);
        System.out.println(addHashResult);		
	}
	
	private void listPinned( String serviceName ) throws Exception {
        Map<Multihash, Object> ls = ipfs.pin.ls( PinType.all );
        System.out.println(ls);		
	}
	
	private void removePinned( Multihash  hashCid, String serviceName ) throws Exception {
		List<Multihash> res = ipfs.pin.rm( hashCid, true );		
	}
	
	@PostConstruct
	private void init() {
		this.ipfs = new IPFS("/ip4/172.21.81.49/tcp/5001");
		
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
			
			this.getFile("QmbX6of2zo1BwwiQLcvy4PAXU1jtFBS3XzUqeSy4T4xgtg");
			
			ipfs.repo.gc();
			
			// this.getFile("QmPALQupxi1U6K6JAJwhjDtbtsWmHw1WYSs5w3BaXYES9u");
			//this.getFile("QmWN5eWpgUjYrWNR5FP2QKJjJrCPig57bCp4WohGacqYdK");
			//this.getFile("QmbX6of2zo1BwwiQLcvy4PAXU1jtFBS3XzUqeSy4T4xgtg");
			//this.getFile("Qmb8JbffTZuh899wzZeSKZk1n6fZcrJ1rfLGHVa3tbiPHt");
			
			
		} catch (Exception ex) {
			throw new RuntimeException("Error whilst communicating with the IPFS node", ex);
		}		
	}
	
}
