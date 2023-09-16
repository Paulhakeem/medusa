<script setup>
import Header from "./Header.vue";
import Products from "./products.vue";
</script>
<template>
  <Header/>
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
            Search between millions of products from medusa online shop. <br />
            Our price comparison service help you findthe best deal on the
            market
          </p>
        </div>

        <button class="bg-primary p-2 w-32 rounded-full mt-8 text-white">
          Shop Now
        </button>
      </div>
      <div class="mt-4 mb-4">
        <img src="../assets/show.png" alt="" />
      </div>
    </div>

    <div class="mx-12 top-3 bottom-10 flex justify-center gap-12 flex-wrap">
      <div class="bg-white w-72 h-40 text-center rounded-md flex ">
        <div class="mt-2 cursor-pointer">
          <p class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]">
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
          <p class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]">
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
          <p class="mx-3 font-semibold font-sans text-left pt-4 text-[#393333]">
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
</template>
