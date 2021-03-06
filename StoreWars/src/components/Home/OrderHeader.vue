<template>
  <q-item>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="yellow"  text-color="black" />
          <span class="q-ml-sm">Tem certeza que deseja remover este pedido?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Excluir" color="white" @click="deleteOrders(orderId)" class="bg-red" v-close-popup >

          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-item-section>
      <div class="text-h6">{{ customerName }}</div>
      <div class="text-subtitle2">
        {{ Npedidos }} produtos | Total: {{ valorTotalPedido | formatMoney }}.
      </div>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar>
        <q-btn icon="create" :to="'/new-order/?id='+orderId" >
        <q-tooltip content-class="bg-primary">Editar Pedido</q-tooltip>
        </q-btn>
      </q-avatar>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar>
        <q-btn icon="delete" text-color="red" @click="confirm=true">
        <q-tooltip content-class="bg-primary">Remover Pedido</q-tooltip>
        </q-btn>
      </q-avatar>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      confirm: false
    }
  },
  methods: {
    ...mapActions('Orders', ['deleteOrders'])

  },
  props: [
    'orderId',
    'customerName',
    'valorTotalPedido',
    'Npedidos'
  ]
}
</script>
