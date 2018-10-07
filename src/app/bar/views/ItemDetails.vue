<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <ItemDescription :item="item"></ItemDescription>
  </v-container>
</template>

<script>
import ItemDescription from '../components/ItemDescription.vue'
export default {
  name: 'ItemDetails',
  components: { ItemDescription },
  props: {
    id: String
  },
  data: () => ({
    item: {
      name: 'Comida da Vovo',
      price: 40,
      photo: 'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd8da96be0724ab84e4147d428f6bba&auto=format&fit=crop&w=1338&q=80',
      waitingTime: '20 min',
      howManyPeopleEats: 2,
      description: 'Comida gostosa'
    }
  })
}
</script>
