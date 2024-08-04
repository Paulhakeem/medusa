<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { productStore } from "../stores/products.js";
import ItemsModal from "./itemsModal.vue";

const showMenu = ref(false);
const totalItems = productStore();

// modal
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<template>
  <section>
    <ItemsModal :modalActive="modalActive" @close-modal="toggleModal">
      <div class="text-gray-500 my-4">
        <h1 class="text-center uppercase">Your Items List</h1>
        <hr class="text-gray-400 mx-2 my-2" />

        <div
          v-for="item in totalItems.cartItems"
          :key="item.id"
          class="justify-between mx-2"
        >
          <div class="flex justify-between">
            <h2 class="mx-3 text-md font-light font-sans pt-2 text-[#393333]">
              {{ item.title }}
            </h2>
            <span class="mx-3 text-md font-sans pt-2 text-[#393333]">
              ${{ item.price }}
            </span>
          </div>
        </div>
        <div
          class="flex justify-between mx-4 font-bold border-t-2 border-t-gray-600"
        >
          <p class="">Total</p>
          <p v-if="totalItems.totalPrice">${{ totalItems.totalPrice }}</p>
          <p v-else>$0.00</p>
        </div>
      </div>
    </ItemsModal>

    <!-- menu bar -->
    <div id="app" class="">
      <div class="justify-start">
        <div class="">
          <nav class="flex container px-5 py-5">
            <ul class="justify-start flex flex-grow space-x-4">
              <li class="flex gap-10">
                <a href="/" class="space-x-3 md:mr-5">
                  <h1 class="text-xl text-primary font-semibold gap-24">
                    Medusa
                    <font-awesome-icon
                      :icon="['fas', 'cart-shopping']"
                      class="text-[#393333]"
                    />
                  </h1>
                </a>
                <div class="pt-1">
                  <span class="text-red-500 text-xs">{{
                    totalItems.cartItemsLength
                  }}</span>
                  <font-awesome-icon
                    @click="toggleModal"
                    :icon="['fas', 'cart-flatbed-suitcase']"
                    class="text-[#716c6d] cursor-pointer"
                  />
                </div>
              </li>
            </ul>
            <ul class="flex space-x-5 pt-2">
              <li class="hidden sm:flex">
                <RouterLink
                  to="/"
                  class="text-[#716c6d] hover:text-primary text font-medium py-1 px-3"
                  >Home
                </RouterLink>
              </li>
              <li class="hidden sm:flex">
                <RouterLink
                  to=""
                  class="text-[#716c6d] hover:text-primary text font-medium py-1 px-3"
                  >Catalog
                </RouterLink>
              </li>
              <li class="hidden sm:flex">
                <RouterLink
                  to=""
                  class="text-[#716c6d] hover:text-primary text font-medium py-1 px-3"
                  >Contacts
                </RouterLink>
              </li>
              <li class="hidden sm:flex">
                <RouterLink
                  to=""
                  class="text-[#716c6d] hover:text-primary text font-medium py-1 px-3"
                  >Fqs
                </RouterLink>
              </li>
            </ul>
            <ul class="flex sm:hidden" @click="showMenu = !showMenu">
              <li>
                <a href="#" class="flex-none absolute right-0 px-5 z-30">
                  <p
                    class="text-gray-400 font-semibold tracking-wide hover:bg-primary hover:bg-opacity-30 rounded px-2 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </p>
                </a>
                <div
                  class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
                  :class="{
                    'invisible opacity-0': !showMenu,
                    'visible opacity-40': showMenu,
                  }"
                ></div>
                <div
                  class="absolute right-0 z-20 w-full px-5 mt-16 transition"
                  :class="{
                    'invisible opacity-0': !showMenu,
                    'visible opacity-100': showMenu,
                  }"
                >
                  <ul
                    class="flex flex-col bg-gray-100 w-full rounded shadow-md overflow-hidden"
                  >
                    <li class="flex">
                      <h3
                        class="flex flex-1 text-[#716c6d] font-semibold px-5 py-4"
                      >
                        Menu
                      </h3>
                    </li>
                    <li class="flex border-t">
                      <RouterLink
                        to="/"
                        class="flex flex-1 text-lg text-[#716c6d] hover:bg-primary hover:text-white font-medium px-8 py-4"
                        >Home
                      </RouterLink>
                    </li>
                    <li class="flex">
                      <RouterLink
                        to=""
                        class="flex flex-1 text-lg text-[#716c6d] hover:bg-primary hover:text-white font-medium px-8 py-4"
                        >Catalog
                      </RouterLink>
                    </li>
                    <li class="flex">
                      <RouterLink
                        to=""
                        class="flex flex-1 text-lg text-[#716c6d] hover:bg-primary hover:text-white font-medium px-8 py-4"
                        >Contacts
                      </RouterLink>
                    </li>
                    <li class="flex">
                      <RouterLink
                        to=""
                        class="flex flex-1 text-lg text-[#716c6d] hover:bg-primary hover:text-white font-medium px-8 py-4"
                        >Fqs
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
