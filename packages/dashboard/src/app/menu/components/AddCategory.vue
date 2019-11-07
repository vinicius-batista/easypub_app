<template>
  <ApolloMutation
    :mutation="$options.CREATE_MENU_CATEGORY_MUTATION"
    :variables="{ input }"
    :update="updateStore"
    @done="input.name = ''"
  >
    <template v-slot="{ mutate, loading, gqlError }">
      <v-text-field
        class="my-2"
        label="Nome da Mesa"
        placeholder="Adicione uma nova categoria"
        v-model="input['name']"
        :loading="loading"
        filled
        :error-messages="gqlError && [gqlError.message]"
      >
        <template v-slot:append-outer>
          <v-btn
            color="primary"
            x-large
            class="send-button"
            @click="mutate()"
            :loading="loading"
          >
            ADICIONAR
          </v-btn>
        </template>
      </v-text-field>
    </template>
  </ApolloMutation>
</template>

<script>
import {
  CREATE_MENU_CATEGORY_MUTATION,
  BAR_MENU_CATEGORIES_QUERY,
} from '@easypub/core/domains/bar/graphql'

export default {
  name: 'AddTable',
  CREATE_MENU_CATEGORY_MUTATION,
  props: {
    barId: String,
  },
  data() {
    return {
      input: {
        barId: this.barId,
        name: '',
      },
    }
  },
  methods: {
    updateStore(
      store,
      {
        data: { createMenuCategory },
      }
    ) {
      const data = store.readQuery({ query: BAR_MENU_CATEGORIES_QUERY })
      const { menuCategories } = data.profile.bar
      data.profile.bar.menuCategories = [...menuCategories, createMenuCategory]
      store.writeQuery({ query: BAR_MENU_CATEGORIES_QUERY, data })
    },
  },
}
</script>

<style lang="scss" scoped>
.send-button {
  margin: 0 0;
  left: -8px;
  top: -12px;
}
</style>
