<template>
  <div v-if="valid"></div>
  <div v-else class="py-20 px-5 grid place-items-center">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="responseCode"> 418 </p>
        <div class="sm:ml-6">
          <ContentHeading :content = "content" />
          <BigButtons  />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import ContentHeading from "../components/shared/ContentHeading.vue";
import BigButtons from "../components/shared/BigButtons.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); // <--- this is the magic line
const cb = route.params.cb; // (it is reactive)
const url = `/api/v1/links/?shortUrl=${cb}&select=longUrl`;
const valid = ref(true);

const getLink = async () => {
  const response = await fetch(url);
  const data = await response.json();
  if (data.data.length != 0) {
    // data.data is always a list, even if it has only one element - duh!
    window.location.href = data.data[0].longUrl;
  } else {
    valid.value = false;
  }
};

// I have not figured out how to impliment type yet...
const content = [
  {
    type: "h1",
    text: "cbLink not found",
  },
  {
    type: "p",
    text: "This is not your fault.  Please choose your own adventure below.",
  },
];

onMounted(() => {
  getLink();
});
</script>
