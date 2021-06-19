/**
 * Module dependencies.
 *  File name: contactL.ts, 
    Student's name: Ofovwe Ewere
    Student's id: 301188196
    Date: June 14, 2021
 */
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