



import React, { Component } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import Cafe from "../models/cafe"
import Button from 'react-bootstrap/Button';
import {
	// BrowserRouter as Router,
	// Routes,
	// Route,
	Link
} from 'react-router-dom';
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            updateShow:false
        };
    }

    

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        this.setState(()=>{
            this.getCafeData()

        })
        
            }

            getCafeData(){
                fetch(
                    "http://localhost:8080/api/cafe/getall",
                    {
                        // mode: 'no-cors',
                        // headers:{
                        //     'Authorization':localStorage.getItem("token")//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZmkiLCJlbWFpbCI6InNhZmlAZ28uY29tIiwiZXhwIjoxNjYwMDY0NDQxfQ.Gg6YbwgUG77IqKbf9S79P1nLxryU5uo6kFYUkDhCpAU"//localStorage.getItem('token')
                        // }
                    })
                    .then((res) => {
                        if(res.status==200){
                        // alert(res)
                        console.log(res)
                        res.json().then(body => {
                            console.log(body);
                            this.setState({
                                items: body.data,
                                DataisLoaded: true
                            });
                            // localStorage.setItem('token',body.token)
                            // localStorage.setItem('login',true)
                          });}
                        //   else{
                        //     localStorage.removeItem("token");
                        //     window.location.reload(); 

                        //   }
                    // res.json()
                }
                    )
                    // .then((json) => {
                    //     console.log(json.data)
                    //     this.setState({
                    //         items: json.data,
                    //         DataisLoaded: true
                    //     });
                    // })
        
            }

    del(e,id){
        axios.delete('http://localhost:8080/api/cafe/delete/'+id)
        .then(response => alert('Delete successful'))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    

    HandleClick1(e,id) {  
        Swal.fire({ 

            title: 'Are you sure?',  
            icon: 'warning',  
            confirmButtonColor: '#3085d6',  
            cancelButtonColor: '#d33', 

        text: "Are you sure you want to Delete this record..!!! ",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes'
    }).then(function(result) { 
        if (result.value) {
            try{
                // Simple POST request with a JSON body using fetch
                const requestOptions = {
                  
                    method: 'DELETE',
                    // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
        //             body: JSON.stringify({  
        //                 name: this.state.name,//this.state.credentials.empname,
        //             location:this.state.location,
        //             type:this.state.type,//this.state.credentials.email,
        // })
                };
                fetch('http://localhost:8080/api/cafe/delete/'+id, requestOptions)
                    .then(response => {
                        // if(response.status==200){
                            Swal.fire({  
                                title: 'Success',  
                                type: 'success',  
                                text: 'Record Added Sussessfully.', 
                                icon: 'success', 
                              });
                              window.location.reload(); 
                        // }
                        // else{
                        //     Swal.fire({  
                        //         icon: 'error',  
                        //         title: 'Oops...',  
                        //         text: 'Something went wrong!',    
                        //       }); 
                        // }
                        })
                    // .then(data => this.setState({Id: data.id, }))
              }catch (e) {
                alert(e)
              }



        //     axios.delete('http://localhost:8080/cafe_delete/4')
        // .then(response => alert('Delete successful'))
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });            
        }   
        });  }



        update(id,name,location,type){
            Cafe.id=id
            Cafe.name=name
            Cafe.location=location
            Cafe.type=type
          }
    render() {
        //  this.state.updateShow?
        
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            
            <div style={{backgroundColor: "#8fc4b7",padding:"50px"}} className="gradient-custom">
                {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" style={{marginLeft:"700px"}}>Log Out</button>
                        </div> */}
                <div>
                <h1>Islamabad's Cafe<span className="badge badge-secondary">Records</span></h1>
 
                </div>
                
                <table className="table table-light" >
                    <thead>
                        <tr style={{padding:"17px"}}>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Type</th>
                            <th scope="col">Details</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr style={{padding:"17px"}}>
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.type}</td>
                            <td><button type="button" className="btn btn-primary">
            <Link to="/detail" state={{name:item.name,location:item.location,type:item.type}} style={{color:"white",textDecoration: 'none'}}>Detail</Link>
        </button></td>
                            <td><button type="button" className="btn btn-danger" onClick={(event) =>this.HandleClick1(event,item.ID)}>Delete</button></td>
                            <td>
                                {/* <button type="button" className="btn btn-warning"><Link to="/update" state={{id:item.ID,name:item.name,location:item.location,type:item.type}} style={{color:"white",textDecoration: 'none'}}>Update</Link>
                                </button> */}
    <Link to="/update" style={{color:"white",textDecoration: 'none'}}><button type="button" className="btn btn-warning" onClick={this.update(this.ID,item.name,item.location,item.type)}>update</button></Link>

                                
                                </td>
                        </tr>
                    ))}
                        
                                          </tbody>
                </table>

            </div>
        );

        //         (
        //             <div >

        //             <table className="table table-dark">
        //   <thead>
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">First</th>
        //       <th scope="col">Last</th>
        //       <th scope="col">Handle</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <th scope="row">1</th>
        //       <td>Mark</td>
        //       <td>Otto</td>
        //       <td>mdo</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">2</th>
        //       <td>Jacob</td>
        //       <td>Thornton</td>
        //       <td>fat</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">3</th>
        //       <td>Larry</td>
        //       <td>the Bird</td>
        //       <td>twitter</td>
        //     </tr>
        //   </tbody>
        // </table>
        // </div>
        //         );
    }

}

