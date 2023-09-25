import { defineStore } from 'pinia'
import product from '../products.js'
export const usePriceStore  = defineStore('usePrice', {
    state: () => {
       return {
        product: [],
        items: []
       }
    },
    getters: {
        count() {
            return this.items.length
        }
  
    },
    actions: {
        fill() {
            this.product = product
        },

    addItems(count, items) {
          count = parseInt(count)
          for (let index=0; index < count; index++) {
            this.items.push({...items})
          }
    }
    }
})