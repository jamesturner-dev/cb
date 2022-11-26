<script setup>
import { ref, onMounted } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import swal from "sweetalert2";

const similarAndRelated = ref(true);
const cbTitle = ref("");
const cbDescription = ref("");
const cbURL = ref("");
const cbTags = ref("");
const latestLinks = ref([]);
const selectedSimilar = ref(latestLinks[0]);

const { get } = useCookies(['token'], { doNotParse: false, autoUpdateDependencies: false })
const cookieToken = get('token')

const cats = [
  "technology",
  "crypto",
  "blog",
  "electronics",
  "podcast",
  "music",
  "art",
  "offline",
  "video",
  "business",
  "food",
  "media",
  "news",
  "sports",
  "services",
  "travel",
  "social",
  "politics",
  "people",
  "software",
  "other",
];

const currentCat = ref(cats[0]);

const handleSubmit = async () => {

  if (!cookieToken) {
    swal.fire({
      title: "Error",
      text: "You must be logged in to submit a link",
      icon: "error",
    });
    return;
  }

  if (cbTitle.value === undefined || cbTitle.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a Title",
    });
    return;
  }

  if (cbDescription.value === undefined || cbDescription.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a Description",
    });
    return;
  }

  if (cbURL.value === undefined || cbURL.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a URL",
    });
    return;
  }

  // remove hard coded directory...  
  const apiURL = `http://localhost:5000/api/v1/dir/63596b8b96fc5870f9bbfbf3/links`;
  const tagList = cbTags.value.split(",").map((e) => e.trim());

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${cookieToken}`,
    },
    body: JSON.stringify({
      title: cbTitle.value,
      description: cbDescription.value,
      longUrl: cbURL.value,
      tags: tagList,
      category: currentCat.value,
      similar: selectedSimilar.value,
      related: [],
    }),
  });

  try {
    const data = await response.json();
    const result = data.success;
    const directory = "63596b8b96fc5870f9bbfbf3";
    swal
      .fire({
        title: result,
        text: `Your link has been added to the directory: ${directory}`,
        icon: "success",
        confirmButtonText: "Cool",
      })
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.log(error);
  }
};

const getLatestLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/links");
  const data = await response.json();
  const lyst = data.data;
  lyst.forEach((item) => {
    latestLinks.value.push(item);
  });
};

const fireLogger = () => {
  console.log(`${currentCat.value}`);
};

onMounted(() => {
  try {
    getLatestLinks();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <form>
    <dl>
      <div class="grid grid-cols-3 gap-3 mt-5 pt-2">
        <dt class="pt-3 text-sm font-medium text-gray-500">URL:</dt>
        <dd class="flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text"
              class="cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
              v-model="cbURL" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-3 pt-2">
        <dt class="pt-3 mt-5 text-sm font-medium text-gray-500">Title:</dt>
        <dd class="pt-3 flex text-xs text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text"
              class="cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600 cblink-input"
              v-model="cbTitle" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-3 pt-2">
        <dt class="pt-5 text-sm font-medium text-gray-500">Description</dt>
        <dd class="pt-5 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <textarea rows="4" cols="50"
              class="cblink-input cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
              v-model="cbDescription" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-3 pt-2">
        <dt class="pt-3 text-sm font-medium text-gray-500">Category:</dt>
        <dd class="pt-3 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <select id="selected-tab" name="selected-tab" v-model="currentCat" on-change="fireLogger()"
              class="mt-1 block w-full rounded-md cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
              <option v-for="cat in cats" :key="cat">
                {{ cat }}
              </option>
            </select>
          </span>
        </dd>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="pt-3 text-sm font-medium text-gray-500">Tags:</dt>
        <dd class="flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text"
              class="cblink-input cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
              v-model="cbTags" />
          </span>
          <span class="pt-3 ml-4 flex flex-shrink-0 items-start space-x-4">
            <button type="button" @click="fireLogger"
              class="rounded-md bg-white dark:bg-opacity-10 px-1 py-0.5 font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Update
            </button>
            <span class="text-gray-300" aria-hidden="true">|</span>
            <button type="button"
              class="rounded-md bg-white dark:bg-opacity-10 px-1 py-0.5 font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Remove
            </button>
          </span>
        </dd>
      </div>
      <SwitchGroup as="div" class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
        <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive>Show Similar and Related</SwitchLabel>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <Switch v-model="similarAndRelated" :class="[
            similarAndRelated ? 'bg-purple-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto',
          ]">
            <span aria-hidden="true" :class="[
              similarAndRelated ? 'translate-x-5' : 'translate-x-0',
              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            ]" />
          </Switch>
        </dd>
      </SwitchGroup>

      <div v-if="similarAndRelated"
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 divide-y divide-gray-200 dark:divide-gray-800">
        <dt class="pt-3 text-sm font-medium text-gray-500">Similar:</dt>
        <dd class="pt-3 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <div class="mt-5 tabs w-100">
            <select v-model="selectedSimilar"
              class="w-90 rounded-md border-2 cblink-input bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600">
              <option v-for="link in latestLinks" :value="link._id" class="text-gray-600">
                {{ link.title }} : {{ link._id }}
              </option>
            </select>
          </div>
        </dd>
      </div>
    </dl>
    <div class="mt-10 grid content-center mx-10">
      <button type="button"
        class="w-50 mx-10 rounded-md border-2 px-2 py-1 mb-5 border-purple-600 font-medium text-purple-600 hover:border-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        v-on:click.prevent="handleSubmit()">
        Create New CBLink
      </button>
    </div>
  </form>
</template>
