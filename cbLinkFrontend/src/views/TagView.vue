<template>
  <h3 class="mx-5 mt-5 capitalize text-gray-500">
    Links Tagged:
    <span class="text-purple-700">{{ tagRoute }}</span>
  </h3>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="tag in tagLinks"
      :key="tag._id"
      class="col-span-1 divide-y divide-gray-200 dark:divide-gray-900 rounded-lg bg-white dark:bg-black dark:bg-opacity-90 shadow">
      <LinkLoop :link="tag" />
      <LinkTags :tags="tag.tags" />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LinkLoop from "../components/dir/LinkLoop.vue";
import LinkTags from "../components/dir/LinkTags.vue";
const route = useRoute(); // <--- this is the magic line
const tagRoute = route.params.name; // (it is reactive)

const tagLinks = ref([]);

const tagUrl = `http://localhost:5000/api/v1/links/?tags=${tagRoute}`;

const getTagLinks = async () => {
  const response = await fetch(tagUrl);
  const data = await response.json();
  const _lyst = data.data;
  _lyst.forEach((item) => {
    tagLinks.value.push(item);
  });
};

onMounted(() => {
  getTagLinks(tagRoute);
});
</script>
