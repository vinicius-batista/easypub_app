<template>
  <v-list>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item
        v-for="category in categories"
        :key="category.id"
        @click="$emit('category:clicked', category.id)"
      >
        <v-list-item-content>
          <v-list-item-title> {{ category.name }} </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>fa-ellipsis-v</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                @click.stop="
                  openDialog({
                    component: 'EditCategory',
                    binds: category,
                  })
                "
              >
                <v-list-item-action>
                  <v-icon>fa-edit</v-icon>
                </v-list-item-action>
                <v-list-item-title>Editar Categoria</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click.stop="
                  openDialog({
                    component: 'DeleteCategory',
                    binds: { categoryId: category.id },
                  })
                "
              >
                <v-list-item-action>
                  <v-icon>fa-trash</v-icon>
                </v-list-item-action>
                <v-list-item-title>Excluir Categoria</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'CategoriesList',
  props: {
    categories: Array,
  },
  data: () => ({
    item: null,
  }),
  methods: {
    openDialog(options) {
      this.$emit('dialog:open', options)
    },
  },
}
</script>
