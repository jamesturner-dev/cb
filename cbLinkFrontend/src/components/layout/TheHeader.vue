<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <a href="/" class="flex">
            <img
              class="h-12 mr-2"
              src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/d452e93d-ae61-44d5-9b0c-dba19a7f2500/public"
              alt="Salt Ape's cb.link" />
          </a>
          <div>
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 -mb-1">
              cb<span class="text-purple-700">.</span>link by
              <span class="text-purple-700">Salty</span>Ap3
            </h1>
            <a
              class="text-gray-500 text-sm hover:text-black dark:hover:text-white"
              href="https://github.com/jamesturner-dev/cb"
              >(The Github Repository is here)</a
            >
          </div>
        </div>
      </div>
      <div>
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
    </div>
  </section>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());
</script>
