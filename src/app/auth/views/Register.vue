<template>
  <div>
    <LogoCard title="Cadastro" />
    <FormCard
      helperText="Já possui uma conta?"
      actionText="Entre agora!"
      @actionClick="changeRoute('auth.login')"
    >
      <FormErrorMessage ref="formErrorMessage" />
      <ApolloMutation
          :mutation="$options.registerUserMutation"
          @done="submitSuccess"
          @error="handleError"
        >
          <template slot-scope="{ mutate }">
            <v-form v-model="valid" @submit.prevent="mutate({ variables: { input } })">
              <v-text-field
                class="my-2"
                v-for="{ label, model, icon, type, rules, mask } in form"
                v-validate="rules"
                :data-vv-name="model"
                :data-vv-as="label.toLowerCase()"
                :key="model"
                :label="label"
                v-model="input[model]"
                :prepend-icon="icon"
                :error-messages="errors.collect(model)"
                v-bind="{ type, mask }"
                box
              />
              <v-btn
                type="submit"
                round
                color="primary"
                block
                large
                :disabled="!valid"
              >
                Enviar
              </v-btn>
            </v-form>
          </template>
      </ApolloMutation>
    </FormCard>
  </div>
</template>

<script>
import LogoCard from '../components/LogoCard'
import FormCard from '../components/FormCard'
import FormErrorMessage from '@/components/FormErrorMessage'
import { registerUserMutation } from '@/domains/auth/graphql'
import { getData } from '@/helpers/graphql'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  components: {
    LogoCard,
    FormCard,
    FormErrorMessage
  },
  registerUserMutation,
  data: () => ({
    valid: false,
    input: {
      name: '',
      email: '',
      password: '',
      phone: ''
    },
    form: [
      {
        label: 'Nome',
        model: 'name',
        icon: 'fa-user',
        rules: 'required|alpha'
      },
      {
        label: 'Email',
        model: 'email',
        icon: 'fa-envelope',
        rules: 'required|email'
      },
      {
        label: 'Telefone',
        model: 'phone',
        icon: 'fa-phone',
        rules: 'required',
        mask: '(##) ##### - ####'
      },
      {
        label: 'Senha',
        model: 'password',
        icon: 'fa-lock',
        type: 'password',
        rules: 'required|min:6'
      }
    ]
  }),
  methods: {
    ...mapActions('auth', ['setTokens']),
    changeRoute (name) {
      this.$router.push({ name })
    },
    submitSuccess (result) {
      return Promise
        .resolve(result)
        .then(getData('registerUser'))
        .then(this.setTokens)
        .then(() => this.changeRoute('home'))
    },
    handleError (error) {
      this.$refs.formErrorMessage.handleError(error)
    }
  }
}
</script>
