// // NavBar.js

// import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import '../components/assets/css/fontawesome.css'
// import '../components/assets/css/owl.css'
// import '../components/assets/css/animate.css'
// import '../components/assets/css/templatemo-snapx-photography.css'
// import userImage  from '../components/assets/images/logo.png';

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//   }

//   logout() {
//     Swal.fire({
//       title: 'Are you sure?',
//       icon: 'warning',
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       text: 'Are you sure you want to Logout?',
//       type: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//     }).then(function (result) {
//       if (result.value) {
//         localStorage.clear();
//         window.location.reload();
//       }
//     });
//   }

//   render() {
//     return (
//       <>
//         {localStorage.getItem('token') != null ? (
//           <Navbar bg="dark " variant="dark" expand="lg">
//             <Container fluid>
//   <header class="header-area header-sticky">
  
//     <div class="container">
//         <div class="row">
//             <div class="col-12">
//                 <nav class="main-nav">
//                     <a href="index.html" class="logo">
//                         <img src={userImage} alt="SnapX Photography Template" style={{ height: '50',width:50 }}/>
//                     </a>
//                     <ul class="nav">
//                         <li><a href="index.html" class="active">Home</a></li>
//                         <li class="has-sub">
//                             <a href="javascript:void(0)">Upload Photo</a>
//                             <ul class="sub-menu">
//                                 <li><a href="contests.html">Contests</a></li>
//                                 <li><a href="contest-details.html">Single Contest</a></li>
//                             </ul>
//                         </li>
//                         <li><a href="users">Categories</a></li>
//                      <li><a href="userlist">Users</a></li>
                
                       
//                     </ul>   
//                     <div class="border-button" onClick={this.logout}>
//                       <a id="modal_trigger" href="#modal" class="sign-in-up"><i class="fa fa-user"></i>Logout</a>
//                     </div>
//                     <a class='menu-trigger'>
//                         <span>Menu</span>
//                     </a>
//                 </nav>
//             </div>
//         </div>
//     </div>
    
//   </header>
//   </Container>

//           </Navbar>
//         ) : (
//           <div></div>
//         )}
//       </>
//     );
//   }
// }

// export default NavBar;














// NavBar.js

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      text: 'Are you sure you want to Logout?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(function (result) {
      if (result.value) {
        localStorage.clear();
        window.location.reload();
      }
    });
  }

  render() {
    return (
      <>
        {/* {localStorage.getItem('token') != null ? ( */}
          <Navbar bg="dark " variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Photo Hub
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                      Home
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link>
                    <Link to="gallery" style={{ color: 'white', textDecoration: 'none' }}>
                      Gallery
                    </Link>
                  </Nav.Link> */}
                  <Nav.Link>
                    <Link to="uploadphoto" style={{ color: 'white', textDecoration: 'none' }}>
                      Upload Photo
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="userlist" style={{ color: 'white', textDecoration: 'none' }}>
                      Users
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="cat" style={{ color: 'white', textDecoration: 'none' }}>
                      Category
                    </Link>
                  </Nav.Link>
                  <Button variant="outline-warning">
                    <Link to="new" style={{ color: 'white', textDecoration: 'none' }}>
                      Become a PhotoGrapher
                    </Link>
                  </Button>
                </Nav>

                <Button variant="outline-warning" onClick={this.logout}>
                  Logout
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        {/* ) : (
          <div></div>
        )} */}
      </>
    );
  }
}

export default NavBar;
