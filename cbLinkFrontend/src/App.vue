<template>
  <section class="h-full bg-gray-600 bg-opacity-10 dark:bg-gray-900">
    <SearchForm />

    <main class="flex-1 relative mx-auto max-w-4xl">
      <div class="mt-5 p-5 bg-white border-r-4 rounded-t-lg">
        <div class="flex">
          <div class="flex-1">
            <span>
              <img
                class="h-8 w-8 rounded-full mr-2"
                src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bf3cb42a-ebe3-4717-2a16-4e54c6c79700/public"
                alt="" />
            </span>
            <div class="px-4 sm:px-6 md:px-0">
              <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                Salty Ape Admin
              </h1>
            </div>
          </div>

          <Switch
            v-model="isDark"
            :class="isDark ? 'bg-purple-700' : 'bg-neutral-200'"
            class="relative inline-flex h-6 w-11 items-center rounded-full">
            <span class="sr-only">Toggle Dark Mode</span>
            <span
              :class="isDark ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
          </Switch>
        </div>

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
import { useDark, useToggle } from "@vueuse/core";
import SearchForm from "./components/SearchForm.vue";
import PageHeading from "./components/PageHeading.vue";
import TheDirectory from "./components/TheDirectory.vue";
import CurrentLink from "./components/shared/CurrentLink.vue";
import SubmitLink from "./components/SubmitLink.vue";
import LatestLinks from "./components/LatestLinks.vue";
import DirectorySection from "./components/DirectorySection.vue";

import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());

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
  console.log(selected.value);
};
</script>
