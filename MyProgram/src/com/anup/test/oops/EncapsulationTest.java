/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.oops;

/**
 *
 * @author anupg
 */
class Employee {
    private String name;
    
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

public class EncapsulationTest {

    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.setName("Anup");
        System.out.println("Employee Name -> "+employee.getName());

    }
}
