<template functional>
   <v-card-text class="text-center">
    <h5 class="title">Ocorreu algum erro durante pedido?</h5>
    <v-radio-group
      :value="props.value"
      @input="listeners.input"
      row
      hide-details
      :readonly="props.readonly"
    >
      <v-container style="width: 100vw; padding: 0">
        <v-row justify="center">
          <v-col class="justify-center" cols="3" >
            <v-radio label="Não" :value="false"></v-radio>
          </v-col>
          <v-col class="justify-center" cols="3" >
            <v-radio label="Sim" :value="true"></v-radio>
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
  </v-card-text>
</template>

<script>
export default {
  name: 'FeedbackMistakeRadio',
  props: {
    value: Boolean,
    readonly: Boolean
  }
}
</script>
