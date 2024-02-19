import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Search contacts:
      <input
        className={styles.filter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
