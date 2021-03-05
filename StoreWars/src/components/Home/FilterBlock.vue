<template>
  <div class="row q-ma-md">
    <q-btn-dropdown color="grey-9" class="col-12 col-md-6">
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <q-icon left class="float-left" name="person" avatar />
          <q-separator></q-separator>
          <div class="text-center">
            Cliente<br /><small>Filtro por cliente no pedido</small>
          </div>
        </div>
      </template>
      <div class="col-12 q-ma-md">

      </div>
    </q-btn-dropdown>
    <div class="col-12 col-md-6 text-center items-center">
    <p>6 pedidos</p>
    </div>
  </div>
</template>

<script>
// import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'EssentialLink',
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  props: {}
}
</script>
