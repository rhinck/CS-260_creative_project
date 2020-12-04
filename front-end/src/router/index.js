import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home/Home.vue";
import About from "@/views/About/About.vue";
import ContactUs from "@/views/ContactUs/ContactUs.vue";
import Apartments from "@/views/Apartments/Apartments.vue";
import Listing from "@/views/Listing/Listing.vue";
import CreateListing from "@/views/CreateListing/CreateListing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/apartments/",
    name: "Apartments",
    component: Apartments,
  },
  {
    path: "/create-listing",
    name: "CreateListing",
    component: CreateListing,
  },
  // TODO: Potentially nest this inside of apartments route in the future (refactor)
  {
    path: "/listing",
    name: "Listing",
    component: Listing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
