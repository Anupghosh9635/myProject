package com.sutin.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sutin.daoimpl.CommonDao;




@Component
public class LoginController{

	@Autowired
	public CommonDao commonDao;
	 
	public Boolean authenticate() {
		 List<Map<String,Object>> crediantialList = commonDao.getCrediantial();
		// Map<String,Object> crediantialMap = (crediantialList != null && !crediantialList.isEmpty()) ? crediantialList.get(0):null;
		 
		 Map<String,Object> crediantialMap =  crediantialList.get(0);
		
		 return(Boolean)crediantialMap.get("isvalid");
		
	}
	
	public  LoginController() {
		System.out.println("in login controller");
	}

}
