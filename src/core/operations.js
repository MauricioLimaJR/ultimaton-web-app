import * as auth from '../lib/auth'
import instanceCreator from '../core/instanceCreator'
// import { removeToken } from '../lib/auth'

const api = instanceCreator()

/**
 * Create an user
 *
 * @param {string} firstname - user firstname
 * @param {string} lastname - user lastname
 * @param {string} email - user email
 * @param {string} password - user password
 */
export const signup = async (firstname, lastname, email, password) => {
  try {
    const payload = { firstname, lastname, email, password }
    await api.post('/users', payload)

    const response = await api.post('/sessions', { email, password })

    const { token } = response.data
    if (token) {
      auth.registerToken(token.token)
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

/**
 * Login
 *
 * @param {string} email - user email
 * @param {string} password - user password
 *
 * @returns {Object} - logged user
 */
export const signin = async (email, password) => {
  try {
    const payload = { email, password }

    const response = await api.post('/sessions', payload)

    const { token } = response.data
    if (token) {
      auth.registerToken(token.token)
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}
