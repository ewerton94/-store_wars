<template>
  <q-card class="full-width full-height bg-dark">
    <q-card class="my-card transparent no-border no-shadow q-pa-md">
      <div class="row q-col-gutter-md">
        <q-card class="col-12 col-md-4 transparent no-border no-shadow">
          <q-badge
            floating
            color="red"
            class="items-center justify-center"
            style="
              bottom: 0;
              top: auto;
              z-index: 40;
              font-size: 20px;
              height: 25px;
              width: 25px;
            "
            >2</q-badge
          >

          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
        </q-card>

        <q-card class="col-6 col-md-4 transparent no-border no-shadow">
          <div class="col text-h6 ellipsis">Cafe Basilico</div>
          <div class="col text-h6 ellipsis">R$</div>
        </q-card>
        <q-card class="col-6 col-md-4 transparent no-border no-shadow">
          <div class="row no-wrap justify-end">
            <div class="text-white q-pt-md row no-wrap items-center">
              Valor base:
            </div>
          </div>
          <div class="row no-wrap justify-end">
            <div class="text-grey q-pt-md row no-wrap items-center">R$ 50</div>
          </div>
          <div class="row no-wrap items-center justify-end">
            <p>Rentabilidade:</p>
          </div>
          <div class="row no-wrap items-center justify-end">
            <q-badge color="red" class="items-center justify-center"
              >Ótima</q-badge
            >
          </div>
        </q-card>
      </div>
    </q-card>
  </q-card>
</template>

<script>
export default {}
</script>

<style>
.transparent {
}
</style>
