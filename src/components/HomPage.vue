<script setup>
import Header from "./Header.vue";
import Products from "./products.vue";
import searchInput from "./searchInput.vue";
</script>
<template>
  <div>
    <Header />
     <!-- search -->
    <search-input/>
    <!-- search -->
    <div class="bg-[#f4f2f3] mx-4 my-3 rounded-md select-none">
      <div
        class="grid md:grid-cols-2 my-6 mx-12 justify-center items-center text-center"
      >
        <div class="pt-4 text-start mb-10 mt-10">
          <h1 class="text-4xl font-semibold mb-2 text-[#393333] font-sans">
            Hello! What would
          </h1>
          <h1 class="text-4xl font-semibold text-[#393333]">like to buy?</h1>

          <div class="pt-8">
            <p class="text-xs font-light text-[#9e9d9d]">
              Search between millions of products from medusa online shop.
              <br />
              Our price comparison service help you findthe best deal on the
              market
            </p>
          </div>
          <RouterLink
            to="#_"
            class="relative inline-flex items-center justify-center mt-8 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span
              class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-500 rounded-full blur-md ease"
            ></span>
            <span
              class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease"
            >
              <span
                class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-primary rounded-full blur-md"
              ></span>
              <span
                class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-primary rounded-full blur-md"
              ></span>
            </span>
            <span class="relative text-white">Shop Now</span>
          </RouterLink>
          <!-- <button class="bg-primary p-2 w-32 rounded-lg mt-8 text-white">
          Shop Now
        </button> -->
        </div>
        <div class="mt-4 mb-4">
          <img src="../assets/show.png" alt="" />
        </div>
      </div>

      <div class="mx-12 top-3 bottom-10 flex justify-center gap-12 flex-wrap">
        <div class="bg-white w-72 h-40 text-center rounded-md flex">
          <div class="mt-2 cursor-pointer">
            <p
              class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]"
            >
              Summer <br />
              Collection
            </p>
            <p class="mx-3 text-xs font-light text-[#9e9d9d] text-left pt-4">
              Techno Minimal Light
            </p>
            <button
              class="mx-3 text-md font-light text-primary mt-3 items-left hover:bg-primary hover:text-white p-1 rounded-full w-28"
            >
              Shop Now
            </button>
          </div>

          <img src="../assets/bulb.png" alt="" />
        </div>
        <div class="bg-white w-72 h-40 text-center rounded-md flex">
          <div class="mt-2 cursor-pointer">
            <p
              class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]"
            >
              New <br />
              Collection
            </p>
            <p class="mx-3 text-xs font-light text-[#9e9d9d] text-left pt-4">
              Redox color chair
            </p>
            <button
              class="mx-3 text-md font-light text-primary mt-3 items-left hover:bg-primary hover:text-white p-1 rounded-full w-28"
            >
              Shop Now
            </button>
          </div>

          <img src="../assets/chair.png" alt="" />
        </div>
        <div class="bg-white w-72 h-40 text-center rounded-md flex">
          <div class="mt-2 cursor-pointer">
            <p
              class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]"
            >
              Treding <br />Products
            </p>
            <p class="mx-3 text-xs font-light text-[#9e9d9d] text-left pt-4">
              Fridge
            </p>
            <button
              class="mx-3 text-md font-light text-primary mt-3 items-left hover:bg-primary hover:text-white p-1 rounded-full w-28"
            >
              Shop Now
            </button>
          </div>

          <img src="../assets/fridge.png" alt="" class="" />
        </div>
      </div>
    </div>
    <Products />
  </div>
</template>
