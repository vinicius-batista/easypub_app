<template>
  <div>
    <LogoCard title="Login" />
    <FormCard
      helperText="Não possui uma conta?"
      actionText="Cadastre-se agora!"
      @actionClick="changeRoute('auth.register')"
    >
      <FormErrorMessage ref="formErrorMessage" />
      <ApolloMutation
        :mutation="loginUserMutation"
        @done="submitSuccess"
        @error="handleError"
      >
        <template slot-scope="{ mutate, loading }">
          <v-form v-model="valid" @submit.prevent="mutate({ variables: { input } })">
            <v-text-field
              class="my-2"
              v-for="{ label, model, icon, type, rules } in form"
              v-validate="rules"
              :data-vv-name="model"
              :data-vv-as="label.toLowerCase()"
              :type="type"
              :key="model"
              :label="label"
              v-model="input[model]"
              :prepend-icon="icon"
              :error-messages="errors.collect(model)"
              box
            />
            <h6
              class="tertiary--text body-2 font-weight-medium mb-3"
              @click="changeRoute('auth.register')"
              style="cursor: pointer;"
            >
              Esqueceu sua senha?
            </h6>
            <SendButton
              text="Acessar"
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
import { getData } from '@/helpers/graphql'
import { mapActions } from 'vuex'
import { loginUserMutation } from '@/domains/auth/graphql'
import { LoginUserMutation } from '@/domains/auth/graphql/types'
import { ErrorHandler } from '@/components/types'
import { ApolloQueryResult } from 'apollo-client'

export default Vue.extend({
  name: 'Login',
  components: {
    LogoCard,
    FormCard,
    FormErrorMessage,
    SendButton
  },
  data: () => ({
    loginUserMutation,
    valid: false,
    input: {
      email: '',
      password: ''
    },
    form: [
      {
        label: 'Email',
        model: 'email',
        icon: 'fa-envelope',
        rules: 'required|email'
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
    submitSuccess (result: ApolloQueryResult<LoginUserMutation>) {
      return Promise
        .resolve(result)
        .then(getData('loginUser'))
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
