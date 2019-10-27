<template lang="html">
  <div class="flex flex-col h-auto md:justify-around sm:-mt-6">
    <div class="m-8 md:ml-12">
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
        title: 'Community Chaos',
        reason: {
          a: 'A collaborative effort to design and coordinate chaos experiments in communities across the UK.',
          b: 'With the objective of testing the limits of our infrastructure, daily operations, and emergency services in response to live scenarios of potential mass disruption.',
          c: 'We have the collective capacity to prepare for the potential collapse of civilisation by focusing our attention on local community resilience and scaling up from there.'
        }
      }
    }
  },
  components: {
    Pitch,
    Connect
  }
}
</script>

<style lang="css" scoped>
</style>
