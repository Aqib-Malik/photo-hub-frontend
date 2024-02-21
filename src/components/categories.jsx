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
        <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 header-text">
          <h2>Categories <em>Photo Hub</em></h2>
          <p>Explore Photgraphy</p>
        </div>
      </div>
    </div>
  </div>
  <div class="top-categories">
    <div class="container">
      <div class="row">
        <div class="col-lg col-sm-4">
          <div class="item">
            <div class="icon">
              <img src="assets/images/icon-01.png" alt=""/>
            </div>
            <h4>Nature Picture</h4>
            <span>Available Contests</span>
            <span class="counter">128</span>
          </div>
        </div>
        <div class="col-lg col-sm-4">
          <div class="item">
            <div class="icon">
              <img src="assets/images/icon-02.png" alt=""/>
            </div>
            <h4>Space Contest</h4>
            <span>Available Contests</span>
            <span class="counter">224</span>
          </div>
        </div>
        <div class="col-lg col-sm-4">
          <div class="item">
            <div class="icon">
              <img src="assets/images/icon-03.png" alt=""/>
            </div>
            <h4>Portrait Picture</h4>
            <span>Available Contests</span>
            <span class="counter">145</span>
          </div>
        </div>
        <div class="col-lg col-sm-4">
          <div class="item">
            <div class="icon">
              <img src="assets/images/icon-04.png" alt=""/>
            </div>
            <h4>Nature Picture</h4>
            <span>Available Contests</span>
            <span class="counter">268</span>
          </div>
        </div>
        <div class="col-lg col-sm-4">
          <div class="item">
            <div class="icon">
              <img src="assets/images/icon-01.png" alt=""/>
            </div>
            <h4>Space Picture</h4>
            <span>Available Contests</span>
            <span class="counter">310</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  

      </div>
    );
  }


export default Category;
