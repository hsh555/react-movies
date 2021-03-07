import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// styles
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Message from '../message';
import regs from '../utils/regs';
import {setShowAuthModalAction} from "../../../store/auth-store/actions";
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(setShowAuthModalAction(false));
    }

    const validationSchema = () => {
        return (Yup.object({
            email: Yup.string().email('Invalid email address.').required('Required'),
            password: Yup.string()
                .required('Required')
                .matches(regs.passwordRegExp, 'Minimum eight characters, at least one letter and one number.'),
        })
        );
    }
    return (
        <div className="login-form scrollbar">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validationSchema={validationSchema()}
                onSubmit={(values,{ setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        dispatch(setShowAuthModalAction(false));
                    }, 1000);
                }}
            >
                {(formik) => (
                    <Form>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text" />
                            <Message touched={formik.touched.email} error={formik.errors.email} />
                        </div>
                        {/* password */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <Message touched={formik.touched.password} error={formik.errors.password} />
                        </div>
                        {/* rememberMe */}
                        <div className="form-group">
                            <Field name="rememberMe" type="checkbox" className="remember-me" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <button type="submit" className='form-submit' disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? <FontAwesomeIcon icon={faSpinner}/> : "Submit"}
                        </button>
                        <button type="button" className="form-cancel" onClick={handleCloseModal}>Cancel</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;