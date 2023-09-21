import { defineStore } from 'pinia'
import products from '../products.js'

export const useItemsStore = defineStore('itemsStore', {
    state: () => {
        return {
           products 
        }
    }

    
})