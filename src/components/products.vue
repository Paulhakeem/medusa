<script setup>
import { ref } from "vue";
 import products from "../products.js";
import { useItemsStore } from '../stores/items.js'

const itemsStore = useItemsStore()


 const items = ref(products);
</script>
<template>
  <div
    class="p-3 bg-primary text-center mx-4 my-10 rounded-tl-md rounded-tr-md"
  > 
    <p class="text-white font-light text-2xl text-center mr-4">Flash Sales</p>
  </div>

  <div class="flex flex-wrap gap-6 mx-4 my-8 items-center justify-center">
    <div v-for="product in items" :key="product.id">
      <div class="border-2 border-[#f4f2f3] rounded-md w-72 h-full">
        <img :src="product.product_iamge_url" alt="" class="w-72" />
        <h2 class="mx-3 text-md font-semibold font-sans pt-2 text-[#393333]">
          {{ product.product_name }}
        </h2>
        <p class="mx-3 text-xs font-light text-[#9e9d9d] text-left">
          {{ product.product_descrption }} 
        </p>
        <span class="mx-3 text-md font-semibold font-sans pt-2 text-[#393333]"
          >${{ product.product_price }}</span
        >
        <div class="mb-3">
          <button
          @click="itemsStore.increment"
            class="mx-3 text-md font-light mt-3 items-left bg-primary
             text-white p-1 rounded-full w-28 hover:text-primary hover:border-2 hover:border-primary hover:bg-white"
          >
            BUY
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>
