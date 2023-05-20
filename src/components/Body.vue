<template>
  <div class="flex items-center flex-col text-4xl text-success">
    <div v-if="state.loading" class="flex flex-wrap w-full justify-evenly">
      <div v-for="i in state.users" class="flex flex-col bg-white">
        <div>
          <img :src="i.url" alt="m" class="h-96 w-96">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from '../stores/counter'

export default {
  setup() {
    const state = usePhotoStore()
    return {
      state
    }
  },
  methods: {
    returnUsers() {
      this.state.getUsers()
    }
  },
  beforeMount() {
    this.returnUsers()
  },
}
</script>
