<template>
  <div class="page1">
    <h1>This is a sample Page1</h1>
    <h2>Shopping Cart Example</h2>
    <div>----------------------------------------------------------------</div>
    <h2>Products</h2>
    <ul>
      <li>
        iPhoneXR<br />
        <button type="button" @click="countUp()">add</button>
      </li>
    </ul>
    <div>----------------------------------------------------------------</div>
    <ul>
      <li v-if="count > 0">iPhoneXR x{{ count }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    countUp() {
      this.count++;
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  display: inline-block;
  list-style-type: disc;
}

li::before {
  content: "・";
  display: inline-block;
}
</style>