export default Counter;
























// import React, { Component, useEffect, useState } from "react";

// import Swal from "sweetalert2";
// import axios from 'axios';
// import Cafe from "../models/cafe"
// import Button from 'react-bootstrap/Button';
// import {
// 	// BrowserRouter as Router,
// 	// Routes,
// 	// Route,
// 	Link
// } from 'react-router-dom';
// function Counter() {
//     const [items, setItems] = useState([]);
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         items: [],
//     //         DataisLoaded: false,
//     //         updateShow:false
//     //     };
//     // }

    

//     // ComponentDidMount is used to
//     // execute the code 
//     useEffect(() => {
//         fetch(
//             "http://localhost:8080/api/cafe/getall",
//             {
//                 // mode: 'no-cors',
//                 // headers:{
//                 //     'Authorization':localStorage.getItem("token")//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZmkiLCJlbWFpbCI6InNhZmlAZ28uY29tIiwiZXhwIjoxNjYwMDY0NDQxfQ.Gg6YbwgUG77IqKbf9S79P1nLxryU5uo6kFYUkDhCpAU"//localStorage.getItem('token')
//                 // }
//             }).then((resp) => resp.json())
//             .then((resp) => setItems(resp))
//             .catch((error) => console.log(error));
//           console.log("$$$$$$$$$$");
//           console.log(items.data);
     
            
//             // .then((json) => {
//             //     console.log(json.data)
//             //     this.setState({
//             //         items: json.data,
//             //         DataisLoaded: true
//             //     });
//             // })
//         }

//         );

//     // del(e,id){
//     //     axios.delete('http://localhost:8080/api/cafe/delete/'+id)
//     //     .then(response => alert('Delete successful'))
//     //     .catch(error => {
//     //         console.error('There was an error!', error);
//     //     });
//     // }

    

//     // HandleClick1(e,id) {  
//     //     Swal.fire({ 

//     //         title: 'Are you sure?',  
//     //         icon: 'warning',  
//     //         confirmButtonColor: '#3085d6',  
//     //         cancelButtonColor: '#d33', 

//     //     text: "Are you sure you want to Delete this record..!!! ",
//     //     type: 'warning',
//     //     showCancelButton: true,
//     //     confirmButtonText: 'Yes'
//     // }).then(function(result) { 
//     //     if (result.value) {
//     //         try{
//     //             // Simple POST request with a JSON body using fetch
//     //             const requestOptions = {
                  
//     //                 method: 'DELETE',
//     //                 // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
//     //     //             body: JSON.stringify({  
//     //     //                 name: this.state.name,//this.state.credentials.empname,
//     //     //             location:this.state.location,
//     //     //             type:this.state.type,//this.state.credentials.email,
//     //     // })
//     //             };
//     //             fetch('http://localhost:8080/api/cafe/delete/'+id, requestOptions)
//     //                 .then(response => {
//     //                     // if(response.status==200){
//     //                         Swal.fire({  
//     //                             title: 'Success',  
//     //                             type: 'success',  
//     //                             text: 'Record Added Sussessfully.', 
//     //                             icon: 'success', 
//     //                           });
//     //                           window.location.reload(); 
//     //                     // }
//     //                     // else{
//     //                     //     Swal.fire({  
//     //                     //         icon: 'error',  
//     //                     //         title: 'Oops...',  
//     //                     //         text: 'Something went wrong!',    
//     //                     //       }); 
//     //                     // }
//     //                     })
//     //                 // .then(data => this.setState({Id: data.id, }))
//     //           }catch (e) {
//     //             alert(e)
//     //           }



