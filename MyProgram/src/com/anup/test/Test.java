package com.anup.test;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
	public static void main(String[] args) {
		Box box = new Box();
		box.area(10);
		box.area(10,15);
		
		B b1 =new B();
		b1.display();
	}
}

class A {
	int i = 10 ;
}
class B extends A {
	int j = 20 ;
	void display(){
		System.out.println("i = "+ i);
		System.out.println("j = "+ j);
	}
}

class Box{
	
    public void area(int a){
        System.out.println( "Area of square is - "+a * a);
    }   
    public void area(int a, int b){
    	System.out.println( "Area of rectangle is - "+ a * b);
    }
      
}
  
class AreaTest{
	
	public static void main(String[] args) {
		Box box = new Box();
		box.area(10);
		box.area(10,15);
	}
}


class Addition{
    public void add(int a, int b){
    	System.out.println("integer addition - "+ (a+b) );
    }
    public void add(double a, double b){
    	System.out.println("double addition - "+ (a+b) );
    }
}

class AdditionTest{
	public static void main(String[] args) {
		Addition addition = new Addition();
		addition.add(10,15);
		addition.add(10.00,15.00);	
	}
}


class Student2 {
    public void display(String name, int id){
    	 System.out.println( "The student name - "+ name +"  Id - "+id);
    }
    public void display(int id, String name){
    	 System.out.println( "The student name - "+ name +"  Id - "+id);
    }
}

class StudentTest1{
	public static void main(String[] args) {
		Student2 student = new Student2();
		student.display("Akash",10);
		student.display(10,"kamal");
	}
}

class TestMainMethodOverloading{  
	
	public static void main(String[] args){
		System.out.println("main with String[]");
	}  
	public static void main(String args){
		System.out.println("main with String");
	}  
	public static void main(){
		System.out.println("main without args");
	}  
}

class MainMethodTest{
	
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 class NullArgumentTest {
	public static void main(String[] args) {
		method(null);
	}
	
	public static void method(String s){
		System.out.println("String impl "+ s);
	}
	public static void method(Object o){
		System.out.println("Object imple"+o);
	}
//	public static void method(Integer s){
//		System.out.println("double impl "+ s);
//	}
}
 
 class ArgumentTest {
		public static void main(String[] args) {
			method(null);
		}
		
		public static void method(Exception s){
			System.out.println("ArithmeticException "+ s);
		}
		public static void method(ArithmeticException s){
			System.out.println("ArithmeticException "+ s);
		}
		public static void method(Object o){
			System.out.println("Object imple"+o);
		}
//		public static void method(Integer s){
//			System.out.println("double impl "+ s);
//		}
	}

 class ExceptionTest {
	 
		public static void main(String[] args) {
			method();
		//	System.out.println(method());
		}
		
		public static int method(){
			try { 
				System.out.println("try");
				int x =4/0;
				return 10;
			}catch (Exception e) {
				System.out.println("catch");
			}finally {
				System.out.println("finally");
				return 20;
			}
		}
	}

 class ExceptionTest1 {
	 
		public static void main(String[] args) {
			method();
		//	System.out.println(method());
		}
		
		public static int method(){
			try { 
				System.out.println("try");
				return 10;
			}catch (Exception e) {
				System.out.println("catch");
			}finally {
				System.out.println("finally");
				return 20;
			}
			
		}
		
	}
 
 
 class ATest {
	 
		public static void main(String[] args) {
			
			String s1 = "abc";
			String s2 = s1;
			s1 += "d";
			System.out.println(s1==s2);
			System.out.println(s1.equals(s2));
			
			String s3 = "abcd";
			String s4 = new String("abcd");
			System.out.println(s3 == s4);
			System.out.println(s3.equals(s4));
			
			StringBuffer  stringBuffer1 = new StringBuffer("abc");
			StringBuffer stringBuffer2 = stringBuffer1;
			stringBuffer1.append("d");
			System.out.println(stringBuffer1 == stringBuffer2);
			System.out.println(stringBuffer1.equals(stringBuffer2));
		}

	}
 
 
 class Testing2 {
    public static void main(String[] args)
     {
         // the line below this gives an output
    	  System.out.println("Inside Main method");
         // \u000d System.out.println("comment executed");
    	  
    	// \u000d
          System.out.println("comment executed outside");
     }
}
 
 class C
 {
     static void staticMethod()
     {
         System.out.println("Static Method");
     }
 }
  
