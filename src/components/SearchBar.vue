<template>
  <form @submit.prevent="submit">
    <input type="search" placeholder="Enter club name" v-model="inputValue"/>
    <button type="submit" :disabled="checkInputValue">SEARCH</button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['handleSubmit'],
  data() {
    return {
      inputValue: '',
    };
  },
  computed: {
    checkInputValue() {
      return this.inputValue.length === 0 ? true : false;
    },
  },
  methods: {
    submit() {
      this.$emit('handleSubmit', this.inputValue);
    },
  },
};
</script>
