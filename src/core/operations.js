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
    console.error(err.response)
    throw err.response
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
    console.error(err.response)
    throw err.response
  }
}

/**
 * Initial set of characters and comics
 *
 * @param {number} limit - query limit
 *
 * @returns {Object} - logged user
 */
export const getInitialSet = async (limit = 10) => {
  try {
    const response = await api.get(`/marvel/initial-set?limit=${limit}`)

    return response.data
  } catch (err) {
    console.error(err.response)
    throw err.response
  }
}

/**
 * Search marvel's characters and comics
 *
 * @param {string} query - string query
 * @param {bool} characters - query param
 * @param {bool} comics - query param
 *
 * @returns {Object} - logged user
 */
export const marvelItemsSearch = async (query, characters, comics) => {
  try {
    let url = `/marvel?query=${query}&limit=10`
    if (characters) url = `${url}&characters=true`
    if (comics) url = `${url}&comics=true`

    const response = await api.get(url)

    return response.data
  } catch (err) {
    console.error(err.response)
    throw err.response
  }
}
