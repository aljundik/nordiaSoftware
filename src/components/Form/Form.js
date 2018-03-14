import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.css';

const Form = props => (
  <div className={classes.FormWrapper}>
    <form className={classes.Form}>
      <input onChange={props.change} type="text" name="name" placeholder="Full name" />
      <input onChange={props.change} type="email" name="email" placeholder="Email-address" />
      <input onChange={props.change} type="tel" name="phone" placeholder="Phone Number" />
      <button onClick={props.submit} type="submit">Add new</button>
    </form>
  </div>
);

Form.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Form;
