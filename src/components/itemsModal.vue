<script setup>
import { useRouter } from "vue-router";
import { usePriceStore } from "../stores/price.js";
import { toast } from "vue3-toastify";

const router = useRouter();
const priceStore = usePriceStore();
const payment = () => {
  if (priceStore.cartItems.length === 0) {
    return toast.error("Something went wrong", {
      autoClose: 1000,
    });
  } else {
    return router.push({
      path: "/login",
    });
  }
};

defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="absolute w-full z-50 bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div v-if="modalActive" class="p-4 bg-white self-start mt-32 w-96">
          <font-awesome-icon
            @click="$emit('close-modal')"
            class="text-primary cursor-pointer"
            :icon="['fas', 'circle-xmark']"
            beat
          />
          <slot />

          <button
            @click="payment"
            class="text-white mt-8 bg-primary py-2 px-6 rounded-md"
          >
            Make Payment
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
