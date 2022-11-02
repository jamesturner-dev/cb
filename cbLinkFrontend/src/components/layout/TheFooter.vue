<template>
  <footer class="mx-auto max-w-4xl mt-5" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div
      class="bg-white p-5 pt-10 dark:bg-black dark:bg-opacity-50 dark:border-gray-900 border-r-4 rounded-t-lg">
      <FooterLinks />
      <FooterNav />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from "./FooterNav.vue";
import FooterLinks from "./FooterLinks.vue";
</script>
