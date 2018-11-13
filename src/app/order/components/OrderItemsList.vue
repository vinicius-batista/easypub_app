<template>
  <v-list dense>
    <v-list-tile v-for="item in items" :key="item.id">
      <v-list-tile-content>
        <v-list-tile-title>{{ item.menuItem.name }}</v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action-text>
        <span class="body-2">{{ item.quantity }}X </span>
        <span class="body-2">{{ item.menuItem.price | formatMoney }}</span>
      </v-list-tile-action-text>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'OrderItemList',
  props: {
    items: Array
  }
}
</script>
