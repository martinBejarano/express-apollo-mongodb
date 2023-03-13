import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String
})

export default model('Product', productSchema);