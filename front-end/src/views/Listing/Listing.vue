<template>
  <b-container>
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
        <b-button class="mx-3" block variant="primary" size="lg"
          >Contact Seller</b-button
        >
        <div class="mt-3">
          <div class="details-cols">
            <b-card v-for="detail in details" :key="detail.icon" class="">
              <b-row>
                <i :class="`fa ${detail.icon} mx-2`"></i>
                <h5>{{ detail.description }}</h5>
              </b-row>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <h3 class="w-100 text-center">Description</h3>
      <p>{{ apartment.listingDescription }}</p>
    </b-row>
    <b-row>
      <b-col>
        <h5>Property Amenities</h5>
        <b-row>
          <div class="my-2 column_wrapper">
            <ul>
              <li v-for="amenity in propertyAmenities" :key="amenity">
                {{ amenity }}
              </li>
            </ul>
          </div>
        </b-row>
      </b-col>
    </b-row>
    <div></div>
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
export default {
  data: () => ({
    propertyAmenities: [
      "Alarm",
      "Air Conditioning: Central Air",
      "Deck",
      "Dishwasher",
      "Parking: Covered",
      "Storage",
      "View",
      "Walk In Closets",
      "Washer & Dryer: In Unit",
      "Back Door Sensors",
      "Distinctive Wood Style Flooring",
      "Pull-Out Kitchen Faucet",
      "Vivint Smart Home System",
    ],
    // .fa-bed
    // .fa-paw
    // .fa-bath
    // .fa-tint (water)
    // .fa-building (sq. ft)
    // .fa-venus-mars
    details: [
      {
        icon: "fa-bed",
        description: "2 Bed",
      },
      {
        icon: "fa-venus-mars",
        description: "Male",
      },
      {
        icon: "fa-bath",
        description: "2 Bath",
      },
      {
        icon: "fa-paw",
        description: "Allowed",
      },
      {
        icon: "fa-tint",
        description: "1 Pool",
      },
      {
        icon: "fa-building",
        description: "1000 sq. ft",
      },
    ],
  }),
  created() {
    console.log("The id is: " + this.$route.params.id);
  },
  computed: {
    apartment() {
      const index = this.$route.params.id;
      return this.$root.$data.apartments[index];
    },
  },
};
</script>