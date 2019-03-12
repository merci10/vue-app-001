<template>
  <div class="page2">
    <h1 v-if="title.length > 0" v-bind:title="title">
      {{ reverseTitle }}
    </h1>
    <h1 v-else>
      Title is empty...
    </h1>
    <input type="text" v-model="title" />
    <button type="button" @click="clear()">clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'This is a sample Page2',
    }
  },
  methods: {
    clear() {
      this.title = ''
    },
  },
  computed: {
    reverseTitle: () => {
      return this.title
        .split('')
        .reverse()
        .join('')
    },
  },
}
</script>
