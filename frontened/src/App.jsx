import { useState ,useEffect } from "react";
import {styles} from "./styles/styles"
import {PhoneBook} from "./components/PhoneBook"
import {AddContact} from "./components/AddContact"
import {SearchContact} from "./components/SearchContact"
import {DisplayContact} from "./components/DisplayContact"
function App() {
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/contacts")  
    .then((response) => response.json())
    .then((data) => setContacts(data))
    .catch((err) => console.error(err))
  },[])

  return (
    <div style={styles.container}>
      <PhoneBook />
      <AddContact contacts={contacts}  setContacts={setContacts} />
      <SearchContact contacts={contacts}/>
      <DisplayContact contacts={contacts} setContacts={setContacts} />
    </div>
  );
}


export default App;