//     //     //     axios.delete('http://localhost:8080/cafe_delete/4')
//     //     // .then(response => alert('Delete successful'))
//     //     // .catch(error => {
//     //     //     console.error('There was an error!', error);
//     //     // });            
//     //     }   
//     //     });  }



//     //     update(id,name,location,type){
//     //         Cafe.id=id
//     //         Cafe.name=name
//     //         Cafe.location=location
//     //         Cafe.type=type
//     //       }
 

//         return (
            
//             <div style={{backgroundColor: "#8fc4b7",padding:"50px"}} className="gradient-custom">
//                 {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                           <button type="button" className="btn btn-primary btn-lg" style={{marginLeft:"700px"}}>Log Out</button>
//                         </div> */}
//                 <div>
//                 <h1>Islamabad's Cafe<span className="badge badge-secondary">Records</span></h1>
 
//                 </div>
                
//                 <table className="table table-light" >
//                     <thead>
//                         <tr style={{padding:"17px"}}>
//                             <th scope="col">#</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Location</th>
//                             <th scope="col">Type</th>
//                             <th scope="col">Details</th>
//                             <th scope="col">Delete</th>
//                             <th scope="col">Update</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     <h1>{{items}}</h1>
                        
                  
                        
//                                           </tbody>
//                 </table>
                
//                 {items.map((item) =>
//             item ? (
//               <div className="col-lg-4 col-md-5 col-sm-6">
//                 <div className="card course-card">
//                   {item}
                 
//                   <div> 

//                   <a href={`${item}`}>`${item}`</a>   <br></br>
//                   Uploaded By :{item}<br></br>
//                   className : {item}

//             {/* {
//                 (() => {
//                     if(`${item.file}`==null) {
//                             return (
//                                 <p>No video</p>
//                             )
//                         } else if ('b'==='b') {
//                             return (
//                             <a href={`${item.file}`}>`${item.file}`</a>
//                             )
//                         } else {
//                             return (
//                               <video width="750" height="500" controls >
//                               <source src={`${item.file}`} type="video/mp4" />
//                             </video>
//                             )
//                         }
//                 })()  
//             }   */}
//         </div>  
//                   {/* <video width="750" height="500" controls >
//                     <source src={`${item.file}`} type="video/mp4" />
//                   </video> */}
                  
//                   {/* <div className="px-30">
//                     <div className="card-footer px-0 bg-transparent mb-10 d-flex justify-content-between align-items-center">
//                       <div className="rating text-primary">
//                         <span className="font-weight-600">4.3</span>
//                         <i className="fas fa-star" />
//                         <i className="fas fa-star" />
//                         <i className="fas fa-star" />
//                         <i className="fas fa-star" />
//                       </div>
//                       <p className="price h6">
//                         $12.99 <s>$12.99</s>
//                       </p>
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             ) : null
//           )}
        

//             </div>
//         );

//         //         (
//         //             <div >

//         //             <table className="table table-dark">
//         //   <thead>
//         //     <tr>
//         //       <th scope="col">#</th>
//         //       <th scope="col">First</th>
//         //       <th scope="col">Last</th>
//         //       <th scope="col">Handle</th>
//         //     </tr>
//         //   </thead>
//         //   <tbody>
//         //     <tr>
//         //       <th scope="row">1</th>
//         //       <td>Mark</td>
//         //       <td>Otto</td>
//         //       <td>mdo</td>
//         //     </tr>
//         //     <tr>
//         //       <th scope="row">2</th>
//         //       <td>Jacob</td>
//         //       <td>Thornton</td>
//         //       <td>fat</td>
//         //     </tr>
//         //     <tr>
//         //       <th scope="row">3</th>
//         //       <td>Larry</td>
//         //       <td>the Bird</td>
//         //       <td>twitter</td>
//         //     </tr>
//         //   </tbody>
//         // </table>
//         // </div>
//         //         );
//     }



// export default Counter;































