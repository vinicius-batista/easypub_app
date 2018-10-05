<template functional>
  <v-layout row justify-center style="background-color: #fff" class="pt-4 mb-4">
    <v-flex xs10>
      <v-text-field
        placeholder="Pesquise bares..."
        box
        single-line
        prepend-inner-icon="fa-search"
        :value="props.value"
        @input="listeners.input"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: String
  }
}
</script>
