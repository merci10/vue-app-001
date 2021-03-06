export const cartModule = {
  namespaced: true,
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
    setCartItems(state, items) {
      state.items = items
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
      // 在庫をひとつ減らす
      context.commit('products/decrementProductInventory', targetProduct.id, {root: true})
    },
    checkout(context) {
      context.commit('setCartItems', [])
      console.log('pushed checkoutButton')
    },
  },
}
