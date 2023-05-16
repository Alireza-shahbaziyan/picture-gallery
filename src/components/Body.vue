<template>
  <div class="flex items-center flex-col text-4xl text-success">
    <div>{{state.test}}</div>
    <div>{{state.users[0]}}</div>
    <button class="btn btn-success text-xl" @click="increment()" >+</button>
    <button class="btn" @click="state.getUsers()">Fetch Data</button>
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
