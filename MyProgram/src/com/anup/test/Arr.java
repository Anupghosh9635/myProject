package com.anup.test;

import java.util.Arrays;

public class Arr {
	public static void main(String[] args)
    {}

}
class ArraysDeclare
{
    public static void main(String[] args)
    {
        int[] arrayOfInts;    //Declaring an array of int type
        int arrayOfIntsOherWay []; //Declaring an array of int type another way
        
        double [] arrayOfDoubles ;   //Declaring an array of double type
        double arrayOfDoublesOherWay [] ; //Declaring an array of double type another way
        
        char[] arrayOfChars;     //Declaring an array of character type
        char arrayOfCharsOherWay [] ;	//Declaring an array of character type another way
        
        boolean [] arrayOfBooleans;   //Declaring an array of boolean type
        boolean arrayOfBooleansOherWay [] ;	//Declaring an array of character type another way
        
        Studet1 [] student;      //   Declaring an array any class or object type
        Studet1 studentOherWay [];     //   Declaring an array any class or object type another way
        
    }
}
class Studet1{
	
}

class ArraysInstantiating
{
    public static void main(String[] args)
    {
      
    	int[] arrayOfInts = new int[5];  //Instantiating an array of int type
    	
        int[] arrayOfIntsOtherWay = {12, 21, 0, 5, 7}; //Instantiating and initialization an array of int type
        
    }
}



class ArraysInitializing
{
    public static void main(String[] args)
    {
 
        int[]  arrayOfInts = new int[3];   //Instantiating an array of int using new operator
        arrayOfInts[0] = 5;     //Initializing 1st element in 0 index
        arrayOfInts[1] = 10;    //Initializing 2nd element in 1 index
        arrayOfInts[2] = 15;    //Initializing 3rd element in 2 index
       
        int[]  arrayOfIntsOtherWay = {5,10,15}; //Declaring, instantiating and Initializing an array in one statement
        
    }
}



class MultiDimantional {
	
    public static void main(String[] args) {
        int[][] arr = new int[2][2];  //2 row and 2 column  
        arr[0][0] = 1;
        arr[0][1] = 2;
        arr[1][0] = 3;
        arr[1][1] = 4;
        
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length ; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
    
}

class ArraysCopy{
        
    public static void main(String[] args)
    {
        int[]  arrayOfInts = new int[3];   
        arrayOfInts[0] = 10;    
        arrayOfInts[1] = 15;   
        arrayOfInts[2] = 20;
        
      //Copying in looping Way
        int[] arrayOfIntsCopyByLooping = new int[arrayOfInts.length];
        for (int i = 0; i < arrayOfInts.length; i++) {
            arrayOfIntsCopyByLooping[i] = arrayOfInts[i];
        }
        System.out.println("arrayOfIntsCopyByLooping - " + java.util.Arrays.toString(arrayOfIntsCopyByLooping));
        
      // Copying Using copyOf() Method
        int[] arrayOfIntsCopyByCopyOf = Arrays.copyOf(arrayOfInts, arrayOfInts.length); 
        System.out.println("arrayOfIntsCopyByCopyOf - " + java.util.Arrays.toString(arrayOfIntsCopyByCopyOf));
        
     // Copying Using arraycopy() Method
        int[] arrayOfIntsCopyByArraycopy = new int[arrayOfInts.length];
        System.arraycopy(arrayOfInts, 0, arrayOfIntsCopyByArraycopy, 0, arrayOfInts.length);
        System.out.println("arrayOfIntsCopyByArraycopy - " + java.util.Arrays.toString(arrayOfIntsCopyByArraycopy));

     // CopyingUsing  clone() Method
        int[] arrayOfIntsCopyByClone = arrayOfInts.clone();  
        System.out.println("arrayOfIntsCopyByClone - " + java.util.Arrays.toString(arrayOfIntsCopyByClone));
        
    }
}