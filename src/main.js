import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// TODO: Add in the global SCSS files for Vue Bootstr ap



  const data = { apartments: [
    {
      listingImg:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 449,
      address: {
        line1: "1234 West East Lane",
        line2: "Provo, UT 84601",
      },
    },
    {
      listingImg:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80",
      description: "Located on planet earth, very cozy.",
      listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 220,
      address: {
        line1: "2020 Fake Drive",
        line2: "Provo, UT 84601",
      },
    },
    {
      listingImg:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
      description: "Probably the best apartment in the milkyway.",
      listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 449,
      address: {
        line1: "0000 Phony Way",
        line2: "Provo, UT 84601",
      },
    },
    {
      listingImg:
        "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
      description: "Only a 10 minute walk from BYU.",
      listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 675,
      address: {
        line1: "1234 West East Lane",
        line2: "Provo, UT 84601",
      },
    },
    {
      listingImg:
        "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
      description:
        "Directly across the street from the Provo City Temple which means easy access to worship worship.",
        listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 449,
      address: {
        line1: "75 S University Ave",
        line2: "Provo, UT 84601",
      },
    },
    {
      listingImg:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
      description:
        "This budget friendly apartment comes with a free bag of moldy chips in the cupboard.",
        listingDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus
        atque, vel mollitia autem dignissimos quas. Doloremque ullam, deleniti
        et dolores pariatur animi consequatur, libero ut modi dolor explicabo
        deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi natus atque, vel mollitia autem dignissimos quas. Doloremque
        ullam, deleniti et dolores pariatur animi consequatur, libero ut modi
        dolor explicabo deserunt!`,
      title: "",
      price: 325,
      address: {
        line1: "562 N 800 E",
        line2: "Provo, UT 84601",
      },
    },
  ] }


new Vue({
  data,
  router,
  render: (h) => h(App)
}).$mount("#app");
