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
  {categories.map((image, index) => (
    <div class="col-lg-3 col-sm-4">
      <div class={"item" + ( " mt-4" )}>
        <div class="icon">
          <img src="assets/images/icon-01.png" alt=""/>
        </div>
        <h4>{image.category_name}</h4>
        <span>Photo Hub</span>
        <span class="counter">{image.id}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
  

      </div>
    );
  }


export default Category;
