import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.css';
import InlineValidate from './InlineValidate/InlineValidate';

const Form = props => (
  <div className={classes.FormWrapper}>
    { props.errors.email && <InlineValidate error={props.errors.email} /> }
    { props.errors.name && <InlineValidate error={props.errors.name} /> }
    { props.errors.phone && <InlineValidate error={props.errors.phone} /> }
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
  errors: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Form.defaultProps = {
  errors: {},
};

export default Form;
