package com.sutin.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Properties;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorld extends HttpServlet
{
  private String message;
  static Integer requestcount = Integer.valueOf(0);

  public void init()
    throws ServletException 
  {
    this.message = "Hello World";
  }

  public void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException
  {
	String str =  request.getQueryString();
	System.out.println(System.getProperty("nousheen"));
	System.out.println(System.getProperty("java.version"));
	Properties prop = new Properties();

	   prop.setProperty("nou1", "nou1");
	   System.setProperties(prop);
	   System.out.println(System.getProperty("nou1"));
	   
//	System.out.println(str);
	   java.util.Map<String,String> env=	System.getenv();
		
	   Set<String> set =env.keySet();
		for (String iterable_element : set) {
			System.out.println(iterable_element);
		}
	 //System.out.println(env);
	 
	try {
		str.toCharArray();
		 
	} catch (Exception e) {
		System.out.println(e);
	}
    response.setContentType("text/html");
    requestcount = Integer.valueOf(requestcount.intValue() + 1);
    System.out.println("in servlet " + requestcount);
    try {
      Thread.sleep(new Long(700L).longValue());
    }
    catch (InterruptedException e) {
      e.printStackTrace();
    }

    PrintWriter out = response.getWriter();
    out.println("<h1>" + this.message + "</h1>");
  }

  public void destroy()
  {
  }
}