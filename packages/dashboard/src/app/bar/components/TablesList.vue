<template>
  <v-list>
    <v-list-item v-for="table in tables" :key="table.id">
      <v-list-item-content>
        <v-list-item-title> Mesa número {{ table.number }} </v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-menu bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>fa-ellipsis-v</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon>fas fa-qrcode</v-icon>
              </v-list-item-action>
              <v-list-item-title>Gerar QR Code</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-icon>fa-trash</v-icon>
              </v-list-item-action>
              <v-list-item-title>Apagar mesa</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'TablesList',
  props: {
    tables: Array,
  },
}
</script>
