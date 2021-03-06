<template>
  <div class="">
    <div class="row text-center">
      <div class="col col-12 col-md-12">
        <q-icon size="70px" color="blue-5" name="warning" />
      </div>
    </div>
    <br />
    <div class="row text-center">
      <div class="col col-12 col-md-12">
        <p class="text-blue-5">{{ message }}</p>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
.hh2 {
  height: 100%;
  min-height: 50vh !important;
}
</style>
