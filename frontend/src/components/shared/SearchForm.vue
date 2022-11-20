<template>
  <section
    class="sticky mx-auto max-w-4xl top-0 z-10 flex h-16 bg-white dark:bg-black dark:bg-opacity-95 dark:border-gray-900 border-r-4 rounded-b-lg">
    <div
      class="flex flex-1 justify-between border-b border-gray-200 dark:border-gray-900">
      <div class="flex flex-1">
        <form class="flex w-full md:ml-0" @submit.prevent="siteSearch">
          <label for="search-field" class="sr-only">Search</label>
          <div
            class="ml-2 relative w-full text-gray-300 dark:text-gray-800  ">
            <div
              class="pointer-events-none absolute inset-y-0 left-2 flex items-center dark:bg-black">
              <MagnifyingGlassCircleIcon
                class="h-5 w-5 flex-shrink-0 cursor-pointer"
                aria-hidden="true" />
            </div>

            <input
              name="desktop-search-field"
              id="desktop-search-field"
              class=" h-full w-full dark:bg-black border-transparent py-2 pl-8 pr-3 text-gray-900 dark:text-gray-600 placeholder-gray-300 dark:placeholder-gray-800 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
              placeholder="Search cb.link"
              v-model="searchTerm"
              @keyup.enter="siteSearch"
              type="search" />
          </div>
        </form>
      </div>
      <div class="mx-5 flex items-center">
        <button type="submit"
          class="rounded-full bg-gray-100 dark:bg-gray-900 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          <ChevronDoubleRightIcon
            @click="siteSearch"
            class="h-3 w-3"
            aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/20/solid";
const searchTerm = ref("");

const siteSearch = () => {
  if(searchTerm){
    console.log(`searching: ${searchTerm.value}`);
    window.location.href = `/search/${searchTerm.value}`;
  } 
};
</script>

