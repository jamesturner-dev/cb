<template>
  <section class="px-2 divide-y divide-gray-200 dark:divide-gray-800">

    <select v-model="selected"
      class="cbSelect dark:border-gray-900 dark:bg-black dark:text-gray-300">
      <option v-for="tab in tabs" :value="tab.name" class="text-gray-600 dark:bg-black">
        {{ tab.name }}
      </option>
    </select>

    <div v-if="selected == 'Add CbLink'">
      <CurrentLink />
      <DirectoryHeader />
      <SubmitLink />
    </div>

    <div v-if="selected == 'Latest Links'">
      <LatestLinks />
    </div>

    <div v-if="selected == 'Directory View'">
      <DirectorySection />
    </div>

    <div v-if="selected == 'Suggested Links'">
      <SuggestedLinks />
    </div>

    <div v-if="selected == 'Edit Link'">
      <EditLink />
    </div>

  </section>
</template>

<script setup>
import DirectoryHeader from "../components/shared/DirectoryHeader.vue";
import CurrentLink from "../components/shared/CurrentLink.vue";
import SubmitLink from "../components/admin/SubmitLink.vue";
import LatestLinks from "../components/admin/LatestLinks.vue";
import DirectorySection from "../components/shared/DirectorySection.vue";
import SuggestedLinks from "../components/admin/SuggestedLinks.vue";
import EditLink from "../components/admin/EditLink.vue";
import { ref } from "vue";

const tabs = [
  { name: "Add CbLink", href: "#", current: true },
  { name: "Update Link", href: "#", current: false },
  { name: "Directory View", href: "#", current: false },
  { name: "Latest Links", href: "#", current: false },
  { name: "Suggested Links", href: "#", current: false },
  { name: "Edit Link", href: "#", current: false },
  { name: "Spin up a New Instance of the thing", href: "#", current: false },
];

const selected = ref(tabs[0].name);

</script>
