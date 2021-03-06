<template>
  <div v-if="value">
    <q-separator class="q-my-md" color="grey-5" inset />

    <Select
      @input="getProfitability"
      :options="products"
      v-model="value.product"
      label="Produto"
      campo_label="name"
      icon="person"
      :lazy_rules="true"
      :rules="[val => val > 0 || 'Insira um produto']"
      v-if="products.length"
      extraClass="col-md-12"
    />
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-input type="number" dark  label="Quantidade" lazy-rules :rules="[v => v && getQuantitySituation(v) || 'Valor não é múltiplo de produto']" v-model="value.quantity" />
      </div>
      <div class="col-12 col-md-4">
        <q-input dark class="col-12 col-md-4" lazy-rules :rules="[v => v && value.profitability!=='bad' || 'Valor não aceito devido à rentabilidade']" label="Valor unitário" v-model="value.price" @input="getProfitability" />
      </div>
      <div class="col-12 col-md-4">
         <Profitability v-if="value.profitability" :profitability="value.profitability"/>

      </div>

    </div>
  </div>
</template>

<script>
import Select from './Select.vue'
import Profitability from '../Home/Profitability.vue'

export default {
  components: {
    Select,
    Profitability
  },
  methods: {
    round (x, c) {
      c = c * 10
      return Math.round(x * c) / c
    },
    getQuantitySituation (v) {
      const productQuantity = this.products.find((p) => p.id === this.value.product).multiple
      return this.value.quantity % productQuantity === 0
    },
    getProfitability () {
      if (this.products.find((p) => p.id === this.value.product).price && this.value.price) {
        var productPrice = Number(this.products.find((p) => p.id === this.value.product).price.replace(',', '.'))
        var itemPrice = Number(this.value.price.replace(',', '.'))
        if (this.round(itemPrice, 2) > this.round(productPrice, 2)) {
          this.value.profitability = 'excellent'
        } else if (this.round(productPrice * 0.9, 2) <= this.round(itemPrice, 2) && (this.round(itemPrice, 2) <= this.round(productPrice, 2))) {
          this.value.profitability = 'good'
        } else {
          this.value.profitability = 'bad'
        }
      }
    }
  },
  props: ['products', 'value']
}
</script>

<style>
.q-field--error {
  color: #ffcccc !important;
}
</style>
