import React, { Component } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";
import './login.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  // Switch

} from 'react-router-dom';
// import './in.css'
// import './signupp.css'
import Cafe from "../models/cafe"
class Signup extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  state = {
    // name: "",
    // location: "",
    // type: "",
    name: "",
      username:"",
      email: "",
      password: "",
    credentials: { empname: "irtaza", sallery: 12345678, email: "irt@gmail.com" },
  };

  signup = () => {
    if(this.state.username!=""&& this.state.password!=""&& this.state.email!=""){
    axios.post('http://localhost:3001/signup', {
      // name: this.state.name,
      username: this.state.username,
      password:this.state.password,
      email: this.state.email
    })
      .then(response => {
        if (response.status == 201) {
          Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'Account Created Sussessfully.',
            icon: 'success',
          });


          this.setState({
            location: this.state.location = "",
            name: this.state.name = "",
            type: this.state.type = "",

          })


        }



      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }else{
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
    console.log(Cafe.name);
    return (<>
             <div className="login-screen">
        <div>
          <br />

          <div className="row d-flex justify-content-center align-items-center h-100"  >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

                      <form className="mx-1 mx-md-4">

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-hotel fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" value={this.state.name} onChange={this.onchange} name="name" />
                            <label className="form-label" for="form3Example1c">Name*</label>
                          </div>
                        </div> */}

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-hotel fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" value={this.state.username} onChange={this.onchange} name="username" />
                            <label className="form-label" for="form3Example1c">User Name*</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" value={this.state.email} onChange={this.onchange} name="email" />
                            <label className="form-label" for="form3Example3c">Email*</label>
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
                          <button type="button" className="btn btn-primary btn-lg" onClick={this.signup}>Sign Up</button>
                        </div>

                      </form>
                      <Link to="/" style={{color:"blue",textDecoration: 'none',marginLeft:"50px"}}>Allready have an account?Log in</Link>

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











      {/* <div classNameName="container">    
        <div id="loginbox" style={{marginTop:"50px"}} classNameName="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div classNameName="panel panel-info" >
                    <div classNameName="panel-heading">
                        <div classNameName="panel-title">Sign In</div>
                        <div style={{float:"right", fontSize: "80%", position: "relative; top:-10px"}}><a href="#">Forgot password?</a></div>
                    </div>     

                    <div style={{paddingTop:"30px"}} classNameName="panel-body" >

                        <div style={{display:"none"}} id="login-alert" classNameName="alert alert-danger col-sm-12"></div>
                            
                        <form id="loginform" classNameName="form-horizontal" role="form">
                                    
                            <div style={{marginBottom: "25px"}} classNameName="input-group">
                                        <span classNameName="input-group-addon"><i classNameName="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" classNameName="form-control" name="username" value="" placeholder="username or email"/>                                        
                                    </div>
                                
                            <div style={{marginBottom: "25px"}} classNameName="input-group">
                                        <span classNameName="input-group-addon"><i classNameName="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" classNameName="form-control" name="password" placeholder="password"/>
                                    </div>
                                    

                                
                            <div classNameName="input-group">
                                      <div classNameName="checkbox">
                                        <label>
                                          <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                                        </label>
                                      </div>
                                    </div>


                                <div style={{marginTop:"10px"}} classNameName="form-group">

                                    <div classNameName="col-sm-12 controls">
                                      <a id="btn-login" href="#" classNameName="btn btn-success">Login  </a>
                                      <a id="btn-fblogin" href="#" classNameName="btn btn-primary">Login with Facebook</a>

                                    </div>
                                </div>


                                <div classNameName="form-group">
                                    <div classNameName="col-md-12 control">
                                        <div style={{borderTop: "1px solid#888", paddingTop:"15px", fontSize:"85%"}} >
                                            Don't have an account! 
                                        <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                            Sign Up Here
                                        </a>
                                        </div>
                                    </div>
                                </div>    
                            </form>     



                        </div>                     
                    </div>  
        </div>
        <div id="signupbox" style={{display:"none", marginTop:"50px"}} classNameName="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div classNameName="panel panel-info">
                        <div classNameName="panel-heading">
                            <div classNameName="panel-title">Sign Up</div>
                            <div style={{float:"right", fontSize: "85%", position: "relative", top:"-10px"}}><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Sign In</a></div>
                        </div>  
                        <div classNameName="panel-body" >
                            <form id="signupform" classNameName="form-horizontal" role="form">
                                
                                <div id="signupalert" style={{display:"none"}} classNameName="alert alert-danger">
                                    <p>Error:</p>
                                    <span></span>
                                </div>
                                    
                                
                                  
                                <div classNameName="form-group">
                                    <label for="email" classNameName="col-md-3 control-label">Email</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                    
                                <div classNameName="form-group">
                                    <label for="firstname" classNameName="col-md-3 control-label">First Name</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="firstname" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div classNameName="form-group">
                                    <label for="lastname" classNameName="col-md-3 control-label">Last Name</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div classNameName="form-group">
                                    <label for="password" classNameName="col-md-3 control-label">Password</label>
                                    <div classNameName="col-md-9">
                                        <input type="password" classNameName="form-control" name="passwd" placeholder="Password"/>
                                    </div>
                                </div>
                                    
                                <div classNameName="form-group">
                                    <label for="icode" classNameName="col-md-3 control-label">Invitation Code</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="icode" placeholder=""/>
                                    </div>
                                </div>

                                <div classNameName="form-group">
                                    <div classNameName="col-md-offset-3 col-md-9">
                                        <button id="btn-signup" type="button" classNameName="btn btn-info"><i classNameName="icon-hand-right"></i> &nbsp Sign Up</button>
                                        <span style={{marginLeft:"8px"}}>or</span>  
                                    </div>
                                </div>
                                
                                <div style={{borderTop: "1px solid #999", paddingTop:"20px"}}  classNameName="form-group">
                                    
                                    <div classNameName="col-md-offset-3 col-md-9">
                                        <button id="btn-fbsignup" type="button" classNameName="btn btn-primary"><i classNameName="icon-facebook"></i>   Sign Up with Facebook</button>
                                    </div>                                           
                                        
                                </div>
                                
                                
                                
                            </form>
                         </div>
                    </div>
                    </div>
                    </div> */}

      {/* <body>
    <div id='add'>
    <div classNameNameNameName="background">
        <div classNameNameNameName="shape"></div>
        <div classNameNameNameName="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <div classNameNameNameName="social">
          <div classNameNameNameName="go"><i classNameNameNameName="fab fa-google"></i>  Google</div>
          <div classNameNameNameName="fb"><i classNameNameNameName="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
</body> */}
    </>);
  }
}

