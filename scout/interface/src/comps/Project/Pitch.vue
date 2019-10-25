<template lang="html">
  <div class="">
    <h1 class="align-middle text-5xl text-gray-100 font-medium leading-none mb-4">
      {{ project.title }}
    </h1>
    <p class="max-w-lg text-lg text-gray-400 leading-relaxed mb-12">
      {{ project.reason }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style lang="css" scoped>
</style>
