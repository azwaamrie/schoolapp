package com.demo.student.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.demo.student.model.Student;
import com.demo.student.repository.StudentRepository;

@Component
public class StudentService {

	@Autowired
	StudentRepository stdrepo;
	
	public List<Student> findAll(List<Student> stdList){
		
		stdrepo.findAll().forEach(stdList::add);
		return stdList;
	}
	
	public List<Student> findbyStudentCourseContaining(List<Student> stdList, String course){
		
		stdrepo.findbyStudentCourseContaining(course).forEach(stdList::add);
		return stdList;
	}

	// add student to repo
	public Student saveOrUpdate(Student student){
		return stdrepo.save(student);
	}

	// update student 
	public Student updateStudent( Student details, Long id) throws Exception{
		Student std;
		try {
			std = stdrepo.findById(id).orElseThrow(
					() -> new Exception("Student with id " + id + " is not found."));
			
			std.setStudentFirstName(details.getStudentFirstName());
			std.setStudentLastName(details.getStudentLastName());
			std.setStudentCourse(details.getStudentCourse());
			
			
			return stdrepo.save(std);
		} catch (Exception e) {
			throw new Exception("Internal error occurred during update student");
		}
		
		
	}
	
	// delete student
	@DeleteMapping("/students/{id}")
	public void deleteStudent(Long id) throws Exception{
		
		Student std = stdrepo.findById(id).orElseThrow(
				() -> new Exception("Student with id " + id + " is not found."));

		 stdrepo.delete(std);

	}
	
	
}
