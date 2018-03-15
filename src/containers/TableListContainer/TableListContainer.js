import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import TableList from '../../components/TableList/TableList';
import { editButtonClicked, cancelButtonClicked, deleteMember, updateMember, saveButtonClicked, } from '../../store/members';

class TableListContainer extends Component {
  state = {
    members: null,
  }
  onChangeHandle = (e, id) => {
    e.preventDefault();
    // if (e.target.name === 'name') {
    const updatedMembers = this.props.members.map((member) => {
      if (member.id !== id) {
        return { ...member, };
      }
      member[e.target.name] = e.target.value; // eslint-disable-line

      return member;
    });
    this.setState({ members: updatedMembers, });
  }

    onUpdateHandle = () => {
      this.props.onUpdate(this.state.member);
    }

    onClickEditHandle = (id) => {
      const index = id;

      this.props.onEdit(index);
    }
    onClickCancelHandle = (id) => {
      const index = id;

      this.props.onCancel(index);
    }

    onClickSaveHandle = () => {
      this.props.onSave(this.state.members);
    }

    onClickDeleteHandle = (id) => {
      const index = id;

      this.props.onDelete(index);
    }
    render() {
      return (
        <TableList
          onEdit={this.onClickEditHandle}
          cancel={this.onClickCancelHandle}
          save={this.onClickSaveHandle}
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
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  members: state.MembersReducer.members,
});

const mapDispatchToProps = dispatch => ({
  onEdit: (id) => { dispatch(editButtonClicked(id)); },
  onCancel: (id) => { dispatch(cancelButtonClicked(id)); },
  onSave: (id) => { dispatch(saveButtonClicked(id)); },
  onDelete: (id) => { dispatch(deleteMember(id)); },
  onUpdate: (member) => { dispatch(updateMember(member)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(TableListContainer);
