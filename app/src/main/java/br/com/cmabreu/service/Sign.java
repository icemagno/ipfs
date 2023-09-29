package br.com.cmabreu.service;

import java.io.FileInputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.Security;
import java.security.Signature;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.jcajce.JcaCertStore;
import org.bouncycastle.cert.jcajce.JcaX509CertificateConverter;
import org.bouncycastle.cms.CMSProcessableByteArray;
import org.bouncycastle.cms.CMSSignedData;
import org.bouncycastle.cms.CMSSignedDataGenerator;
import org.bouncycastle.cms.CMSTypedData;
import org.bouncycastle.cms.SignerInformation;
import org.bouncycastle.cms.SignerInformationStore;
import org.bouncycastle.cms.jcajce.JcaSignerInfoGeneratorBuilder;
import org.bouncycastle.cms.jcajce.JcaSimpleSignerInfoVerifierBuilder;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.bouncycastle.operator.jcajce.JcaDigestCalculatorProviderBuilder;
import org.bouncycastle.util.Store;
import org.bouncycastle.util.encoders.Base64;


public class Sign {
    static final String KEYSTORE_FILE = "d:/certs/02221224710.jks";
    static final String KEYSTORE_INSTANCE = "PKCS12";
    static final String KEYSTORE_PWD = "senha1234567890##123";
    static final String KEYSTORE_ALIAS = "02221224710";	

    // http://stackoverflow.com/questions/16662408/correct-way-to-sign-and-verify-signature-using-bouncycastle
    
    public static void verify( String envelopedData ) throws Exception {
        Security.addProvider( new BouncyCastleProvider() );

        CMSSignedData cms = new CMSSignedData(  Base64.decode(  envelopedData.getBytes()  )  );
        Store<?> store = cms.getCertificates(); 
        SignerInformationStore signers = cms.getSignerInfos(); 

        
        
        byte[] content = (byte[])cms.getSignedContent().getContent();
      	//String signedContent = new String( Base64.encode( (byte[]) cms.getSignedContent().getContent() ) , "UTF-8");        	
        System.out.println( new String( content ) );
            
                
        
        Collection<SignerInformation> c = signers.getSigners(); 
        Iterator<SignerInformation> it = c.iterator();
        while (it.hasNext()) { 
            SignerInformation signer = (SignerInformation) it.next(); 
			Collection certCollection = store.getMatches( signer.getSID() ); 
            Iterator certIt = certCollection.iterator();
            X509CertificateHolder certHolder = (X509CertificateHolder) certIt.next();
            X509Certificate cert = new JcaX509CertificateConverter().setProvider("BC").getCertificate(certHolder);
            
            System.out.println( cert.getSubjectDN() );
            
            if (signer.verify(new JcaSimpleSignerInfoVerifierBuilder().setProvider("BC").build(cert))) {
                System.out.println("verified");
            }
        }
    	
    }
    

