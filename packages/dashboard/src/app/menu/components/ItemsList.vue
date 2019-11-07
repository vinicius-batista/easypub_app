<template>
  <v-list two-line>
    <v-list-item
      v-for="item in items"
      :key="item.id"
      @click="$emit('item:clicked', item.id)"
    >
      <v-list-item-avatar>
        <v-img :src="item.photo"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title> {{ item.name }} </v-list-item-title>
        <v-list-item-subtitle> {{ item.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>R$ {{ item.price }}</v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    items: Array,
  },
}
</script>
