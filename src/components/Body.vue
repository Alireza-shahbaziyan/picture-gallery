<template>
  <div>
    {{count.Photos}}
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
// import axios from 'axios'

export default {
  data() {
    return {
      events: null
    }
  },
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
}
</script>