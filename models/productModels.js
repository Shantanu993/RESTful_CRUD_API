const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please enter a product'],
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        sold: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true //important
    })

const Products = mongoose.model("Products", productSchema);
module.exports = Products;