import shop from '../../../api/shop'

export const productsModule = {
  state: {
    all: [],
  },
  getters: {
    allProducts: state => state.all,
  },
  mutations: {
    setProducts(state, products) {
      state.all = products
    },
  },
  actions: {
    async getAllProducts(context) {
      await shop.getProducts(products => {
        context.commit('setProducts', products)
      })
      console.log('done getAllProducts')
    },
  },
}
