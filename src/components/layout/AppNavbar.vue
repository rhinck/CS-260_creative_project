<template>
  <b-navbar class="absolute" toggleable="lg">
    <b-navbar-brand href="#">Company Name</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-3">
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Contact Us</b-nav-item>
        <b-nav-item href="#">Product Page</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto"> </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
/* //TODO: Overwrite SCSS values for bootstrap */
.navbar-nav,
.nav-link {
  font-size: 1.2rem;
}

.absolute {
  position: absolute;
  width: 100%;
}
</style>
