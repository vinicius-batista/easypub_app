<template>
  <v-container>
    <ApolloQuery :query="$options.BAR_TABLES_QUERY">
      <template v-slot="{ result: { data } }">
        <Tables v-if="data">
          <template v-slot:add-table>
            <AddTable :barId="data.profile.bar.id" />
          </template>
          <template v-slot:tables-list>
            <TablesList
              :tables="data.profile.bar.tables"
              @dialog:open="openDialog"
            />
          </template>
        </Tables>
      </template>
    </ApolloQuery>
    <v-dialog v-model="isDialogOpen" width="500" height="500">
      <component :is="modalComponent" v-bind="modalBinds"></component>
    </v-dialog>
  </v-container>
</template>

<script>
import Tables from '../components/Tables'
import AddTable from '../components/AddTable'
import TablesList from '../components/TablesList'
import TableQRCode from '../components/TableQRCode'
import { BAR_TABLES_QUERY } from '@easypub/core/domains/bar/graphql'

export default {
  name: 'BarProfile',
  components: { Tables, AddTable, TablesList, TableQRCode },
  BAR_TABLES_QUERY,
  data: () => ({
    isDialogOpen: false,
    modalComponent: null,
    modalBinds: null,
  }),
  methods: {
    openDialog({ component, binds }) {
      this.modalComponent = component
      this.modalBinds = binds
      this.isDialogOpen = true
    },
  },
}
</script>
