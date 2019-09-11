<template>
  <ApolloMutation
    :mutation="$options.CREATE_TABLE_MUTATION"
    :variables="{ input }"
    :update="updateStore"
  >
    <template v-slot="{ mutate, loading, gqlError }">
      <v-text-field
        class="my-2"
        type="number"
        label="Número da Mesa"
        placeholder="Adicione uma nova mesa"
        :value="input['number']"
        @change="updateInput"
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
  CREATE_TABLE_MUTATION,
  BAR_TABLES_QUERY,
} from '@easypub/core/domains/bar/graphql'

export default {
  name: 'AddTable',
  CREATE_TABLE_MUTATION,
  props: {
    barId: String,
  },
  data() {
    return {
      input: {
        barId: this.barId,
        number: 0,
      },
    }
  },
  methods: {
    updateInput(value) {
      this.input.number = parseInt(value)
    },
    updateStore(
      store,
      {
        data: { createTable },
      }
    ) {
      const data = store.readQuery({ query: BAR_TABLES_QUERY })

      const { tables } = data.profile.bar
      data.profile.bar.tables = [...tables, createTable]
      store.writeQuery({ query: BAR_TABLES_QUERY, data })
    },
  },
}
</script>
