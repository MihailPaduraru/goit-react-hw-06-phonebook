import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.list} key={contact.id}>
      {contact.name} - {contact.number}
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
