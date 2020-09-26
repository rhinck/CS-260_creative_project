<template>
  <b-container class="text-center">
    <h1 class="display-3">Contact Us</h1>

    <h3 class="description font-weight-lighter text-center m-5">
      Have any questions? We'd love to hear from you <br />
      Here's how to get in touch with us.
    </h3>

    <b-row class="d-flex justify-content-center">
      <b-col cols="12" md="5" class=" ">
        <div>
          <i
            class="column__icon fa-3x fa fa-envelope-o"
            style="color: green"
            aria-hidden="true"
          ></i>
          <h5>Customer Support:</h5>
          <a href="mailto:dallinrldavis@gmail.com">dallinrldavis@gmail.com</a>
        </div>

        <div>
          <i
            class="column__icon fa-3x fa fa-handshake-o "
            style="color: green"
            aria-hidden="true"
          ></i>
          <h5 class="ml-4">Partnership Requests:</h5>
          <a class="ml-4" href="mailto:theroberthinckley@gmail.com"
            >theroberthinckley@gmail.com</a
          >
        </div>
      </b-col>

      <b-col cols="12" md="5">
        <div>
          <i
            class="column__icon fa-3x fa fa-map-marker"
            style="color: green"
            aria-hidden="true"
          ></i>
          <h5>Mailing Address:</h5>
          <h6 class="font nt-weight-lighter mt-3">Draper</h6>
          <p>
            12001 Cortina Crest Drive<br />
            Draper, UT 84020
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: rgb(122, 197, 122);
}

.column__icon {
  margin-bottom: 0.3rem;
}

.description {
  line-height: 1.6;
}

@media screen and (min-width: 576px) {
  .column__icon {
    position: relative;
    top: 35px;
    left: -135px;
    padding-bottom: 0;
  }
}
</style>
