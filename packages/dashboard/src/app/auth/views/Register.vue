<template>
  <AuthForm
    buttonText="Cadastre-se"
    helperText="Já possui uma conta?"
    actionText="Entre agora!"
    data-testId="register-page"
    @action-text:clicked="changeRoute('auth.login')"
  >
    <ValidationProvider
      v-for="{ label, icon, type, rules, model } in form"
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
    <ValidationProvider rules="required|size:2000000" name="Foto do bar">
      <template v-slot="{ errors }">
        <v-file-input
          class="my-2"
          label="Foto do bar"
          accept="image/png, image/jpeg, image/bmp"
          v-model="input['barAvatar']"
          prepend-icon="fa-image"
          :error-messages="errors"
          filled
          data-testId="barAvatar"
        />
      </template>
    </ValidationProvider>
  </AuthForm>
</template>

<script>
import AuthForm from '../components/AuthForm'
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'Register',
  components: { AuthForm, ValidationProvider },
  data: () => ({
    input: {
      email: '',
      password: '',
      phone: '',
      name: '',
      barName: '',
      barAddress: '',
      barAvatar: null,
    },
    form: [
      {
        label: 'Nome',
        model: 'name',
        icon: 'fa-user',
        rules: 'required|alpha_spaces',
      },
      {
        label: 'Email',
        model: 'email',
        icon: 'fa-envelope',
        rules: 'required|email',
      },
      {
        label: 'Telefone',
        model: 'phone',
        icon: 'fa-phone',
        rules: 'required',
        mask: '(##) ##### - ####',
        type: 'tel',
      },
      {
        label: 'Senha',
        model: 'password',
        icon: 'fas fa-lock',
        type: 'password',
        rules: 'required|min:6',
      },
      {
        label: 'Nome do bar',
        model: 'barName',
        icon: 'fa-beer',
        rules: 'required',
      },
      {
        label: 'Endereço do bar',
        model: 'barAddress',
        icon: 'fas fa-map-marker-alt',
        rules: 'required',
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
