import { defineStore } from 'pinia'
import product from '../products.js'
import products from '../products.js'
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

    addItems() {
      this.items.push(product)
    }
    }
})