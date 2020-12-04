<template>
  <b-container v-if="loaded">
    <b-row class="mt-5">
      <b-col cols="12" md="6">
        <div class="mx-3">
          <h6>{{ apartment.address.line1 }} {{ apartment.address.line2 }}</h6>

          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
            class="mt-3"
          >
            <b-carousel-slide
              img-src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://images.unsplash.com/photo-1520106392146-ef585c111254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1312&q=80"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
      <b-col class="d-flex flex-column align-items-center" cols="12" md="6">
        <h4>${{ apartment.price }}</h4>
        <br />
        <b-button class="mx-3 text-white" block variant="primary" size="lg"
          >Contact Seller</b-button
        >
        <div class="mt-3">
          <div class="details-cols">
            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2">fa-bed</v-icon>
                <h5>{{ apartment.details.beds }} Bedrooms</h5>
              </b-row>
            </b-card>

            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2"> fa-paw</v-icon>

                <h5>
                  {{ apartment.details.pets ? "Allowed" : "Not Allowed" }}
                </h5>
              </b-row>
            </b-card>

            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2"> fa-venus-mars</v-icon>
                <h5>{{ apartment.details.gender }}</h5>
              </b-row>
            </b-card>

            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2"> fa-tint</v-icon>
                <h5>{{ apartment.details.pool ? "Has pool" : "No pool" }}</h5>
              </b-row>
            </b-card>

            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2"> fa-bath</v-icon>
                <h5>{{ apartment.details.bath }} Bathrooms</h5>
              </b-row>
            </b-card>

            <b-card class="">
              <b-row>
                <v-icon small left class="mb-2">fa-building</v-icon>
                <h5>{{ apartment.details.size }} sq. ft.</h5>
              </b-row>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <h3 class="w-100 text-center">Description</h3>
      <p class="text-center">{{ apartment.listingDescription }}</p>
    </b-row>
    <b-row>
      <b-col>
        <h5>Property Amenities</h5>
        <b-row>
          <div class="my-2 column_wrapper">
            <ul>
              <li
                v-for="(amenity, index) in apartment.propertyAmenities"
                :key="`${amenity}-${index}`"
              >
                {{ amenity }}
              </li>
            </ul>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.column_wrapper {
  column-count: 3;
}
.details-cols {
  column-count: 2;
  column-gap: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  data: () => ({
    apartment: {},
    loaded: false,
  }),
  created() {
    this.getApartment();
  },
  methods: {
    async getApartment() {
      try {
        let id = this.$route.params.id;
        let response = await axios.get(`/api/apartment/${id}`);
        this.apartment = response.data;
        this.loaded = true;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>