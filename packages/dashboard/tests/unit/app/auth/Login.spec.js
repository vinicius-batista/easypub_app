import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import { render, fireEvent, cleanup } from '@testing-library/vue'
import Login from '@/app/auth/views/Login'
import Register from '@/app/auth/views/Register'
import App from '@/App'
import '../../plugins/veevalidate'

const routes = [
  { path: '/auth/register', name: 'auth.register', component: Register },
  { path: '/auth/login', name: 'auth.login', component: Login },
]

describe('Login.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(cleanup)

  test('provide an incorret email and small password should show error messages', async () => {
    const { getByTestId, getByText, html } = render(Login, {
      vuetify,
      sync: false,
    })

    const emailInput = getByTestId('email')
    await fireEvent.update(emailInput, 'jose.com')

    const passwordInput = getByTestId('password')
    await fireEvent.update(passwordInput, '12345')

    getByText('O campo Email deve ser um email válido')
    getByText('O campo Senha deve conter pelo menos 6 caracteres')

    expect(html).toMatchSnapshot()
  })

  test('provide a corret email and password should not show error messages', async () => {
    const { getByTestId, getByText, html } = render(Login, {
      vuetify,
      sync: false,
    })

    const emailInput = getByTestId('email')
    await fireEvent.update(emailInput, 'jose@jose.com')

    const passwordInput = getByTestId('password')
    await fireEvent.update(passwordInput, '123456')

    expect(() =>
      getByText('O campo Email deve ser um email válido')
    ).toThrowError()
    expect(() =>
      getByText('O campo Senha deve conter pelo menos 6 caracteres')
    ).toThrowError()

    expect(html).toMatchSnapshot()
  })

  test('click action-text should change route to register', async () => {
    const { getByTestId, html } = render(
      App,
      {
        vuetify,
        routes,
      },
      (vue, store, router) => router.push('/auth/login')
    )

    const actionText = getByTestId('action-text')
    await fireEvent.click(actionText)
    getByTestId('register-page')

    expect(html).toMatchSnapshot()
  })
})