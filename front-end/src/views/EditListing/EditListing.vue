<template>
  <v-container>
    <h2 class="text-h2 text-center pb-5">Edit listing</h2>
    <v-form v-if="loaded"
      ><v-row>
        <v-spacer></v-spacer>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Listing Title"
            v-model="form.title"
            dense
            outlined
            required
            offset-md="4"
          />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Short Description"
            v-model="form.description"
            dense
            outlined
            required
          />
        </v-col>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Long Description"
            v-model="form.listingDescription"
            dense
            outlined
            required
          />
        </v-col>

        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Address Line 1"
            v-model="form.address.line1"
            dense
            outlined
            required
          />
        </v-col>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Address Line 2"
            v-model="form.address.line2"
            dense
            outlined
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            label="Price"
            v-model.number="form.price"
            type="number"
            dense
            outlined
            required
          />
        </v-col>

        <v-col class="py-0" cols="12" md="12">
          <small>Seperate ammenities with a comma:</small>
          <v-textarea
            label="Property Amenities"
            v-model="propertyAmenities"
            dense
            outlined
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Number of Bedrooms"
            v-model.number="form.details.beds"
            type="number"
            dense
            outlined
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            label="Are pets allowed?"
            :items="yesNoItems"
            item-text="label"
            item-value="value"
            v-model="form.details.pets"
            dense
            outlined
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            label="Gender"
            :items="['Male', 'Female']"
            v-model="form.details.gender"
            dense
            outlined
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :items="yesNoItems"
            item-text="label"
            item-value="value"
            v-model="form.details.pool"
            label="Does this complex have a pool?"
            dense
            outlined
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="How many bathrooms in the apartment??"
            v-model.number="form.details.bath"
            type="number"
            dense
            outlined
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="How many square feet is the apartment?"
            v-model.number="form.details.size"
            type="number"
            dense
            outlined
            required
          />
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-btn @click="submit" color="secondary" class="black--text" x-large
          >Submit</v-btn
        >
      </div>
      <v-row>
        <v-btn
          class="ml-3 mb-2"
          color="error"
          dark
          x-large
          text
          @click="deleteApartment()"
          >Delete</v-btn
        >
      </v-row>
    </v-form>
  </v-container>
</template>      

<script>
import axios from "axios";

export default {
  data: () => ({
    yesNoItems: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    form: {},
    loaded: false,
    propertyAmenities: "",
  }),
  created() {
    this.getApartment();
  },
  methods: {
    async submit() {
      this.form.propertyAmenities = this.csvStringToArray();

      const id = this.$route.params.id;
      try {
        await axios.put(`/api/apartment/${id}`, this.form);
        this.$router.push({ name: "Apartments" });
        alert("Success");
      } catch (err) {
        console.error(err);
      }
    },
    async getApartment() {
      try {
        let id = this.$route.params.id;
        let res = await axios.get(`/api/apartment/${id}`);
        this.form = res.data;
        const reducer = (accumulator, currentValue) =>
          accumulator + `, ${currentValue}`;
        this.propertyAmenities = this.form.propertyAmenities.reduce(reducer);

        this.loaded = true;
        return true;
      } catch (err) {
        console.error(err);
      }
    },
    async deleteApartment() {
      try {
        await axios.delete(`/api/apartment/${this.$route.params.id}`);
        this.$router.push({ name: "Apartments" });
      } catch (err) {
        console.error(err);
      }
    },
    csvStringToArray() {
      const arr = this.propertyAmenities.split(",").map((item) => item.trim());

      return arr;
    },
  },
};
</script>