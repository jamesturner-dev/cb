<template>
  <ResultsHeader :content="content" />
  <ul role="list" class="mainGrid sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="cat in catLinks"
      :key="cat._id"
      class="col-span-1 divide-y divide-gray-200 dark:divide-gray-900 rounded-lg bg-white dark:bg-black dark:bg-opacity-90 shadow">
      <LinkLoop :link="cat" />
      <LinkTags :tags="cat.tags" />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LinkLoop from "../components/dir/LinkLoop.vue";
import LinkTags from "../components/dir/LinkTags.vue";
import ResultsHeader from "../components/shared/ResultsHeader.vue";

const route = useRoute(); // <--- this is the magic line
const catRoute = route.params.name; // (it is reactive)
const catLinks = ref([]);
const catUrl = `http://localhost:5000/api/v1/links/?category=${catRoute}`;
const content = ["Links in Category", catRoute];

const getCatLinks = async () => {
  const response = await fetch(catUrl);
  const data = await response.json();
  const lyst = data.data;
  lyst.forEach((item) => {
    catLinks.value.push(item);
  });
};

onMounted(() => {
  getCatLinks(catRoute);
});
</script>
