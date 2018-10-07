<template functional>
  <div>
    <v-card-title primary-title>
      <div class="headline"> <span>{{props.name}}</span>
      </div>
      <v-spacer></v-spacer>
      <v-subheader class="headline">R$ {{props.price}}</v-subheader>
    </v-card-title>

    <v-img
      v-if="props.photo"
      :alt="description"
      height="auto"
      :src="props.photo"
      class="mx-4"
    />

    <v-card-text>
      <v-subheader>{{props.description}}</v-subheader>
    </v-card-text>

    <v-card-text class="text-xs-center">
      <span class="body-2 mr-3" v-if="props.waitingTime">
        <v-icon>fa-clock</v-icon>
        {{props.waitingTime}}
      </span>
      <span class="body-2 ml-2" v-if="props.peopleCount">
        <v-icon>fa-users</v-icon>
        {{props.peopleCount}} Pessoas
      </span>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'MenuItemDescription',
  props: {
    name: String,
    price: String,
    photo: String,
    description: String,
    waitingTime: String,
    peopleCount: Number
  }
}
</script>
