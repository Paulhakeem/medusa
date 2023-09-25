import { defineStore } from 'pinia'


export const useItemsStore = defineStore('itemsStore', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
          this.count++
        },
      },
    
})