 class MainClass
 {
     public static void main(String[] args)
     {
         C a = null;
  
         a.staticMethod();
     }
 }
 
 class D
 {
     int methodOfA()
     {
         return (true ? null : 0 );
     }
 }
 class DTest
 {
     public static void main(String[] args)
     {
         D a = new D();
  
         System.out.println(a.methodOfA());
     }
 }
 
 
  class MainClass1
 {
     public static void main(String[] args)
     {
         Integer i1 = 127;
  
         Integer i2 = 127;
  
         System.out.println(i1 == i2);
  
         Integer i3 = 128;
  
         Integer i4 = 128;
  
         System.out.println(i3 == i4);
     }
 }
  
//  class E
//  {
//      void method(int i)
//      {
//          //method(int)
//      }
//  }
//   
//  class F extends E
//  {
//      @Override
//      void method(Integer i)
//      {
//          //method(Integer)
//      }
//  }
  
class MainClass2
  {
      public static void main(String[] args)
      {
          Integer i = new Integer(null);
   
     //     String s = new String(null);
      }
  }


class MainClass3
{
    public static void main(String[] args)
    {
        String s = "ONE"+1+2+"TWO"+"THREE"+3+4+"FOUR"+"FIVE"+5; 
 
        System.out.println(s);  //ONE12TWOTHREE34FOURFIVE5
    }
}

class MainClass4
{
    public static void main(String[] args)
    {
        int i = 10 + + 11 - - 12 ;//+ + 13 - - 14 + + 15;
        System.out.println(i);
        
    }
}

class CodingExamples
{
    public static void main(String args[])
    {
        int i = (byte) + (char) - (int) + (long) - 1;
 
        System.out.println(i);
    }
}

class CodingExamples1
{
    public static void main(String args[])
    {
        System.out.println(1);
 
         https://javaconceptoftheday.com/
 
        System.out.println(2);
    }
}


 class ClassesAndObjects
{
    public static void main(String[] args)
    {
        try
        {
            Runtime.getRuntime().exec("notepad.exe");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}
 
 class CurrentDate
{
    public static void main(String[] args)
    {
        Date date = new Date();
 
        SimpleDateFormat formatter = new SimpleDateFormat("dd MMM yyyy");
 
        System.out.println(formatter.format(date));
    }
}
 
// class MainMethod
// {
//     private static void main(String[] args)
//     {
//         //Run time error
//     }
// }
 
 
 class MainMethod
 {
     public MainMethod(int i)
     {
         //Constructor taking one argument
     }
  
     public void main(String[] args)
     {
         //main method as non-static
     }
 }
 
 
 interface IFruit
 {
     public String TYPER = "Apple";
 }

 class Fruit implements IFruit
 {
	// public final String TYPER = "Appleeeeeee";
 }

  class Application {
     public static void main(String[] args) {
    
         System.out.println(Fruit.TYPER);
         System.out.println(IFruit.TYPER);
     }
 }
  
  class Fruit1 {
	    protected static String name = "Sue";
	}

	class Apple extends Fruit1 {
	    
	}

	class Application1 {
	    public static void main(String[] args) {
	        System.out.println(Apple.name);
	    }
	}
	
	
	
	
	class Application2 {
	    public static void main(String[] args) {
	    	
	    	if(null == null)
	        System.out.println("nulllllllll");
	    }
	}
	
	
	
	class Application3 {
		public void m1(String args){
			args ="Hello......";
		}
		
	    public static void main(String[] args) {
	    	
	    	Application3 application3 =new Application3();
	    	String s ="hi.........";
	    	application3.m1(s);
	    	System.out.println(s);
	    }
	}
	
	class Application4 {
		
	    public static void main(String[] args) {
	    	short s = 0;
			int x = 07;
	//		int y= 09;        
			int z =1234556;
			s += z;
	        System.out.println(""+x+z+s);
	    }
	}
	
	
	
class Application5 {
		int x = 5;
	    public static void main(String[] args) {
	    	Application5 application5 = new Application5();
	    	application5.method1();
	    }

		private void method1() {
			int x;
	//		method2(++x);
		}

		private void method2(int i) {
			int x =++i;
			System.out.println(x);
			
		}
	}
	
	
	
class Test2
{
    static
    {
        d = 10;
 
  //      System.out.println(d);
    }
 
    static double d;
}
	