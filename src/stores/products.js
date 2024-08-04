import { defineStore } from "pinia";
import { ref } from "vue";

export const productStore = defineStore("products", () => {
  const products = ref([]);
  const cartItems = ref([])
  const getProducts = async () => {
    try {
      const data = await fetch("https://api.escuelajs.co/api/v1/products");
      const res  = await data.json();
      if (res) {
        products.value = res;
        console.log(res);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    getProducts,
    products,
  };
});
