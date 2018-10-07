<template>
  <v-container grid-list-xs class="px-0 py-5">
    <ProfileCard :edit.sync="edit">
      <FormErrorMessage ref="formErrorMessage"/>
      <v-form @submit.prevent="" v-model="valid">
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
      </v-form>
      <v-layout justify-center>
        <v-flex xs6>
          <v-scale-transition>
            <SendButton v-if="edit" text="Enviar" :disabled="!valid" />
          </v-scale-transition>
        </v-flex>
      </v-layout>
    </ProfileCard>
  </v-container>
</template>

<script>
import SendButton from '@/components/SendButton'
import FormErrorMessage from '@/components/FormErrorMessage'
import ProfileCard from '../components/ProfileCard'
import { profileQuery } from '@/domains/user/graphql'
import { merge } from 'ramda'

export default {
  name: 'Profile',
  components: { SendButton, FormErrorMessage, ProfileCard },
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
      }
    ]
  }),
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
