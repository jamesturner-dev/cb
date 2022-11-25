<template>
 <h3 class="mx-3 mt-5 capitalize text-gray-500">
    {{ content[0] }}: <span class="text-purple-700">
      {{ content[1] }}
    </span>
  </h3>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>