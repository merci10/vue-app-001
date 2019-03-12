<template>
  <div class="page1">
    <h1>This is a sample Page1</h1>
    <h2>Shopping Cart Example</h2>
    <div>----------------------------------------------------------------</div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}<br />
        <button type="button" @click="addItemToCart(product)" :disabled="!product.stock">add</button>
      </li>
    </ul>
    <div>----------------------------------------------------------------</div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="item in cart.items" :key="item.id">{{ item.name }} x{{ item.count }} -- ${{ item.price }}</li>
    </ul>
    <p>Total: ${{ cart.total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [{id: 1, name: 'iPhone XR', price: 890.2, stock: 5}, {id: 2, name: 'Pixel 3 XL', price: 649, stock: 10}],
      cart: {id: 1, items: [], total: 0},
    }
  },
  methods: {
    addItemToCart(product) {
      const cartItem = this.cart.items.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.count++
      } else {
        this.cart.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          count: 1,
        })
      }
      product.stock--
      this.cart.total += product.price
    },
  },
}
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style-type: disc;
}

li::before {
  content: '・';
  display: inline-block;
}
</style>
