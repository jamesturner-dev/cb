<template>
  <div>
    <h3 class="text-sm font-medium text-neutral-400">Users:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in users" :key="item.name">
        <a :href="item.href"
          class="px-2 py-1 text-sm dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
 const users = [
    { name: "User Login", href: "/user/login" },
    { name: "Sign Up", href: "/user/register" },
    { name: "Forgot Password", href: "/user/forgot" },
    { name: "User Help", href: "/page/help" },
  ]
</script>