package com.anup.test;

public class StudentTest {

	int id;
	String name;
	int age;
	char c = 'a' ;

	StudentTest(int i, String n) {
		id = i;
		name = n;
	}

	StudentTest(int i, String n, int a) {
		id = i;
		name = n;
		age = a;
	}

	void display() {
		System.out.println(id + " " + name + " " + age);
	}

	public static void main(String args[]) {
		StudentTest s1 = new StudentTest(100, "Anup");
		StudentTest s2 = new StudentTest(101, "Kamal", 20);
		s1.display();
		s2.display();
	}

}
