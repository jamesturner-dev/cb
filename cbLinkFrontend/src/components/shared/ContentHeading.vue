<template>
  <div class="sm:border-l sm:border-gray-200 sm:pl-6">
    <h1 class="text-4xl font-bold tracking-tight text-gray-700">
      {{ content[0].text }}
    </h1>
    <p class="mt-2 text-base text-gray-500">
      {{ content[1].text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>