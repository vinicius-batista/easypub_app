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

describe('Register.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(cleanup)

  test('provide incorrect inputs should show error messages', async () => {
    const { getByTestId, getByText, html } = render(Register, {
      vuetify,
      sync: false,
    })

    const emailInput = getByTestId('email')
    await fireEvent.update(emailInput, 'jose.com')

    const passwordInput = getByTestId('password')
    await fireEvent.update(passwordInput, '12345')

    const nameInput = getByTestId('name')
    await fireEvent.update(nameInput, 'jose ronaldinho123')

    const barAddressInput = getByTestId('barAddress')
    await fireEvent.update(barAddressInput, '')

    const barNameInput = getByTestId('barName')
    await fireEvent.update(barNameInput, '')

    getByText('O campo Email deve ser um email válido')
    getByText('O campo Senha deve conter pelo menos 6 caracteres')
    getByText('O campo Nome só pode conter caracteres alfabéticos e espaços')
    getByText('O campo Endereço do bar é obrigatório')
    getByText('O campo Nome do bar é obrigatório')

    expect(html).toMatchSnapshot()
  })

  test('provide correct inputs should not show error messages', async () => {
    const { getByTestId, getByText, html } = render(Register, {
      vuetify,
      sync: false,
    })

    const emailInput = getByTestId('email')
    await fireEvent.update(emailInput, 'jose@jose.com')

    const passwordInput = getByTestId('password')
    await fireEvent.update(passwordInput, '123456')

    const nameInput = getByTestId('name')
    await fireEvent.update(nameInput, 'jose ronaldinho')

    const barAddressInput = getByTestId('barAddress')
    await fireEvent.update(barAddressInput, 'rua das couves, 123')

    const barNameInput = getByTestId('barName')
    await fireEvent.update(barNameInput, 'bar 234')

    expect(() =>
      getByText('O campo Email deve ser um email válido')
    ).toThrowError()

    expect(() =>
      getByText('O campo Senha deve conter pelo menos 6 caracteres')
    ).toThrowError()

    expect(() =>
      getByText('O campo Nome só pode conter caracteres alfabéticos e espaços')
    ).toThrowError()

    expect(() =>
      getByText('O campo Endereço do bar é obrigatório')
    ).toThrowError()

    expect(() => getByText('O campo Nome do bar é obrigatório')).toThrowError()

    expect(html).toMatchSnapshot()
  })

  test('click action-text should change route to register', async () => {
    const { getByTestId, html } = render(
      App,
      {
        vuetify,
        routes,
      },
      (vue, store, router) => router.push('/auth/register')
    )

    const actionText = getByTestId('action-text')
    await fireEvent.click(actionText)
    getByTestId('login-page')

    expect(html).toMatchSnapshot()
  })
})
