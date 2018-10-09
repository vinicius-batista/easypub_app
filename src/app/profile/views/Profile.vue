<template>
  <v-container grid-list-xs class="px-0 py-5">
    <ProfileCard :edit.sync="edit">
      <ApolloMutation
        :mutation="$options.updateProfileMutation"
        :update="updateStore"
        @done="submitSuccess()"
        @error="handleError"
      >
        <template slot-scope="{ mutate, loading }">
          <FormErrorMessage ref="formErrorMessage"/>
          <v-form @submit.prevent="mutate({ variables: { input }})" v-model="valid">
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
              :disabled="!edit"
            />
            <v-layout justify-center>
              <v-flex xs6>
                <v-scale-transition>
                  <SendButton v-if="edit" text="Enviar" :disabled="!valid" :loading="loading" />
                </v-scale-transition>
              </v-flex>
            </v-layout>
          </v-form>
        </template>
      </ApolloMutation>
    </ProfileCard>
  </v-container>
</template>

<script>
import SendButton from '@/components/SendButton'
import FormErrorMessage from '@/components/FormErrorMessage'
import ProfileCard from '../components/ProfileCard'
import { profileQuery, updateProfileMutation } from '@/domains/user/graphql'
import { merge } from 'ramda'
import { mapMutations } from 'vuex'

export default {
  name: 'Profile',
  components: { SendButton, FormErrorMessage, ProfileCard },
  updateProfileMutation,
  data: () => ({
    valid: true,
    edit: false,
    input: {
      name: 'Jose da silva',
      email: 'random@random.com',
      phone: '12233355333'
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
        mask: '(##) ##### - ####'
      }
    ]
  }),
  mounted () {
    this.hiddenBackButton()
    this.setTitle('EasyPub')
  },
  methods: {
    ...mapMutations('home', ['hiddenBackButton', 'setTitle']),
    handleError (error) {
      this.$refs.formErrorMessage.handleError(error)
    },
    submitSuccess () {
      this.edit = false
      this.$refs.formErrorMessage.reset()
    },
    updateStore (store, { data: updateProfile }) {
      const { profile } = store.readQuery({ query: profileQuery })
      store.writeQuery({
        query: profileQuery,
        data: { profile: merge(profile, updateProfile) }
      })
    }
  },
  apollo: {
    profile: {
      query: profileQuery,
      manual: true,
      result ({ data: { profile } }) {
        const { name, email, phone } = profile
        this.input = merge(
          this.input,
          { name, email, phone }
        )
      }
    }
  }
}
</script>
