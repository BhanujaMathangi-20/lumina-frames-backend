const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    badge: { type: String, default: null },
    brand: { type: String, required: true },
    shape: { type: String, required: true },
    description: { type: String, default: "Premium spectacles designed for the modern individual." },
    type: { type: String, default: "Full Rim" },
    frame: { type: String, default: "Titanium / Acetate" },
    lens: { type: String, default: "Blue-Light Blocking" },
    color: { type: String, default: "Matte Finish" },
    size: { type: String, default: "Standard" },
    features: { type: [String], default: ["UV Protection", "Anti-Scratch"] },
    stockCount: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
