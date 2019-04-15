export const cartModule = {
  // cart: {id: 1, items: [], total: 0},
  state: {
    items: [],
  },
  getters: {
    cartItems: state => state.items,
    cartTotalPrice: state => {
      return state.items.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
  },
  mutations: {
    pushProductToCart(state, product) {
      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    },
    incrementItemQuantity(state, productId) {
      const cartItem = state.items.find(item => item.id === productId)
      cartItem.quantity++
    },
  },
  actions: {
    addProductToCart(context, product) {
      const cartItem = context.state.items.find(item => item.id === product.id)
      const targetProduct = context.rootState.products.all.find(item => item.id === product.id)
      if (cartItem) {
        context.commit('incrementItemQuantity', targetProduct.id)
      } else {
        context.commit('pushProductToCart', targetProduct)
      }
      // İŒÉ‚ğˆê‚ÂŒ¸‚ç‚·
      context.commit('decrementProductInventory', targetProduct.id)
    },
  },
}
