package com.anup.myprogram.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import org.json.JSONException;
import org.json.JSONObject;

@SuppressWarnings("serial")
@WebServlet("/signUp")
public class UserProfile extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String fName = null;
		String lName = null ;
		String phnumber= null;
		long phNumber = 0 ;
		String mailid = null;
		String password= null;
		
		 StringBuilder sb = new StringBuilder();
	        BufferedReader br = req.getReader();
	        String str = null;
	        while ((str = br.readLine()) != null) {
	            sb.append(str);
	        }
	        System.out.println("ooooooooooooo"+sb);
	        JSONObject jObj;
			try {
				jObj = new JSONObject(sb.toString());
				 fName = jObj.getString("fName");
				 lName = jObj.getString("lName");
				 phnumber = jObj.getString("phNumber");
				 phNumber=Long.parseLong(phnumber);
				 mailid = jObj.getString("mailid");
				 password = jObj.getString("password");
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
	        
		
		
		System.out.println("sssssssssssssssssssssssssssssssssssssssssssssssssss");
		
		Connection con = null;
		PreparedStatement pstmt = null;
		String qry = "insert into myprogram.logininfo values(?,?,?,?,?)";

		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager
					.getConnection("jdbc:mysql://localhost:3306?user=root&password=dinga");
			pstmt = con.prepareStatement(qry);
			pstmt.setString(1, fName);
			pstmt.setString(2, lName);
			pstmt.setLong(4, phNumber);
			pstmt.setString(3, mailid);
			pstmt.setString(5, password);
			pstmt.executeUpdate();
			System.out.println("sucessfully...........Registration");
			resp.setContentType("application/json");
			 String json="{\"emailId\" : \""+mailid +"\"}";
            resp.getWriter().write(json);
           // resp.addHeader("sucess", "Sucessfull registration");
           
            resp.setCharacterEncoding(json);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			resp.sendError(0, "Error..........");
		} finally {
			if(pstmt!=null)
			{
				try {
					pstmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			if(con!=null)
			{
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
		}

	}

}
