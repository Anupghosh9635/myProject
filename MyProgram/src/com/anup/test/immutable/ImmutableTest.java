package com.anup.test.immutable;

class Rectangle {
	final int length ;
	final int bredth ;
	
	Rectangle(int length , int bredth) {
		this.length = length ;
		this.bredth =bredth ;
	}
	
	@Override
	public String toString() {
		return "Rectangle [length=" + length + ", bredth=" + bredth + "]";
	}
}

public class ImmutableTest {
	
	public static void main(String[] args) {
		String s1 = "java";
		System.out.println("Before modifing - "+s1); // Before modifing the s1 object
		String s2 = s1;
		
		s1 = "developer" ; // modifing the s1 object
		System.out.println("After modifing - "+s1);// After modifing the s1 object
		System.out.println("Before modifing s1 object assigned S2 - "+s2); 
 	}
}

class  Immutable{
	
	public static void main(String[] args) {
		Rectangle rectangle = new Rectangle(10, 20);
		System.out.println(rectangle);

	}
}