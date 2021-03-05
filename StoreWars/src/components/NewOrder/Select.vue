<template>
  <q-select
    :key="key"
    filled
    :value="value"
    emit-value
    map-options
    dark
    use-input
    @input="$emit('input', $event)"
    hide-selected
    fill-input
    :label="label"
    input-debounce="0"
    :options="optionsFiltradas"
    option-value="id"
    :option-label="campo_label"
    @filter="filterOptions"
    hint="Digite para pesquisar"
    :class="'col-12 '+(extraClass || 'col-md-12')"

    @input-value="setValue"
  >

    <template v-slot:prepend>
      <q-icon :name="icon || 'person'" />
    </template>
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-black">
          Sem resultados existentes
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  data: function () {
    return {
      key: 0,
      filtrados: [],
      novoValor: '',
      optionsFiltradas: []
    }
  },
  mounted () {
    this.optionsFiltradas = this.options
    console.log(this.optionsFiltradas)
  },
  methods: {
    filterOptions (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.optionsFiltradas = this.options.filter(
          (v) => v[this.campo_label].toLowerCase().indexOf(needle) > -1
        )
        console.log(this.optionsFiltradas)
      })
    },
    setValue (val) {
      this.novoValor = val
    }
  },
  props: [
    'options',
    'value',
    'icon',
    'campo_label',
    'label',
    'extraClass'
  ]
}
</script>

<style>
</style>
