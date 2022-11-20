<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center"></div>
    <div v-if="!login" class="text-sm">
      <a href="/user/login" class="font-medium text-purple-600 hover:text-purple-500">
        Already a Member?
      </a>
    </div>
    <div v-else class="text-sm">
      <a href="/user/forgot" class="font-medium text-purple-600 hover:text-purple-500">
        Forgot your password?
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  login: {
    type: Boolean,
    required: true,
  },
});
</script>
