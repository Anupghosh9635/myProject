/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.over;

/**
 *
 * @author anupg
 */
class Person{
    public void isEducted (){
        System.out.println("Person can be educated or not");
    }
    
    public void isMove (){
        System.out.println("Person can move");
    }
}
class Student extends Person{
    
    @Override
    public void isEducted (){
        System.out.println("Students are educated");
    }
}
public class OverrideTest1 {
    public static void main(String[] args) {
        Person person = new Person();
        person = new Student();
        person.isEducted(); // it will call 
        person.isMove();
        
    }
}
