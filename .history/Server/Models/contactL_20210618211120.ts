import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const contactLSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
    
},
{
    collection: "contact_list"
});

const Model = mongoose.model("contact_list", contactLSchema);
export default Model;