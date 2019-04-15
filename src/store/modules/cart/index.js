export const cartModule = {
  // cart: {id: 1, items: [], total: 0},
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
        quantity: 1,
      })
    },
    incrementItemQuantity(state, productId) {
      const cartItem = state.cart.items.find(item => item.id === productId)
      cartItem.quantity++
    },
  },
  actions: {
    addProductToCart(context, product) {
      const cartItem = context.state.cart.items.find(item => item.id === product.id)
      const targetProduct = context.rootState.products.all.find(item => item.id === product.id)
      if (cartItem) {
        context.commit('incrementItemQuantity', targetProduct.id)
      } else {
        context.commit('pushProductToCart', targetProduct)
      }
    },
  },
}
