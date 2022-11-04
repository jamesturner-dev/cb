<template>
  <section>
    <div class="mt-5 tabs w-100">
      <select
        v-model="selected"
        @change="tabChange()"
        class="w-90 rounded-md border border-gray-200 dark:border-gray-900 dark:bg-black dark:text-gray-300">
        <option
          v-for="tab in tabs"
          :value="tab.name"
          class="text-gray-600 dark:bg-black">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div
      v-if="selected == 'Add CbLink'"
      class="mt-5 divide-y divide-gray-200 dark:divide-gray-800">
      <CurrentLink />
      <TheDirectory />
      <SubmitLink />
    </div>

    <div
      v-if="selected == 'Latest Links'"
      class="mt-5 divide-y divide-gray-200 dark:divide-gray-800">
      <LatestLinks />
    </div>

    <div
      v-if="selected == 'Directory View'"
      class="mt-5 divide-y divide-gray-200 dark:divide-gray-800">
      <DirectorySection />
    </div>
  </section>
</template>

<script setup>
import TheDirectory from "../components/shared/TheDirectory.vue";
import CurrentLink from "../components/shared/CurrentLink.vue";
import SubmitLink from "../components/admin/SubmitLink.vue";
import LatestLinks from "../components/shared/LatestLinks.vue";
import DirectorySection from "../components/admin/DirectorySection.vue";

import { ref } from "vue";

const tabs = [
  { name: "Add CbLink", href: "#", current: true },
  { name: "Update Link", href: "#", current: false },
  { name: "Directory View", href: "#", current: false },
  { name: "Latest Links", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
  { name: "Contacts", href: "#", current: false },
  { name: "Spin up a New Instance of the thing", href: "#", current: false },
];

const selected = ref(tabs[0].name);
const tabChange = function (tab) {
  console.log(selected.value);
};
</script>
