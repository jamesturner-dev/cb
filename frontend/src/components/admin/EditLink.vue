<script setup>
import { ref, onMounted, watch } from "vue";
import swal from "sweetalert2";
const latestLinks = ref([]);
const selectedLink = ref(latestLinks[0]);
var title = ref("");
var cbLink = ref({
});

const toggleLinkChosen = ref(false);

const chooseLink = async () => {

  const getSelectedURL = `http://localhost:5000/api/v1/links/ById/${selectedLink.value}`;

  const response = await fetch(getSelectedURL);
  const data = await response.json();
  cbLink = data.data;
  title = cbLink.title;
  console.log(title)
  toggleLinkChosen.value = true;
};



const handleEdit = async () => {

};




  // const response = await fetch(apiURL, {
  //   method: "PUT",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({
  //     title: cbTitle.value,
  //     description: cbDescription.value,
  //     longUrl: cbURL.value,
  //     tags: tagList,
  //     category: currentCat.value,
  //     similar: selectedSimilar.value,
  //     related: [],
  //   }),
  // });

  // try {
  //   const data = await response.json();
  //   const result = data.success;
  //   const directory = "63596b8b96fc5870f9bbfbf3";
  //   swal
  //     .fire({
  //       title: result,
  //       text: `Your link has been added to the directory: ${directory}`,
  //       icon: "success",
  //       confirmButtonText: "Cool",
  //     })
  //     .then(() => {
  //       // window.location.reload();
  //       console.log("reload");
  //     });
  // } catch (error) {
  //   console.log(error);
  // }


const getLatestLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/links");
  const data = await response.json();
  const _lyst = data.data;
  _lyst.forEach((item) => {
    latestLinks.value.push(item);
  });
};

const fireLogger = () => {
  console.log(`selected link value: ${selectedLink.value}`);
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
  {{ selectedLink }}
  <section class="mb-5">
    <div v-if="toggleLinkChosen"
      class="cursor-pointer inline-block flex-shrink-0 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-3 pt-1 pb-1 text-sm font-medium mx-2 hover:bg-purple-500 hover:text-white hover:dark:bg-purple-700">
      You are editing link:
      <span class="text-black font-bold">{{ selectedLink }}</span>
    </div>

    <form v-if="!toggleLinkChosen" class="grid grid-cols-4 mt-10 items-center justify-center">

      <dt class="p-3 text-sm font-medium text-gray-500">
        Choose Link to Edit:
      </dt>

      <dd class="flex text-sm text-gray-900 col-span-2">
        <div class=" tabs w-100">
          <select v-model="selectedLink" v-on:click="fireLogger"
            class="w-90 rounded-md border-2 cblink-input bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600">
            <option v-for="link in latestLinks" :value="link._id" class="text-gray-600">
              {{ link.title }} : {{ link._id }}
            </option>
          </select>
        </div>
      </dd>

      <button type="button" @click="chooseLink"
        class="rounded-md bg-white dark:bg-gray-900 px-1 py-0.5 font-medium text-purple-600 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
        Choose Link
      </button>

    </form>

    <form v-if="toggleLinkChosen">
      <dl>
        <div class="grid grid-cols-3 gap-3 mt-5 pt-2">
          <dt class="pt-3 text-sm font-medium text-gray-500">URL:</dt>
          <dd class="flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">
              <input type="text"
                id="url"
                class="cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
                :value="cbLink.longUrl"
                 />
            </span>
          </dd>
        </div>

        <div class="grid grid-cols-3 gap-3 pt-2">
          <dt class="pt-3 mt-5 text-sm font-medium text-gray-500">Title:</dt>
          <dd class="pt-3 flex text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">
              <input type="text"
                class="cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600 cblink-input"
                v-model.lazy="title" 
                />
            </span>
          </dd>
        </div>

        <div class="grid grid-cols-3 gap-3 pt-2">
          <dt class="pt-5 text-sm font-medium text-gray-500">Description</dt>
          <dd class="pt-5 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">
              <textarea rows="4" cols="50"
                class="cblink-input cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
                v-model="selectedLink.description" />
            </span>
          </dd>
        </div>

        <div class="grid grid-cols-3 gap-3 pt-2">
          <dt class="pt-5 text-sm font-medium text-gray-500">Category</dt>
          <dd class="pt-5 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">
              <textarea rows="4" cols="50"
                class="cblink-input cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
                v-model="selectedLink.category" />
            </span>
          </dd>
        </div>


        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="pt-3 text-sm font-medium text-gray-500">Tags:</dt>
          <dd class="flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">
              <input type="text"
                class="cblink-input cblink-input border-2 bg-white border-gray-300 dark:bg-black dark:bg-opacity-95 dark:border-gray-800 dark:text-gray-600"
                v-model="selectedLink.tags" />
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


      </dl>
      <div class="mt-10 grid content-center mx-10">
        <button type="button"
          class="w-50 mx-10 rounded-md border-2 px-2 py-1 mb-5 border-purple-600 font-medium text-purple-600 hover:border-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          v-on:click.prevent="handleEdit()">
          Edit CBLink
        </button>
      </div>
    </form>
  </section>
</template>
