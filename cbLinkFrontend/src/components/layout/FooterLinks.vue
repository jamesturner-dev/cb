<template>
  <div class="pb-8 xl:grid xl:grid-cols-4 xl:gap-8 footer-links">
    <div class="grid grid-cols-2 gap-8 xl:col-span-4">
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <a href="/" class="flex">
            <img
              class="h-32 mr-2"
              src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/38e6afbc-8036-4227-a33e-81ad5db8d100/public"
              alt="Salt Ape's cb.link" />
          </a>
        </div>

        <div class="mt-12 md:mt-0">
          <h3 class="text-sm font-medium text-neutral-400">Categories:</h3>
          <ul role="list" class="mt-4 space-y-4">
            <li v-for="item in navigation.categories" :key="item.name">
              <a :href="item.href"
                class="px-2 text-sm dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 class="text-sm font-medium text-neutral-400">Users:</h3>
          <ul role="list" class="mt-4 space-y-4">
            <li v-for="item in navigation.friends" :key="item.name">
              <a :href="item.href"
                class="px-2 py-1 text-sm dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-12 md:mt-0">
          <h3 class="text-sm font-medium text-neutral-400">External:</h3>
          <ul role="list" class="mt-4 space-y-4">
            <li v-for="item in navigation.external" :key="item.name">
              <a :href="item.href"
                class="px-2 py-1 text-sm dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
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
