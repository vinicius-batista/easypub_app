<template functional>
   <v-card-text class="text-xs-center">
    <h5 class="title">Ocorreu algum erro durante pedido?</h5>
    <v-radio-group
      :value="props.value"
      @input="listeners.input"
      row
      hide-details
    >
      <v-container grid-list-xs style="width: 100vw; padding: 0">
        <v-layout justify-center>
          <v-flex xs3 justify-center>
            <v-radio label="Não" :value="false"></v-radio>
          </v-flex>
          <v-flex xs3 justify-center>
            <v-radio label="Sim" :value="true"></v-radio>
          </v-flex>
        </v-layout>
      </v-container>
    </v-radio-group>
  </v-card-text>
</template>

<script>
export default {
  name: 'FeedbackMistakeRadio',
  props: {
    value: Boolean
  }
}
</script>
