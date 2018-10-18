<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card>
        <v-layout row align-center>
          <v-flex xs7>
            <v-card-title primary-title>
              <h5 class="headline tertiary--text font-weight-medium">{{ name }}</h5>
              <h6 class="tertiary--text subheading py-2">{{ address }}</h6>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img :src="avatar" height="80px" contain />
          </v-flex>
        </v-layout>
        <v-card-actions>
          <BarStatusChip :status="status" />
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
