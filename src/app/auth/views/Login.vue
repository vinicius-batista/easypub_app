<template>
  <div>
    <LogoCard title="Login" />
    <FormCard
      helperText="Não possui uma conta?"
      actionText="Cadastre-se agora!"
      @actionClick="changeRoute('auth.register')"
    >
      <v-form>
        <v-text-field
          label="Email"
          v-model="input.email"
          prepend-icon="fa-envelope"
          box
        />
        <v-text-field
          type="password"
          label="Senha"
          v-model="input.password"
          prepend-icon="fa-lock"
          box
        />
        <h6
          class="tertiary--text body-2 font-weight-medium mb-3"
          @click="changeRoute('auth.register')"
          style="cursor: pointer;"
        >
          Esqueceu sua senha?
        </h6>
        <v-btn
          type="submit"
          round
          color="primary"
          block
          large
        >
          Acessar
        </v-btn>
      </v-form>
    </FormCard>
  </div>
</template>

<script>
import LogoCard from '../components/LogoCard'
import FormCard from '../components/FormCard'

export default {
  name: 'Login',
  components: {
    LogoCard,
    FormCard
  },
  data: () => ({
    input: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    changeRoute (name) {
      this.$router.push({ name })
    }
  }
}
</script>
