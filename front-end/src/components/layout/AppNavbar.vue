<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">Company Name</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-3">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/contact-us">Contact Us</b-nav-item>
        <b-nav-item to="/apartments">Find an Apartment</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/create-listing" link-classes="text-primary"
          >List Your Apartment</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
/* //TODO: Overwrite SCSS values for bootstrap */
.navbar-nav,
.nav-link {
  font-size: 1.2rem;
}

/* .navbar-light .navbar-nav .nav-link .special {
  color: blue !important;
} */
</style>
