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

class Bike{
    public void start(){
        System.out.println("Bike is Start ");
    }
}
class Pulsar extends Bike{
    @Override
    public void start(){
        System.out.println("Pulsar is Start ");
    }
}
class BikeRide{
    public void ride(Bike b){
        b.start();
        System.out.println("ride Bike");
    }
    public void ride(Pulsar p){
        p.start();
        System.out.println("ride Pulsar");
    }
}
public class PolymorphismTest {
    public static void main(String[] args) {
        BikeRide bikeRide = new BikeRide();
        Bike bike = new Pulsar();
        bikeRide.ride(bike);
    }
}

