package com.anup.test.date;

import java.util.Date;

/**
 * @author anupg
 *
 */
public class DateTest {
	public static void main(String[] args) {
		Date date = new Date();
		System.out.println("date - "+date);
		
		long dateLong =System.currentTimeMillis();
		Date dateAnotherWay = new Date(dateLong);
		System.out.println("dateAnotherWay - "+dateAnotherWay);

		Date yesterday = new Date(dateLong - 1000L * 60L * 60L * 24L);
		System.out.println("yesterday - "+yesterday);
		
		boolean isBefore= yesterday.before(date);
		System.out.println("Check date is Before toyday date - "+isBefore);
		
		boolean isAfter= yesterday.after(date);
		System.out.println("Check date is After toyday date - "+isAfter);
			
		System.out.println(date.getTime());
		
	}
}
