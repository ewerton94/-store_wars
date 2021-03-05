<template>
    <q-card class="my-card bg-grey-10" style="border: 1px lightgrey">
      <q-card-section class="bg-grey-9 text-white">
        <OrderHeader
          :orderId="order.id"
          :customerName="order.customer.name"
          :valorTotalPedido="valueTotalByOrder(order.id)"
          :Npedidos="order.items.length"
        />
      </q-card-section>
      <q-list>
        <Customer
          :id="order.customer.id"
          :name="order.customer.name"
          :photo="order.customer.photo"
        />

      <q-item v-for="(item, index) in order.items" :key="index">
        <Item :item="item"/>

      </q-item>
      </q-list>
    </q-card>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderHeader from './OrderHeader.vue'
import Customer from './Customer.vue'
import Item from './Item.vue'
export default {
  computed: {
    ...mapGetters('Orders', ['valueTotalByOrder'])
  },
  components: {
    OrderHeader,
    Customer,
    Item
  },
  props: [
    'order'
  ]
}
</script>
