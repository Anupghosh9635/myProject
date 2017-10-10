/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.date;

import java.time.Month;
import java.time.MonthDay;
import java.time.Year;

/**
 *
 * @author anupg
 */
public class MonthDayYearTest {
    public static void main(String[] args) {
        MonthDay date = MonthDay.of(Month.FEBRUARY, 29);
        boolean validLeapYear = date.isValidYear(2010);
        System.out.println("validLeapYear of MonthDay in 2010 - "+validLeapYear);
        
        boolean validLeapYear1 = Year.of(2012).isLeap();
        System.out.println("validLeapYear of Year in  2012 - "+validLeapYear1);
    }
}
