<template>
  <section>
    <div class="m-10" v-for="(link, i) in returnedLinks" :key="i">
      <a :href="link.longUrl" class="text-xl textLink">{{ link.title }}</a>

      <p class="py-5">
        {{ link.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
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

onMounted(() => {
  try {
    getSearchedLinks();
    linkCount = returnedLinks.value.length;
  } catch (error) {
    console.log(error);
  }
});
</script>
