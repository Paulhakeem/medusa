<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { usePriceStore } from "../stores/price.js";
import { toast } from "vue3-toastify";

const priceStore = usePriceStore();

const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const email = ref("");

const notify = () => {
  if (priceStore.totalPrice > 0) {
    toast.success("payment complete, Thank you!", {
      autoClose: 1000,
    });
  } else {
    return toast.error('Something went wrong', {
       autoClose: 1000,
    })
  }
};
</script>
<template class="bg-[#eff4fc]">
  <section>
    <Header />
    <hr class="mx-4" />
    <div class="darshbord flex mx-6 my-10 justify-between">
      <div>
        <button class="text-primary tracking-wider font-medium">
          <font-awesome-icon :icon="['fas', 'caret-left']" />
          Back
        </button>
        <h1 class="text-2xl text-[#393333] pt-6">Checkout</h1>
        <div class="pt-3">
          <p class="text-md font-light text-[#9e9d9d]">
            a checkout is a container where you pay for things your buying
          </p>
        </div>

        <div class="pt-10">
          <h3 class="text-[#393333] font-medium">1. Contact information</h3>
        </div>

        <div class="flex flex-wrap mx-3 gap-8 w-4/5">
          <div class="flex my-6 gap-4">
            <font-awesome-icon :icon="['far', 'user']" class="text-primary" />
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              class="outline-none text-[#393333] border-b-2 font-light border-b-text-[#393333] pl-2 caret-gray-300 focus:border-b-primary"
            />
          </div>

          <div class="flex my-6 gap-4">
            <font-awesome-icon
              :icon="['fas', 'id-badge']"
              class="text-primary"
            />
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              class="outline-none text-[#393333] border-b-2 border-b-text-[#393333] font-light pl-2 caret-gray-300 focus:border-b-primary"
            />
          </div>
          <div class="flex my-6 gap-4">
            <font-awesome-icon :icon="['fas', 'mobile']" class="text-primary" />
            <input
              v-model="phoneNumber"
              type="tel"
              name="phone"
              placeholder="eg 0700000000"
              class="outline-none text-[#393333] border-b-2 border-b-text-[#393333] font-light pl-2 caret-gray-300 focus:border-b-primary"
            />
          </div>
          <div class="flex my-6 gap-4">
            <font-awesome-icon
              :icon="['far', 'paper-plane']"
              class="text-primary"
            />
            <input
              v-model="email"
              type="email"
              placeholder="you@gmail.com"
              class="outline-none text-[#393333] border-b-2 border-b-text-[#393333] font-light pl-2 caret-gray-300 focus:border-b-primary"
            />
          </div>
        </div>

        <div class="pt-10">
          <h3 class="text-[#393333] font-medium">2. Delivery Method</h3>
        </div>

        <div class="flex flex-wrap my-12 gap-6">
          <div class="mx-2">
            <button
              class="bg-primary text-white font-light p-2 w-40 rounded-md"
            >
              <font-awesome-icon
                :icon="['fas', 'truck']"
                class="text-white mx-2"
              />
              Same-day
            </button>
          </div>
          <button
            class="bg-white border-2 border-[#e9e9ee] text-[#9e9d9d] font-light p-2 w-32 rounded-md hover:bg-primary hover:text-white hover:border-none"
          >
            <font-awesome-icon
              :icon="['fas', 'motorcycle']"
              class="text-[#393333] mx-2"
            />
            Express
          </button>
          <button
            class="bg-white border-2 border-[#e9e9ee] text-[#9e9d9d] font-light p-2 w-32 rounded-md"
          >
            <font-awesome-icon
              :icon="['fas', 'truck-ramp-box']"
              class="text-[#393333] mx-2"
            />
            Normal
          </button>
        </div>

        <div class="pt-10">
          <h3 class="text-[#393333] font-medium">3. Payment Method</h3>
        </div>

        <div class="flex flex-wrap pt-5 gap-6 my-10">
          <div class="mx-2">
            <button
              class="bg-white border-2 border-[#e9e9ee] text-[#9e9d9d] font-light p-2 w-28 rounded-md"
            >
              <font-awesome-icon
                :icon="['fab', 'paypal']"
                class="text-[#393333]"
              />
              Pay
            </button>
          </div>

          <button class="bg-primary text-white font-light p-2 w-28 rounded-md">
            <font-awesome-icon :icon="['fab', 'apple']" class="text-white" />
            Pay
          </button>

          <button
            class="bg-white border-2 border-[#e9e9ee] text-[#9e9d9d] font-light p-2 w-32 rounded-md"
          >
            <font-awesome-icon
              :icon="['fab', 'google']"
              class="text-[#393333]"
            />
            Pay
          </button>
        </div>
      </div>

      <!-- payment details -->
      <div
        class="w-80 h-full bg-white justify-center border border-[#9e9d9d] rounded-md"
      >
        <div class="w-80 h-56 bg-primary rounded-md">
          <div class="flex mx-4 py-3 justify-between">
            <font-awesome-icon
              :icon="['fas', 'sd-card']"
              class="text-white text-3xl rotate-90"
            />
            <font-awesome-icon
              :icon="['fas', 'wifi']"
              class="text-white text-3xl rotate-90"
            />
          </div>

          <footer class="mx-4 my-24">
            <p class="font-thin text-white tracking-wide mb-3">Exp 12/20</p>

            <div class="flex justify-between tracking-wide">
              <p class="text-white font-light font-mono">****5968</p>
              <p class="font-light text-white text-right mb-12">
                Name: {{ firstName }} {{ lastName }}
              </p>
            </div>
          </footer>
        </div>

        <div class="flex justify-between mx-6 my-4">
          <h4 class="text-[#393333] font-medium">Manage Cards</h4>
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="text-[#393333 cursor-pointer"
          />
        </div>
        <hr class="mx-6 my-4" />

        <div class="text-center text-3xl font-light my-8">
          <h1>{{ priceStore.count }} items</h1>
        </div>

        <div class="my-10 mx-6 space-y-8">
          <div class="flex justify-between">
            <h3 class="text-[#9e9d9d] font-light">Subtotal</h3>
            <h3 class="text-[#393333]">$450.00</h3>
          </div>
          <div class="flex justify-between">
            <h3 class="text-[#9e9d9d] font-light">Discount</h3>
            <h3 class="text-[#393333]">-$100(-5%)</h3>
          </div>
          <div class="flex justify-between">
            <h3 class="text-[#9e9d9d] font-light">Delivery ServiceS</h3>
            <h3 class="text-[#393333]">+$30</h3>
          </div>
          <hr />
        </div>

        <div class="my-4 mx-6">
          <div class="flex justify-between">
            <h3 class="text-[#393333] font-medium text-md">Total</h3>
            <h3 class="text-[#393333] text-xl">{{ priceStore.totalPrice }}</h3>
          </div>
        </div>

        <div class="my-10 text-center ml-4 mr-4">
          <button  @click="notify" class="bg-primary p-4 w-full text-white font-light">
            Pay
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="text-[#393333 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
