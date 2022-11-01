<template>
  <div class="p-3 pb-0 mb-5">
    <span v-for="tag in tags">
      <span
        class="cursor-pointer inline-block flex-shrink-0 rounded-full bg-green-100 px-2 pt-0.5 pb-1 text-xs font-medium text-green-800 mr-2 hover:bg-green-500 hover:text-white">
        {{ tag }}
      </span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
  },
});
</script>
