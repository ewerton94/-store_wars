<template>
  <div>
      {{ order }}
      <Select
        :options="customers"
        v-model="order.customer"
        label="Cliente"
        campo_label="name"
        icon="person"
        v-if="customers.length"

      />

      <div v-if="order.items">

      <div v-for="(item, index) in order.items" :key="index">
          {{ order.items[index] }}
          {{ index }}
          <ItemForm v-model="order.items[index]" :products="products"/>
      </div>

      <q-btn icon="add" label="Adicionar item" @click="newItem"></q-btn>

      </div>
  </div>
</template>

<script>
import Select from './Select.vue'
import ItemForm from './ItemForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data: function () {
    return {
      order: {
        items: []
      }
    }
  },
  computed: {
    ...mapState('Products', ['products']),
    ...mapState('Customers', ['customers'])
  },
  methods: {
    ...mapActions('Products', ['listProducts']),
    ...mapActions('Customers', ['listCustomers']),
    async getData () {
      this.listProducts()
      this.listCustomers()
    },
    newItem () {
      this.order.items.push({
        product: null

      })
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    Select,
    ItemForm
  },
  props: [
    'id'
  ]

}
</script>

<style>

</style>
