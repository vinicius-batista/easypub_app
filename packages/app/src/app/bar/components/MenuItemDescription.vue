<template functional>
  <div>
    <v-card-title primary-title>
      <h4 class="headline tertiary--text font-weight-bold">
        {{ props.name }}
      </h4>
    </v-card-title>

    <v-img
      v-if="props.photo"
      :alt="description"
      max-height="300px"
      contain
      height="auto"
      :src="props.photo"
    />

    <v-card-text class="body-2 pa-4 font-weight-regular">
      {{ props.description }}
    </v-card-text>

    <v-row
      justify="center"
      class="py-4"
      v-if="props.waitingTime || props.peopleCount"
    >
      <v-col cols="4" class="body-2" v-if="props.waitingTime">
        <v-icon color="grey">fa-clock</v-icon>
        <span class="tertiary--text px-2 font-weight-bold">{{
          props.waitingTime
        }}</span>
      </v-col>
      <v-col cols="4" class="body-2" v-if="props.peopleCount">
        <v-icon color="grey">fa-users</v-icon>
        <span class="tertiary--text px-2 font-weight-bold"
          >{{ props.peopleCount }} Pessoas</span
        >
      </v-col>
    </v-row>
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
    peopleCount: Number,
  },
}
</script>
