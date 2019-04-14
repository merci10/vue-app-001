export const productsModule = {
  namespaced: true,
  state: {
    products: [{id: 1, name: 'iPhone XR', price: 890.2, inventory: 5}, {id: 2, name: 'Pixel 3 XL', price: 649, inventory: 10}],
  },
  getters: {
    allProducts: state => state.products,
  },
}
