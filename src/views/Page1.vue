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
  computed: {
    products() {
      return this.$store.state.products
    },
    cart() {
      return this.$store.state.cart
    },
  },
  methods: {
    addItemToCart(product) {
      this.$store.commit('addItemToCart', product)
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
