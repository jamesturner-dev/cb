<script setup>
import { ref, onMounted } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'
import Swal from "sweetalert2";

const latestLinks = ref([]);
const { get } = useCookies(['token'], { doNotParse: false, autoUpdateDependencies: false })
const cookieToken = get('token')

const getLatestLinks = async () => {
  const response = await fetch("http://localhost:5000/api/v1/links");
  const data = await response.json();
  const _lyst = data.data;
  _lyst.forEach((item) => {
    latestLinks.value.push(item);
  });
};

const deleteLink = async (id) => {

  Swal.fire({
    title: "Are you sure?",
    text: `Delete link with id: ${id}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#5c048a",
    cancelButtonColor: "#ae01ff",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const apiURL = `http://localhost:5000/api/v1/links/${id}`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${cookieToken}`,
        },
      }

      const response = await fetch(apiURL, requestOptions);
      Swal.fire("Deleted!", result.toString(), "success");
    }
  });
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
  <section>
    <ul v-for="link in latestLinks" :key="link._id">
      <li class="border-b border-gray-300 dark:border-gray-900 p-3 w-100 dark:bg-black dark:text-white bg-white">
        <a class="p-2" :href="link.longUrl">{{ link.title }}</a> - short url:
        <span class="text-purple-300 font-bold">{{ link.shortUrl }}</span>
        <span
          class="ml-3 cursor-pointer inline-block flex-shrink-0 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 pt-0.5 pb-1 text-xs font-medium mr-2 hover:bg-purple-500 hover:text-white hover:dark:bg-purple-700">
          <a @click="deleteLink(link._id)"> Delete: {{ link._id }} </a>
        </span>
      </li>
    </ul>
  </section>
</template>
