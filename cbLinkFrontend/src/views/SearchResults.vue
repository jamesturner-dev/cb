<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const searchTerm = route.params.searchTerm; // (it is reactive)
const returnedLinks = ref([]);
const linkCount = ref([]);

const getSearchedLinks = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchTerm: searchTerm,
    }),
  };

  const response = await fetch(
    "/api/v1/search",
    requestOptions
  );

  const data = await response.json();
  linkCount.value.push(data.count);
  const lyst = data.data;
  lyst.forEach((item) => {
    returnedLinks.value.push(item);
  });
};

const getURL = (id) => {
  return `/cat/${id}`;
};

onMounted(() => {
  try {
    getSearchedLinks();
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <section>
    <h3 class="mt-5 ml-3">{{ linkCount[0] }} Search Results</h3>
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800 mt-5">
      <li v-for="(link, i) in returnedLinks" :key="i" class="py-4">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900 dark:text-gray-600">
            <a :href="link.longUrl" class="text-xl hover:text-purple-600 textLink">
              {{ link.title }}
            </a>
          </p>
          <p class="text-xs text-gray-400">
            <a :href="getURL(link.category)">
              Filed under:
              <span class="text-purple-600">{{ link.category }}</span>
            </a>
            &nbsp; . &nbsp;
            Created on {{ link.createdAt.slice(0, 10) }}
            &nbsp; . &nbsp; Rated:
            <span class="text-purple-600">
              {{ link.rating }}
            </span>
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            {{ link.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
