<script>

/* eslint-disable */
import { SearchIcon } from '@heroicons/vue/solid'
export default {
  data: function () {
    return {
      componentName: "Status",
      parentName: this.$route,
      status: "",
      searchTerm: "",
      picked: "",
    };
  },

  components: { SearchIcon},

  methods: {
    search: function () {
      window.location.href = `/search/${this.searchTerm}`;
    },
  },

};
</script>

<template>
  
  <section>
    
    <div class="fullWrap">
      <label for="search" class="sr-only">Search</label>
    
      <div class="relative ml-5 w-full">
        <div class="absolute inset-y-0 pl-2 flex items-center">
          <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
        </div>
        <input id="search" name="search" placeholder="Search" 
          type="search" v-model="searchTerm" @keyup.enter="search()"
          class="block searchInput" />
      </div>

      <button 
        type="button" v-on:click.prevent="search()" 
        @keyup.enter="search()" class="ml-3 wireframeBtn py-1">
        Search
      </button>

    </div>

  <div class="ml-10  mt-1 flex">
    <input type="radio" id="one" value="project"   
      v-model="picked" class="ml-3 text-xs accent-green-500" />
      
    <label for="one" class="mr-2 searchLabel">
      Project Search
    </label>

    <input type="radio" id="two" value="document" 
      v-model="picked" class="ml-2 text-xs text-green-500" />

    <label for="two" class="searchLabel">
      Document Search
    </label>
  </div>

</section>
  
</template>
