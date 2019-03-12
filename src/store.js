import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{id: 1, name: 'iPhone XR', price: 890.2, stock: 5}, {id: 2, name: 'Pixel 3 XL', price: 649, stock: 10}],
    cart: {id: 1, items: [], total: 0},
  },
  mutations: {
    addItemToCart(state, product) {
      const cartItem = state.cart.items.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.count++
      } else {
        state.cart.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          count: 1,
        })
      }
      product.stock--
      state.cart.total += product.price
    },
  },
  actions: {},
})
