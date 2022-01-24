import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService, alertService } from '@/_services';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        
        studentFirstName: Yup.string()
            .required('First Name is required'),
        studentLastName: Yup.string()
            .required('Last Name is required'),
        studentCourse: Yup.string()
            .required('Email is required'),
        
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(id, data);
    }

    function createUser(data) {
        return userService.create(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(alertService.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then(user => {
                const fields = [ 'studentFirstName', 'lastName', 'studentCourse'];
                fields.forEach(field => setValue(field, user[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
            <div className="form-row">
               
                <div className="form-group col-5">
                    <label>First Name</label>
                    <input name="studentFirstName" type="text" ref={register} className={`form-control ${errors.studentFirstName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.studentFirstName?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Last Name</label>
                    <input name="studentLastName" type="text" ref={register} className={`form-control ${errors.studentLastName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.studentLastName?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Course</label>
                    <input name="studentCourse" type="text" ref={register} className={`form-control ${errors.studentCourse ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.studentCourse?.message}</div>
                </div>
                
            </div>
            
            <div className="form-row">
                
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };