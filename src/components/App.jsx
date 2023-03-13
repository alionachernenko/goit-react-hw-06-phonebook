import { ContactForm, ContactList, Filter } from 'components';
import { Phonebook } from "./App.styled";
import { useState, useEffect } from "react";

export const App = () => {
  const [contacts, setContacts] = useState(() => 
  {
      if (JSON.parse(localStorage.getItem('contacts'))) {
        return JSON.parse(localStorage.getItem('contacts'));
      }
      else return []
    }
  )
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  
  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const removeContact = (contactId) => {
    setContacts(contacts.filter(({id}) => id !== contactId))
  }

  
  let filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim()))

    return(
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={addContact} contacts={contacts}/>
        <h2>Contacts</h2>
        <Filter value={filter} onInputHandler={(e) => {setFilter(e.target.value)}} />
        <ContactList contactsList={filteredContacts} removeContact={removeContact}/>
      </Phonebook>
    )
}
