<template>
  <q-card class="full-width full-height bg-dark">
    <q-card class="my-card transparent no-border no-shadow q-pa-md">
      <div class="row q-col-gutter-md">
        <q-card class="col-12 col-md-4 transparent no-border no-shadow">
          <q-badge
            floating
            color="red"
            class="items-center justify-center item-quantity"
            >{{item.quantity}}</q-badge
          >

          <q-img :src="item.product.photo" />
        </q-card>

        <q-card class="col-6 col-md-4 transparent no-border no-shadow">
          <div class="col text-h6 ellipsis">{{item.product.name}}</div>
          <div class="col text-h6 ellipsis">{{ item.price | formatMoney }}</div>
        </q-card>
        <q-card class="col-6 col-md-4 transparent no-border no-shadow">
          <div class="row no-wrap justify-end">
            <div class="text-white q-mb-none row no-wrap items-center">
              Valor base:
            </div>
          </div>
          <div class="row no-wrap justify-end">
            <div class="text-grey row no-wrap items-center">{{ item.product.price | formatMoney }}</div>
          </div>
          <div class="row no-wrap items-center justify-end">
            <p class="q-mt-md q-mb-none">Rentabilidade:</p>
          </div>
          <div class="row no-wrap items-center justify-end text-black">
            <Profitability :profitability="item.profitability"/>
          </div>
        </q-card>
      </div>
    </q-card>
  </q-card>
</template>

<script>
import Profitability from './Profitability.vue'

export default {
  components: {
    Profitability
  },
  props: [
    'item'
  ]
}
</script>

<style>
.item-quantity {
  bottom: 0;
  top: auto;
  z-index: 40;
  font-size: 20px;
  height: 25px;
  width: 25px;
}
</style>
