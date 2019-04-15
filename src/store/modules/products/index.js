import shop from '@/api/shop'

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
    getAllProducts(context) {
      shop.getProducts(products => {
        context.commit('setProducts', products)
      })
    },
  },
}
