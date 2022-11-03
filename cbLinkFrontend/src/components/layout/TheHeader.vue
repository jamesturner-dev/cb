<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <a href="/admin" class="flex">
            <img
              class="h-24 rounded-full mr-2"
              src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/38e6afbc-8036-4227-a33e-81ad5db8d100/public"
              alt="Salt Ape's cb.link" />
          </a>
          <div>
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
              cb<span class="text-purple-700">.</span>link by
              <span class="text-purple-700">Salty</span>Ap3
            </h1>
            <a
              class="text-gray-500 hover:text-black dark:hover:text-white"
              href="https://github.com/jamesturner-dev/cb"
              >The Github Repository</a
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
