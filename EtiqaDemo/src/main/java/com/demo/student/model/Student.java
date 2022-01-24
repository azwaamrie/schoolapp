package com.demo.student.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
 	@Column(name="std_id") 
	private int studentId;
	
	@Column(name="std_firstname") 
	private String studentFirstName;
	
	@Column(name="std_lastname") 
	private String studentLastName;
	
	@Column(name="std_course") 
	private String studentCourse;

	public Student(String studentFirstName, String studentLastName , String studentCourse){
		super();
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
		this.studentCourse = studentCourse;
	}
	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentFirstName() {
		return studentFirstName;
	}

	public void setStudentFirstName(String studentFirstName) {
		this.studentFirstName = studentFirstName;
	}

	public String getStudentLastName() {
		return studentLastName;
	}

	public void setStudentLastName(String studentLastName) {
		this.studentLastName = studentLastName;
	}

	public String getStudentCourse() {
		return studentCourse;
	}

	public void setStudentCourse(String studentCourse) {
		this.studentCourse = studentCourse;
	}
	
	
}
