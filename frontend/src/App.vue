<template>
  <div v-if="isCB">
    <main class="flex-1 relative mx-auto max-w-4xl mt-5">
      <div class="cbContain dark:bg-black dark:bg-opacity-50 dark:border-gray-900">
        <router-view :key="$route.fullPath" />
      </div>
    </main>
  </div>

  <div v-else>
    <div class="min-h-full dark:bg-black dark:bg-opacity-95">
      <SearchForm />
      <main class="flex-1 relative mx-auto max-w-4xl mt-5">
        <div class="cbContain dark:bg-black dark:bg-opacity-50 dark:border-gray-900">
          <Header />
          <PublicMenu />
          <router-view :key="$route.fullPath" />
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
import PublicMenu from "./components/shared/PublicMenu.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); // <--- this is the magic line
const isCB = ref(false);

onMounted(() => {
  if (route.fullPath.includes("/cb/")) {
    isCB.value = true;
  }
});

</script>
