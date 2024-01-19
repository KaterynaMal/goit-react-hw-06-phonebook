// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { ContactForm, Filter, ContactList } from 'components';
import css from './ContactsForm.module.css';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const storedContacts = JSON.parse(stringifiedContacts) || [];

  //   const action = {
  //     type: 'contacts/setContacts',
  //     payload: storedContacts,
  //   };
  //   dispatch(action);
  // }, [dispatch]);

  return (
    <div className={css.form_container}>
      <h1>Phonebook</h1>

      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};
