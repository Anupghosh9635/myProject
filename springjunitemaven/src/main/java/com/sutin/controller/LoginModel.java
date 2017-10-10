package com.sutin.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
	public class LoginModel {
		public  LoginModel() {
			
		}
		
		@Value("noushee")
		private String loginName;
		@Value("123")
		private String password;
		@Value("admin")
		private String role;
		
		public int getNumber() {
			return number;
		}
		public void setNumber(int number) {
			this.number = number;
		}

		private int number ;
		public String getLoginName() {
			return loginName;
		}
		public void setLoginName(String loginName) {
			this.loginName = loginName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		@Override
		public String toString() {
			return "LoginModel [loginName=" + loginName + ", password=" + password + ", role=" + role + ", number="
					+ number + "]";
		}
		
		
		
		
	}
	

