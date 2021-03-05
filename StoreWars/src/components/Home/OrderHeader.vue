<template>
  <q-item>
    <q-item-section>
      <div class="text-h6">{{ customerName }}</div>
      <div class="text-subtitle2">
        {{ Npedidos }} produtos | Total: {{ valorTotalPedido }}.
      </div>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar>
        <q-btn icon="create" />
      </q-avatar>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: [
    'orderId',
    'customerName',
    'valorTotalPedido',
    'Npedidos'
  ]
}
</script>
