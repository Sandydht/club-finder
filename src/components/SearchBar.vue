<template>
  <div class="p-5 bg-white">
    <form @submit.prevent="submit" class="w-full grid grid-cols-1fr-auto gap-3">
      <input type="search" placeholder="Enter club name" v-model="inputValue" class="min-w-44 min-h-44 px-3 border-b-2 border-indigo-600 font-semibold text-lg focus:outline-none focus:border-indigo-800 hover:border-indigo-800"/>
      <button type="submit" class="min-w-44 min-h-44 inline-flex justify-center items-center px-5 rounded-md uppercase font-semibold shadow-md" :class="[checkInputValue ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800 focus:bg-indigo-800']" :disabled="checkInputValue">SEARCH</button>
    </form>
  </div>
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
