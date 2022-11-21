<template>
  <section>
    <div
      v-if="pageRoute == 'help'"
      class="mt-5 divide-y divide-gray-200 dark:divide-gray-800">
      <HelpPage />
    </div>

    <div
      v-if="pageRoute == 'about'"
      class="mt-5 divide-y divide-gray-200 dark:divide-gray-800">
      <AboutPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from "../components/page/AboutPage.vue";
import HelpPage from "../components/page/HelpPage.vue";
const route = useRoute(); // <--- this is the magic line
const pageRoute = route.params.name; // read parameter id (it is reactive)
</script>
