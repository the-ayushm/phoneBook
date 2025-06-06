import { styles } from "../styles/styles";
import { useState } from "react";

export function SearchContact( {contacts} ) {
  const [search, setSearch] = useState("");

  const filteredContacts = search.trim() === ""
    ? []
    : contacts.filter((contact) =>
        contact.namee.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionHeader}>Search Contact</h2>
      <input
        type="text"
        placeholder="Search Contact..."
        style={styles.input}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.searchResults}>
        {filteredContacts.map((contact) => (
          <div key={contact.key} style={styles.contact}>
            <span>{contact.namee}:{contact.numberr}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
