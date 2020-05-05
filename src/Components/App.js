import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dlUsers from './data.json';
// import { v5 as uuidv5 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai : false,
      data: dlUsers,
      tmpSearch : '',
      editUserStatus: false,
      editUserObject : {}
    }
  }

  getUserInfoApp = (info) => { 
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permision = info.permision;
      }
    }
 )}

 deleteUserInfoApp = (idUser) => { 
  var tempDate = this.state.data.filter(item => item.id !== idUser);
  this.setState({
    data: tempDate
  })
  console.log(tempDate);
}

  ChangeStatus = () => {
    this.setState({
      trangthai : !this.state.trangthai
    });
   
  }



  getTxtSearch =(dl) => {
    this.setState({
      tmpSearch : dl
    });
  }


  
  addUser= (name,tel,permision) => {
    var item={};
    item.id = this.state.data[this.state.data.length -1].id + 1;
    // item.id = uuidv5.DNS;
    item.name = name;
    item.tel = tel;
    item.permision = permision;
    var items = this.state.data;
    items.push(item);
    //console.log(items);
    
    // const newArray = [...this.state.data,{id: '8',name:name,tel:tel,permision:permision}];
    // this.setState({
    //   data: newArray
    // });
    this.setState({
      data: items
    });
  }

  checkeditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus,
    });
  }

  checkConnect1 = (user) => {
    console.log('da ket noi toi table data');
    console.log(user);
    this.setState({
      editUserObject : user
    });
  }
  
  render() {
    var ArraySearch = [];
    this.state.data.forEach(element => {
      if(element.name.indexOf(this.state.tmpSearch) !== -1) {
        ArraySearch.push(element);
      }
    });
   // console.log(this.state.data)//;
    
    return (
      
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search connect = {() => this.ChangeStatus()} changeButton= {this.state.trangthai} getTxtValue = {(dl) => this.getTxtSearch(dl)} connectEditUser = {this.state.editUserStatus}
              checkeditUserStatus = {() =>{this.checkeditUserStatus()}} 
              getUserInfoApp = {(info) => this.getUserInfoApp(info)}
              editUserObject = {this.state.editUserObject} />
              <div className="col-12">
                    <hr/>
              </div>
              <TableData deleteUserInfoApp = {(idUser) => this.deleteUserInfoApp(idUser)}
              TableDataUsers = {this.state.data} checkConnect1 = {(user) => {this.checkConnect1(user)}} checkeditUserStatus = {() =>{this.checkeditUserStatus()}}/>
              <AddUser changeButton= {this.state.trangthai} addUser = {(name,tel,permision) => this.addUser(name,tel,permision)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
