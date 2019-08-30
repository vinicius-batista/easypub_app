<template>
  <v-list dense>
    <v-list-item v-for="item in items" :key="item.id">
      <v-list-item-content>
        <v-list-item-title>{{ item.menuItem.name }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action-text>
        <span class="body-2">{{ item.quantity }}X </span>
        <span class="body-2">{{ item.menuItem.price | formatMoney }}</span>
      </v-list-item-action-text>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'OrderItemList',
  props: {
    items: Array,
  },
}
</script>
