import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import NavBar from './components/NavBar';
import Add_record from './components/add_record';
import Uptadedata from './components/Uptadedata';
import Signup from './components/Signup';
import Login from './components/Login';
import Gallery from './components/gallery';
import UploadScreen from './components/upload_photo';
import UserList from './components/UserList';
import Home from './components/Home';
import Category from './components/categories';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
  // Switch

} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Component, useState } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (

    <div>
 
       <BrowserRouter>
    <NavBar/>
      <Routes>
        
      <Route path='/cat' element={localStorage.getItem('token')==null?<Category/>:<Category/>}/>
      {localStorage.getItem('token')==null?
        <Route path='/' element={<Login/>}/>
                    
                 :               
        <Route path='/' element={localStorage.getItem('token')==null?<Login/>:<Gallery/>}/>}
        <Route path='/new' element={localStorage.getItem('token')==null?<Login/>:<Add_record/>}/>
        <Route path='/update' element={localStorage.getItem('token')==null?<Login/>:<Uptadedata/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallery' element={localStorage.getItem('token')==null?<Login/>:<Gallery/>}/>
        <Route path='/uploadphoto' element={localStorage.getItem('token')==null?<Login/>:<UploadScreen/>}/>
        <Route path='/userlist' element={localStorage.getItem('token')==null?<Login/>:<UserList/>}/>
        <Route path='/home' element={localStorage.getItem('token')==null?<Login/>:<Home/>}/>
        <Route path='/cat' element={localStorage.getItem('token')==null?<Category/>:<Category/>}/>
        
      </Routes>
    </BrowserRouter>

  
    </div>
  );
}
}

export default App;
