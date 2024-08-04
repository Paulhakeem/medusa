<template>
  <div
    id="us"
    class="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-14 mx-auto sm:pt-8"
  >
    <div class="relative p-6 md:p-16">
      <div
        class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
      >
        <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 class="text-2xl text-heading font-bold text-primary sm:text-3xl">
            {{ product.title }}
          </h2>

          <div class="pt-5">
            <p class="text-gray-500 text-sm antialiased">{{ product.description }}</p>
          </div>

          <div class="pt-4">
            <p class="text-sm">Category: <span class="text-primary">{{product.category.name}}</span></p>
          </div>
        </div>
        <!-- product image -->
        <div class="lg:col-span-6">
          <div class="relative">
            <div>
              <img
                :src="product.images[0]"
                :alt="product.title"
                class="rounded-md"
              />
            </div>
            <div
              class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20"
            >
              <svg
                class="w-16 h-auto"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="#38cabd"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="#38cabd"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="#38cabd"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <!-- End SVG Element -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <!-- Background Color -->
      <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
        <div
          class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"
        ></div>
      </div>
      <!-- End Background Color -->
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const product = ref([]);
const route = useRoute();

onBeforeMount(() => {
  fetch(`https://api.escuelajs.co/api/v1/products/${route.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      product.value = data;
    });
});
</script>
