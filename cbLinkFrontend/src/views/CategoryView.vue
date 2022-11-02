<template>
  {{ catRoute }}
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); // <--- this is the magic line
const catRoute = route.params.name; // read parameter id (it is reactive)
console.log(catRoute);
</script>
