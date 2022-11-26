<template>
  <section>

    <ResultsHeader :content="[`${returnedLinks.length} results returned for`, searchTerm]" />

    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800">
      <li v-for="(link, i) in returnedLinks" :key="i" class="py-4 ml-3">

        <p class="cbP dark:text-gray-600">
          <a :href="link.longUrl" class="text-xl hover:text-purple-600 textLink">
            {{ link.title }}
          </a>
        </p>
        <p class="cbSub">
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

      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ResultsHeader from "../components/shared/ResultsHeader.vue";

const route = useRoute();
const searchTerm = route.params.searchTerm; // (it is reactive)
const returnedLinks = ref([]);
const content = [];

const getSearchedLinks = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchTerm: searchTerm,
    }),
  };

  const response = await fetch(
    "http://localhost:5000/api/v1/search",
    requestOptions
  );

  const data = await response.json();

  if (data.count != 0) {
    const _lyst = data.data;
    _lyst.forEach((item) => {
      returnedLinks.value.push(item);
    });
  }

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
