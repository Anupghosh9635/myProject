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
public class YearMonthTest {
    public static void main(String[] args) {
        YearMonth date = YearMonth.now();
        System.out.println("print Year Momth - "+date);
        Month monthName = date.getMonth();
        System.out.println("print month name - "+monthName);
        int monthNo = date.getMonthValue();
        System.out.println("print month (Number) - "+ monthNo);
        int year = date.getYear();
        System.out.println("print year - "+ year);
        
        LocalDate endDateofTheMonth = date.atEndOfMonth();
        System.out.println("End Date Of The Month - "+endDateofTheMonth);
        
        YearMonth date1 = YearMonth.of(2012, Month.FEBRUARY);
        int lengthOfMonth = date1.lengthOfMonth();
        System.out.println("length Of \" 2012 FEBRUARY \" Month is - "+lengthOfMonth);
        
    }
}
