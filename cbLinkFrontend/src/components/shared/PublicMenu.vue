<template>
  <div class="relative border-b border-gray-200 pb-5">
    <div class="md:flex md:items-center md:justify-between">
      <div class="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Share
        </button>
        <button
          type="button"
          class="ml-3 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Create
        </button>
      </div>
    </div>
    <div class="mt-4">
      <div class="sm:hidden">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select
          id="current-tab"
          name="current-tab"
          class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8 ml-5">
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
            >{{ tab.name }}</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { name: "Home", href: "/", current: true },
  { name: "Admin", href: "/admin", current: false },
  { name: "Submit Link", href: "#", current: false },
  { name: "Get A Directory", href: "#", current: false },
  { name: "Help", href: "/page/help", current: false },
];
</script>
