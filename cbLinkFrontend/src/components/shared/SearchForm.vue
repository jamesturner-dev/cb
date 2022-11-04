<template>
  <section
    class="sticky mx-auto max-w-4xl top-0 z-10 flex h-16 bg-white dark:bg-black dark:bg-opacity-95 dark:border-gray-900 border-r-4 rounded-b-lg">
    <div
      class="flex flex-1 justify-between border-b border-gray-200 dark:border-gray-900">
      <div class="flex flex-1">
        <form class="flex w-full md:ml-0" action="#" method="GET">
          <label for="mobile-search-field" class="sr-only">Search</label>
          <label for="desktop-search-field" class="sr-only">Search</label>
          <div
            class="relative w-full text-gray-400 dark:bg-black focus-within:text-gray-600">
            <div
              class="pointer-events-none absolute inset-y-0 left-2 flex items-center dark:bg-black">
              <MagnifyingGlassIcon
                class="h-5 w-5 flex-shrink-0"
                aria-hidden="true" />
            </div>
            <input
              name="mobile-search-field"
              id="mobile-search-field"
              class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden"
              placeholder="Search"
              type="search" />
            <input
              name="desktop-search-field"
              id="desktop-search-field"
              class="hidden h-full w-full dark:bg-black border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 dark:text-gray-600 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
              placeholder="Search the Salty Ape Empire"
              type="search" />
          </div>
        </form>
      </div>
      <div class="mr-4 flex items-center md:ml-6">
        <button
          type="button"
          class="rounded-full bg-gray-100 dark:bg-gray-900 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          <BellIcon class="h-6 w-6" aria-hidden="true" />
          <span class="sr-only">View notifications</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { MagnifyingGlassIcon } from "@heroicons/vue/outline";
import { BellIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
</script>
