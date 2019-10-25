<template>
  <div class="bg min-w-full z-10">
    <overlay></overlay>
    <div class="container flex flex-row z-30 relative flex justify-between min-h-screen max-h-screen min-w-full max-w-full">
      <card></card>
    </div>
    <context></context>
  </div>
</template>

<script>
import Overlay from './comps/Overlay'
import Card from './comps/Project/Card'
import Context from './comps/Context'

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Overlay,
    Card,
    Context
  }
};
</script>

<style scoped>
</style>
