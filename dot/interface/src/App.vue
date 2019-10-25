<template>
  <div class="container bg-gray-300">
    <h1>{{ message }}</h1>
    <h2> Hello there</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'This is the Dot pattern',
    };
  },
};
</script>

<style scoped>
</style>
