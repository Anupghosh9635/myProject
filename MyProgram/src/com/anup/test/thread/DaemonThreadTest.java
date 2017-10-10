package com.anup.test.thread;


class ThreadNumberPrint extends Thread {
    @Override
    public void run(){
        for (int i = 0; i < 20; i++) {
            System.out.println(i);
        
            try {
                Thread.sleep(500);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
    }
}

class ThreadDaemon extends Thread {
    @Override
    public void run(){
    	while(true){
            System.out.println("--");
            try {
                Thread.sleep(500);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
    }
}
public class DaemonThreadTest {

	public static void main(String[] args) {
		
		Thread th1 = new ThreadNumberPrint();
		th1.start();
        Thread th2 = new ThreadDaemon();
        th2.setDaemon(true);
        th2.start();

	}

}
