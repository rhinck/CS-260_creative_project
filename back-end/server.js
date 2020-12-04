const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cp4', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')

// TODO: Reconsider?
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const apartmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  listingDescription: String,
  frontImg: String, // path to the image
  carouselImgs: [String],
  price: Number,
  address: {
    line1: String,
    line2: String
  },
  propertyAmenities: [String],
  // TODO: Rethink in the future
  details: [{
      description: String,
      type: String
  }]
});

// Create a model for items in the museum.
const Apartment = mongoose.model('Apartment', apartmentSchema);


// Return a list of all apartments
app.get('/api/apartments', async (req, res) => {
    try {
        let apartments = await Apartment.find();
        res.send(apartments)
    }
    catch (err) {
      console.error(err)
        res.status(500)
    }
})

// Get a specific apartment
app.get('/api/apartment/:id', async (req, res) =>{
    try {
      let apartment = Apartment.find({_id: req.params.id})
      res.status(200).send(apartment)
    } catch (err) {
        console.error(err)
        res.sendStatus(500) 
    }
})

// Create an apartment
app.post('/api/apartment', async (req, res) => {
    try {
      const { title, description, listingDescription, frontImg, carouselImgs, price, address, propertyAmenities, details } = req.body;

        const apartment = new Apartment({
          title,
          description,
          listingDescription,
          frontImg,
          carouselImgs,
          price,
          address,
          propertyAmenities,
          details,
        })

        await Apartment.save();
        res.status(200).send("Happy")
    }
    catch (err) {
        res.status(500);
    }
})

// Edit an apartment
app.put('/api/apartment/:id', async (req, res) => {
    try {
       const { title, description, listingDescription, frontImg, carouselImgs, price, address, propertyAmenities, details } = req.body;
       apartment = await Apartment.find({_id: req.params.id});
        
       apartment.title = title;
       apartment.description = description;
       apartment.listingDescription = listingDescription;
       apartment.frontImg = frontImg;
       apartment.carouselImgs = carouselImgs;
       apartment.price = price;
       apartment.address = address;
       apartment.propertyAmenities = propertyAmenities;
       apartment.details = details;
    
       await apartment.save();
       res.sendStatus(200);
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

// Delete an apartment
app.delete('/api/apartment/:id', async (req, res) => {
    try {
      await Apartment.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));