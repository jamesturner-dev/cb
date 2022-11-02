<template>
  <section class="pt-4 text-sm mr-2 leading-3 text-neutral-600">
    {{ me }}
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      errors: [],
      me: null,
    };
  },

  methods: {
    async getMe() {
      const apiURL = "http://localhost:5000/api/v1/auth/me";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2E1MTRiNWQyYzEyYzc0NDliZTA0MiIsImlhdCI6MTY2NDcxMTI2NywiZXhwIjoxNjY3MzAzMjY3fQ.BTPTz77tbKwJ3oNAjrKjrT3YcqssHWSSX41HDxOvv2s";
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`, // notice the Bearer before your token
        },
      });
      const data = await response.json();
      console.log(data);
      this.me = data.data.name;
    },
  },

  mounted() {
    try {
      this.getMe();
    } catch (err) {
      console.log(err);
      this.errors.push(err);
    }
  },
};
</script>
