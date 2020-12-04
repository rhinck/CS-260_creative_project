<template>
  <div id="app">
    <AppNavbar />
    <v-app>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
    <!-- // TODO: Make component -->
    <div class="text-center my-5">
      <a
        href="https://github.com/rhinck/CS-260_creative_project"
        target="_blank"
        ><i
          class="fa fa-2x fa-github"
          aria-hidden="true"
          style="color: black"
        ></i
      ></a>
      <p class="mt-1">Made by: Dallin Davis and Robert Hinckley (2020)</p>
    </div>
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
