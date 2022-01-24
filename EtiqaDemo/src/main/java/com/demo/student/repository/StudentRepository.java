package com.demo.student.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.demo.student.model.Student;

public interface StudentRepository  extends CrudRepository<Student, Long>{

	@Query("select a from Student a where a.studentCourse =:studentCourse")
	List<Student> findbyStudentCourseContaining(String studentCourse);
}
