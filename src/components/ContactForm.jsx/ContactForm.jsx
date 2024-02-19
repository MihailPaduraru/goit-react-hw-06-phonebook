import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit, onChange, name, number }) => {
  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={onChange}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
