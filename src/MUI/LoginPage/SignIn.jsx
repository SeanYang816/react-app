import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { CustomTextInput, CustomField } from './CustomForm'

export default function SignupForm() {
  // 1. initial values
  // 2. submit function


  return (
    <Formik
      initialValues={{
        email: '',
        firtName: '',
        lastName: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form>
        <CustomTextInput type="text" label="firstName" name="firstName" />
        <CustomTextInput type="text" label="lastName" name="lastName" />
        <CustomTextInput type="email" label="email" name="email" />

        <CustomField label="colors" name="colors">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </CustomField>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

/**
 * {...formik.getFieldProps('lastName')} - onChange, onBlur, value, checked
 */

// function validate(values) {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };