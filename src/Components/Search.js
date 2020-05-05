import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tmpValue:"",
            userObj : {}
        }
    }

    getUserInfo = (info) => {
       this.setState({
        userObj : info
       });
       this.props.getUserInfoApp(info);
    }
    
    onChange = (event) => {
        this.setState({
            tmpValue: event.target.value
        });
        this.props.getTxtValue(this.state.tmpValue);
    }

    isShowEditUserForm= () => {
        if(this.props.connectEditUser === true) {
            return <EditUser getUserInfo = {(info) => this.getUserInfo(info)} editUserObject = {this.props.editUserObject} checkeditUserStatus = {() =>this.props.checkeditUserStatus()} />
        }
    }


    showButton = () => {
        if(this.props.changeButton === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick = {this.props.connect}>Đóng lại</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick = {this.props.connect}>Thêm mới</div>
        }
    }

    render() {

        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditUserForm()}
                </div>
                <div className="form-group w-100">
                    <div className="btn-group w-100">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" onChange = {(event)=>this.onChange(event)}  />
                        <div className="btn btn-info" onClick={(dl) => this.props.getTxtValue(this.state.tmpValue)}>Tìm</div>
                    </div>
                    
                     { this.showButton()}
                    
                </div>
            </div>

        );
    }
}

export default Search;