import React, { Component } from 'react'
import "./detail.css"
import {Link,useParams,useLocation,Location} from 'react-router-dom'
function detail (props) {
    // const {type}=useParams()
    // const statePramVal=useLocation().state.stateParam;
    // console.log(type)
    // console.log(props.Location.state)
//     const location = useLocation();
// const data = location.state;
// console.log(data);
        return ( 
          <section className="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
  <div className="container py-5 h-100">
    <h1></h1>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            className="w-100" style={{borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem"}}
            alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Cafe Info</h3>

            <form className="px-md-2">

              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={"Quetta Cafe"} readOnly={true}/>
                <label className="form-label" for="form3Example1q">Name</label>
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={"Blue Area"} readOnly={true}/>
                <label className="form-label" for="form3Example1q">Location</label>
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={"Fast Food"} readOnly={true}/>
                <label className="form-label" for="form3Example1q">Type</label>
              </div>

              
              
              <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>






        // <form>
        //     <input id="input-1" type="text" placeholder="John Doe" required autofocus />
        //     <label for="input-1">
        //       <span classNameName="label-text">Full Name</span>
        //       <span classNameName="nav-dot"></span>
        //       <div classNameName="signup-button-trigger">Sign Up</div>
        //     </label>
        //     <input id="input-2" type="text" placeholder="john" required />
        //     <label for="input-2">
        //       <span classNameName="label-text">Username</span>
        //       <span classNameName="nav-dot"></span>
        //     </label>
        //     <input id="input-3" type="email" placeholder="email@address.com" required />
        //     <label for="input-3">
        //       <span classNameName="label-text">Email</span>
        //       <span classNameName="nav-dot"></span>
        //     </label>
        //     <input id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
        //     <label for="input-4">
        //       <span classNameName="label-text">Password</span>
        //       <span classNameName="nav-dot"></span>
        //     </label>
        //     <input id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
        //     <label for="input-5">
        //       <span classNameName="label-text">Confirm Password</span>
        //       <span classNameName="nav-dot"></span>
        //     </label>
        //     <button type="submit">Create Your Account</button>
        //     <p classNameName="tip">Press Tab</p>
        //     <div classNameName="signup-button">Sign Up</div>
        //   </form>
          
        
        
        
        );
    
}
 
export default detail;