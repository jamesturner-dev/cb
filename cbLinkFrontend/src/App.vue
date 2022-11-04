<template>
  <div v-if="isCB">
    <main class="flex-1 relative mx-auto max-w-4xl mt-5">
      <div
        class="p-5 bg-white dark:bg-black dark:bg-opacity-50 dark:border-gray-900 border-r-4 rounded-t-lg">
        <router-view :key="$route.fullPath" />
      </div>
    </main>
  </div>

  <div v-else>
    <div class="min-h-full dark:bg-black dark:bg-opacity-95">
      <SearchForm />
      <main class="flex-1 relative mx-auto max-w-4xl mt-5">
        <div
          class="p-5 bg-white dark:bg-black dark:bg-opacity-50 dark:border-gray-900 border-r-4 rounded-t-lg">
          <Header />
          <router-view :key="$route.fullPath" />
          <!-- {{ $route.fullPath }}
          <br />
          {{ isCB }}
          <br /> -->
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
import SearchForm from "./components/shared/SearchForm.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); // <--- this is the magic line
const cb = route.params.cb; // (it is reactive)
const routePath = route.path;
const currentRoute = route.currentRoute;
const isCB = ref(false);

onMounted(() => {
  if (route.fullPath.includes("/cb/")) {
    isCB.value = true;
    console.log("isCB: ", isCB.value);
  }
});
</script>
