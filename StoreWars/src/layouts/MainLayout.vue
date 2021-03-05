<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
      <q-toolbar>

        <q-toolbar-title>
          <img src="sw.png" style="height: 3em" class="q-pl-md" alt="sw">
        </q-toolbar-title>
        <q-btn round dense flat :ripple="false" :icon="fabGithub" size="19px" color="white" class="q-mr-sm" no-caps />

      </q-toolbar>
    </q-header>

    <q-page-container  class="bg-dark text-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'MainLayout',
  data () {
    return {

    }
  },
  created () {
    this.fabGithub = fabGithub
  }
}
</script>
<style scoped>
.q-toolbar {
    position: relative;
    padding: 20px;
    min-height: 80px;
}
</style>
