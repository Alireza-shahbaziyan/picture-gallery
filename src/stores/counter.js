import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    Photos: [],
    loading: false
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
    // filterPhotos: (state) => {
    //   return (value) => state.Photos.filter((todo) => todo.title.includes(value))
    // },
    async getPhotos() {
      this.loading = true
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      try {
        this.Photos = await response.data;
        this.loading = false
      } catch (err) {
        this.Photos = [];
        console.error('Error loading new Photos:', err);
        return err;
      }
    }
  }
})