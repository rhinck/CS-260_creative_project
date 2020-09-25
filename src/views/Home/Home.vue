<template>
  <div>
    <b-jumbotron fluid class="bg-cover d-flex align-items-center">
      <div class="d-flex justify-content-center">
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Enter email"
          class="w-50"
        ></b-form-input>
        <b-button class="ml-2">
          Submit
        </b-button>
      </div>
    </b-jumbotron>
    <b-container>
      <b-row class="row">
        <b-col cols="12" md="" class="d-flex justify-content-center">
          <b-img
            src="@/assets/images/pumped-man.jpg"
            fluid
            class="description__image"
          />
        </b-col>
        <b-col cols="12" md="6" class="m-1">
          <h3 class="my-3">Subheader</h3>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            placeat magnam natus animi earum dolores aliquid quas molestias
            soluta? Qui illo atque alias odit cupiditate omnis, iste quo
            similique?
          </p>

          <b-button>Learn more</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-cover {
  background-image: url("~@/assets/images/home-jumbotron.jpg");
  background-size: cover;
  background-position-x: 25%;
  background-position-y: 25%;
  background-repeat: no-repeat;
  height: 50vh;
}

.description__image {
  width: 85%;
}

.row {
  margin-top: 100px;
}
</style>
