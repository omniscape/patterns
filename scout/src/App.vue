<template>
  <div class="bg min-w-full z-10">
    <overlay></overlay>
    <div class="container flex flex-row z-30 relative flex min-h-screen max-h-screen min-w-full max-w-full">
      <card></card>
    </div>
    <context-mob class="visible md:invisible"></context-mob>
    <context class="invisible md:visible"></context>
  </div>
</template>

<script>
import Overlay from './comps/Overlay'
import Card from './comps/Project/Card'
import ContextMob from './comps/Context-mob'
import Context from './comps/Context'

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Overlay,
    Card,
    ContextMob,
    Context
  }
};
</script>

<style scoped>
</style>
