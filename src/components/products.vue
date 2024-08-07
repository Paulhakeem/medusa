<script setup>
import { ref } from "vue";
import { productStore } from "../stores/products.js";
import LoadSpinner from "./LoadSpinner.vue";

const fetchedItems = productStore();



const showImage = ref(false);
</script>
<template>
  <div>
    <div class="flex flex-wrap gap-6 mx-4 my-8 items-center justify-center">
       <div v-if="fetchedItems.isLoading">
          <load-spinner />
        </div>
      <div v-for="product in fetchedItems.products" :key="product.id">

        <div
          class="border-2 border-[#f4f2f3] rounded-md w-64 h-full cursor-pointer"
        >
          <RouterLink :to="'/product/' + product.id">
            <div>
              <img :src="product.category.image" alt="" class="size-64" />
            </div>
            <h2
              class="mx-3 text-md font-semibold font-sans pt-2 text-[#393333]"
            >
              {{ product.title }}
            </h2>
            <span class="mx-3 text-md font-medium font-sans pt-2 text-[#393333]"
              >${{ product.price }}</span
            >
          </RouterLink>
          <!-- button -->
          <div
            @click="fetchedItems.addItems(product.id)"
            class="mx-2 mb-3 cursor-pointer"
          >
            <div
              class="inline-flex overflow-hidden text-white bg-primary rounded group"
            >
              <span
                class="px-3.5 py-2 text-white bg-black group-hover:bg-gray-800 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </span>
              <span class="pl-4 pr-5 py-2.5">ADD CART</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
