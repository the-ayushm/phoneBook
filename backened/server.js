import express from "express"
import {contacts} from "./db.js"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());


app.get("/contacts" , async (req , res) => {
    try{
        const contact = await contacts.find()
        res.json(contact)
    } catch(err) {
        res.status(500).json({error : err.message})
    }
})
  
app.post("/contacts", async (req, res) => {
    try {
        const { namee, numberr } = req.body;
        const newContact = new contacts({ namee, numberr });
        await newContact.save();
        res.status(201).json(newContact); // Return the saved contact as a response
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/contacts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedContact = await contacts.findByIdAndDelete(id); // Delete contact by ID
      if (!deletedContact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
