<template>
  <div class="q-pa-md">
    <div class="bg-dark text-white ">
      <q-toolbar >
        <q-breadcrumbs active-color="cyan-13" style="font-size: 16px">
          <q-breadcrumbs-el
            v-for="(page, index) in pages"
            :key="index"
            :label="page.name"
            :icon="page.icon"
            :to="page.href"
          />

        </q-breadcrumbs>
      </q-toolbar>
      <q-toolbar >
        <q-btn flat round dense :icon="pageAtual.icon" />

        <q-toolbar-title>{{ pageAtual.name }}</q-toolbar-title>

      </q-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  data: function () {
    return {
      pageAtual: {}

    }
  },
  props: [
    'pages'
  ],
  mounted () {
    const last = this.pages.length - 1
    this.pageAtual = this.pages[last]
  }

}
</script>
