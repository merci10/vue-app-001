import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{id: 1, name: 'iPhone XR', price: 890.2, stock: 5}, {id: 2, name: 'Pixel 3 XL', price: 649, stock: 10}],
    cart: {id: 1, items: [], total: 0},
  },
  getters: {
    allProducts: state => state.products,
    cart: state => state.cart,
  },
  mutations: {
    addProductToCart(state, product) {
      const targetProduct = state.products.find(item => item.id === product.id)
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
      state.cart.total += product.price
      targetProduct.stock--
    },
  },
  actions: {},
})
