package com.anup.myprogram.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

@SuppressWarnings("serial")
@WebServlet("/login")
public class LoginServlet extends HttpServlet
{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		System.out.println("inside login........................");
		
		String password= null;
		String mailid = null;
		 StringBuilder sb = new StringBuilder();
	        BufferedReader br = req.getReader();
	        String str = null;
	        while ((str = br.readLine()) != null) {
	            sb.append(str);
	        }
	        System.out.println("logggggggggggggggggggggggggggggggggggg"+sb);
	        JSONObject jObj;

	        try {
				 jObj = new JSONObject(sb.toString());
				 mailid = jObj.getString("mailid");
				 password = jObj.getString("password");
				 System.out.println("----------"+mailid+"  "+password+"---");
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
	        
		

		/*String loginName=req.getParameter("loginName");
		 password=req.getParameter("password");*/
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet res=null;
		String qry = "select first_name from myprogram.logininfo where mail_id = ? and my_password=? ";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306?user=root&password=dinga");
			pstmt = con.prepareStatement(qry);
			pstmt.setString(1, mailid);
			pstmt.setString(2, password);
			res =pstmt.executeQuery();
			String name=null;
			if(res.next())
			{	
				 name=res.getString(1);
				System.out.println("ssssssssssssssssssssssss"+name);
			}
			if(name==null){
				resp.sendError(0, "ygfyyyyyyyyyyyyyyyyyyyu");
				System.out.println("insire Eror........");
			}
            resp.setContentType("application/json");
            String json="{\"name\" : \""+name +"\"}";
            resp.getWriter().write(json);
			resp.setCharacterEncoding(json);						
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}

		
	}

}
