<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <SearchInput v-model="search" />
    <BarsList v-bind="{ bars }" />
  </v-container>
</template>

<script>
import SearchInput from '../components/SearchInput'
import BarsList from '../components/BarsList'

export default {
  name: 'Bars',
  components: { SearchInput, BarsList },
  data: () => ({
    search: '',
    bars: [
      {
        id: '1',
        avatar: 'https://scontent.frao1-2.fna.fbcdn.net/v/t1.0-9/378667_315118931848892_2031839662_n.jpg?_nc_cat=106&oh=2ad3b39c8aaae8c93e90f3c5459dfd2b&oe=5C492016',
        title: 'Cu do padre',
        status: 'aberto'
      },
      {
        id: '2',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        status: 'fechado'
      },
      {
        id: '3',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        status: 'aberto'
      },
      {
        id: '4',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        status: 'aberto'
      },
      {
        id: '5',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe t7o try',
        status: 'aberto'
      },
      {
        id: '6',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to tr7y',
        status: 'aberto'
      },
      {
        id: '7',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try7',
        status: 'aberto'
      }
    ]
  })
}
</script>
