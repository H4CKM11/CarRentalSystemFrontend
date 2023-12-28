<script setup lang="ts">
import SearchButtonGradient from '../components/common/buttons/SearchButtonGradient.vue'

</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="bg-[url('./assets/images/OklahomaCity.jpg')] h-[65vh] flex items-center justify-center flex-col gap-10 bg-no-repeat ">
      <!-- Hero Section Content -->
      <article class="bg-white p-4 rounded-md w-[60vw]">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Oklahoma City Car Rentals</h1>

        <form class="grid grid-cols-5 gap-3">
          <!-- Text Input Field -->
          <input
            class="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Oklahoma City">

          <!-- Start Date Field -->
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date" type="date">

          <!-- Return Date Field -->
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date" type="date">

          <!-- Submit Button -->
          <SearchButtonGradient />
        </form>
      </article>

      <!-- Here is why travelers love Cruise Section-->
      <section>
        <article class="bg-white p-4 rounded-md w-[60vw]">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Here is why travelers love Cruise</h2>
          <article class="grid grid-cols-4 gap-2">
            <article class="border-2 rounded-md p-4 grid grid-cols-2 custom-grid-cols">
              <img src="../assets/images/savings.png" alt="percent" class="w-8 h-8 rounded-md">
              <h3 class="font-bold text-gray-800">Save up to 50%</h3>
              <p class="text-gray-600 text-sm col-span-2">We compare thousands of car rentals so you can find the
                perfect travel deal.</p>
            </article>

            <article class="border-2 rounded-md p-4 grid grid-cols-2 custom-grid-cols">
              <img src="../assets/images/login.png" alt="percent" class="w-8 h-8 rounded-md">
              <h3 class="font-bold text-gray-800">No Login Required</h3>
              <p class="text-gray-600 text-sm col-span-2">No need to make an account with us to book</p>
            </article>

            <article class="border-2 rounded-md p-4 grid grid-cols-2 custom-grid-cols">
              <img src="../assets/images/filter.png" alt="percent" class="w-8 h-8 rounded-md">
              <h3 class="font-bold text-gray-800">Filter With Ease</h3>
              <p class="text-gray-600 text-sm col-span-2">Search and filter through thousands of cars in an instant</p>
            </article>

            <article class="border-2 rounded-md p-4 grid grid-cols-2 custom-grid-cols">
              <img src="../assets/images/flex.png" alt="percent" class="w-8 h-8 rounded-md">
              <h3 class="font-bold text-gray-800">Book Flexibility</h3>
              <p class="text-gray-600 text-sm col-span-2">Free cancelation policy with no hidden cost</p>
            </article>
          </article>
          
        </article>

      </section>
    </section>

    <!-- Cars Rental Section -->
    <section class="my-8">
      <article class="w-[55vw] mx-auto">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Avaliable Car Rentals in Oklahoma City</h2>
        <p class="text-gray-600 text-sm mb-4">Top tips for renting a car in Oklahoma City</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.custom-grid-cols {
  grid-template-columns: calc(32px + 8px) auto;
}

</style>
```