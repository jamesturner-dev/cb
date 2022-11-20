<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-500">
          Forgot your password?
        </h2>
        <p class="mt-2 text-center text-sm text-neutral-600">
          Enter your email to reset your password or
          <a
            href="/user/register"
            class="font-medium text-violet-800 hover:text-purple-500">
            sign up if you are a new user.
          </a>
        </p>
      </div>
      <form @submit.prevent="" class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="dark:bg-black dark:border-gray-900 relative mb-1 block w-full appearance-none rounded-none rounded-t-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Email address" />
        </div>

        <div>
          <button
            @click="login"
            type="submit"
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
        "/api/v1/auth/forgotpassword",
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
