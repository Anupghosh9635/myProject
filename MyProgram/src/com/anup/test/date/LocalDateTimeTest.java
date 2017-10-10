/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.date;

import java.time.*;
/**
 *
 * @author anupg
 */
public class LocalDateTimeTest {
    public static void main(String[] args) {
    	
        LocalDateTime dateTime = LocalDateTime.now();
//      LocalDateTime dateTime = LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
        System.out.println("print date and time - "+dateTime);
        
        LocalDateTime befour6MonthsDateTime = dateTime.minusMonths(6);
        System.out.println("6 months ago - "+befour6MonthsDateTime);
        
        LocalDateTime after6MonthsDateTime = dateTime.plusMonths(6);
        System.out.println("6 months after - "+after6MonthsDateTime);
        
        LocalDateTime particullerDateTime = LocalDateTime.of(1990, Month.APRIL, 15, 11, 30);
        System.out.println("particuller DateTime print - "+ particullerDateTime );
        
    }
}
