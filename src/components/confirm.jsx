
import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import './become.css';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      isPhotographer: false  // Initialize isPhotographer state
    };
  }
  
  addRec = async () => {
    try {
      // Make a PUT request to update is_photographer status
      const response = await axios.put(`http://localhost:3001/users/${localStorage.getItem('user_id')}/is-photographer`);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: response.data.message,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="become-section">
        <div>
          <br />
          <div className="row d-flex justify-content-center align-items-center h-100"  >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Become a Photographer</p>
                      <form className="mx-1 mx-md-4">
                     
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" value={this.state.location} onChange={this.onChange} name="location" />
                            <label className="form-label" for="form3Example3c">Email</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={this.addRec}>Confirm</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://strachan.blog/wp-content/uploads/2022/01/img_3276.gif"
                        className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
