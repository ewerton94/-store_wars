<template>
  <q-badge
    :color="profitabilities[profitability].color"
    class="items-center justify-center text-black"
  >
    {{ profitabilities[profitability].name }}
  </q-badge>
</template>

<script>
export default {
  data: function () {
    return {
      profitabilities: {
        excellent: {
          name: 'Rentabilidade Excelente',
          color: 'cyan-4'
        },
        good: {
          name: 'Rentabilidade Boa',
          color: 'yellow'
        },
        bad: {
          name: 'Rentabilidade Ruim',
          color: 'red-5'
        }
      }
    }
  },
  props: ['profitability']
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
