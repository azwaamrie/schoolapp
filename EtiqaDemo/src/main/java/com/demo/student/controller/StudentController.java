package com.demo.student.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.student.model.Student;
import com.demo.student.service.StudentService;

@RestController 
@RequestMapping("/api/") 
public class StudentController {

	@Autowired
	StudentService stdService;
	
	// retrieve student info controller
	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents(@RequestParam(required = false) String course) {
		
		try {
			
			List<Student> stdList = new ArrayList<Student>();
			
			if (course == null) {
				stdList = stdService.findAll(stdList);
			} else {
				stdList = stdService.findbyStudentCourseContaining(stdList, course);
			}
			
			if (stdList.isEmpty()){
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(stdList, HttpStatus.OK);
			
		}catch (Exception ex){
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	// add new student controller
	@PostMapping("/students")
	public Student saveNewStudents(@RequestBody Student student) {
		return stdService.saveOrUpdate(student);
	}
	
	@PutMapping("/students/{id}")
	public ResponseEntity < Student > updateStudents(@PathVariable Long id, @RequestBody Student studentDetails) throws Exception {
		
		Student updatedStd = stdService.updateStudent(studentDetails, id);
		return ResponseEntity.ok(updatedStd);

	}
	
	@DeleteMapping("/students/{id}")
	public ResponseEntity < Map < String, Boolean >> deleteStudents(@PathVariable Long id) throws Exception {
		
		stdService.deleteStudent(id);
		Map < String, Boolean > response = new HashMap < > (); 
		response.put("deleted", Boolean.TRUE); 
		return ResponseEntity.ok(response);
	}
}
