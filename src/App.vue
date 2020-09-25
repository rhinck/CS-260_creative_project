<template>
  <div id="app">
    <AppNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/AppNavbar";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style></style>
