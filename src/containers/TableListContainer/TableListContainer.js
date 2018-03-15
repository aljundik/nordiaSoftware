import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import TableList from '../../components/TableList/TableList';
import { editButtonClicked, cancelButtonClicked, deleteMember, updateMember, saveButtonClicked, } from '../../store/members';

class TableListContainer extends Component {
  onChangeHandle = (e, id) => {
    e.preventDefault();

    this.props.onUpdate(e.target.name, e.target.value, id);
  }

    onClickEditHandle = (id) => {
      const index = id - 1;

      this.props.onEdit(index);
    }
    onClickCancelHandle = (id) => {
      const index = id - 1;

      this.props.onCancel(index);
    }

    onClickSaveHandle = (id) => {
      const index = id - 1;

      this.props.onSave(index);
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
  onUpdate: (name, value, id) => { dispatch(updateMember(name, value, id)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(TableListContainer);
