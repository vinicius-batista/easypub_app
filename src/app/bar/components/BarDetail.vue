<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card flat>
        <v-layout row align-center wrap>
          <v-flex xs12 justify-center>
            <v-img :src="avatar" height="auto" contain aspect-ratio="2.75"/>
          </v-flex>
          <!-- <v-flex xs7>
            <v-card-title primary-title>
              <h5 class="headline tertiary--text font-weight-medium">{{ name }}</h5>

            </v-card-title>
          </v-flex> -->
        </v-layout>
        <v-card-actions class="py-3">
          <BarStatusChip :status="status" />
          <h6 class="tertiary--text subheading py-2 ml-2">{{ address }}</h6>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
    avatar: String
  }
}
</script>
