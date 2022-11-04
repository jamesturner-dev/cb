<template>
  <div v-if="$route.fullPath != '/'">
    <div class="min-h-full dark:bg-black dark:bg-opacity-95">
      <SearchForm />
      <main class="flex-1 relative mx-auto max-w-4xl mt-5">
        <div
          class="p-5 bg-white dark:bg-black dark:bg-opacity-50 dark:border-gray-900 border-r-4 rounded-t-lg">
          <Header />
          <router-view :key="$route.fullPath" />
        </div>
      </main>
      <Footer />
    </div>
  </div>

  <div v-else>
    <main class="flex-1 relative mx-auto max-w-4xl mt-5">
      <div
        class="p-5 bg-white dark:bg-black dark:bg-opacity-50 dark:border-gray-900 border-r-4 rounded-t-lg">
        <router-view :key="$route.fullPath" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
import SearchForm from "./components/shared/SearchForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    SearchForm,
  },
};
</script>
