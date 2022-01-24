import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { studentService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [student, setStudent] = useState(null);

    useEffect(() => {
        studentService.getAll().then(x => setStudent(x));
    }, []);

    function deleteUser(id) {
        setStudent(student.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        studentService.delete(id).then(() => {
            setStudent(student => student.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>student</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add student</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Course</th>
                        
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(student =>
                        <tr key={student.id}>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.course}</td>
                      
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${student.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(student.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!student &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {student && !student.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No student To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };