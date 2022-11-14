<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="link in latestLinks"
      :key="link._id"
      class="col-span-1 divide-y divide-gray-200 dark:divide-gray-900 rounded-lg bg-white dark:bg-black dark:bg-opacity-90 shadow">
      <LinkLoop :link="link" />
      <LinkTags :tags="link.tags" />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LinkLoop from "../dir/LinkLoop.vue";
import LinkTags from "../dir/LinkTags.vue";

const latestLinks = ref([]);

const getLatestLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/links");
  const data = await response.json();
  const _lyst = data.data; // this seems extra, without it results vary...
  _lyst.forEach((item) => {
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
