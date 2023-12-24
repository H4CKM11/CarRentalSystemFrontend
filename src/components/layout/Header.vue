<template>
    <div class="bg-white drop-shadow-md">
        <!-- Container for the header content -->
        <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Flex container for the header elements -->
            <div class="flex items-center justify-between h-16">
                <!-- Left side of the header -->
                <div class="flex">
                    <img src="../../assets/images/cruise_logo.svg" class="w-24">
                </div>

                <!-- Right side of the header -->
                <div class="flex items-center">
                    <SignInButton />

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SignInButton from "../common/buttons/SignInButton.vue"

</script>

<style scoped></style>