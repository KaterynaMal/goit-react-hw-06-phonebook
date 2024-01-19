import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch} from 'react-redux';

import { ContactForm, Filter, ContactList } from 'components';
import css from './ContactsForm.module.css';


export const App = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  // const contacts = useSelector(store => store.contacts.contacts);
  // const filter = useSelector(store => store.contacts.filter);

  // const handleNameChange = e => {
  //   setName(e.target.value);
  // };

  // const handlePhoneChange = e => {
  //   setNumber(e.target.value);
  // };

  // const handleAddContact = () => {
  //   if (name.trim() === '' || number.trim() === '') {
  //     alert('Please, enter name and phone number');
  //     return;
  //   }

  //   const isNameExist = Array.isArray(contacts)
  //     ? contacts.some(
  //         contact => contact.name.toLowerCase() === name.trim().toLowerCase()
  //       )
  //     : false;

  //   if (isNameExist) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name: name.trim(),
  //     number: number.trim(),
  //   };

  //   const action = {
  //     type: 'contacts/addContact',
  //     payload: newContact,
  //   };
  //   dispatch(action);

  //   setName('');
  //   setNumber('');
  // };

  // const handleFilter = e => {
  //   const action = {
  //     type: 'contacts/setFilter',
  //     payload: e.target.value,
  //   };
  //   dispatch(action);
  // };


  // const handleDeleteContact = id => {
  //   const action = {
  //     type: 'contacts/removeContact',
  //     payload: id,
  //   };
  //   dispatch(action);
  // };

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const storedContacts = JSON.parse(stringifiedContacts) || [];

    const action = {
      type: 'contacts/setContacts',
      payload: storedContacts,
    };
    dispatch(action);
  }, [dispatch]);

  // const filteredContacts = Array.isArray(contacts)
  //   ? contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : [];

  return (
    <div className={css.form_container}>
      <h1>Phonebook</h1>

      <ContactForm
        // name={name}
        // number={number}
        // handleNameChange={handleNameChange}
        // handleAddContact={handleAddContact}
        // handlePhoneChange={handlePhoneChange}
      ></ContactForm>
      <h2>Contacts</h2>
      <Filter
        // filter={filter}
        // handleFilter={handleFilter}
      ></Filter>
      <ContactList
        // contacts={filteredContacts}
        // handleDeleteContact={handleDeleteContact}
      ></ContactList>
    </div>
  );
};








