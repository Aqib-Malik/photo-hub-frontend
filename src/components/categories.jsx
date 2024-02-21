import React, { useState,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import axios from 'axios'; // Import axios for making HTTP requests
import Swal from "sweetalert2"; 

const Category = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/images/getcategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };





 
    return (
      <div>
  {/* <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                      <a href="index.html" class="logo">
                          <img src="assets/images/logo.png" alt="S//napX Photography Template"/>
                      </a>
                      <ul class="nav">
                          <li><a href="index.html">Home</a></li>
                          <li class="has-sub">
                              <a href="javascript:void(0)" class="active">Photos &amp; Videos</a>
                              <ul class="sub-menu">
                                  <li><a href="contests.html">Contests</a></li>
                                  <li><a href="contest-details.html">Single Contest</a></li>
                              </ul>
                          </li>
                          <li><a href="categories.html">Categories</a></li>
                          <li><a href="users.html">Users</a></li>
                      </ul>   
                      <div class="border-button">
                        <a id="modal_trigger" href="#modal" class="sign-in-up"><i class="fa fa-user"></i> Sign In/Up</a>
                      </div>
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
  </header> */}









{/* 
  <div class="featured-items" id="featured-items">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-features owl-carousel" style={{position: 'relative' , zIndex: 5}}>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Smile In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Happy In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $8,400 + Canon EOS R1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Run In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $5,500 + Canon EOS R3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Stay In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $4,400 + Canon EOS R5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $3,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Shoot In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $2,400 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt=""//>
                <div class="hover-effect">
                  <div class="content">
                    <h4>Fly In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R10</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}


<section class="popular-categories">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Our Categories</h6>
            <h4>Check Out <em>Popular</em> Contest <em>Categories</em></h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <a href="categories.html">Discover All Categories</a>
          </div>
        </div>
        {categories.map(category => (
             
              <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-01.png" alt=""/>
              </div>
              <div class="right">
                <h4>{category.category_name}</h4>
                <span><em>126</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-01.png" alt=""/>
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
          </div>
        </div>
            ))}
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-01.png" alt=""/>
              </div>
              <div class="right">
                <h4>Nature Pic Contest</h4>
                <span><em>126</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-01.png" alt=""/>
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-02.png" alt=""/>
              </div>
              <div class="right">
                <h4>Random Pic Contest</h4>
                <span><em>116</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-02.png" alt=""/>
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Random Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-03.png" alt=""/>
              </div>
              <div class="right">
                <h4>Portrait Pic Contest</h4>
                <span><em>164</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-03.png" alt=""/>
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Portrait Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-04.png" alt=""/>
              </div>
              <div class="right">
                <h4>Space Pic Contest</h4>
                <span><em>135</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-04.png" alt=""/>
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Space Pic Contests</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      </div>
    );
  }


export default Category;
