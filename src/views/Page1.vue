<template>
  <div class="page1">
    <h1>This is a sample Page1</h1>
    <h2>Shopping Cart Example</h2>
    <div>----------------------------------------------------------------</div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        {{ product.name }}<br />
        <button type="button" @click="addProductToCart(product)" :disabled="!product.inventory">add</button>
      </li>
    </ul>
    <div>----------------------------------------------------------------</div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">{{ item.name }} x{{ item.quantity }} -- ${{ item.price }}</li>
    </ul>
    <p>Total: ${{ cartTotalPrice }}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['allProducts', 'cartItems', 'cartTotalPrice']),
  },
  methods: {
    ...mapActions(['addProductToCart']),
  },
  created() {
    this.$store.dispatch('getAllProducts')
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
