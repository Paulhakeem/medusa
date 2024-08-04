import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";

export const productStore = defineStore("products", () => {
  const products = ref([]);
  const cartItems = ref([]);


  onMounted(async() => {
    try {
        const data = await fetch("https://api.escuelajs.co/api/v1/products");
        const res = await data.json();
        if (res) {
          products.value = res;
          console.log(res);
        }
      } catch (error) {
        alert(error.message);
      }
  })

  //   cart
  const addItems = (id) => {
    const currentObject = products.value.find((product) => product.id === id);
    const findItem = cartItems.value.find((items) => items.id === id);
    if (findItem === undefined) {
      cartItems.value.push(currentObject);
    } else {
      console.log("item exist");
    }
    console.log(cartItems.value);
  };



  //   total length
  const cartItemsLength = computed(() => {
    return cartItems.value.length;
  });

  //   calculate the total
  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price, 0);
  });

  return {
    addItems,
    products,
    cartItems,
    cartItemsLength,
    totalPrice,
  };
});
