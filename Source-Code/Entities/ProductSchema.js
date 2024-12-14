const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
     _id: {
          type: String,
          required: true,
          trim: true,
     },
     name: {
          type: String,
          required: true,
          trim: true,
          index: true,
     },
     description: {
          type: String,
          trim: true,
     },
     price: {
          type: Number,
          required: true,
          min: 0,
     },
     category: {
          type: String,
          required: true,
          trim: true,
          index: true,
     },
     createdAt: {
          type: Date,
          default: Date.now,
          index: true,
     },
     updatedAt: {
          type: Date,
          default: null,
          index: true,
     },
});

module.exports = mongoose.model("Product", ProductSchema);
