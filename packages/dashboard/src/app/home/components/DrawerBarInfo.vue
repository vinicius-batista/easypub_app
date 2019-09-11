<template>
  <div>
    <v-list-item three-line :to="{ name: 'bar.profile' }">
      <v-list-item-avatar>
        <img :src="`https://localhost:4443/download${avatar}`" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <ApolloMutation
        :mutation="$options.UPDATE_BAR_MUTATION"
        :variables="{ input: { id, status: invertBarStatus } }"
      >
        <template v-slot="{ mutate, loading }">
          <v-switch
            :inputValue="status"
            :loading="loading"
            :disabled="loading"
            color="green accent-3"
            false-value="fechado"
            true-value="aberto"
            label="Bar aberto"
            @change="mutate()"
          />
        </template>
      </ApolloMutation>
    </v-list-item>
  </div>
</template>

<script>
import { UPDATE_BAR_MUTATION } from '@easypub/core/domains/bar/graphql'

export default {
  name: 'DrawerBarInfo',
  props: {
    avatar: String,
    name: String,
    status: String,
    id: String,
  },
  UPDATE_BAR_MUTATION,
  computed: {
    invertBarStatus() {
      return this.status === 'fechado' ? 'aberto' : 'fechado'
    },
  },
}
</script>
