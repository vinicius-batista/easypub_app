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
          <template slot-scope="{ mutate, loading }">
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
              <SendButton
                text="Enviar"
                v-bind="{loading}"
                :disabled="!valid"
              />
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
import SendButton from '@/components/SendButton'
import { registerUserMutation } from '@/domains/auth/graphql'
import { getData } from '@/helpers/graphql'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  components: {
    LogoCard,
    FormCard,
    FormErrorMessage,
    SendButton
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
        rules: 'required|alpha_spaces'
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
        mask: '(##) ##### - ####',
        type: 'tel'
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
        .then(() => this.changeRoute('home.bars'))
    },
    handleError (error) {
      this.$refs.formErrorMessage.handleError(error)
    }
  }
}
</script>
