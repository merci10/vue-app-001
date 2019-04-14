import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const productsModule = {
  state: {
    products: [{id: 1, name: 'iPhone XR', price: 890.2, inventory: 5}, {id: 2, name: 'Pixel 3 XL', price: 649, inventory: 10}],
  },
  getters: {
    allProducts: state => state.products,
  },
}

const cartModule = {
  state: {
    cart: {id: 1, items: [], total: 0},
  },
  getters: {
    cart: state => state.cart,
  },
  mutations: {
    pushProductToCart(state, product) {
      state.cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1,
      })
    },
    incrementItemCount(state, productId) {
      const cartItem = state.cart.items.find(item => item.id === productId)
      cartItem.count++
    },
  },
  actions: {
    addProductToCart(context, product) {
      const cartItem = context.state.cart.items.find(item => item.id === product.id)
      const targetProduct = context.state.products.find(item => item.id === product.id)
      if (cartItem) {
        context.commit('incrementItemCount', targetProduct.id)
      } else {
        context.commit('pushProductToCart', targetProduct)
      }
    },
  },
}

export default new Vuex.Store({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
})
