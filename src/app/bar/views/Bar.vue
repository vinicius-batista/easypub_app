<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-layout row align-center>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{bar.title}}</div>
                  <div>{{ bar.address }}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-img
                :src="bar.avatar"
                height="80px"
                contain
              ></v-img>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <BarStatusChip :status="bar.status"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-tabs
          v-model="category"
          centered
          color="white"
          slider-color="primary"
        >
          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`"
          >
            <span class="primary--text">Item {{ i }}</span>
          </v-tab>
        </v-tabs>
      </v-flex>
      <v-flex xs12>
        <v-tabs-items v-model="category">
          <v-tab-item
            v-for="i in 3"
            :id="`tab-${i}`"
            :key="i"
          >
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BarStatusChip from '../components/BarStatusChip'

export default {
  name: 'Bar',
  components: { BarStatusChip },
  props: {
    id: String
  },
  data: () => ({
    category: '',
    bar: {
      id: '1',
      avatar: 'https://scontent.frao1-2.fna.fbcdn.net/v/t1.0-9/378667_315118931848892_2031839662_n.jpg?_nc_cat=106&oh=2ad3b39c8aaae8c93e90f3c5459dfd2b&oe=5C492016',
      title: 'Cu do padre',
      status: 'aberto',
      address: 'Rua jose da silva, 123 - Bairro Qualquer'
    }
  })
}
</script>
