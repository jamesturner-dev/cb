<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

const suggestedLinks = ref([]);

const getsuggestedLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/suggested");
  const data = await response.json();
  const lyst = data.data;
  lyst.forEach((item) => {
    suggestedLinks.value.push(item);
  });
};

onMounted(() => {
  try {
    getsuggestedLinks();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section>
    <ol v-for="link in suggestedLinks" :key="link._id">
      <li
        class="border-b border-gray-300 dark:border-gray-900 p-3 w-100 dark:bg-black dark:text-white bg-white">
        <a class="p-2" :href="link.longUrl">{{ link.title }}</a> - &nbsp;
        {{ link.description }}
        <span class="text-purple-300 font-bold">{{ link.shortUrl }}</span>
      </li>
    </ol>
  </section>
</template>
