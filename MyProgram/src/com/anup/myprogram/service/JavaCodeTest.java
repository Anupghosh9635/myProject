/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.myprogram.service;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

/**
 *
 * @author ANUP
 */
@WebServlet("/codeTest")
public class JavaCodeTest extends HttpServlet {
        private SSLContext ctx ;
        private static final String USER_AGENT = "Mozilla/5.0";
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		StringBuilder sb = new StringBuilder();
	        BufferedReader br = req.getReader();
	        String str = null;
	        while ((str = br.readLine()) != null) {
	            sb.append(str);
	        }
            String request = sb.toString();
              
           
            
            
            try {
                ctx = SSLContext.getInstance("TLS");
                ctx.init(new KeyManager[0], new TrustManager[]{ new DefaultTrustManager()}, new SecureRandom());
            } catch (Exception ex) {
                Logger.getLogger(JavaCodeTest.class.getName()).log(Level.SEVERE, null, ex);
            } 
                        
             SSLContext.setDefault(ctx);
 //         try{
                String serviceURL = "https://www.jdoodle.com/api/execute";

                URL url = new URL(serviceURL);
                HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
//                urlConnection.setHostnameVerifier(new HostnameVerifier() {
//                    @Override
//                    public boolean verify(String arg0, SSLSession arg1) {
//                        return true;
//                    }
//                });
                urlConnection.setDoInput(true);
                urlConnection.setDoOutput(true);
                urlConnection.setUseCaches(false);
                
                urlConnection.setRequestMethod("POST");
	//	urlConnection.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
                urlConnection.setRequestProperty("User-Agent", USER_AGENT);
                urlConnection.setRequestProperty("Content-Type", "application/json");
                urlConnection.setRequestProperty("Cache-Control", "no-cache");
                
                DataOutputStream outputStream = new DataOutputStream(urlConnection.getOutputStream());
                outputStream.writeBytes(request);
                outputStream.flush();
                outputStream.close();
                System.out.println("urlstr :" + serviceURL);
                DataInputStream inn = new DataInputStream(urlConnection.getInputStream());
                BufferedReader brReq = new BufferedReader(new InputStreamReader(inn));
                String strLine = "";
                StringBuffer sbResp = new StringBuffer();
                sbResp.append("\n");
                while ((strLine = brReq.readLine()) != null) {
                    sbResp.append("\n").append(strLine);
                }
                inn.close();
                String response = sbResp.toString();
                System.out.println("Response : " + response);
    //            response.setResponseBody(sb.toString());
    //            response.setTestingStatus("Success");

                resp.setContentType("application/json");
    //                String json="{\"name\" : \""+ "dsbsfbfdsb" +"\"}";
    //                resp.getWriter().write(json);
                resp.getWriter().write(response);
                resp.setCharacterEncoding(response);						
		

		
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

 