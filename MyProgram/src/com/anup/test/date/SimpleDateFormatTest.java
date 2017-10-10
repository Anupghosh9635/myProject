package com.anup.test.date;

import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatTest {
	public static void main(String[] args) {
		Date date = new Date();
		
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");  
	    String strDate = formatter.format(date);  //  18/08/2017
	    System.out.println("Date Format with dd/MM/yyyy : "+strDate);  
	    
	    formatter = new SimpleDateFormat("dd-MM-yyyy");  
	    strDate = formatter.format(date);  // 18-08-2017
	    System.out.println("Date Format with dd-MM-yyyy : "+strDate); 
	    
	    formatter = new SimpleDateFormat("dd-MM-yy");  
	    strDate = formatter.format(date);  //  18-08-17
	    System.out.println("Date Format with dd-MM-yy   : "+strDate);
	    
	    formatter = new SimpleDateFormat("dd MMMM yyyy");  
	    strDate = formatter.format(date);  // 18 August 2017
	    System.out.println("Date Format with dd MMMM yyyy : "+strDate);
	    
	    formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");  
	    strDate = formatter.format(date);  // 18-08-2017 06:25:19
	    System.out.println("Date Format with dd-MM-yyyy hh:mm:ss : "+strDate);
	    
	    
	    formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.SSS");  
	    strDate = formatter.format(date);  // 18-08-2017 18:34:11.511
	    System.out.println("Date Format with yyyy-MM-dd HH:mm:ss.SSS : "+strDate);
	    
	    formatter = new SimpleDateFormat("dd MMMM yyyy zzzz");  
	    strDate = formatter.format(date);  // 18 August 2017 India Standard Time
	    System.out.println("Date Format with dd MMMM yyyy zzzz : "+strDate);  
	  
	    formatter = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss z");  
	    strDate = formatter.format(date);  // Fri, 18 Aug 2017 18:31:38 IST
	    System.out.println("Date Format with E, dd MMM yyyy HH:mm:ss z : "+strDate);  
	    
	    
	    formatter = new SimpleDateFormat("EEEEE MMMMM yyyy HH:mm:ss.SSSZ");  
	    strDate = formatter.format(date);  // Friday August 2017 18:31:38.823+0530
	    System.out.println("Date Format with EEEEE MMMMM yyyy HH:mm:ss.SSSZ : "+strDate);

	}
}
