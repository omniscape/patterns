<template lang="html">
  <div class="">
    <h1 class="align-middle text-3xl md:text-5xl text-gray-100 font-medium leading-none mb-4">
      {{ project.title }}
    </h1>
    <div class="max-w-lg mb-8">
      <p class="text-md md:text-lg text-gray-400 leading-relaxed mb-2">
        {{ project.reason.a }}
      </p>
      <p class="text-md md:text-lg text-gray-400 leading-relaxed mb-2">
        {{ project.reason.b }}
      </p>
      <!-- <p class="text-md md:text-lg text-gray-400 leading-relaxed">
        {{ project.reason.c }}
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style lang="css" scoped>
</style>
