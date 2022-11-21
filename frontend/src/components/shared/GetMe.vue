<template>
  <section class="pt-4 text-sm mr-2 leading-3 text-gray-600">
   wtf
  </section>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },

  mounted() {
    let my_cookie_value = this.cookies.get("token");
    console.log(my_cookie_value);
  }
};
</script>
