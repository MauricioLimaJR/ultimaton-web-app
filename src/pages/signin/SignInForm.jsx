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
import { signin } from '../../core/operations'

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

const SingInForm = () => {
  const history = useHistory()

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  })

  const onSubmit = async (values) => {
    try {
      const { email, password } = values
      await signin(email, password)

      history.push('/home')
    } catch (err) {
      Toast.error(err.error || 'Something went wrong!')
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

            {/* Submit btn */}
            <Grid item xs={12} style={{ marginTop: '10px' }}>
              <Button type="submit">Sing In</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default SingInForm
