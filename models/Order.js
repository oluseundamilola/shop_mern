const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type:String, required: true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                dafault: 1,
            },
        },
    ],
    amount: { type:Number, required: true },
    address: { type:Object, requied: true },
    status: { type: String, default: "pending" },
    
},
{timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);