/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.collection;

import java.util.*;
/**
 *
 * @author anupg
 */
public class LinkedListTest {
    public static void main(String args[]){  
        LinkedList<String> list = new LinkedList<String>();  
        /// Adding  value in list 
        list.add("Banana"); 
        list.add("Bilberry"); 
        list.add("Bilberry"); 
        list.add("Lemon");
        System.out.println("list - " +list);
        list.add(2,"Jackfruit");
        System.out.println("adding Jackfruit in 2nd Index of the list - " +list);
        list.addFirst("Apple");
        list.addLast("Orange");
        System.out.println("adding Apple first and Orange Last in the list - " +list);
        /// remove value from list
        list.remove("Bilberry");
        System.out.println("remove Bilberry from list  - " +list); 
        list.remove(2);
         System.out.println("remove element of 2nd index - " +list);
        list.removeFirst();
        System.out.println("remove element from First index - " +list);
        list.removeLast();
        System.out.println("remove element from Last index -" +list);
        //get size of the list 
        int size = list.size();
        System.out.println("size of the list - " +size);
        //check element is there inside the list 
        boolean isAvalable = list.contains("Banana");
        System.out.println("Banana is there inside the list - " + isAvalable);
        //check index of element inside the list 
        int index = list.indexOf("Lemon");
        System.out.println("index of Lemon inside the list - " + index);
//        Iterator<String> itr = list.iterator();  
//        while(itr.hasNext()){  
//         System.out.println(itr.next());  
//        }  

    }  
}
