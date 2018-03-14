import React, { Component, } from 'react';
import { connect, } from 'react-redux';
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
      this.props.onAddMember(member);
    }
    render() {
      return (
        <Form change={this.onChangeHandle} submit={this.onSubmitHandler} />
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
