import React from 'react'
import * as yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import { Grid, TextField } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
// Custom components
import Button from '../components/Button'
// Others
import * as colors from '../../constants/colors'

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: `${colors.white}`,
    },
    '& label.Mui-focused': {
      color: `${colors.pumice}`,
    },
    '& .MuiFormHelperText-root': {
      color: `${colors.cardinal}`,
    },
    '& .MuiInput-input': {
      color: `${colors.white}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${colors.white}`,
    },
  },
})(TextField)

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })

  const onSubmit = async (values, formikBag) => {
    try {
      console.log(values, formikBag)
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container direction="row" justify="center">
            <Grid item xs={12}>
              {/* Name field */}
              <Field name="firstName">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['firstName'] && touched['firstName']}
                    id="standard-error-helper-text"
                    label={'First name'}
                    helperText={
                      errors['firstName'] && touched['firstName']
                        ? errors['firstName']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              {/* Last name field */}
              <Field name="lastName">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['lastName'] && touched['lastName']}
                    id="standard-error-helper-text"
                    label={'Last name'}
                    helperText={
                      errors['lastName'] && touched['lastName']
                        ? errors['lastName']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              {/* Email field */}
              <Field name="email">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['email'] && touched['email']}
                    id="standard-error-helper-text"
                    label={'Email'}
                    helperText={
                      errors['email'] && touched['email']
                        ? errors['email']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              {/* Password field */}
              <Field name="password">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['password'] && touched['password']}
                    id="standard-error-helper-text"
                    label={'Password'}
                    type="password"
                    helperText={
                      errors['password'] && touched['password']
                        ? errors['password']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              {/* Confirm Password field*/}
              <Field name="confirmPassword">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={
                      errors['confirmPassword'] && touched['confirmPassword']
                    }
                    id="standard-error-helper-text"
                    label={'Confirm Password'}
                    type="password"
                    helperText={
                      errors['confirmPassword'] && touched['confirmPassword']
                        ? errors['confirmPassword']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            {/* Submit btn */}
            <Grid item xs={12} style={{ marginTop: '10px' }}>
              <Button type="submit">Sing Up</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
