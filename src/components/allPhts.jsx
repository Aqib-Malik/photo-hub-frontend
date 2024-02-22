
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import ImageRating from './ratting_component';const AllPhotos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch images from your backend API
    fetch('http://localhost:3001/images')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  const handleRating = (rating, imageId) => {
    fetch('http://localhost:3001/images/addratting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageId: imageId,
        rating: rating,
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Rating added successfully');
        } else {
          console.error('Failed to add rating:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error adding rating:', error);
      });
  };


  return (
    <div>




    



  <section class="portfolio">
    <div class="container">
      
    <div class="row">
            {images.map((image, index) => (
              <div class="col-lg-4" key={index}>
                <div class="thumb">
                  <img src={image.image} alt="" />
                  <div classNameName="rating-container">
                    <ImageRating image={image} />
                  </div>
                  <div class="hover-effect">
                    <div class="content">
                    <h4>{image.title} ({image.category_name})  </h4>
                      <span><em>{image.username}</em></span>
                      <span><em>              </em></span>

                      <Rating
                        ratingValue={image.rating}
                        size={20}
                        transition
                        fillColor="#FFD700"
                        emptyColor="#DCDCDC"
                        onClick={(rating) => handleRating(rating, image.id)}
                      />

                      <ul>
                        {/* Uncomment if needed */}
                        {/* <li><a href="#"><i class="fa fa-heart"></i></a></li> */}
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  </section>

  <section class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Contact Us</h6>
            <h4>Photo  <em>Hub</em></h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <i class="fa fa-phone"></i>
            <h4>Phone Numbers</h4>
            <span><a href="#">123456678</a><br/><a href="#">123456678</a></span>
          </div>  
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <i class="fa fa-envelope"></i>
            <h4>Email Addresses</h4>
            <span><a href="#">abc@company.com</a><br/><a href="#">abc@company.com</a></span>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <i class="fa fa-map-marked"></i>
            <h4>Office Location</h4>
            <span><a href="#">Comsats, Wahcant,<br/>Pakistan</a></span>
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright © 2048 <a href="#">Photo hub</a> Photo Contest Co., Ltd. All rights reserved. 
          
          Design:</p>
        </div>
      </div>
    </div>
  </footer>



    </div>
  );
};

export default AllPhotos;