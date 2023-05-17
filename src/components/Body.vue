<template>
  <div class="flex items-center flex-col text-4xl text-success">
    <button class="btn btn-success text-xl" @click="increment()" >+</button>
    <button class="btn" @click="state.getUsers()">Fetch Data</button>
    <div v-if="state.loading">
      <div class="flex flex-col" v-for="i in state.users">
      <img :src="i.url" alt="m" class="w-96 h-96">
      <div>{{ i.title }}</div>
    </div>
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from '../stores/counter'

export default{
  setup(){
    const state = usePhotoStore()
    return {
      state
    }
  },
  methods: {
    increment() {
      this.state.add()
    }
  },
}
</script>
