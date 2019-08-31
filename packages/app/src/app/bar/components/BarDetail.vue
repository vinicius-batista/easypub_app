<template>
  <v-row>
    <v-col cols="12">
      <v-card flat>
        <v-row align="center">
          <v-col class="justify-center" cols="12">
            <v-img :src="avatar" aspect-ratio="2" height="300px" />
          </v-col>
          <!-- <v-flex xs7>
            <v-card-title primary-title>
              <h5 class="headline tertiary--text font-weight-medium">{{ name }}</h5>

            </v-card-title>
          </v-flex> -->
        </v-row>
        <v-card-actions class="py-3">
          <BarStatusChip :status="status" />
          <h6 class="tertiary--text subtitle-1 py-2 ml-2">{{ address }}</h6>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BarStatusChip from './BarStatusChip'

export default {
  name: 'BarDetail',
  components: { BarStatusChip },
  props: {
    name: String,
    address: String,
    status: String,
    avatar: String,
  },
}
</script>
