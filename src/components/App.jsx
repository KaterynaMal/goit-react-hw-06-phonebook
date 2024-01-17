import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneChange = e => {
    setNumber(e.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Please, enter name and phone number');
      return;
    }

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setContacts(
      prevContacts => [...prevContacts, newContact],
      setName(''),
      setNumber('')
    );
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];
    setContacts(contacts);
  }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem(contacts, stringifiedContacts);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.form_container}>
      <h1>Phonebook</h1>

      <ContactForm
        name={name}
        number={number}
        handleNameChange={handleNameChange}
        handleAddContact={handleAddContact}
        handlePhoneChange={handlePhoneChange}
      ></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter}></Filter>
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      ></ContactList>
    </div>
  );
};
