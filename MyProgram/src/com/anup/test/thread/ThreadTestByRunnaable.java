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
public class ThreadTestByRunnaable {
    public static void main(String[] args) {
        Runnable rb1 = new Runnable1();
        Thread th1 = new Thread(rb1);
        Runnable rb2 = new Runnable2();
        Thread th2 = new Thread(rb2);
        th1.start();
        th2.start();
    }
}

class Runnable1 implements Runnable {
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

class Runnable2 implements Runnable {
    public void run(){
        System.out.println("Number Print Thread is Start");
        for (int i = 1; i <= 26; i++) {
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