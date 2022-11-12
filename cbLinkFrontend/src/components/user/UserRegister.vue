<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-500">
          Register a new account.
        </h2>
        <p class="mt-2 text-center text-sm text-neutral-600">
          There are {{ freeSpotsRemaing }} free directories remaining.
        </p>
      </div>
      <form @submit.prevent="" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              v-model="name"
              name="name"
              type="text"
              autocomplete="name"
              required=""
              class="relative block w-full appearance-none rounded-none border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Name" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full appearance-none rounded-none border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password" />
          </div>
          <div>
            <label for="confirm-password" class="sr-only">Password</label>
            <input
              id="confirm-password"
              v-model="confirmPassword"
              name="confirm-password"
              type="password"
              autocomplete="confirm-password"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center"></div>

          <div class="text-sm">
            <a
              href="/user/login"
              class="font-medium text-indigo-600 hover:text-indigo-500">
              Already a Member?
            </a>
          </div>
        </div>

        <div>
          <button
            @click="register"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-700 bg-opacity-75 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Register
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
      name: "",
      confirmPassword: "",
      token: "",
      freeSpotsRemaing: null,
    };
  },

  components: {},

  mounted() {

    this.getCatLinks()

  },
  
  methods: {

    async getCatLinks () {
    const response = await fetch("http://localhost:5000/api/v1/count/users");
    const data = await response.json();
    
    if(data.data < 40){
      this.freeSpotsRemaing = 40 - data.data
    } else {
      this.freeSpotsRemaing = 0
    }



},

    async register() {
      if (this.password !== this.confirmPassword) {
        this.errors.push("Passwords do not match");
        return;
      }

      if (this.freeSpotsRemaing <= 0) {
        this.errors.push("No free spots remaining");
        return;
      }

      if (this.email === "" || this.password === "" || this.name === "") {
        this.errors.push("Please fill out all fields");
        return;
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/auth/register",
        requestOptions
      );
      const data = await response.json();
      this.token = data.token;
      console.log(this.token);
      // localStorage.setItem("token", this.token);
      if (this.token) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
