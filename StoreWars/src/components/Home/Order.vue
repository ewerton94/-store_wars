<template>
    <q-card class="my-card bg-grey-10" style="border: 1px lightgrey">
      <q-card-section class="bg-grey-9 text-white">
        <OrderHeader
        :orderId="1"
        :customerName="'customerName'"
        :valorTotalPedido="45"
        :Npedidos="6"
        />
      </q-card-section>
      <q-items>
        <Customer id="1" name="Cliente Avatar" />

      <q-item v-for="(a, index) in [1, 2, 3]" :key="index">
        <Item />

      </q-item>
      </q-items>
    </q-card>
</template>

<script>
import OrderHeader from './OrderHeader.vue'
import Customer from './Customer.vue'
import Item from './Item.vue'
export default {
  components: {
    OrderHeader,
    Customer,
    Item
  }
}
</script>
