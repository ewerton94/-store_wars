<template>
  <div :key="key">
      <p>{{ order.items.length }} Itens</p>
    <q-form @submit="sendOrder">

    <Select
      :options="customers"
      v-model="order.customer"
      label="Cliente"
      campo_label="name"
      icon="person"

      reactive-rules

      :lazy_rules="true"
      required
      :rules="[val => val > 0 || 'Insira um cliente']"

      v-if="customers.length"
    />

    <div v-if="order.items">
      <div v-for="(item, index) in order.items" :key="index">
        <ItemForm v-model="order.items[index]" @input="$emit('input', $event)" :products="products" />
      </div>
      <div class="row justify-end">
        <q-btn
          align="right"
          class="bg-grey-9 q-px-sm text-white"
          icon="add"
          label="Adicionar item"
          @click="newItem"
        ></q-btn>
      </div>
    </div>

    <div class="row justify-end">
        <q-btn
          align="right"
          class="q-mt-md bg-cyan-12 q-px-sm text-black"
          icon="check"
          label="Enviar"
          type="submit"
        ></q-btn>
      </div>
      </q-form>
  </div>
</template>

<script>
import Select from './Select.vue'
import ItemForm from './ItemForm.vue'
import { mapActions, mapState } from 'vuex'
import { Notify, Loading } from 'quasar'

export default {
  data: function () {
    return {
      order: {
        items: []
      },
      key: 0
    }
  },
  computed: {
    ...mapState('Products', ['products']),
    ...mapState('Customers', ['customers']),
    ...mapState('Orders', ['orderUpdate'])
  },
  methods: {
    ...mapActions('Products', ['listProducts']),
    ...mapActions('Customers', ['listCustomers']),
    ...mapActions('Orders', ['createOrders', 'obterOrder', 'updateOrders']),
    async showOrder (id) {
      this.carregando = true
      Loading.show()
      await this.obterOrder(id)
      this.order = JSON.parse(JSON.stringify(this.orderUpdate))
      this.order.items.forEach((v) => {
        v.product = v.product.id
      })
      this.order.customer = this.order.customer.id
      Loading.hide()
    },
    async getData () {
      await this.listProducts()
      await this.listCustomers()
      if (this.$route.query) {
        if (this.$route.query.id) {
          this.showOrder(this.$route.query.id)
        }
      }
    },
    newItem () {
      this.order.items.push({
        product: null
      })
    },
    check () {
      if (this.order.items.length === 0) {
        Notify.create({ type: 'negative', message: 'Adicione pelo menos um item' })
        return false
      }
      if (this.order.items.filter((i) => i.profitability === 'bad').length > 0) {
        Notify.create({ type: 'negative', message: 'Verifique os valores de preço.' })
        return false
      }
      if (this.order.items.filter((value) => value.quantity % this.products.find((p) => p.id === value.product).multiple !== 0).length > 0) {
        Notify.create({ type: 'negative', message: 'Verifique os valores de quantidade.' })
        return false
      }
      return true
    },
    async sendOrder () {
      if (this.check()) {
        Loading.show()
        if (this.order.id) {
          await this.updateOrders(this.order)
        } else {
          await this.createOrder(this.order)
        }
        this.$router.push('/')
        Loading.hide()
      }
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    Select,
    ItemForm
  },
  props: ['id']
}
</script>

<style>
</style>
