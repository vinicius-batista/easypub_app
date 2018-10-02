<template>
  <div>
    <v-layout class="primary py-5" justify-center wrap>
      <v-flex xs6 class="white logo-card">
        <v-img :src="require('@/assets/images/logo.png')"></v-img>
      </v-flex>
      <v-flex xs8 class="mt-4">
        <h2 class="white--text text-xs-center">Registre-se</h2>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs10>
        <v-card flat class="form-card">
          <v-form>
            <v-text-field
              label="Nome"
              v-model="input.name"
              prepend-icon="fa-user"
              box
            />
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
            <v-btn
              type="submit"
              round
              color="primary"
              block
              large
            >
              Enviar
            </v-btn>
          </v-form>
          <h6
            class="tertiary--text text-xs-center body-2 mt-4"
            @click="changeRoute('auth.login')"
          >
            Ja possui uma conta? Entre agora!
          </h6>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Register',
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

<style>
.logo-card {
  border-radius: 1em;
}

.form-card {
  margin-top: -2em;
  padding: 2em 1em;
}
</style>