export default Signup;




















// import React, { Component } from 'react';
// import axios from 'axios';
// import Swal from "sweetalert2";
// import './signupp.css'
// class Signup extends Component {
    
//     state = {
//       name: "",
//       username:"",
//       email: "",
//       password: "",
//       credentials: { empname: "irtaza", sallery: 12345678, email: "irt@gmail.com" },
//     };

//     signup = () => {
//       if(this.state.name!="" && this.state.location!="" && this.state.type!=""){
//       axios.post('http://localhost:8080/api/user/register', JSON.stringify({
//         name: this.state.name,//this.state.credentials.empname,
//         username: this.state.username,
//         email: this.state.email,//this.state.credentials.email,
//         password:this.state.password
//       }))
//         .then(response => {
//           console.log(response);
//           if (response.status == 201) {
//             Swal.fire({
//               title: 'Success',
//               type: 'success',
//               text: 'Record Added Sussessfully.',
//               icon: 'success',
//             });
  
  
//             this.setState({
//               location: this.state.location = "",
//               name: this.state.name = "",
//               type: this.state.type = "",
  
//             })
  
  
//           }
  
  
  
//         })
//         .catch(error => {
//           console.error('There was an error!', error);
//         });
//       }else{
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong!',
//         });
  
  
//       }
//     }




    



//     onchange = e => {
//       console.log(e.target.value);
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//     }
  
//     render() { 
//         return ( <>
//         <div className="vh-100 gradient-custom">
//   <div className="container py-5 h-100">
//     <div className="row justify-content-center align-items-center h-100">
//       <div className="col-12 col-lg-9 col-xl-7">
//         <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
//           <div className="card-body p-4 p-md-5">
//             <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign Up</h3>
//             <form>

              
//                 <div className="col-md-6 mb-4">

//                   <div className="form-outline">
//                     <input type="text" id="firstName" className="form-control form-control-lg" value={this.state.name} onChange={this.onchange} name="name"/>
//                     <label className="form-label" for="firstName" >Name</label>
//                   </div>

//                 </div>
//                 <div className="col-md-6 mb-4">

//                   <div className="form-outline">
//                     <input type="text" id="firstName" className="form-control form-control-lg" value={this.state.username} onChange={this.onchange} name="username"/>
//                     <label className="form-label" for="firstName">User Name</label>
//                   </div>

//                 </div>
              

              

              
//                 <div className="col-md-6 mb-4 pb-2">

//                   <div className="form-outline">
//                     <input type="email" id="emailAddress" className="form-control form-control-lg"  value={this.state.email} onChange={this.onchange} name="email"/>
//                     <label className="form-label" for="emailAddress">Email</label>
//                   </div>

//                 </div>
                
              

              
//                 <div className="col-md-6 mb-4 pb-2">

//                   <div className="form-outline">
//                     <input type="password" id="password" className="form-control form-control-lg"  value={this.state.password} onChange={this.onchange} name="password"/>
//                     <label className="form-label" for="emailAddress">Password</label>
//                   </div>

//                 </div>
                
            

              
//               <div className="mt-4 pt-2">
//                 <button onClick={this.signup()}>Create User</button>
//                 {/* <input className="btn btn-primary btn-lg" type="submit" value="Submit" /> */}
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
        
//         </> );
//     }
// }
 
// export default Signup;