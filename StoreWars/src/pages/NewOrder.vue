<template>
  <q-page class="WAL__layout " >
    <div class="row q-ma-md">
      <div class="full-width">
        <Breadcrumbs :pages="pages"  />
      </div>
      <div  class="full-width">
        <OrderForm :id="id" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Breadcrumbs from '../components/Home/BreadCrumbs.vue'
import OrderForm from '../components/NewOrder/OrderForm.vue'

export default {
  name: 'PageIndex',
  data: function () {
    return {
      id: 4,
      pages: [
        { name: 'Pedidos', icon: 'store', href: '/' },
        { name: 'Novo Pedido', icon: 'add', href: '/new-order' }
      ]
    }
  },
  components: {
    Breadcrumbs,
    OrderForm

  }
}
</script>
<style  lang="sass">
.WAL
  &__layout
    margin: 0 auto
    height: 100%
    width: 90%
    max-width: 1050px
    border-radius: 5px
@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0
@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none
</style>
