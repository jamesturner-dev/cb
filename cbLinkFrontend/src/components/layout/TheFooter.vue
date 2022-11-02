<template>
  <footer class="mx-5" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="bg-neutral-700 bg-opacity-10 p-5 mt-5 rounded-t-md">
      <FooterLinks />
      <FooterNav />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from "./FooterNav.vue";
import FooterLinks from "./FooterLinks.vue";
</script>
