package com.anup.test.over;

 public class Over {
	 public static void main(String[] args) {
		 System.out.println("main method");
	}

}
 class A{
     void m1(){
         System.out.println("m1() method in A class");
     }
     void m2(){
         System.out.println("m2() method in A class");
     }
 }
 class B extends A {
     void m1(){
         System.out.println("m1() method in B class");
     }
 }               
 class OverridingTest {
     public static void main(String[] args) 
     {
         B b = new B();
         b.m1();     // m1() method in B class  // class A m1() method is Override by class B m1() method.
         b.m2();     //  m2() method in A class
     }
 }
 
  class Animal {
	    public static void testClassMethod() {
	        System.out.println("The static method in Animal");
	    }
	    public void testInstanceMethod() {
	        System.out.println("The instance method in Animal");
	    }
	}
  
class Cat extends Animal {
	
	    public static void testClassMethod() {
	        System.out.println("The static method in Cat");
	    }
	    public void testInstanceMethod() {
	        System.out.println("The instance method in Cat");
	    }

	    public static void main(String[] args) {
	        Cat myCat = new Cat();
	        Animal myAnimal = myCat;
	        Animal.testClassMethod();
	        Cat.testClassMethod();
	        myAnimal.testInstanceMethod();
	    }
	}