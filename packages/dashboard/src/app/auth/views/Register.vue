<template>
  <ApolloMutation
    :mutation="$options.REGISTER_BAR_OWNER_MUTATION"
    :variables="{ input }"
    @done="submitSuccess"
  >
    <template v-slot="{ mutate, loading, gqlError }">
      <AuthForm
        buttonText="Cadastre-se"
        helperText="Já possui uma conta?"
        actionText="Entre agora!"
        :isButtonLoading="loading"
        @submit="mutate()"
        :error="gqlError"
        @action-text:clicked="changeRoute('auth.login')"
        data-testId="register-page"
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
      </AuthForm>
    </template>
  </ApolloMutation>
</template>

<script>
import AuthForm from '../components/AuthForm'
import { ValidationProvider } from 'vee-validate'
import { REGISTER_BAR_OWNER_MUTATION } from '@easypub/core/domains/auth/graphql'
import { mapActions } from 'vuex'
import { getData } from '@easypub/core/helpers/graphql'

export default {
  name: 'Register',
  REGISTER_BAR_OWNER_MUTATION,
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
      {
        label: 'Foto do  bar',
        model: 'barAvatar',
        icon: 'fa-image',
        rules: 'required',
      },
    ],
  }),
  methods: {
    changeRoute(name) {
      this.$router.push({ name })
    },
    ...mapActions('auth', ['setTokens']),
    submitSuccess(result) {
      return Promise.resolve(result)
        .then(getData('registerBarOwner'))
        .then(this.setTokens)
        .then(() => this.changeRoute('home'))
    },
  },
}
</script>
