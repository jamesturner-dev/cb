<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <img
            class="h-8 w-8 rounded-full mr-2"
            src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bf3cb42a-ebe3-4717-2a16-4e54c6c79700/public"
            alt="" />
        </div>
        <div class="px-4 sm:px-6 md:px-0 flex">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
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
  </section>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());
</script>
