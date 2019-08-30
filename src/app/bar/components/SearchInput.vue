<template functional>
  <v-row justify="center" style="background-color: #fff" class="pt-4 mb-4">
    <v-col cols="12">
      <v-text-field
        placeholder="Pesquise bares..."
        filled
        single-line
        prepend-inner-icon="fa-search"
        :value="props.value"
        @input="listeners.input"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: String
  }
}
</script>
