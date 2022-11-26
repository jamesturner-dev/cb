<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-5">

      <h2 class="cbHeader">Forgot your password?</h2>
      <p class="cbMore">
        Enter your email to reset your password or
        <a href="/user/register" class="font-medium text-violet-800 hover:text-purple-500">
          sign up if you are a new user.
        </a>
      </p>

      <form @submit.prevent="" class="mt-8 space-y-3">
        <div class="-space-y-px rounded-md shadow-sm">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
            class="dark:bg-black dark:border-gray-900 relative mb-1 block w-full appearance-none rounded-none rounded-t-md border border-neutral-300 px-3 py-2 text-gray-900 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Email address" />
        </div>
        <button @click="login" type="submit"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-700 bg-opacity-75 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Sign in
        </button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      errors: [],
      email: "",
      password: "",
      token: "",
    };
  },

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
        "http://localhost:5000/api/v1/auth/forgotpassword",
        requestOptions
      );

      const data = await response.json();
      this.token = data.token;
      console.log(this.token);
      // localStorage.setItem("token", this.token);
      if (this.token) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
