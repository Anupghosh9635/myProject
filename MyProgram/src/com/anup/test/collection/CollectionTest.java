/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anup.test.collection;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.Stack;

/**
 *
 * @author anupg
 */
public class CollectionTest {

    private  List<String> pendingRequestDetails;
   
    public static void main(String[] args) {
    	List l = new ArrayList();
    	l.add("a");
        l.add("b");
        l.add("c");
        
        List l1 = new ArrayList();
    	l1.add("c");
        l1.add("d");
        l1.add("e");
        Set s = new LinkedHashSet();
        Queue q = new PriorityQueue(); 
        
        Deque deque = new ArrayDeque(); 
        Stack s1= new Stack();
        CollectionTest collectionTest = new CollectionTest();
        System.out.println(collectionTest.getArrayList().addAll(l));
        System.out.println(collectionTest.getArrayList());
        System.out.println(collectionTest.getArrayList().addAll(l1));
        System.out.println(collectionTest.getArrayList());
//        List<String> arrayList = collectionTest.getArrayList();
//        arrayList.addAll(l);
//        System.out.println(""+arrayList);
//        arrayList.addAll(l);
//        System.out.println(""+arrayList);
     
    }
    public List getArrayList(){
        if (pendingRequestDetails == null) {
            pendingRequestDetails = new ArrayList<String>();
        }
        return this.pendingRequestDetails;
    }
}
