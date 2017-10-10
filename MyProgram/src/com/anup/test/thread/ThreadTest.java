/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.thread;

/**
 *
 * @author anupg
 */
public class ThreadTest {
    public static void main(String[] args) {
        Thread th1 = new Thread1();
        Thread th2 = new Thread2();
        th1.start();
        th2.start();
    }
}

class Thread1 extends Thread {
    @Override
    public void run(){
        System.out.println("Character Print Thread is Start");
        for (char c = 'a'; c <= 'z'; c++) {
            System.out.println(c);
            try {
                Thread.sleep(500);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
        System.out.println("Character Print Thread is End");
    }
}

class Thread2 extends Thread {
    @Override
    public void run(){
        System.out.println("Number Print Thread is Start");
        for (int i = 0; i < 50; i++) {
            System.out.println(i);
        
            try {
                Thread.sleep(500);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
        System.out.println("Number Print Thread is End");
    }
}