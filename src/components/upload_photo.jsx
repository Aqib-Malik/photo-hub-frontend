import React, { useState,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadScreen.css';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import axios from 'axios'; // Import axios for making HTTP requests
import Swal from "sweetalert2"; 

const UploadScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('')

  
  useEffect(() => {
    // Fetch categories from the backend when the component mounts
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (uploadedImage) {
      try {
        setUploading(true);
        const storageRef = ref(storage, `images/${uploadedImage.name}`);
        const snapshot = await uploadBytes(storageRef, uploadedImage);
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Make a POST request to your Node.js backend to store image details
        await axios.post('http://localhost:3001/images', {
          title,
          description,
          rating:5.0,
          image: downloadURL,
          userId:localStorage.getItem('user_id'),
          category_id:selectedCategory.id
        });

        setTitle('');
        setDescription('');
        setUploadedImage(null);
        setUploading(false);
        setUploadProgress(0);

        Swal.fire({
          title: 'Uploaded',
          type: 'success',
          text: 'Image uploaded successfully!',
          icon: 'success',
        });
      } catch (error) {
        console.error("Error uploading image: ", error);
        setUploading(false);
        setUploadProgress(0);
        // alert("Failed to upload image. Please try again.");
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: "Failed to upload image. Please try again.",
        });
      }
    } else {
      // alert("Please select an image to upload.");
      Swal.fire({
        icon: 'info',
        title: 'Select Image',
        text:  "Please select an image to upload.",
      });
     
    }
  };

  return (
    <div className="upload-screen">
      <div className="upload-container">
        <h2 className="upload-title">Upload Your Image</h2>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {uploadedImage ? (
            <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="uploaded-image" />
          ) : (
            <div className="upload-placeholder">
              <span>Drag & Drop or Click to Select Image</span>
            </div>
          )}
        </div>
        <div className="form-container">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="upload-input" />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="upload-input" />
          <select value={selectedCategory} onChange={handleCategoryChange} className="upload-input">
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.category_name}</option>
            ))}
          </select>
          <button className="upload-button" onClick={handleUpload} disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
        </div>
      </div>
    </div>
  );
};

export default UploadScreen;
























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UploadScreen.css';

// const UploadScreen = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     // Fetch categories from the backend when the component mounts
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/images/getcategories');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleUpload = async () => {
//     // Your upload logic here
//     console.log('Selected Category:', selectedCategory);
//   };

//   return (
//     <div className="upload-screen">
//       <div className="upload-container">
//         <h2 className="upload-title">Upload Your Image</h2>
//         <div className="form-container">
//           <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="upload-input" />
//           <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="upload-input" />
//           <select value={selectedCategory} onChange={handleCategoryChange} className="upload-input">
//             <option value="">Select Category</option>
//             {categories.map(category => (
//               <option key={category.id} value={category.id}>{category.category_name}</option>
//             ))}
//           </select>
//           {/* Other upload elements */}
//           <button className="upload-button" onClick={handleUpload} disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadScreen;
