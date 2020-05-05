import React, { Component } from 'react';

class TableDataRows extends Component {

    PermistionRender = () => {
        if(this.props.Permistion === 1) {
            return ("Admin")
        }else if(this.props.Permistion === 2) {
            return ("Quan li")
        } else {
            return ("Nhân viên");
        }
    }

    EditClick = () => {
        this.props.checkConnect2();
        this.props.checkeditUserStatus(); 
    }
    DeleteUser = (idUser) => {
        this.props.deleteUserInfoApp(this.props.Id);
    }

    render() {
        return (
               <tr>
                    <td>{this.props.Id}</td>
                    <td>{this.props.Name}</td>
                    <td>{this.props.Tel}</td>
                    <td>{this.PermistionRender()}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.EditClick()}><i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-danger xoa" onClick = {(idUser) => this.DeleteUser(this.props.Id)}><i className="fa fa-delete" />Xóa</div>
                    </div>
                    </td>
                </tr>

        );
    }
}

export default TableDataRows;