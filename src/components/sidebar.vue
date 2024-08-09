<template>
  <aside
    v-if="showMenu"
    class="w-52 h-screen float-left bg-primary text-white p-3 sticky rounded-tr-md top-0 "
  >
    <!-- icon -->
    <div id="closeMenu" class="float-right">
      <font-awesome-icon @click="toggleMenu" :icon="['fas', 'xmark']" class="text-3xl cursor-pointer" />
    </div>
    <!-- icon -->
    <div class="flex justify-center text-center pt-4">
      <img
        src="../assets/profile.jpg"
        alt="profile"
        class="object-cover h-24 w-24 border-2 border-white border-dashed rounded-full"
      />
    </div>

    <div class="pt-4">
      <div
        class="flex space-x-3 my-4 hover:bg-white hover:text-primary hover:p-2 hover:rounded-md"
      >
        <font-awesome-icon :icon="['fas', 'user']" class="text-lg" />
        <p class="font-light">Profile</p>
      </div>
      <div
        class="flex space-x-2.5 my-4 cursor-pointer hover:bg-white hover:text-primary hover:p-2 hover:rounded-md"
      >
        <font-awesome-icon :icon="['fas', 'gauge-simple']" class="text-xl" />
        <p class="font-light">Darshboard</p>
      </div>
      <div
        class="flex space-x-2.5 my-4 cursor-pointer hover:bg-white hover:text-primary hover:p-2 hover:rounded-md"
      >
        <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-lg" />
        <p class="font-light">Your Orders</p>
      </div>
      <div
        class="flex space-x-2.5 my-4 cursor-pointer hover:bg-white hover:text-primary hover:p-2 hover:rounded-md"
      >
        <font-awesome-icon
          :icon="['fas', 'circle-dollar-to-slot']"
          class="text-lg"
        />
        <p class="font-light">Transactions</p>
      </div>
      <div
        class="flex space-x-2.5 my-4 cursor-pointer hover:bg-white hover:text-primary hover:p-2 hover:rounded-md"
      >
        <font-awesome-icon :icon="['fas', 'chart-simple']" class="text-lg" />
        <p class="font-light">Statics</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(true);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style lang="scss" scoped></style>
