<template>
  <div class="flex w-full items-center justify-between space-x-6 p-5">
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="truncate text-sm font-medium text-gray-900 dark:text-gray-400">
          <a :href="link.longUrl">{{ link.title }}</a>
        </h3>
        <span
          class="cursor-pointer inline-block flex-shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 hover:bg-purple-500 hover:text-white hover:dark:bg-purple-700 dark:bg-purple-800 dark:text-purple-100">
          <a :href="getURL(link.category)">
            {{ link.category }}
          </a>
        </span>
      </div>
      <p class="mt-1 truncate text-xs text-gray-500">
        {{ link.description }}
      </p>
      <div class="text-xs text-gray-400">
        Created on {{ link.createdAt.slice(0, 10) }} . Rated:
        <span class="text-purple-600">
          {{ link.rating }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
const getURL = (id) => {
  return `/cat/${id}`;
};
</script>
