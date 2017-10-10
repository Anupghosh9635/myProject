/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.date;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
/**
 *
 * @author anupg
 */
public class DateTimeTest {
    public static void main(String[] args) {
//        System.out.println(new Date());
//        System.out.println( LocalDateTime.now());
//        
//        DayOfWeek dow = DayOfWeek.MONDAY;
//        Locale locale = Locale.getDefault();
//        System.out.println(dow.getDisplayName(TextStyle.FULL, locale));
//        
//        YearMonth date1 = YearMonth.now();
//        System.out.printf("%s: %d%n", date1, date1.lengthOfMonth());

        LocalDate date = LocalDate.now();
        System.out.println("print date- "+date);
        // print day 
        DayOfWeek dow = date.getDayOfWeek();
        System.out.println("print day name - "+ dow);
        int dateNo = date.getDayOfMonth();
        System.out.println("print day (number) - "+ dateNo);
        // print month 
        Month monthName = date.getMonth();
        System.out.println("print month name - "+ monthName);
        int monthNo = date.getMonthValue();
        System.out.println("print month (Number) - "+ monthNo);
        // print month 
        int year = date.getYear();
        System.out.println("print year - "+ year);
        // print particuller date like birth day
        LocalDate birthDay = LocalDate.of(1990, Month.NOVEMBER, 20);
        System.out.println("print particuller date - "+birthDay);
    }
}
