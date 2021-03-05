import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('formatMoney', function (value) {
  const s = String(numeral(value).format('0.00')).replace('.', ',')
  return `R$ ${s}`// displaying other groupings/separators is possible, look at the docs
})

export default function () {

}
