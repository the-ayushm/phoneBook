import { useState } from "react";
import { styles } from "../styles/styles";

export function AddContact({ contacts, setContacts }) {
  // Use state for newName and newNumber
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContactToDatabase = async () => {
    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          namee: newName,
          numberr: newNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      const savedContact = await response.json();

      // Update the local state with the new contact
      setContacts([...contacts, savedContact]);

      // Clear input fields after successful add
      setNewName("");
      setNewNumber("");
    } catch (error) {
      console.error("Error adding contact:", error.message);
    }
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionHeader}>Add Contact</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}><b>Name:</b></label>
        <input
          type="text"
          style={styles.input}
          onChange={(e) => setNewName(e.target.value)} // Set the name value to state
          value={newName} // Bind the input value to state
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}><b>Number:</b></label>
        <input
          type="text"
          style={styles.input}
          onChange={(e) => setNewNumber(e.target.value)} // Set the number value to state
          value={newNumber} // Bind the input value to state
        />
      </div>
      <button
        style={styles.button}
        onClick={addContactToDatabase}
      >
        Add Contact
      </button>
    </div>
  );
}
