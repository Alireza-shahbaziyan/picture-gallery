<template>
  <div>
    {{ events }}
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import getDetailsMovie from '@/Service/Service.js'

export default {
  data() {
    return {
      events: null
    }
  },
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  created() {
    getDetailsMovie.api().then(res => this.events = res).catch(e => console.log(e))
  }
}
</script>