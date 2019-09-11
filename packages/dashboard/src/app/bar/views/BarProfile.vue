<template>
  <v-container>
    <ApolloQuery :query="$options.BAR_TABLES_QUERY">
      <template v-slot="{ result: { data } }">
        <Tables v-if="data">
          <template v-slot:add-table>
            <AddTable :barId="data.profile.bar.id" />
          </template>
          <template v-slot:tables-list>
            <TablesList :tables="data.profile.bar.tables" />
          </template>
        </Tables>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>
import Tables from '../components/Tables'
import AddTable from '../components/AddTable'
import TablesList from '../components/TablesList'
import { BAR_TABLES_QUERY } from '@easypub/core/domains/bar/graphql'

export default {
  name: 'BarProfile',
  components: { Tables, AddTable, TablesList },
  BAR_TABLES_QUERY,
}
</script>
