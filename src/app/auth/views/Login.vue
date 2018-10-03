<template>
  <div>
    <LogoCard title="Login" />
    <FormCard
      helperText="Não possui uma conta?"
      actionText="Cadastre-se agora!"
      @actionClick="changeRoute('auth.register')"
    >
      <v-form v-model="valid">
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
        <v-btn
          type="submit"
          round
          color="primary"
          block
          large
          :disabled="!valid"
          @click="$router.push({ name: 'home' })"
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
    changeRoute (name) {
      this.$router.push({ name })
    }
  }
}
</script>
