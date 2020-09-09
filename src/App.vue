<template>
  <div id="app">
    <AppNavbar />
    <Home />
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/AppNavbar";
import Home from "@/views/Home/Home.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    Home,
  },
};
</script>

<style></style>
