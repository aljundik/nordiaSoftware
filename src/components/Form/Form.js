import React from 'react';
import classes from './Form.css';

const Form = () => (
  <div className={classes.FormWrapper}>
    <form className={classes.Form}>
      <input type="text" name="name" placeholder="Full name" />
      <input type="email" name="" placeholder="Email-address" />
      <input type="tel" name="" placeholder="Phone Number" />
      <button>Add new</button>
    </form>
  </div>
);

export default Form;
