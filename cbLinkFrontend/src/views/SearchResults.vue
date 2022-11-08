<template>
  <section>
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800 mt-5">
      <li v-for="(link, i) in returnedLinks" :key="i" class="py-4">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900 dark:text-gray-600">
            <a
              :href="link.longUrl"
              class="text-xl hover:text-purple-600 textLink">
              {{ link.title }}
            </a>
          </p>

          <p class="text-xs text-gray-400">
            <a :href="getURL(link.category)">
              Filed under:
              <span class="text-purple-600">{{ link.category }}</span>
            </a>
            &nbsp; . &nbsp;
            <!-- This kinda thing has caused issued in the past so I used a function, but so far... -->
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

<script setup>
import LinkTags from "../components/dir/LinkTags.vue";
import LinkLoop from "../components/dir/LinkLoop.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
const route = useRoute(); // <--- this is the magic line

const searchTerm = route.params.searchTerm; // (it is reactive)
const returnedLinks = ref([]);
var linkCount = 0;

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
    linkCount = returnedLinks.value.length;
  } catch (error) {
    console.log(error);
  }
});
</script>
