<template>
  <div>
    <LogoCard title="Cadastro" />
    <FormCard
      helperText="Já possui uma conta?"
      actionText="Entre agora!"
      @actionClick="changeRoute('auth.login')"
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
    </FormCard>
  </div>
</template>

<script>
import LogoCard from '../components/LogoCard'
import FormCard from '../components/FormCard'

export default {
  name: 'Register',
  components: {
    LogoCard,
    FormCard
  },
  data: () => ({
    valid: false,
    input: {
      name: '',
      email: '',
      password: ''
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
