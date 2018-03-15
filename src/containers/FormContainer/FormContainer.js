import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Validator from 'validator';
import PropTypes from 'prop-types';
import Form from '../../components/Form/Form';
import { addMember, } from '../../store/members';

class FormContainer extends Component {
    state = {
      member: {
        name: '',
        email: '',
        phone: '',
        id: '',
      },
      errors: {},  // eslint-disable-line
    }
    onChangeHandle = (e) => {
      // const updatedMembers = [...this.state.member,];
      e.preventDefault();

      this.setState({ member: { ...this.state.member, [e.target.name]: e.target.value, }, });
    }

    onSubmitHandler = (e) => {
      e.preventDefault();
      const updatedId = this.props.members.length + 1;
      const member = {
        name: this.state.member.name,
        email: this.state.member.email,
        phone: this.state.member.phone,
        id: updatedId,
        editable: false,
      };

      const errors = this.validate(member);
      this.setState({ errors, }); // eslint-disable-line
      if (Object.keys(errors).length === 0) {
        this.props.onAddMember(member);
      }
      console.log(this.state.errors);
    };

    validate= (data) => {
      const errors = {};
      const { name, email, phone, } = data;
      if (!Validator.isEmail(email)) errors.email = 'Email is invalid';
      if (Validator.isEmpty(name)) errors.name = "Name shouldn't be embty";
      if (Validator.isEmpty(phone) && !Validator.isNumeric(phone)) errors.phone = 'Phone should not be empty and most be a number';

      return errors;
    };

    render() {
      return (
        <Form
          change={this.onChangeHandle}
          submit={this.onSubmitHandler}
          errors={this.state.errors}
        />
      );
    }
}

FormContainer.propTypes = {
  onAddMember: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,

  })).isRequired,
};

const mapStateToProps = state => ({
  members: state.MembersReducer.members,
});

const mapDispatchToProps = dispatch => ({
  onAddMember: (member) => { dispatch(addMember(member)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
