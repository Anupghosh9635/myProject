/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.collection;

import java.util.HashSet;

/**
 *
 * @author anupg
 */
public class HashSetTest {

    public static void main(String[] args) {
        HashSet hashSet = new HashSet();
        hashSet.add("Apple");
        hashSet.add("Dog");
        hashSet.add("Bat");
        hashSet.add("Cat");
        System.out.println("hashSet all element - " + hashSet);
        hashSet.add("Bat");
        System.out.println("After adding duplicate  element - " + hashSet);
        boolean isAvalable = hashSet.contains("Apple");
        System.out.println("Check element is there inside the hashSet - " + isAvalable);
        int size = hashSet.size();
        System.out.println("Size of the hashSet - " + size);
        hashSet.remove("Dog");
        System.out.println("After remooving the element - " + hashSet);
    }
}
