import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Grid, TextField } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
// Custom components
import Button from '../components/Button'
// Others
import Toast from '../../lib/toastfy'
import * as colors from '../../constants/colors'
import Errors from '../../constants/errors'
import { signup } from '../../core/operations'

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
  const history = useHistory()

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const onSubmit = async (values) => {
    try {
      const { firstname, lastname, email, password } = values
      await signup(firstname, lastname, email, password)

      history.push('/home')
    } catch (err) {
      if (err.status === 409) {
        return Toast.error(Errors.emailAlreadyUsed)
      }
      Toast.error(Errors.common)
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
              <Field name="firstname">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['firstname'] && touched['firstname']}
                    id="standard-error-helper-text"
                    label={'First name'}
                    helperText={
                      errors['firstname'] && touched['firstname']
                        ? errors['firstname']
                        : null
                    }
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              {/* Last name field */}
              <Field name="lastname">
                {({ field }) => (
                  <CustomTextField
                    {...field}
                    error={errors['lastname'] && touched['lastname']}
                    id="standard-error-helper-text"
                    label={'Last name'}
                    helperText={
                      errors['lastname'] && touched['lastname']
                        ? errors['lastname']
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
