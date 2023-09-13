<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header/>
    <div class="grid md:grid-cols-2 mx-4 my-10">
       <div>
        <button class="text-primary tracking-wider font-medium">
            <font-awesome-icon :icon="['fas', 'caret-left']" />
            Back
        </button>
        <h1 class="text-2xl text-[#393333] pt-6">Checkout</h1>
        <div class="pt-3">
            <p class="text-md font-light text-[#9e9d9d]">a checkout is a container where you pay for things your buying</p>
        </div>

        <div class="pt-10">
            <h3 class="text-[#393333]">1. Contact information</h3>
        </div>

        <div class="flex flex-wrap mx-3 gap-8">
            <div class="flex my-6 gap-4">
                <font-awesome-icon :icon="['far', 'user']" class="text-[#393333]" />
                <input type="text" placeholder="First Name" 
                class="outline-none text-[#393333] border-b-2 border-b-text-[#393333] font-light pl-2 carettext-gray-300">
            </div>
            
            <div class="flex my-6 gap-4">
                <font-awesome-icon :icon="['fas', 'id-badge']" class="text-[#393333]"/>
                <input type="text" placeholder="First Name" 
                class="outline-none text-[#393333] border-b-2 border-b-text-[#393333] font-light pl-2 carettext-gray-300 hover:border-b-primary">
            </div>
        </div>
       </div>


       <div class="text-end">
        items
       </div>
    </div>
</template>