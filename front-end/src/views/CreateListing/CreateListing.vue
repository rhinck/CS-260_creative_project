<template>
  <v-container>
    <h2 class="text-h2 text-center pb-5">Create a listing</h2>
    <v-form
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

      <v-row>
        <v-col cols="12">
          <h4 class="text-h4">Apartment images</h4>
        </v-col>
        <v-col cols="12" md="6">
          <small>Main image:</small>
          <v-file-input
            class="mt-2"
            label="File input"
            type="file"
            name="photo"
            outlined
            dense
            @change="fileChanged"
          ></v-file-input>
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-btn @click="submit" color="secondary" class="black--text" x-large
          >Submit</v-btn
        >
      </div>
    </v-form>
  </v-container>
</template>      


<script>
import axios from "axios";

export default {
  data() {
    return {
      file: "",
      yesNoItems: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      propertyAmenities: "",

      form: {
        title: "",
        description: "",
        listingDescription: "",
        frontImg: "", // path to the image
        carouselImgs: [],
        price: "",
        address: {
          line1: "",
          line2: "",
        },
        propertyAmenities: "",
        // TODO: Rethink in the future
        details: {
          beds: 0,
          pets: false,
          gender: "", // Male Female
          pool: false,
          bath: 0,
          size: 0,
        },
      },
    };
  },
  methods: {
    async submit() {
      this.form.propertyAmenities = this.csvStringToArray;

      try {
        debugger;
        let formData = new FormData();
        const fileName = this.file.name;
        formData.append("photo", this.file, fileName);
        console.log(this.file.name);

        let r1 = await axios.post("/api/photos", formData);
        this.form.frontImg = r1.data.path;

        await axios.post("/api/apartment", this.form);
        alert("Success");
      } catch (err) {
        console.error(err);
      }
    },
    fileChanged(event) {
      console.log(event);
      this.file = event;
    },
  },
  computed: {
    csvStringToArray() {
      const arr = this.propertyAmenities.split(",").map((item) => item.trim());

      return arr;
    },
  },
};
</script>