    public static String sign() throws Exception {
        String text = "magnofdfd";
        Security.addProvider( new BouncyCastleProvider() );
        
        KeyStore ks = KeyStore.getInstance(KEYSTORE_INSTANCE);
        ks.load(new FileInputStream(KEYSTORE_FILE), KEYSTORE_PWD.toCharArray());
        Key key = ks.getKey(KEYSTORE_ALIAS, KEYSTORE_PWD.toCharArray());		
		
        //Sign
        PrivateKey privKey = (PrivateKey) key;
        Signature signature = Signature.getInstance("SHA1WithRSA", "BC");
        signature.initSign(privKey);
        signature.update(text.getBytes());

        //Build CMS
        X509Certificate cert = (X509Certificate) ks.getCertificate(KEYSTORE_ALIAS);
        List<X509Certificate> certList = new ArrayList<X509Certificate>();
        
        CMSTypedData msg = new CMSProcessableByteArray(signature.sign());
        certList.add(cert);
        
        Store<?> certs = new JcaCertStore(certList);
        CMSSignedDataGenerator gen = new CMSSignedDataGenerator();
        ContentSigner sha1Signer = new JcaContentSignerBuilder("SHA1withRSA").setProvider("BC").build(privKey);
        gen.addSignerInfoGenerator(new JcaSignerInfoGeneratorBuilder(new JcaDigestCalculatorProviderBuilder().setProvider("BC").build()).build(sha1Signer, cert));
        gen.addCertificates(certs);
        
        
        CMSSignedData sigData = gen.generate(msg, true);

        String signedContent = new String( Base64.encode( (byte[]) sigData.getSignedContent().getContent() ) , "UTF-8"); 
        System.out.println("Signed content: " + signedContent + "\n");

        String envelopedData = new String(  Base64.encode(sigData.getEncoded()) , "UTF-8");
        System.out.println("Enveloped data: " + envelopedData );	
        
        return envelopedData;
    	
    }
    
   
	public static void main(String[] args) throws Exception {
		
		String data = sign();
		
		System.out.println( data );
		//verify( "MIIZMQYJKoZIhvcNAQcCoIIZIjCCGR4CAQExDzANBglghkgBZQMEAgEFADA4BgkqhkiG9w0BBwGgKwQpRXNzZSB0ZXh0byDpIHVtIHRleHRvIHF1ZSBldSB2b3UgYXNzaW5hciGgghaTMIIGoTCCBImgAwIBAgIBATANBgkqhkiG9w0BAQ0FADCBlzELMAkGA1UEBhMCQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxPTA7BgNVBAsMNEluc3RpdHV0byBOYWNpb25hbCBkZSBUZWNub2xvZ2lhIGRhIEluZm9ybWFjYW8gLSBJVEkxNDAyBgNVBAMMK0F1dG9yaWRhZGUgQ2VydGlmaWNhZG9yYSBSYWl6IEJyYXNpbGVpcmEgdjUwHhcNMTYwMzAyMTMwMTM4WhcNMjkwMzAyMjM1OTM4WjCBlzELMAkGA1UEBhMCQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxPTA7BgNVBAsMNEluc3RpdHV0byBOYWNpb25hbCBkZSBUZWNub2xvZ2lhIGRhIEluZm9ybWFjYW8gLSBJVEkxNDAyBgNVBAMMK0F1dG9yaWRhZGUgQ2VydGlmaWNhZG9yYSBSYWl6IEJyYXNpbGVpcmEgdjUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQD3LXgabUWsF+gUXw/6YODeF2XkqEyfk3VehdsIx+3/ERgdjCS/ouxYR0Epi2hdoMUVJDNf3XQfjAWXJyCoTneHYAl2McMdvoqtLB2ileQlJiis0fTtYTJayee9BAIdIrCor1Lc0vozXCpDtq5nTwhjIocaZtcuFsdrkl+nbfYxl5m7vjTkTMS6j8ffjmFzbNPDlJuV3Vy7AzapPVJrMl6UHPXCHMYMzl0KxR/47S5XGgmLYkYt8bNCHA3fg07y+Gtvgu+SNhMPwWKIgwhYw+9vErOnavRhOimYo4M2AwNpNK0OKLI7Im5V094jFp4Ty+mlmfQH00k8nkSUEN+1TGGkhv16c2hukbx9iCfbmk7im2hGKjQA8eH64VPYoS2qdKbPbd3xDDHN2croYKpy2U2oQTVBSf9hC3o6fKo3zp0U3dNiw7ZgWKS9UwP31Q0gwgB1orZgLuF+LIppHYwxcTG/AovNWa4sTPukMiX2L+p7uIHExTZJJU4YoDacQh/mfbPIz3261He4YFmQ35sfw3eKHQSOLyiVfev/n0l/r308PijEd+d+Hz5RmqIzS8jYXZIeJxym4mEjE1fKpeP56Ea52LlIJ8ZqsJ3xzHWu3WkAVz4hMqrX6BPMGW2IxOuEUQyIaCBg1lI6QLiPMHvo2/J7gu4YfqRcH6i27W3HyzamEQIDAQABo4H1MIHyME4GA1UdIARHMEUwQwYFYEwBAQAwOjA4BggrBgEFBQcCARYsaHR0cDovL2FjcmFpei5pY3BicmFzaWwuZ292LmJyL0RQQ2FjcmFpei5wZGYwPwYDVR0fBDgwNjA0oDKgMIYuaHR0cDovL2FjcmFpei5pY3BicmFzaWwuZ292LmJyL0xDUmFjcmFpenY1LmNybDAfBgNVHSMEGDAWgBRpqL512cTvbOcTReRhbuVo+LZAXjAdBgNVHQ4EFgQUaai+ddnE72znE0XkYW7laPi2QF4wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAQYwDQYJKoZIhvcNAQENBQADggIBABRt2/JiWapef7o/plhR4PxymlMIp/JeZ5F0BZ1XafmYpl5g6pRokFrIRMFXLyEhlgo51I05InyCc9Td6UXjlsOASTc/LRavyjB/8NcQjlRYDh6xf7OdP05mFcT/0+6bYRtNgsnUbr10pfsK/UzyUvQWbumGS57hCZrAZOyd9MzukiF/azAa6JfoZk2nDkEudKOY8tRyTpMmDzN5fufPSC3v7tSJUqTqo5z7roN/FmckRzGAYyz5XulbOc5/UsAT/tk+KP/clbbqd/hhevmmdJclLr9qWZZcOgzuFU2YsgProtVu0fFNXGr6KK9fu44pOHajmMsTXK3X7r/Pwh19kFRow5F3RQMUZC6Re0YLfXh+ypnUSCzA+uL4JPtHIGyvkbWiulkustpOKUSVwBPzvA2sQUOvqdbAR7C8jcHYFJMuK2HZFji7pxcWWab/NKsFcJ3sluDjmhizpQaxbYTfAVXu3q8yd0su/BHHhBpteyHvYyyz0Eb9LUysR2cMtWvfPU6vnoPgYvOGO1CziyGEsgKULkCH4o2Vgl1gQuKWO4V68rFW8a/jvq28sbY+y/Ao0I5ohpnBcQOAawiFbz6yJtObajYMuztDDP8oY656EuuJXBJhuKAJPI/7WDtgfV8ffOh/iQGQATVMtgDN0gv8bn5NdUX8UMNX1sHhU3H1UpoWMIIHOzCCBSOgAwIBAgIUP/1L/Ze0L3AeOsW3CrWaKEmisi4wDQYJKoZIhvcNAQELBQAwgYUxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMTQwMgYDVQQLDCtBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgUmFpeiBCcmFzaWxlaXJhIHY1MSswKQYDVQQDDCJBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgZGUgRGVmZXNhMB4XDTIwMTExODE3MTYwM1oXDTI1MTExODE3MTYwM1owgbkxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMSswKQYDVQQLDCJBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgZGUgRGVmZXNhMRcwFQYDVQQLDA4wMzI3NzYxMDAwMDEyNTEaMBgGA1UECwwRQ2VydGlmaWNhZG8gUEYgQTMxMzAxBgNVBAMMKkNBUkxPUyBNQUdOTyBPTElWRUlSQSBERSBBQlJFVTowMjIyMTIyNDcxMDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJnA1MfycLUl9un6WLAG0IeAO0mpYjxdEDVcOylNpCz4oQfgR3PWTf8Om7mhWquQzOTZVUT4KKwJyHTSpEokFW6oEiGAEjk+dZ+jCvTtfZarsJEpd7aR0ApJ/PUQMkJ1H5g5kHCQO5al+56I6Vn9JdNV1jH2WZIOTPzTIrgslx+lMSwnZHcsQSv/5enXWPIwsCtED1DtXaLam7I6ohCnoctxBaAFVD0k/sOsHHPnnUijQ1YMqk5GYTIxNcoa4lLApL2kqneS0ple8yfvp4UpBCri2pkcODRWdmr73kMSY5MpZzKw7iFxMaecCob4J7nknykTLH5aMqxp1+7NU7fJu7kCAwEAAaOCAmswggJnMIGxBgNVHREEgakwgaagPAYFYEwBAwGgMwQxMTYxMTE5NzEwMjIyMTIyNDcxMDAwMDAwMDAwMDAwMDAwMDAwMDA1MzEwNTgwTUJSSqAVBgVgTAEDC6AMBAowMDg2NTgzNjIwoBcGBWBMAQMGoA4EDDAwMDAwMDAwMDAwMKAeBgVgTAEDBaAVBBMwMDAwMDAwMDAwMDAwMDAwMDAwgRZtYWduby5tYWJyZXVAZ21haWwuY29tMA4GA1UdDwEB/wQEAwIF4DAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwXwYDVR0gBFgwVjBUBgZgTAECA0swSjBIBggrBgEFBQcCARY8aHR0cDovL3JlcG9zaXRvcmlvLWFjcC5hY2RlZmVzYS5taWwuYnIvZG9jcy9kcGMtYWNkZWZlc2EucGRmMFYGCCsGAQUFBwEBBEowSDBGBggrBgEFBQcwAoY6aHR0cDovL3JlcG9zaXRvcmlvLWFjcC5hY2RlZmVzYS5taWwuYnIvYWlhL2FjZGVmZXNhLXYwLnA3YjCBiAYDVR0fBIGAMH4wfKB6oHiGOmh0dHA6Ly9yZXBvc2l0b3Jpby1hY3AuYWNkZWZlc2EubWlsLmJyL2xjci9hY2RlZmVzYS12MC5jcmyGOmh0dHA6Ly9yZXBvc2l0b3Jpby1hY3IuYWNkZWZlc2EubWlsLmJyL2xjci9hY2RlZmVzYS12MC5jcmwwHwYDVR0jBBgwFoAUPO71YL9ud99BW2RjbZhE6LTYuHYwHQYDVR0OBBYEFKtT8IBGDauQGEDYc+MabFjcfzoSMA0GCSqGSIb3DQEBCwUAA4ICAQCUPYN/oiIhy1+ROqPZTs28XwS2HrrYWxejQlJ1ujUkXhyIlJZ0h8tjxnwu/dohxvOzgQiys+7v9FrrnR/lcZwptXx44q31Pmpes3yzHzs3ytnvGvW75WaSbop6caot5Zk+AQBNmcONcSkOD9n7vzA26XYZJxOopEG8rYPL4l/8pqMI18uJ1VvEux10PPAu4tjWUsT4fpmpd3Drs5LfDQ9feiIWAz1MsqtKjCLO+r5kWaiBNMPmXK9UgJ/KJ0PRgilEWmLOxNbuLA6l0gimMai3rDIrHUWUmC5cQ0CpWiSs3wlAMgExkDuQ6TUxic7TKwfxowbQLrbkqbWQvAhx9HUa8XKhjf2QSycJ1enHRjUXcPMJwMGND0J/zwu/ipvsMM1e0e+7Z+CSDzLVDRkLXi/L5HraLE07yl0yQqUWeHkHQJyDIxmcFu4vgUvf3PIaYQa4mr0y0dfUslYpmqg+E95o10Im/bKtgDkRlc8eUsn+LBcSSfnw3wWTu1yJRt1M3Bkrxt6yMSjkJ/h8if5/Hty2vChrD+0/cT9wfijSh0V8ilpRXiI6qQK9LGsjUZHArEP00N8TYRKtILUV668TIXoE6IFJpE9xN98Nf/RR9Z286UkJxPgNdEzNhDhhynv1+IR2fvxH7sXPvdFKYRHoSasoP2O/t5ickHbxdB3ADavaFzCCCKswggaToAMCAQICAQgwDQYJKoZIhvcNAQENBQAwgZcxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMT0wOwYDVQQLDDRJbnN0aXR1dG8gTmFjaW9uYWwgZGUgVGVjbm9sb2dpYSBkYSBJbmZvcm1hY2FvIC0gSVRJMTQwMgYDVQQDDCtBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgUmFpeiBCcmFzaWxlaXJhIHY1MB4XDTE3MTExMzEyMTE1OFoXDTI5MDMwMjEyMDA1OFowgYUxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMTQwMgYDVQQLDCtBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgUmFpeiBCcmFzaWxlaXJhIHY1MSswKQYDVQQDDCJBdXRvcmlkYWRlIENlcnRpZmljYWRvcmEgZGUgRGVmZXNhMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuApNF/KlP3AfHBHPfv3xNKno4c4ucBR7ahYkDX6fSlFNFL0srYJyvlL7ZoRE6TQw+zEYCZDVvLdmWktLKJSFESn2Y3PMSn2f+RwaEaEBeksP8auMocRNXFJgnW5/lVuhknmD6io0SIB/Xaw7DEjJ73SCmzog1pebGmtdDzuOdmta8Vl9Tk16j0G+Xir9PPPjsCZPD/VQo7O6px5V1bygvBAp5nekM4L/ORqWehL7OGUCKnYhHAOQ9qdxJU+orHYRIEL1euqbi3hzks0ksm5rdpu9lfwPP9xwpn+VYxh/JJtkcZHXLCKzcU99Cd78lagg22SnLGGHEDPZvDGNXktN+KshqQXGhNZWhDlAb4mXtzqlxiMX73d4nMj2fmnnNOZUqI24f5Csb5SdtBNGVbGMcmQlvN2H6rQFtf3gZNMqjnjj6usEh+ExohpCn5Vcx1Lnc1/NIJ6/8E8P769GTTa7sY7HIKJlDmPulXdRMJigRts54SOwjtCZhJ/LcDZYsxOe8RNpqW/4o6WUpG3HQ6tjJBxrAJwE5FFb0rEhUMsnbhZqiDJ0ogjN2ofBnO36hIb2bhtWzPmNcTlBt+JERCV5fq9z/MSHuUGWySqy71+RpYXRxEEVWlry3ZcCYW125SHRkpwnaPB4CQ2K+rotqV+ZBB2QCdAlGvv4gyWYjhubvVcCAwEAAaOCAxAwggMMMIICZgYDVR0gBIICXTCCAlkwUwYFYEwBAVwwSjBIBggrBgEFBQcCARY8aHR0cDovL3JlcG9zaXRvcmlvLWFjcC5hY2RlZmVzYS5taWwuYnIvZG9jcy9kcGMtYWNkZWZlc2EucGRmMFQGBmBMAQIBTjBKMEgGCCsGAQUFBwIBFjxodHRwOi8vcmVwb3NpdG9yaW8tYWNwLmFjZGVmZXNhLm1pbC5ici9kb2NzL2RwYy1hY2RlZmVzYS5wZGYwVAYGYEwBAgNLMEowSAYIKwYBBQUHAgEWPGh0dHA6Ly9yZXBvc2l0b3Jpby1hY3AuYWNkZWZlc2EubWlsLmJyL2RvY3MvZHBjLWFjZGVmZXNhLnBkZjBUBgZgTAECBCwwSjBIBggrBgEFBQcCARY8aHR0cDovL3JlcG9zaXRvcmlvLWFjcC5hY2RlZmVzYS5taWwuYnIvZG9jcy9kcGMtYWNkZWZlc2EucGRmMFQGBmBMAQJlETBKMEgGCCsGAQUFBwIBFjxodHRwOi8vcmVwb3NpdG9yaW8tYWNwLmFjZGVmZXNhLm1pbC5ici9kb2NzL2RwYy1hY2RlZmVzYS5wZGYwVAYGYEwBAmcPMEowSAYIKwYBBQUHAgEWPGh0dHA6Ly9yZXBvc2l0b3Jpby1hY3AuYWNkZWZlc2EubWlsLmJyL2RvY3MvZHBjLWFjZGVmZXNhLnBkZjBUBgZgTAECaAwwSjBIBggrBgEFBQcCARY8aHR0cDovL3JlcG9zaXRvcmlvLWFjcC5hY2RlZmVzYS5taWwuYnIvZG9jcy9kcGMtYWNkZWZlc2EucGRmMD8GA1UdHwQ4MDYwNKAyoDCGLmh0dHA6Ly9hY3JhaXouaWNwYnJhc2lsLmdvdi5ici9MQ1JhY3JhaXp2NS5jcmwwHwYDVR0jBBgwFoAUaai+ddnE72znE0XkYW7laPi2QF4wHQYDVR0OBBYEFDzu9WC/bnffQVtkY22YROi02Lh2MA8GA1UdEwEB/wQFMAMBAf8wDgYDVR0PAQH/BAQDAgEGMA0GCSqGSIb3DQEBDQUAA4ICAQAnET0y+55M5Q9iAwEYeMaFfjt7gOxrltYNSLbPWu1A9GFWlvDraZyeXYF+2Fy5fY3YxPK0R1MBTkgVzc6B9Puw70H1rVrEhyfigPXcgEA3er/xH4vdLjz3WT0LHFZ0ur2ukGG+j0pO/xQEo9ubzamsGxN36HlKHy2TvBeyMgdU4xvAlkuB36EfF7yjbUei55yyVMDtnYWudfNQ5GViDsbIIsGQt4YEBAb+qkNQjuSxDoaB+LIPMPuCRFr1Vs/5O/eF0zzxzeS5dUgqj8hhMwI+NZM1bGewPPxk+Szhw5XqB3ShEOMVHgsSXo6bU/FTyAPsZlYCatgw14ExFYfY7Yx2p0zrr8qIakEVbgEmWVr8AatjG0GthprXnS4b2PEUPL7yXVCo7hqkVqDePuuI/CnW1jv/5MKQXZh2q2UkKr/3r8bq3A8LBS4Dy3WKLMFIUmSwMS4FdxtMOw+wVAotMkOrNLwP3LSbhhJYhSTwE13GbkBxeX8iQLF3Z+pgRAIsiOEUG+mXGdp52HV3J7n29d11WYTAFw8jGS87xx6ceDQOn+Ij+iGYlRQh91MWUhJxbtEg3t7MUXhg75V/Rd1bN63V+kOAKF2gRSaTAx6j+zxfztAaQ0SOvHbjb+aP1Iv2BCH2TJEwQ/NW/E2EaF8YR+BbQcZWim/g9TKwC8B0CRG/ATGCAjUwggIxAgEBMIGeMIGFMQswCQYDVQQGEwJCUjETMBEGA1UECgwKSUNQLUJyYXNpbDE0MDIGA1UECwwrQXV0b3JpZGFkZSBDZXJ0aWZpY2Fkb3JhIFJhaXogQnJhc2lsZWlyYSB2NTErMCkGA1UEAwwiQXV0b3JpZGFkZSBDZXJ0aWZpY2Fkb3JhIGRlIERlZmVzYQIUP/1L/Ze0L3AeOsW3CrWaKEmisi4wDQYJYIZIAWUDBAIBBQCgaTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0yMjA4MTcwMzAzMDFaMC8GCSqGSIb3DQEJBDEiBCAqbIl7IlZJOgoLJbGPtNQgrH0d6yL+thwX1Hzsc76DUjANBgkqhkiG9w0BAQEFAASCAQBTNregwnH0vHvD8oVTmV/L6hwh1Bbr5lNQX2vrXJgZE+05FpDuCo0sD9TPPlc//rEGE3KXE6bGhLe5USECSmckSlmugsKkNADgUHjhNBgI4uXkkPWKBOWJy4qy2gq8ucDItNnC8wrHztuzAnZbKU8AHWW9hlyzuMx2ImruoRsBOfmZXxcSRDrBgTlf2z5TIRxiKI0p21+1kReNYsTpR4+3csVIkpcgdu5t3PyAfV6ahY4ifLt5L5E4z9y5Kl09zgDWYwLvDp8Lb23BrT2VJbQpJ466cfPUZdfaO5SsSjUsnQVUSK/15WdVkGGMGgeqTO97Cs8ceqmY/SMqMhO3js7b" );

	}

}
