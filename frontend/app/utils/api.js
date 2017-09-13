import { SERVER_URL } from 'config'
import {
  get,
  post,
  put,
  patch,
  delete_,
} from './request'

function url(uri) {
  return `${SERVER_URL}${uri}`
}

function v1(uri) {
  return url(`/api/v1${uri}`)
}

/**
 * Api methods
 *
 * NOTE: Please keep the order alphabetized!
 */
export default class Api {
  static changePassword(payload) {
    return post(v1('/auth/change-password'), payload)
  }

  static checkAuthToken(token) {
    return get(v1('/auth/check-auth-token'), { token })
  }

  static contact(payload) {
    return post(v1('/contact-submissions'), payload)
  }

  static fetchProfile(token, user) {
    return get(v1(`/users/${user.id}`), { token })
  }

  static fetchProtected(token) {
    return get(v1('/test'), { token })
  }

  static forgotPassword(payload) {
    return post(url('/auth/reset'), payload)
  }

  static login(payload) {
    return post(v1('/auth/login'), payload)
  }

  static logout() {
    return get(v1('/auth/logout'))
  }

  static resendConfirmationEmail(email) {
    return post(v1('/auth/resend-confirmation-email'), { email })
  }

  static resetPassword(token, payload) {
    return post(url(`/auth/reset/${token}`), payload)
  }

  static signUp(payload) {
    return post(v1('/users'), payload)
  }

  static updateProfile(token, user, payload) {
    return patch(v1(`/users/${user.id}`), payload, { token })
  }
}
