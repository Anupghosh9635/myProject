package com.sutin.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class ServletUtill {
	  
	private static final String FILENAME = "E:\\servlet\\src\\test\\java\\servlet\\test.txt";
	
	
	
	 public  HashMap<String, Object> setMap() throws Exception{
			HashMap<String, Object> arg  = new HashMap<String, Object>();
			arg.put("rtaUserName","RTCT");
			arg.put("rtaPassword","");
			arg.put("funType","3");
			arg.put("displayName","PriceLine");
	   		arg.put("updatedXML",readInputXml());
			arg.put("hotelName","Test Dubai");
			arg.put("userName","TestNHHotel");
			arg.put("password","TestNHHotel");
			arg.put("hotelID","1");
			arg.put("userSession",""); 
			arg.put("dummy","");
			arg.put("product","RTConnect");
			arg.put("selectedRoomXML","");
			arg.put("startDate","2017-10-08");
			arg.put("noOfDays",1);
			arg.put("endDate","2017-10-08");
			arg.put("requestId", 46919838);
			arg.put("timeout", String.valueOf(10800000));
			return arg;
	}
	 
	 public  String readInputXml() throws Exception {
			String 	requestXml = "";
			
				InputStream in = getClass().getResourceAsStream("/NewFile.xml");
				BufferedReader br = new BufferedReader(new InputStreamReader(in, "UTF-8"));
				String temp = "";
				while ((temp = br.readLine()) != null) {
					requestXml = requestXml + temp;
				}
				in.close();
			return requestXml;
			}
	
}
