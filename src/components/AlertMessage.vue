<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: String,
  },
};
</script>
