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
        :mutation="registerUserMutation"
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

<script lang="ts">
import Vue from 'vue'
import LogoCard from '../components/LogoCard.vue'
import FormCard from '../components/FormCard.vue'
import FormErrorMessage from '@/components/FormErrorMessage.vue'
import SendButton from '@/components/SendButton.vue'
import { registerUserMutation } from '@/domains/auth/graphql'
import { getData } from '@/helpers/graphql'
import { mapActions } from 'vuex'
import { QueryResult } from 'vue-apollo/types/vue-apollo'
import { RegisterUserMutation } from '@/domains/auth/graphql/types'
import { ErrorHandler } from '@/components/types'

export default Vue.extend({
  name: 'Register',
  components: {
    LogoCard,
    FormCard,
    FormErrorMessage,
    SendButton
  },
  data: () => ({
    registerUserMutation,
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
    setTokens: mapActions('auth', ['setTokens']).setTokens,
    changeRoute (name: string) {
      this.$router.push({ name })
    },
    submitSuccess (result: QueryResult<RegisterUserMutation>) {
      return Promise
        .resolve(result)
        .then(getData('registerUser'))
        .then(this.setTokens)
        .then(() => this.changeRoute('home.bars'))
    },
    handleError (error: ErrorHandler) {
      const formErrorMessage = this.$refs.formErrorMessage as any
      formErrorMessage.handleError(error)
    }
  }
})
</script>
