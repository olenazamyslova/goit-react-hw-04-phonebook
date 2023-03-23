import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
const [contacts, setContacts] = useState([
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);
const [filter, setFilter] = useState('');

useEffect(() => {
const savedContacts = localStorage.getItem('contacts');
if (savedContacts) {
setContacts(JSON.parse(savedContacts));
}
}, []);

useEffect(() => {
localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const repeatControl = (data) => {
const isExist = contacts.find((contact) => contact.name === data.name);
if (isExist) {
alert('Контакт вже є у телефонній книзі!!!');
return;
}
  const newContact = {
  id: uuidv4(),
  name: data.name,
  number: data.number,
};
  setContacts([...contacts, newContact]);


};

const elementDelete = (arr, idContact) => {
return arr.filter((elem) => elem.id !== idContact);
};

const deleteContactFromContactList = (idContact) => {
const updatedContacts = elementDelete(contacts, idContact);
setContacts(updatedContacts);
};

const filterArr = () => {
return contacts.filter((cur) =>
cur.name.toUpperCase().includes(filter.toUpperCase())
);
};

const filteredContacts = filterArr();

return (
<div className="App">
<h1>Phonebook</h1>
<ContactForm onSubmitData={repeatControl} />
<h1>Contacts</h1>
<Filter setFilterToState={setFilter} />
<ContactList contacts={filteredContacts} del={deleteContactFromContactList} />
</div>
);
};

export default App;
