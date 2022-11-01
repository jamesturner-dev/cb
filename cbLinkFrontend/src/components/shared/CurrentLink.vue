<template>
  <div class="mb-5">
    <h3 class="text-lg font-medium leading-6 text-gray-900">
      CBLink #: <span class="text-purple-600">{{ currentCount }}</span>
    </h3>
    <p class="max-w-2xl text-sm text-gray-500">
      Make sure that you
      <a href="#" class="text-purple-600">read the latest</a>
      guidence before adding links or creating a directory.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let currentCount = ref("");

const getLinkCount = async () => {
  const response = await fetch("http://localhost:5000/api/v1/count");
  const data = await response.json();
  currentCount.value = data.data;
};

onMounted(() => {
  try {
    getLinkCount();
    console.log(currentCount.value);
  } catch (error) {
    console.log(error);
  }
});
</script>
