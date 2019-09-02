<template>
  <AuthForm
    buttonText="Login"
    helperText="Não possui uma conta?"
    actionText="Cadastre-se agora!"
  >
    <ValidationProvider
      v-for="{ label, name, icon, type, rules } in form"
      :key="name"
      v-bind="{ rules, name }"
    >
      <template v-slot="{ errors }">
        <v-text-field
          class="my-2"
          :type="type"
          :label="label"
          v-model="input[name]"
          :prepend-icon="icon"
          :error-messages="errors"
          filled
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
        name: 'email',
        icon: 'fa-envelope',
        rules: 'required|email',
      },
      {
        label: 'Senha',
        name: 'password',
        icon: 'fas fa-lock',
        type: 'password',
        rules: 'required|min:6',
      },
    ],
  }),
  methods: {},
}
</script>
