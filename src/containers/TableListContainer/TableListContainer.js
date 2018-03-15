import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import TableList from '../../components/TableList/TableList';
import { editButtonClicked, cancelButtonClicked, deleteMember, updateMember, } from '../../store/members';

class TableListContainer extends Component {
  // state = {
  //   member: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     id: '',
  //   },
  // }
  onChangeHandle = (e, id) => {
    // const updatedMembers = [...this.state.member,];
    e.preventDefault();

    // this.setState({ member: { ...this.state.member, [e.target.name]: e.target.value, }, });
    this.props.onUpdate(e.target.name, e.target.value, id);
  }

  onUpdateHandle = (e) => {
    e.preventDefault();
    // const updatedId = this.props.members.length + 1;
    // const member = {
    //   name: this.state.member.name,
    //   email: this.state.member.email,
    //   phone: this.state.member.phone,
    //   id: updatedId,
    //   editable: false,
    // };
    // this.props.onUpdateMember(member);
    // console.log('"Updated handle:"', member);
  }
    onClickEditHandle = (id) => {
      const index = id - 1;

      this.props.onEdit(index);
    }
    onClickCancelHandle = (id) => {
      const index = id - 1;

      this.props.onCancel(index);
    }

    onClickDeleteHandle = (id) => {
      const index = id - 1;

      this.props.onDelete(index);
    }
    render() {
      return (
        <TableList
          onEdit={this.onClickEditHandle}
          cancel={this.onClickCancelHandle}
          onDelete={this.onClickDeleteHandle}
          onChangeHandle={this.onChangeHandle}
          members={this.props.members}
        />
      );
    }
}
TableListContainer.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  members: state.MembersReducer.members,
});

const mapDispatchToProps = dispatch => ({
  onEdit: (id) => { dispatch(editButtonClicked(id)); },
  onCancel: (id) => { dispatch(cancelButtonClicked(id)); },
  onDelete: (id) => { dispatch(deleteMember(id)); },
  onUpdate: (name, value, id) => { dispatch(updateMember(name, value, id)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(TableListContainer);
