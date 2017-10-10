/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
/**
 *
 * @author anupg
 */


public class HttpURLConnectionExample {

	private final String USER_AGENT = "Mozilla/5.0";

	public static void main(String[] args) throws Exception {

            // configure the SSLContext with a TrustManager
                SSLContext ctx = SSLContext.getInstance("TLS");
                ctx.init(new KeyManager[0], new TrustManager[]{new DefaultTrustManager()}, new SecureRandom());
                SSLContext.setDefault(ctx);
		HttpURLConnectionExample http = new HttpURLConnectionExample();

		System.out.println("\nTesting 2 - Send Http POST request");
		http.sendPost1();

	}

	// HTTP POST request
	private void sendPost() throws Exception {

		String url = "https://www.jdoodle.com/api/execute";
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

		//add reuqest header
		con.setRequestMethod("POST");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

	//	String urlParameters = "sn=C02G8416DRJM&cn=&locale=&caller=&num=12345";

		// Send post request
		con.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
	//	wr.writeBytes(urlParameters);
		wr.flush();
		wr.close();

		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'POST' request to URL : " + url);
	//	System.out.println("Post parameters : " + urlParameters);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		//print result
		System.out.println(response.toString());

	}
        
        
        private void sendPost1() throws Exception {
         try{
                String serviceURL ="https://www.jdoodle.com/api/execute";
             
                URL url = new URL(serviceURL);
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setDoInput(true);
                urlConnection.setDoOutput(true);
                urlConnection.setUseCaches(false);
                urlConnection.setRequestMethod("POST");
                urlConnection.setRequestProperty("User-Agent", USER_AGENT);
                urlConnection.setRequestProperty("Content-Type", "application/json");
                urlConnection.setRequestProperty("Cache-Control", "no-cache");
                DataOutputStream outputStream = new DataOutputStream(urlConnection.getOutputStream());
                String xmlinput ="{\"script\":\"public class MyClass {\\n    public static void main(String args[]) {\\n        int x=10;\\n        int y=25;\\n        int z=x+y;\\n\\n        System.out.println(\\\"Sum of x+y = \\\" + z);\\n    }\\n}\\n\",\"args\":\"\",\"stdin\":\"\",\"language\":\"java\",\"libs\":\"\"}";
                outputStream.writeBytes(xmlinput);
                outputStream.flush();
                outputStream.close();
                DataInputStream inn = new DataInputStream(urlConnection.getInputStream());
                BufferedReader br = new BufferedReader(new InputStreamReader(inn));
                String strLine = "";
                StringBuffer sb = new StringBuffer();
                sb.append("\n");
                while ((strLine = br.readLine()) != null) {
                    sb.append("\n").append(strLine);
                }
                inn.close();
                System.out.println("Response : " + sb.toString());
            }catch(Exception e){
                e.printStackTrace();
//                response.setResponseBody(e.getMessage());
//                response.setTestingStatus("Failed");
            }
        }

        private static class DefaultTrustManager implements X509TrustManager {

            @Override
            public void checkClientTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {}

            @Override
            public void checkServerTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {}

            @Override
            public X509Certificate[] getAcceptedIssuers() {
                return null;
            }
        }
}