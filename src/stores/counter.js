import axios from 'axios'
import { error } from 'daisyui/src/colors'
import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('counter', {
  state: () => ({
    test: 0,
    users: {},
    loading:false
  }),
  actions: {
    add() {
      this.test++
    },
    async getUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
        this.users = res.data
        this.loading = true
      }).catch(rej=>console.log("erorr",rej))
    }

  }
})

// state: () => ({
//   Photos: "photos",
//   loding: false,
//   error: null
// }),
// actions: {
//   async fetchPhotos() {
//     this.loading = true
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos')
//         const photos = await response.json()
//         this.photos = photos
//       } catch (error) {
//         this.error = error.message
//         console.log("error");
//       }
//       this.loding=false
//   }
// }