import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import { render, fireEvent, cleanup } from '@testing-library/vue'
import Login from '@/app/auth/views/Login'
import '../../plugins/veevalidate'

describe('Login.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(cleanup)

  test('provide an incorret email and small password should show error messages', async () => {
    const { getByLabelText, getByText, html } = render(Login, {
      vuetify,
      sync: false,
    })

    const emailInput = getByLabelText('Email')
    await fireEvent.update(emailInput, 'jose.com')

    const passwordInput = getByLabelText('Senha')
    await fireEvent.update(passwordInput, '12345')

    getByText('email is not valid.')
    getByText('password is not valid.')

    expect(html).toMatchSnapshot()
  })

  test('provide a corret email and password should not show error messages', async () => {
    const { getByLabelText, getByText, html } = render(Login, {
      vuetify,
      sync: false,
    })

    const emailInput = getByLabelText('Email')
    await fireEvent.update(emailInput, 'jose@jose.com')

    const passwordInput = getByLabelText('Senha')
    await fireEvent.update(passwordInput, '123456')

    expect(() => getByText('email is not valid.')).toThrowError()
    expect(() => getByText('password is not valid.')).toThrowError()

    expect(html).toMatchSnapshot()
  })
})
