<template>
  <p class="text-xl font-bold">{{ message }}</p>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: String,
  },
};
</script>
