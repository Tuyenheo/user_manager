import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = ( {
            id : '',
            name: '',
            tel : '',
            permistion : ''
        })
    }

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });

        var item = {};
        item.id = this.state.id;
        item.name =  this.state.name;
        item.tel =  this.state.tel;
        item.permistion =  this.state.permistion;
    }
    
    DeletePlaceholder = (event) => {
        event.target.name = '';
        event.target.tel = '';
        event.target.permision = '';
    }

    ShowForm = () => {
        if(this.props.changeButton === true) {
            return (
                    <div className="col-3">
                         <form>
                            <div className="card border-primary mb-3 mt-2">
                                <div className="card-header">Thêm mới</div>
                                <div className="card-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" name = "name" placeholder="Tên user" onChange = {(event)=>this.onChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name = "tel" placeholder="Điện thoại" onChange = {(event)=>this.onChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name= "permistion" onChange = {(event)=>this.onChange(event)}>
                                    <option defaultValue>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>User</option>
                                    <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick = {(name,tel,permision) => this.props.addUser(this.state.name,this.state.tel,this.state.permistion)} value="Thêm mới"/>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                
            )
        }else {
            return false
        }
    }
    
    render() {
        
        return (

                    this.ShowForm()

        );
    }
}

export default AddUser;