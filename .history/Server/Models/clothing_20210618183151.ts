import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ClothingSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
    
},
{
    collection: "contact_list"
});

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;