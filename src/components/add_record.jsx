
import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import './become.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import { sendSignInLinkToEmail } from "firebase/auth";

const AddRecord = () => {
    const [email, setEmail] = useState("");
    const [notice, setNotice] = useState("");

    const actionCodeSettings = {
        url: "http://localhost:3000/confirm",
        handleCodeInApp: true
    }

    const callSendSignInLinkToEmail = (e) => {
        e.preventDefault();

        sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            setNotice("An email was sent to your email address. Click the link in the email to login.");
        })
        .catch((error) => {
            setNotice("An error occurred when sending a login link to your email address: ", error.name);
        })
    }

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <form className = "col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }                  
                    <div className = "form-floating mb-3">
                        <input type = "email" className = "form-control" id = "exampleInputEmail" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "exampleInputEmail" className = "form-label">Email address</label>
                    </div>
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => callSendSignInLinkToEmail(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddRecord






// import React, { Component } from 'react';
// import axios from 'axios';
// import Swal from "sweetalert2";
// import './become.css';

// class AddRecord extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       location: "",
//       isPhotographer: false  // Initialize isPhotographer state
//     };
//   }
  
//   addRec = async () => {
//     try {
//       // Make a PUT request to update is_photographer status
//       const response = await axios.put(`http://localhost:3001/users/${localStorage.getItem('user_id')}/is-photographer`);
//       Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: response.data.message,
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//       });
//     }
//   }

//   onChange = e => {
//     console.log(e.target.value);
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   render() {
//     return (
      // <div className="become-section">
      //   <div>
      //     <br />
      //     <div className="row d-flex justify-content-center align-items-center h-100"  >
      //       <div className="col-lg-12 col-xl-11">
      //         <div className="card text-black" style={{ borderRadius: "25px" }}>
      //           <div className="card-body p-md-1">
      //             <div className="row justify-content-center">
      //               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      //                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Become a Photographer</p>
      //                 <form className="mx-1 mx-md-4">
      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-hotel fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="number" id="form3Example1c" className="form-control" value={this.state.name} onChange={this.onChange} name="name" />
      //                       <label className="form-label" for="form3Example1c">Phone Number</label>
      //                     </div>
      //                   </div>
      //                   <div className="d-flex flex-row align-items-center mb-4">
      //                     <i className="fas fa-map fa-lg me-3 fa-fw"></i>
      //                     <div className="form-outline flex-fill mb-0">
      //                       <input type="email" id="form3Example3c" className="form-control" value={this.state.location} onChange={this.onChange} name="location" />
      //                       <label className="form-label" for="form3Example3c">Email</label>
      //                     </div>
      //                   </div>
      //                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
      //                     <button type="button" className="btn btn-primary btn-lg" onClick={this.addRec}>Submit Request</button>
      //                   </div>
      //                 </form>
      //               </div>
      //               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      //                 <img src="https://strachan.blog/wp-content/uploads/2022/01/img_3276.gif"
      //                   className="img-fluid" alt="Sample image" />
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     );
//   }
// }

// export default AddRecord;
