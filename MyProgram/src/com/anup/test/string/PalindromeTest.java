package com.anup.test.string;

public class PalindromeTest {

	public static void main(String[] args) {
		
		System.out.println(PalindromeCheck("12121"));
	}
	
    public static boolean  PalindromeCheck(String s) {
    	s = s.toLowerCase();
    	boolean isPalindrome = true ; 
    	int n = s.length();
    	for (int i = 0; i < n/2 ; i++) {
			if(s.charAt(i) != s.charAt(n -1 -i)) 
			{	
				isPalindrome = false ;
				break ;
			}	
		}
		return isPalindrome;
	}
    
  
}
