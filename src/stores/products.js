import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'

export const productStore = defineStore("products", () => {
  const products = ref([]);
  const cartItems = ref([]);
  const isLoading = ref(true)


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
      }finally{
        isLoading.value = false
      }
  })

  //   cart
  const addItems = (id) => {
    const currentObject = products.value.find((product) => product.id === id);
    const findItem = cartItems.value.find((items) => items.id === id);
    if (findItem === undefined) {
      cartItems.value.push(currentObject);
      return toast.success("item added to cart!", {
        autoClose: 1000,
      })
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
    isLoading
  };
});
