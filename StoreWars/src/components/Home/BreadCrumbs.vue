<template>
  <div class="q-pa-md">
    <div class="bg-dark text-white ">
      <q-toolbar >
        <q-breadcrumbs active-color="cyan-13" style="font-size: 16px">
          <q-breadcrumbs-el label="Orders" icon="store" />
          <q-breadcrumbs-el label="Nova" icon="add" />

        </q-breadcrumbs>
      </q-toolbar>
      <q-toolbar >
        <q-btn flat round dense icon="store" />

        <q-toolbar-title>Orders</q-toolbar-title>

        <q-btn flat class="bg-grey-9 q-px-sm text-white" dense label="Nova ordem" icon="add" />
      </q-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
