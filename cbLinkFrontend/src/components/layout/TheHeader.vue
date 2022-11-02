<template>
  <div class="sticky top-0 z-10 flex-shrink-0 h-16 flex">
    <div
      class="flex-1 mx-auto px-5 flex justify-between bg-neutral-900 dark:bg-opacity-90 bg-opacity-10">
      <MobileMenu />
      <SearchForm />
      <GetMe />
      <DarkMode />
    </div>
  </div>
</template>

<script setup>
import MobileMenu from "@/components/shared/MobileMenu.vue";
import SearchForm from "@/components/shared/SearchForm.vue";
import GetMe from "@/components/shared/GetMe.vue";
import DarkMode from "../shared/DarkMode.vue";
</script>
