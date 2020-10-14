import { Formik, ErrorMessage, Form, Field, resetForm } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post, userSelector } from './features/postReducer';


export default function PostForm() {
    const dispatch = useDispatch();
    const {logged} = useSelector(userSelector);
    const init = {title: '', text: ''}

    return (
        <Formik
        initialValues={init}
        validate={ values => {
            const errors = {};
            if (!values.title?.length) errors.title = 'Title cannot be empty!';
            if (!values.text?.length) errors.text = 'Text cannot be empty!';
            return errors;
        }}
        onSubmit={ (values, {resetForm}) => {
            dispatch(post({title: values.title, text: values.text}));
            resetForm();
        }}
        > 
        {logged &&
                (<Form>
                    <label>Title: </label>
                    <Field type="text" width="20" name="title" id="title" />
                    <ErrorMessage name="title" id="error-message" component="div" />
                    <br/>
                    <label>Text: </label><br/>
                    <Field as="textarea" rows="5" cols="25" name="text" id="text"/>
                    <br/>
                    <ErrorMessage name="text" id="error-message" component="div" />
                    <br/>
                    <button type="submit">Post!</button>
                </Form>)
            
        }
        </Formik>
    )
}