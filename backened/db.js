import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.MONGO_URI);

const contactSchema  = new mongoose.Schema({
    namee : String,
    numberr : Number
})
const contacts = mongoose.model("contacts_database" , contactSchema)

export { contacts }