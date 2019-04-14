import Vue from 'vue'
import Vuex from 'vuex'
import {productsModule} from './modules/products'
import {cartModule} from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
})
