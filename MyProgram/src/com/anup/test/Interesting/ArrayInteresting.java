package com.anup.test.Interesting;

import java.util.Arrays;

public class ArrayInteresting {
	
	 public static void main(String[] args)
	    {
	        int[] i = new int[-5];   //No Compile Time Error
	        //You will get java.lang.NegativeArraySizeException at run time
	        
	        
	        
	        int[] i1 = new int[10+5];    //Array size can be an expression resulting an integer
	        
	        int[] i2 = new int[(byte)10];    //byte is auto-widened to int
	 
	        //int i3 = new int[10.25] ;	//You will get java.lang.NegativeArraySizeException at run time
	        
	        
	        
	     //   Integer[] I = new int[5];   //Compile Time Error : Auto-Boxing not allowed
	        
	 //       int[] j = new Integer[10];   //Compile Time Error : Auto-UnBoxing not allowed
	 
	  //      long[] l = new byte[10];    //Compile Time Error : Auto-widening not allowed
	 
	        
	        
	        Object[] o = new String[10];    //No Compile Time Error : String[] is auto-upcasted to Object[]
	        
	        //i.e array object of strings can be referred by array reference variable of Object type
	 
	        o[2] = "java";
	 
	        o[5] = 20;   //No Compile time error, 
	 
	        //but you will get java.lang.ArrayStoreException at run time.
	        
	        
	        
	        int[] k = {1, 2, 3, 4};   //This is the correct way
	        
	     //   k = {1, 2, 3 , 4};     //Compile time error
	 
	        k = new int[]{1, 2, 3, 4};  //This is also correct way
	        
	        
	        
	        
	        int[][] twoDArray;    //Normal way of declaring two-dimensional array
	        
	        int[] TwoDArray [];   //Another way of declaring two-dimensional array
	 
	        int[][][] threeDArray;  //Normal way of declaring three-dimensional array
	 
	        int[] ThreeDArray [][];    //This is also legal
	        
	        
	        
	     //   int[][][] threeDArray = new int[10][][10];    //Compile Time Error
	        
	    //    int[][][] threeDArray1 = new int[][10][];     //Compile Time Error
	 
	     //   int[][][] threeDArray2 = new int[][][10];     //Compile Time Error
	        
	        
	        
	        int[] a = new int[10];
	        
	        int[] b = new int[100];
	 
	        double[] c = new double[20];
	 
	        a = b;
	 
	    //    b = c;  //Compile Time Error : can not convert from double[] to int[]
	        
	        
	    }

}


class arrayTest{
	
	public static void main(String[] args) {
		
		String[] s1 = {"java", "j2ee", "struts", "hibernate"};
		 
        String[] s2 = {"jsp", "spring", "jdbc", "hibernate"};
 
        String[] s3 = {"java", "j2ee", "struts", "hibernate"};
 
        System.out.println(Arrays.equals(s1, s2));        //Output : false
 
        System.out.println(Arrays.equals(s1, s3));      //Output : true
        
        
        
        String[] s4 = {"java", "swings", "j2ee", "struts", "jsp", "hibernate"};
        
        String[] s5 = {"java", "struts", "j2ee", "hibernate", "swings", "jsp"};
 
        Arrays.sort(s4);
 
        Arrays.sort(s5);
 
        System.out.println(Arrays.equals(s4, s5));       //Output : true
        
        //Three Dimensional Array
        
        String[][][] threeDArray = new String[][][] {
                                                        {
                                                            {"ONE", "TWO", "THREE"},
                                                            {"FOUR", "FIVE", "SIX", "SEVEN"}
                                                        },
                                                        {
                                                            {"EIGHT", "NINE", "TEN", "ELEVEN"},
                                                            {"TWELVE", "THIRTEEN", "FOURTEEN"}
                                                        },
                                                        {
                                                            {"FIFTEEN", "SIXTEEN"} ,
                                                            {"SEVENTEEN", "EIGHTEEN", "NINETEEN"},
                                                            {"TWENTY", "TWENTY ONE"}
                                                        }
                                                    };
 
        System.out.println("Three Dimensional Array : ");
 
        //Printing three dimensional array contents using deepToString() method
 
        System.out.println(Arrays.deepToString(threeDArray));
	}
}


class EqualityOfTwoArrays
{
    public static void main(String[] args)
    {    
        int[] arrayOne = {2, 5, 1, 7, 4};
         
        int[] arrayTwo = {2, 5, 1, 7, 4};
         
        boolean equalOrNot = true;
         
        if(arrayOne.length == arrayTwo.length)
        {
            for (int i = 0; i < arrayOne.length; i++)
            {
                if(arrayOne[i] != arrayTwo[i])
                {
                    equalOrNot = false;
                }
            }
        }
        else      
            equalOrNot = false;
    
         
        if (equalOrNot)
            System.out.println("Two Arrays Are Equal");
        else
            System.out.println("Two Arrays Are Not equal");
        
    }
}