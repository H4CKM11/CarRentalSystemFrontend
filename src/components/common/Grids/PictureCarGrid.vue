<template>
  <article class="grid grid-cols-3 gap-4">
    <figure v-for="(vehicleInformation, index) in vehicles" :key="index" class="overflow-hidden rounded-lg shadow-lg">
      <div class="flex justify-between p-3">

        <!-- Pricing Side -->
        <div class="flex flex-col">
          <p>${{ vehicleInformation.rate }}/day</p>
          <p class="font-bold text-lg">{{ vehicleInformation.model }}</p>
          <p>{{ vehicleInformation.make }}</p>
          <ViewDealButton class="px-4 py-2 text-xs mt-2" />
        </div>

        <!-- Image Side -->
        <div>
          <img :src="getImageURL(vehicleInformation.imgURL)" class="w-full h-auto object-cover object-center max-w-36">
        </div>
      </div>
    </figure>
  </article>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import ViewDealButton from '../buttons/ViewDealButton.vue';

type VehicleInformation = {
  make: string;
  model: string;
  rate: number;
  imgURL: string;
};

defineProps({
  vehicles: {
    type: Array as PropType<VehicleInformation[]>,
    required: true
  }
});


const baseURL = 'http://127.0.0.1:8000/';

function getImageURL(image: string) {
  return baseURL + image;
}

</script>
