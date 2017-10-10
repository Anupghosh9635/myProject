package com.anup.test;


public class OperatorTest {

	public static void main(String [] args ){
		/*int a =60; // 60 = 0011 1100 
		int b =13; // 13 = 0000 1101
		System.out.println("a & b = "+( a & b) ); // a & b = 12  = 0000 1100
		System.out.println("a | b = "+ (a | b) ); // a | b = 61  = 0011 1101
		System.out.println("a ^ b = "+ (a ^ b) ); // a ^ b = 49  = 0011 0001
		System.out.println("~a = "+ (~a) ); 	  // ~a = -61   = 1100 0011 
		System.out.println("a << 2 = "+ (a <<2) ); // a << 2 = 240  = 1111 0000
		System.out.println("a >> 2 = "+ (a >>2) ); // a >> 2 = 15  = 1111
		System.out.println("a >>> 2 = "+(a >>>2)); // a >>> 2 = 15   = 0000 1111 
*/	
//		boolean a =true;
//		boolean b =false;
//		System.out.println("a && b = "+(a&&b)); // a && b = false
//		System.out.println("a || b = "+(a||b)); // a || b = true
//		System.out.println("!(a && b) = "+!(a && b)); // !(a && b) = true
		
		/*int a =10;
		int b =20;
		int c =0;
		c = a + b;
		System.out.println("c = a + b = "+ c ); // c = a + b = 30
		c += a ;
		System.out.println("c += a = "+ c ); // c += a = 40  // c = c + a 
		c -= a ;
		System.out.println("c -= a = "+ c ); // c -= a = 30  // c = c - a
		c *= a ;
		System.out.println("c *= a = "+ c ); // c *= a = 300   // c = c * a
		a =10;	c =15; c /= a ;
		System.out.println("c /= a = "+ c ); // c /= a = 1   // c = c / a
		a =10; c =15; c %= a ;
		System.out.println("c %= a = "+ c ); // c %= a = 5   // c = c % a
		c <<=2;
		System.out.println("c <<= 2 = "+ c ); // c <<= 2 = 20  
		c >>=2;
		System.out.println("c >>= 2 = "+ c ); // c >>= 2 = 5
		c >>=2;
		System.out.println("c >>= a = "+ c ); // c >>= a = 1
		c &= a ;
		System.out.println("c &= 2 = "+ c ); // c &= 2 = 0
		c ^= a ;
		System.out.println("c ^= a = "+ c ); // c ^= a = 10
		c |= a ;
		System.out.println("c |= a = "+ c ); // c |= a = 10
*/	
	
		int a , b;

		a =10;
		b =(a ==1)?20:30;
		System.out.println("Value of b is : "+ b ); // Value of b is : 30
		b =(a ==10)?20:30;
		System.out.println("Value of b is : "+ b ); // Value of b is : 20
		
		Vehicle vehicle =new Car();
		boolean result = vehicle instanceof Car;
		System.out.println(result);
	}
	
}
 class Vehicle {
	 
	public void display() {
		System.out.println("this is Vehicle");
	}	 
 }
 class Car extends Vehicle{
	 @Override
	 public void display() {
		System.out.println("this is Car");
	}
}