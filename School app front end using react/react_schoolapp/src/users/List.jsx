import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [students, setStudent] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setStudent(x));
    }, []);

    function deleteUser(id) {
        setStudent(students.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setStudent(students => students.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>students</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>course</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {students && students.map(student =>
                        <tr key={student.studentId}>
                            <td> {student.studentFirstName} {student.lastName}</td>
                            <td>{student.studentCourse}</td>
                            
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${student.studentId}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(student.studentId)} className="btn btn-sm btn-danger btn-delete-user" disabled={student.isDeleting}>
                                    {student.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!students &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {students && !students.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };