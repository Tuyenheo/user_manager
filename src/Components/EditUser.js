import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.editUserObject.id,
            name : this.props.editUserObject.name,
            tel : this.props.editUserObject.tel,
            permistion : this.props.editUserObject.permistion,
        }
    }
    // getUserInfo

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }
    saveButton = (info) => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permistion = this.state.permistion;
        this.props.getUserInfo(info);
        this.props.checkeditUserStatus();
    }

    render() {
        return (
            <div className="col">
            <form method="post">
                    <div className="card border-primary bg-warning text-white mb-3 mt-2">
                        <div className="card-header text-center">Edit user</div>
                        <div className="card-body">
                        <div className="form-group">
                            <input onChange = {(event) => this.isChange(event) } defaultValue={this.props.editUserObject.name} type="text" className="form-control" name = "name" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input onChange = {(event) => this.isChange(event) } defaultValue={this.props.editUserObject.tel} type="text" className="form-control" name = "tel" placeholder="Điện thoại"/>
                        </div>
                        <div className="form-group">
                            <select  onChange = {(event) => this.isChange(event) }defaultValue={this.props.editUserObject.permistion} className="custom-select" name= "permistion">
                            <option>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                            <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="button" className="btn btn-block btn-primary" onClick= {()=>this.saveButton()} value="Save User"/>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;