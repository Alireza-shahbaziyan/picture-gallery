import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    Photos: "photos",
  }),
  actions: {
    addTodo(value) {
      this.Photos.push(value)
    },
    deleteTodo(value) {
      this.Photos.splice(value, 1)
    }
  },
  getters: {

  }
})