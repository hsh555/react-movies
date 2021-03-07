import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// styles
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Message from '../message';
import {setShowAuthModalAction} from "../../../store/auth-store/actions";
import regs from '../utils/regs';
import { useDispatch } from 'react-redux';

const SignUpForm = () => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(setShowAuthModalAction(false));
    }

    const validationSchema = () => {
        return (Yup.object({
            firstName: Yup.string()
                .min(3, 'Must be 3 characters or more.')
                .max(15, 'Must be 15 characters or less.')
                .required('Required'),
            lastName: Yup.string()
                .min(3, 'Must be 3 characters or more.')
                .max(20, 'Must be 20 characters or less.')
                .required('Required'),
            phoneNumber: Yup.string()
                .required('Required')
                .matches(regs.phoneRegExp, 'Phone number is not valid.'),
            email: Yup.string().email('Invalid email address.').required('Required'),
            password: Yup.string()
                .required('Required')
                .matches(regs.passwordRegExp, 'Minimum eight characters, at least one letter and one number.'),
            acceptTerms: Yup.boolean()
                .required('Required')
                .oneOf([true], 'You must accept the terms.'),
        })
        );
    }
    return (
        <div className="signup-form scrollbar">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    acceptTerms: false
                }}
                validationSchema={validationSchema()}
                onSubmit={(values,{ setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        dispatch(setShowAuthModalAction(false));
                    }, 5000);
                }}
            >
                {(formik) => (
                    <Form>
                        {/* firstName */}
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <Message touched={formik.touched.firstName} error={formik.errors.firstName} />
                        </div>
                        {/* lastName */}
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <Message touched={formik.touched.lastName} error={formik.errors.lastName} />
                        </div>
                        {/* phoneNumber */}
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field name="phoneNumber" type="text" />
                            <Message touched={formik.touched.phoneNumber} error={formik.errors.phoneNumber} />
                        </div>
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
                        {/* acceptTerms */}
                        <div className="form-group">
                            <Field name="acceptTerms" type="checkbox" className="accept-terms" />
                            <label htmlFor="acceptTerms">Accept Terms</label>
                            <Message touched={formik.touched.acceptTerms} error={formik.errors.acceptTerms} />
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

export default SignUpForm;