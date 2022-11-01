<template>
  <section class="h-full bg-gray-600 bg-opacity-10">
    <SearchForm />

    <main class="flex-1 relative mx-auto max-w-4xl">
      <div class="mt-5 p-5 bg-white border-r-4 rounded-t-lg">
        <PageHeading />

        <!-- <a @click="tabChange()" class="text-purple-600">Link</a> -->

        <div class="mt-5 tabs w-100">
          <select
            v-model="selected"
            @change="tabChange()"
            class="w-90 rounded-md border-2 border-gray-300">
            <option v-for="tab in tabs" :value="tab.name" class="text-gray-600">
              {{ tab.name }}
            </option>
          </select>
        </div>

        <div
          v-if="selected == 'Add CbLink'"
          class="mt-5 divide-y divide-gray-200">
          <CurrentLink />
          <TheDirectory />
          <SubmitLink />
        </div>

        <div
          v-if="selected == 'Latest Links'"
          class="mt-5 divide-y divide-gray-200">
          <LatestLinks />
        </div>

        <div
          v-if="selected == 'Directory View'"
          class="mt-5 divide-y divide-gray-200">
          <DirectorySection />
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import SearchForm from "./components/SearchForm.vue";
import PageHeading from "./components/PageHeading.vue";
import TheDirectory from "./components/TheDirectory.vue";
import CurrentLink from "./components/shared/CurrentLink.vue";
import SubmitLink from "./components/SubmitLink.vue";
import LatestLinks from "./components/LatestLinks.vue";
import DirectorySection from "./components/DirectorySection.vue";

import { ref } from "vue";

const tabs = [
  { name: "Add CbLink", href: "#", current: true },
  { name: "Directory View", href: "#", current: false },
  { name: "Latest Links", href: "#", current: false },
  { name: "Manage Headlin3s", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
  { name: "Contacts", href: "#", current: false },
  { name: "Spin up a New Instance of the thing", href: "#", current: false },
];

const selected = ref(tabs[0].name);
const tabChange = function (tab) {
  // currentTab.value = tab;
  console.log(selected.value);
};
</script>
