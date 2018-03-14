import React, { Component, } from 'react';
import TableList from '../../components/TableList/TableList';

class TableListContainer extends Component {
    state={
      members: [
        {
          name: 'khaled Aljundi',
          email: 'khaled@test.com',
          phone: '1234567',
          id: '1',
        },
      ],
      editable: false,
    }

    onClickEditHandle = () => {
      this.setState({ editable: !this.state.editable, });
    }
    onClickCancelHandle = () => {
      this.setState({ editable: false, });
    }

    render() {
      return (
        <TableList
          onEdit={this.onClickEditHandle}
          editable={this.state.editable}
          cancel={this.onClickCancelHandle}
          members={this.state.members}
        />
      );
    }
}

export default TableListContainer;
