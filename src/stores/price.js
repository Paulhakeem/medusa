import { defineStore } from "pinia";
import products from "../products.js";
export const usePriceStore = defineStore("usePrice", {
  state: () => ({
    products: [],
    cartItems: [],

  }),

  getters: {
    count() {
      return this.cartItems.length;
    },
 
  },
  actions: {
    fill() {
      this.product = products;
    },

    addItems(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
        toast.sucess("Your item has been updated!");
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        toast.sucess("Your item has been saved!");
      }
    },
  },
});
