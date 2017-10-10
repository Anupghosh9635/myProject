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

abstract class Animal {
    abstract public void move();
}
class Dog extends Animal {
    @Override
    public void move() {
        System.out.println("Dog can move by run .");
    }
}
class Fish extends Animal{
    @Override
    public void move() {
        System.out.println("Fish can move by swing .");
    }
}
public class AbstractTest {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.move();
        animal = new Fish();
        animal.move();
    }
}
