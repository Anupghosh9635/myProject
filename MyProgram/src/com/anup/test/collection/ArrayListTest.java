/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.collection;

/**
 *
 * @author anupg
 */
import java.util.ArrayList;
public class ArrayListTest {
   public static void main(String args[]) {
      /* create an array list */
      ArrayList list = new ArrayList();
      System.out.println("Initial size of list is -> " + list.size()); // -> 0
      /* add elements to the array list */
      list.add("DOG");
      list.add("CAT");
      list.add("APPEL");
      list.add("FOOD");
      list.add("EGAL");
      list.add("HAT");
      list.add("BAT");
      System.out.println("Size of all after additions -> " + list.size()); // -> 7
      /* display the array list */
      System.out.println("Contents of all element -> " + list); 
            //Contents of all element ->  [DOG, CAT, APPEL, FOOD, EGAL, HAT, BAT] 
      
      /* add elements to the particuller index */
      list.add(2, "ANOTHER");
      System.out.println("Size of all after additions of Particuller Index -> " + list.size()); // -> 8
      /* display the array list */
      System.out.println("Contents of all element -> " + list); 
      // Contents of all element -> [DOG, CAT, ANOTHER, APPEL, FOOD, EGAL, HAT, BAT] 

      /* Delete elements from the array list by content */
      list.remove("EGAL");
      /* Delete elements from the array list by index number */
      list.remove(2);
      System.out.println("Size of all after removed - " + list.size()); // -> 6 
      System.out.println("Contents of all fter removed -> " + list); // -> [DOG, CAT, APPEL, FOOD, HAT, BAT]
      
      /* check the index of element */
      int index = list.indexOf("HAT");
      System.out.println("the index of 'HAT' is -> " +index); // -> 4
      
      /* Delete all elements from the array list */
      list.clear();
      System.out.println("Size of all after clear - " + list.size()); // -> 0 
      System.out.println("Contents of all -> " + list); // -> []
   }
}
