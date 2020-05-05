import React, { Component } from 'react';
import TableDataRows from './TableDataRows';

class TableData extends Component {
    MappingUser = () => 
        this.props.TableDataUsers.map((value,key) =>( 
            <TableDataRows checkConnect2={(user)=>this.props.checkConnect1(value)} 
            deleteUserInfoApp = {(idUser) => this.props.deleteUserInfoApp(idUser)}
            checkeditUserStatus = {() =>{this.props.checkeditUserStatus()}} 
             Id={value.id}  key = {key} Name={value.name} Phone={value.phone} Tel={value.tel} Permistion = {value.permistion}  />
        ))
    
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {this.MappingUser()}
                </tbody>
            </table>
            </div>

        );
    }
}

export default TableData;