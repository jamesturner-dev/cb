<template>
 <ResultsHeader :content="content" />
  <ul role="list" 
    class="mainGrid sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="tag in tagLinks" :key="tag._id"
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
import ResultsHeader from "../components/shared/ResultsHeader.vue";

const route = useRoute(); // <--- this is the magic line
const tagRoute = route.params.name; // (it is reactive)
const tagLinks = ref([]);
const tagUrl = `http://localhost:5000/api/v1/links/?tags=${tagRoute}`;

const content = ["Links Tagged", tagRoute];

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
