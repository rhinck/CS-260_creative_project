<template>
  <div>
    <b-jumbotron
      fluid
      class="bg-cover d-flex justify-content-center align-middle"
    >
      <b-form-input
        id="input-1"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-jumbotron>
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
</style>
