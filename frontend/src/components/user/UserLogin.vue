<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 cbHeader">
          Sign in to your account
        </h2>
        <p class="mt-2 cbMore">
          Or
          {{ " " }}
          <a href="/user/register" class="font-medium text-violet-800 hover:text-purple-500">
            sign up today to create a directory
          </a>
        </p>
      </div>
      <form @submit.prevent="" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
              class="dark:bg-black dark:border-gray-900 relative mb-1 block w-full appearance-none rounded-none rounded-t-md border border-neutral-300 px-3 py-2 text-gray-900 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
              required=""
              class="dark:bg-black dark:border-gray-900 relative block w-full appearance-none rounded-none rounded-b-md border border-neutral-300 px-3 py-2 text-gray-900 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <RememberMe />
          <MemberLink :login=true />
        </div>

        <div>
          <button @click="login" type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-700 bg-opacity-75 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MemberLink from './MemberLink.vue';
import RememberMe from './RememberMe.vue';
export default {
  data: function () {
    return {
      errors: [],
      email: "",
      password: "",
      token: "",
    };
  },
  props: ["tags"],
  components: { MemberLink, RememberMe },
  mounted() { },
  methods: {
    async login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/auth/login",
        requestOptions
      );
      const data = await response.json();
      this.token = data.token;

      if (this.token) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
