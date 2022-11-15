<template>
  <div class="pb-8 xl:grid xl:grid-cols-4 xl:gap-8 footer-links">
    <div class="grid grid-cols-2 gap-8 xl:col-span-4">
      <div class="md:grid md:grid-cols-2 md:gap-8">

        <FooterImage />

        <FooterCategories />

      </div>

      <div class="md:grid md:grid-cols-2 md:gap-8">
        
        <FooterInternal />

        <FooterExternal />

      </div>
    </div>
  </div>
</template>

<script setup>
import FooterImage from "./FooterImage.vue";
import FooterCategories from "./FooterCategories.vue";
import FooterInternal from "./FooterInternal.vue";
import FooterExternal from "./FooterExternal.vue";
const navigation = {
  internal: [
    { name: "Home Page", href: "/" },
    { name: "James' Resume", href: "https://cv.jamesturner.dev/" },
    { name: "James Twitter", href: "https://twitter.com/JamesTurnerDev" },
    { name: "About cb.link", href: "/page/about" },
  ],
  categories: [
    { name: "Technology", href: "/cat/technology" },
    { name: "News Services", href: "/cat/news" },
    { name: "Online Services", href: "/cat/services" },
    { name: "Podcasts", href: "/cat/podcast" },
  ],
  friends: [
    { name: "User Login", href: "/user/login" },
    { name: "Sign Up", href: "/user/register" },
    { name: "Forgot Password", href: "/user/forgot" },
    { name: "User Help", href: "/page/help" },
  ],
  external: [
    { name: "Salty Resume", href: "https://cv.jamesturner.dev/" },
    { name: "Salty Twitter", href: "https://twitter.com/SaltyAp3" },
    { name: "Tweet 'O the Day", href: "https://tweetotheday.com" },
    { name: "Headlin3s", href: "https://headlin3s.com" },
  ],
};
</script>
