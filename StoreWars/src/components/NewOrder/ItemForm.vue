<template>
  <div v-if="value">
    <q-separator class="q-my-md" color="grey-5" inset />

    <Select
      :options="products"
      v-model="value.product"
      label="Produto"
      campo_label="name"
      icon="person"
      v-if="products.length"
      extraClass="col-md-12"
    />
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-input dark  label="Quantidade" v-model="value.quantity" />
      </div>
      <div class="col-12 col-md-4">
        <q-input dark class="col-12 col-md-4" label="Valor unitário" v-model="value.price" />
      </div>
      <div class="col-12 col-md-4">
        <q-input dark class="col-12 col-md-4" label="Rentabilidade" v-model="value.quantity" />
      </div>

    </div>
  </div>
</template>

<script>
import Select from './Select.vue'

export default {
  components: {
    Select
  },
  props: ['products', 'value']
}
</script>

<style>
</style>
