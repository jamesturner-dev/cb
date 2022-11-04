<template>
  <div>
    {{ cb }}
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); // <--- this is the magic line
const cb = route.params.cb; // (it is reactive)

const longUrl = [];

const url = `http://localhost:5000/api/v1/links/?shortUrl=${cb}&select=longUrl`;

const getLink = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const x = data.data;
  x.forEach((item) => {
    longUrl.push(item);
  });
  console.log(longUrl[0].longUrl);
  window.location.href = longUrl[0].longUrl;
};

onMounted(() => {
  // getLink();
});
</script>
