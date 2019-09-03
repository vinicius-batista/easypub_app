<template>
  <AuthForm
    buttonText="Login"
    helperText="Não possui uma conta?"
    actionText="Cadastre-se agora!"
    @action-text:clicked="changeRoute('auth.register')"
    data-testId="login-page"
  >
    <ValidationProvider
      v-for="{ label, model, icon, type, rules } in form"
      :key="label"
      v-bind="{ rules }"
      :name="label"
    >
      <template v-slot="{ errors }">
        <v-text-field
          class="my-2"
          :type="type"
          :label="label"
          v-model="input[model]"
          :prepend-icon="icon"
          :error-messages="errors"
          filled
          :data-testId="model"
        />
      </template>
    </ValidationProvider>
  </AuthForm>
</template>

<script>
import AuthForm from '../components/AuthForm'
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'Login',
  components: { AuthForm, ValidationProvider },
  data: () => ({
    input: {
      email: '',
      password: '',
    },
    form: [
      {
        label: 'Email',
        model: 'email',
        icon: 'fa-envelope',
        rules: 'required|email',
      },
      {
        label: 'Senha',
        model: 'password',
        icon: 'fas fa-lock',
        type: 'password',
        rules: 'required|min:6',
      },
    ],
  }),
  methods: {
    changeRoute(name) {
      this.$router.push({ name })
    },
  },
}
</script>
