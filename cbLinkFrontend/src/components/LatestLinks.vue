<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
// import swal from "sweetalert2";

const latestLinks = ref([]);

const getLatestLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/links");
  const data = await response.json();
  const lyst = data.data;
  lyst.forEach((item) => {
    latestLinks.value.push(item);
  });
};

onMounted(() => {
  try {
    getLatestLinks();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section>
    <ul v-for="link in latestLinks" :key="link._id">
      <li
        class="border-b border-gray-300 dark:border-gray-900 p-3 w-100 dark:bg-black dark:text-white bg-white">
        <a class="p-2" :href="link.longUrl">{{ link.title }}</a> - short url:
        <span class="text-purple-300 font-bold">{{ link.shortUrl }}</span>
      </li>
    </ul>
  </section>
</template>
