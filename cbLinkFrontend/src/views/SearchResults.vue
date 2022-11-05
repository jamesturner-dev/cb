<script setup></script>

<template>
  <section>
    <main>
      <div v-if="docCount > 0">
        <div class="mx-5 p-10 text-gray-600">
          There are
          <span class="makeStrong"> {{ docCount }} </span>
          Search Results:
        </div>

        <div class="m-10 px-5 mt-0" v-for="(d, i) in searchData" :key="i">
          <a :href="d.href" class="text-xl textLink">{{ d.name }}</a>
          <p class="text-xs font-bold text-gray-400">
            <a :href="d.editRef" class="text-xs blackLink font-semibold">
              Edit Document
            </a>
            &nbsp; Satus: {{ d.status }} &nbsp; Created On: {{ d.created }}
          </p>
          <p class="displayText lg:w-4/5 pt-2">
            {{ d.description }}
          </p>
        </div>
      </div>

      <div v-else>
        <div class="displayText makeStrong">
          There were no documents or projects found.
        </div>
      </div>
    </main>

    <aside class="m-5">
      <div v-if="errors.length != 0">
        <Error :errors="errors" />
      </div>
    </aside>
  </section>
</template>
