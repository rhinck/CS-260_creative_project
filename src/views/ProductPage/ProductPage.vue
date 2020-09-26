<template>
  <div>
    <!-- Search bar -->
    <section class="searchbar px-2 w-100">
      <b-form-input placeholder="Location" class="mx-2"></b-form-input>
      <b-form-input placeholder="Price" class="mx-2"></b-form-input>
      <b-form-input placeholder="Keyword" class="mx-2"></b-form-input>
      <b-button class="mx-2 mt-2 mt-md-0">Search</b-button>
    </section>
    <b-row class="mx-1">
      <b-col cols="12" md="7">
        <h1 class="text-center my-4">
          Apartments near you
        </h1>
        <b-row>
          <b-col
            v-for="(apartment, index) in apartments"
            :key="index"
            cols="12"
            md="4"
            class="px-2"
          >
            <b-card
              :img-src="apartment.listingImg"
              img-alt="Image"
              img-top
              style="max-width: 20rem;"
              class="mb-2"
            >
              <h4>${{ apartment.price }}</h4>

              <p class="text-secondary font-weight-light">
                {{ apartment.address.line1 }} <br />
                {{ apartment.address.line2 }}
              </p>

              <b-card-text>
                {{ apartment.description }}
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="5" class="mt-1 pr-0">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </b-col>
    </b-row>
    <!-- Apartment grid -->
    <!-- Map -->
  </div>
</template>

<script>
export default {
  data: () => ({
    apartments: [
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
      {
        listingImg:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description:
          "Located in central Provo, the ammenities are one of the biggest selling points of this apartment.",
        title: "",
        price: 449,
        address: {
          line1: "1234 West East Lane",
          line2: "Provo, UT 84601",
        },
      },
    ],
  }),
};
</script>

<style scoped>
@media screen and (min-width: 576px) {
  .searchbar {
    display: flex;
    flex-direction: row;
  }
}

iframe {
  height: calc(100vh - 130px);
  width: 100%;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
