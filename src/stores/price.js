import { defineStore } from 'pinia'
import product from '../products.js'
export const usePriceStore  = defineStore('usePrice', {
    state: () => ({
       
        product: [],
        items: [],
        // randomIndexes: []
    }),
    getters: {
        count() {
            return this.items.length
        },
        // getIndex() {
        //  const randomIndexes = []
        // 
  
    },
    actions: {
        fill() {
            this.product = product
        },

    addItems() {
        
            }
    }
})