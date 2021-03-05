<template>
  <q-item class="q-pa-md">
    <q-item-section avatar>
      <q-avatar>
        <img :src="photo" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption class="text-grey-4"> Cliente {{ id }} </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'photo'
  ]
}
</script>
