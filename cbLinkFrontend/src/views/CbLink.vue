<template>
  <div v-if="valid"></div>
  <div
    v-else
    class="min-h-full bg-white dark:bg-black px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p
          class="text-4xl font-bold tracking-tight text-purple-700 sm:text-5xl">
          404
        </p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
              Page not found
            </h1>
            <p class="mt-1 text-base text-gray-500">
              Please check the URL in the address bar and try again.
            </p>
          </div>
          <div
            class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <a
              href="/"
              class="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Go back home
            </a>
            <a
              href="/page/help"
              class="inline-flex items-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Get Some Help
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div>
    <!-- {{ cb }}
    <br />
    {{ routePath }}
    <br />

    <br /> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
const route = useRoute(); // <--- this is the magic line
const cb = route.params.cb; // (it is reactive)
const routePath = route.path;

const longUrl = [];
const url = `http://localhost:5000/api/v1/links/?shortUrl=${cb}&select=longUrl`;

const valid = ref(true);

const getLink = async () => {
  const response = await fetch(url);
  const data = await response.json();

  if (data.data.length != 0) {
    const x = data.data;
    x.forEach((item) => {
      longUrl.push(item);
    });

    if (longUrl.length != 0) {
      window.location.href = longUrl[0].longUrl;
      // console.log(longUrl[0].longUrl);
    }
  } else {
    valid.value = false;
  }
};

onMounted(() => {
  getLink();
});
</script>
