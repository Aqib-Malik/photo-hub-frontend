import React, { Component } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import './login.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  // Switch

} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    login: false,
    name: "",
    password: "",
    type: "",
    credentials: { empname: "irtaza", sallery: 12345678, name: "irt@gmail.com" },
  };

  login() {
    if (this.state.name != "" && this.state.password != "") {
      
      axios.post('http://localhost:3001/login', {
      // name: this.state.name,
      email:this.state.name,
      // name: this.state.name,
      password:this.state.password
    }).then((Response) => {

        console.log(Response.status);
        if (Response.status == 200) {
          console.log(Response.data.token);
       
        
            localStorage.setItem('token', Response.data.token)
            localStorage.setItem('login', true)
            localStorage.setItem('user_id', Response.data.userId)
            localStorage.setItem('user_name', this.state.name,)
            Swal.fire({
              title: 'Login',
              type: 'success',
              text: 'Successfully Login',
              icon: 'success',
            });
            window.location.reload();
       
          this.setState({
            login: true
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }

      }).catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
    }

    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });

    }
  }

  onchange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="login-screen">
      <div>
          <br />

          <div className="row d-flex justify-content-center align-items-center h-100"  >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form className="mx-1 mx-md-4">



                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example3c" className="form-control" value={this.state.name} onChange={this.onchange} name="name" />
                            <label className="form-label" for="form3Example3c">User Name*</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-list fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example1c" className="form-control" value={this.state.password} onChange={this.onchange} name="password" />
                            <label className="form-label" for="form3Example1c">Password*</label>
                          </div>
                        </div>





                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={() => { this.login() }}>Log In</button>
                        </div>
                        {/* <Link to="signup" style={{color:"white",textDecoration: 'none'}}>if u dont have an account?signup</Link> */}

                        {/* <button type="button" class="btn btn-warning"><Link to="/signup" style={{color:"white",textDecoration: 'none'}}>Update</Link></button> */}
                      </form>

                      <Link to="signup" style={{ color: "blue", textDecoration: 'none', marginLeft: "50px" }}>if u dont have an account?signup</Link>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://images.squarespace-cdn.com/content/v1/6220ad1db2910108f6cfc24f/46da4dd1-e009-4d51-92bc-7bd013235df1/googlevsprivacy.gif"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      // <center>
      //     <h1>Login</h1>

      //     <div>

      //     <input type="text" value={this.state.name} onChange={this.onchange} name="name"/><br/><br/>
      //     <input type="password" value={this.state.password} onChange={this.onchange} name="password"/><br/><br/>
      //     {/* <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/><br/><br/> */}
      //     <button onClick={()=>{this.login()}}>Login</button>
      //   </div>
      //   </center>
    );
  }
}

export default Login;