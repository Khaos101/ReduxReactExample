import React from 'react'
import {Formik, ErrorMessage, Field, Form } from 'formik'
import { login, userSelector } from './features/postReducer';
import { useDispatch, useSelector } from 'react-redux';

export function LogIn() {
    //const [name, setName] = useState('user')
    //const [logged, setLogged] = useState(false)
    const {nick, logged} = useSelector(userSelector);
    const name = nick
    const dispatch = useDispatch();

    return (
        <div name="login">
            <Formik
                initialValues={{name}}
                validate={values => {
                    const errors = {}
                    if(values.name === '') errors.name = 'name must be a string (len > 0)'
                    return errors;
                }}
                onSubmit={values => {
                    dispatch(login(values.name));
                }
                }
            >
                { !logged ?
                    (<Form>
                        <Field type="text" name="name"/>
                        <ErrorMessage name="name" component="div" />
                        <button type="submit" >Log In</button>
                    </Form>) : ''
                }
            </Formik>
        </div>
    )
}