<template>
  <ApolloMutation
    :mutation="$options.DELETE_TABLE_MUTATION"
    :variables="{ id: tableId }"
    :update="updateStore"
    @done="closeDialog"
  >
    <template v-slot="{ mutate, loading, gqlError }">
      <v-card :loading="loading">
        <v-card-title>Excluir mesa?</v-card-title>
        <v-card-text>
          Você tem certeza disso? Essa ação não poderá ser desfeita.
        </v-card-text>

        <v-card-actions>
          <v-btn text depressed @click.stop="closeDialog">Cancelar</v-btn>
          <v-btn color="red darken-3" dark @click="mutate">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </ApolloMutation>
</template>

<script>
import {
  DELETE_TABLE_MUTATION,
  BAR_TABLES_QUERY,
} from '@easypub/core/domains/bar/graphql'

export default {
  name: 'DeleteTable',
  DELETE_TABLE_MUTATION,
  props: {
    tableId: String,
  },
  methods: {
    closeDialog() {
      this.$emit('dialog:close')
    },
    updateStore(store) {
      const data = store.readQuery({ query: BAR_TABLES_QUERY })

      const { tables } = data.profile.bar
      data.profile.bar.tables = tables.filter(
        table => table.id !== this.tableId
      )
      store.writeQuery({ query: BAR_TABLES_QUERY, data })
    },
  },
}
</script>
