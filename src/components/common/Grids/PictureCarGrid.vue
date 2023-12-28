<template>
<div class="grid grid-cols-3 gap-4"> <!-- Adjust grid layout as needed -->
    <div v-for="(image, index) in vehicleImages" :key="index" class="overflow-hidden rounded-lg shadow-lg"> <!-- Adjust styling as needed -->
      <img :src="image.imgURL" class="w-full h-auto object-cover object-center">
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

type images = {
    imgURL: string;
}

defineProps({
  vehicleImages: {
    type: Array as PropType<images[]>,
    required: true
  }
});

</script>
