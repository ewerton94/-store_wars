<template>
  <div>
    <div v-if="!carregando">
      <Order
        v-for="(order, index) in orders"
        :key="index"
        :order="order"
      />
    </div>
    <ListaVazia v-if="!carregando && !orders.length" message="Sem Pedidos Cadastrados" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ListaVazia from 'components/ListaVazia.vue'
import Order from './Order.vue'
import { Loading } from 'quasar'

export default {
  data: function () {
    return {
      carregando: true
    }
  },
  computed: {
    ...mapState('Orders', ['orders'])
  },
  methods: {
    ...mapActions('Orders', ['listOrders']),
    async getorders () {
      Loading.show()
      await this.listOrders()
      Loading.hide()
      this.carregando = false
      console.log(this.orders)
    }
  },
  created () {
    this.getorders()
  },
  components: {
    Order,
    ListaVazia
  }
}
</script>

<style>
.transparent {
}
</style>
