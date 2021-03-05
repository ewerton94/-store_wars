<template>
  <div>
    <Order
    v-for="(order, index) in orders"
    :key="index"
    :order="order"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Order from './Order.vue'

export default {
  computed: {
    ...mapState('Orders', ['orders'])
  },
  methods: {
    ...mapActions('Orders', ['listOrders']),
    async getorders () {
      await this.listOrders()
      console.log(this.orders)
    }
  },
  created () {
    this.getorders()
  },
  components: {
    Order
  }
}
</script>

<style>
.transparent {
}
</style>
