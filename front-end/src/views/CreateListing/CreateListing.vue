<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h1>Basic Apartment information</h1>
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
        description="Enter a Title for Your Apartment"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          required
          placeholder="Enter a title for your listing"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Listing Description"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Address" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>      


<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        listingDescription: "",
        frontImg: "", // path to the image
        carouselImgs: [],
        price: 0,
        address: {
          line1: "",
          line2: "",
        },
        propertyAmenities: [],
        // TODO: Rethink in the future
        details: [
          {
            description: "",
            type: "",
          },
        ],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>