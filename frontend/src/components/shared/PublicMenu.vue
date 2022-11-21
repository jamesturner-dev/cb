<template>
  <div class="relative border-b border-gray-200 dark:border-gray-900 pb-5">
    <div class="md:flex md:items-center md:justify-between">
      <div class="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
        <button @click="$router.push({ name: 'UserView', params: { name: 'register' } })" 
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-black px-2 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-purple-600 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Sign Up
        </button>
        <button @click="$router.push({ name: 'UserView', params: { name: 'login' } })" 
          type="button"
          class="ml-3 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Login
        </button>
      </div>
    </div>
    <div class="mt-4">
      <div class="sm:hidden mt-4">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select id="current-tab" name="current-tab"
          class="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8 ml-5">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[
            tab.current
              ? 'border-purple-500 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-800',
            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
          ]" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute(); // <--- this is the magic line
const path = computed(() => route.path);
const isCurrent = (c) => {
  return c === path.value;
};

const tabs = [
  { name: "Home", href: "/", current: isCurrent("/") },
  { name: "Admin", href: "/admin", current: isCurrent("/admin") },
  { name: "Submit Link", href: "/suggest", current: isCurrent("/suggest") },
  {
    name: "Get A Directory",
    href: "/user/register",
    current: isCurrent("/user/register"),
  },
  { name: "About", href: "/page/about", current: isCurrent("/page/about") },
];
</script>
