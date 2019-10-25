<template lang="html">
  <div class="flex flex-col h-auto justify-around ml-12">
    <div class="">
      <pitch v-bind:project="project"></pitch>
      <connect></connect>
    </div>
  </div>
</template>

<script>
import Pitch from './Pitch'
import Connect from './Connect'

export default {
  data() {
    return {
      project: {
        title: 'Pattern: Scout',
        reason: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    };
  },
  components: {
    Pitch,
    Connect
  }
}
</script>

<style lang="css" scoped>
</style>
