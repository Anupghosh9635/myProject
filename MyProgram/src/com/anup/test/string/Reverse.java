package com.anup.test.string;

public class Reverse {
    public static void main(String[] args) {
        String s = "java programs";
        System.out.println(reverse(s));
        System.out.println(reverseWithRecartion("Hello")); // method call recurcation function
//***  reverse with built in method call  **/
        StringBuilder input = new StringBuilder("how are you");
        System.out.println(input.reverse());
    }
//***  reverse with simple way ***//
    public static String reverse(String s){
        StringBuilder sb = new StringBuilder();
        for (int i = s.length() - 1 ; i >= 0 ; i--) {
            sb.append(s.charAt(i));
        }
        return sb.toString() ;
    }
// *** reverse with recurcation function   ***//
    public static String reverseWithRecartion(String s){
        if((s == null) || (s.length() <= 1)){
            return s;
        }
        return reverseWithRecartion(s.substring(1)) + s.charAt(0) ; 
    }
}
