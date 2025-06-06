import { styles } from "../styles/styles";

export function DisplayContact({ contacts , setContacts }) {
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/contacts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      // Update the contacts state to remove the deleted contact
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    }
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionHeader}>Contacts</h2>
      {contacts.map((contact) => 
        <div key={contact._id} style={styles.contact}>
          <span>{contact.namee} : {contact.numberr}</span>
          <button
            style={styles.deleteButton} onClick={() => deleteContact(contact._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
