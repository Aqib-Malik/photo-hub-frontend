
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import ImageRating from './ratting_component';
// import userImage  from '../components/assets/images/logo.png';


const userImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAd8z///8AdMsAccoAb8oAc8sAbMkAa8gAec3z+f35/P6cw+fF3PHw9vvT5vUAdMxSmdi91+/j7/lnpNyoyuro8/rY6PbB2vCev+U5j9UpiNKJuOOWv+axz+wRfc4ig9B1rN+DseBfn9o5jdRUmth7r+DQ4PKJseBGldeUueOFtuITgM+ShoQjAAAOIElEQVR4nM1d2ZaqOhCNSYgoYqOg3U7gfD3t///fBadGhkxVUffjWWfR2SapVGrYIR3X6IfDUfKziaPZPEtTn/hpms1nUbz5SUbDsO/87xOH355MV4vtzu8KzhjzKCV/oNTL/42Lrr/bblbTicNRuGI4TOJdynlOjMiRU+Xc362ToaORuGA4DCKfcabi9sQz///+KXDBEpthuIqJMCJXpilIvAqRR4TKcJxElHtW7O7w+FcUjDEHhcewtzpRbjd5lank9JT00MaFxXAQMxR6N5KMbwdII0NhGAZzAVucdXgiW6JsSQSG0wNBnL4/UE7W0w9gOIwY9vT9wWOn45sZDmZdd/wK0O4MuCFBDAcn4WJ5VjiKE4gjgKHT9fnEkUUAZ8ea4SQGnu0m8Pja+oC0ZNhfvmj+7mBsaXnRsmM4mPOX8ivAM7vtaMOwH1u61jBQFttMowXDEWVv4FfAY6sXMAy34k38CoitsSdnyvD7/K4JvIKlI7cMN048UBNQfnDIcPwGE1oHnxvdkE0Yjsi7J/AKSkxWqgHDxSdM4BV84YBhP/ocgjnFSPto1GU4yd5rQ6vwzrqbUZPhMH2tG6oG9TXvxnoMR1+fYWPKoFTP3mgxDLrvptOIboLFcPlOP00GEeAw/KBTogq+xGD4+7kEc4obOMMD1hKlXpFH44IXOTdl0k0X4hfKEGeJUibofHsIVoPj8ThYBYftjtpmqCpQLlQFwyUCQcq7u3+DSj67Hw6Wsy7GTYUrzI2cYQBfooy1J5J6yYnBXSUhPzSkDEfgc5D5G3nqYbxJwRy70qNfxnAIXUOMaKSPeksC5UhlAWMJw0kKY0jFQS+M24NGDmgqKeZoZ9jPYM42n+lfxccnmEXzsvbLVDvDCLR2qKfjUf0hoKBpZJE5Q9hB6J1Nc5tT2JJpv/W3MRyBCPKTeXQaGETgbQa1heEY8scIXxvzK7CGbcaWbd/CcA7ZFVzpK7YAtDPo3IQh6D6hdoZb8QvxoVruGY0MvyEELZfoFaCFyr91GYaQo55tAQQ7nS3gjKJpkwfVxBD0V+aweq1ehv3rNjAcQTaDgFbdjUEmoCG/WGfYB5lRrfCXFAmEIquvoDrDNWCNsj2YYKezBwzAi9UMByB3FKMyFORtsFo5Q5VhH7TTNYJ7GliCLF3VX6wyhARm6Bmnt6B/BvzKtchUheEEskYRzMwVMGNTuQ1XGMaQK4yPRDAfFQBVY/PMcAhymszuvDIEoHE8R22eGUagWyheH0EIOZO95/v+E0PQSdFwFNkDtFueT4wnhieQO4NVXF8AdLuhpzaGA1CEO8Vrkcgd8BQyFFH+scsMZ6DVD7s1VbGFLFM6a2Y4BMXwuUXZoAQrkPPYLZnTEsMIFrFEaI0oYQpi6JVuAATpm4jH/W1gIJR+7z+Ga9BZ+Gy/EAAyCoT9FTA+GIY+5IvE2yAz3ABLlB7ux4MhMNvLsLzuOxLYpvlzIR8MIfdCIgmq2wKWVijFh+8MYad9fshit/AeoQO6n/p3hiBHkCDE2KoYAxk+3OQbwx605qKL3VI/gdYQ8N4TQ+C+zhlit2CHYIarJ4agW8WF4cfN4f2EvjIcgyt3Pm4fknto88oQFPq5MsS2pUMww1tg7MoQ5nRfPteY2QIAdAe+gEZ/DMMv6NewL08Yy4rQ8MFwBf8a+4fM8B+84O36q18YQo978nwjQ8EeYUzxgyH4WznOyAxBgZob/DtDuNki9WA6EKD0wh1iemP4g/E1ZGMKvFpcwX5uDOFnRQ7PsC1QgQNGj87lvCgYInyrvWDHEqCSpT9cGQ5xerYYpleDOCaCcrZevmZfClXHLw7D4kTMGcY4X6OSKlZTgHLtJbD1heEOqbtD4IVqQCU9JdBdwXACCyOWPjdTD10TWD86SSc5wylaX1MXrAd0wxGtG5BPc4YIbvcNaHFvcMThgdzUECyzdfkezk5E8WeuyA08gWXqnlEv17FBH+m0L+Btc4Zou5qY9cm3ArOjMzempI9lSi9AyCLiWb4Cfp+A45JPoPBr/IrAXqQIREpTL4R8YtOYEycO6QwwJouG6AFgZBaqGahrOiIDj+fVvAghi/96EJQTlgv8EYV86NEDvG2c/ZIOv6OHZUhzgi2+wDUGIJFahq1hRxQjWodcILyYoQZoqtOQcqkBoq66DRgRW1dGG7trUf+uvnciL0BmZu/huvv53Zt7NdOdI4WdOMjcfJtQzKdxfoslIVJERjOh5M/hc16YeHaqkpQTV8X4G5VudpTrdupS5c8qwkHJUynIftwjCERI45VfAY+egvUwjTDL3SrbOOVImTstpvUS6N12ekBR/cZPDdMyQXkuf9ZnWcjsNevxeOp8fVZn9+AT1S7EN3tvQZ1OO5QUkL5CaIOzsdqkixzsPLqypIw8b8Vs4PxaehPIsXSXA4IQjwMnI6BMlie8Y5Q+Yofqk4fd8syXgBVMH2vOUtXd77niG44rlfCr9b0KeuvAlIiIVH5XKAAD6NdA+/H3rnSmo0oLaf9Gjl1gUXpMzvh9A7PpvVijAs9XQoj2rlfxPolSO/4wPjNM1SqSvf/Ks8bSoc6wPVh9gPMNbWKoKxIIbvPZG2y1YMosgSWLxUojzdW+qb+/ywWbZ3vsHUQEagmLfYtA6rc3keSWgsEMr4aSXt7ININ4ohJG8hlDot40Xala5WyrrpP2V5MWChihCQe9JLUYyDk587YbVAIS2eWktPgVY4xz6Z4fft84cSAbEKwmOwnmVU8OKVwAKci6/sFCdD7bbTk+W5WOQPbXPApuUzvcn0OwmWi8ViGay+xxOznlrbAptLDtguj099l68y1jG2U7y/5PHtajGscxO2sOukv9RiWGWVEfUTdGHVPnipp7GpifK0rQwibIQcLzVRFsaU+pi997romW/Fa12bhWwSqnyCPsybTG61icb1pQyiOQeB8Vzc6ktN63Epqj6ECXqmlSi3GmHTOm/EOlJTmNadFg0X5rX6b7Gjd5h5b3R/YxgYLVOO3WloArPDmwUdi54ZhttXYYqDyWw8emaMNqKP3fBr/BiP/5NH3ZNK7xjDqKyFY6E9iqXfNxPl+10lxR6g/1FL/oX4P6dun0GQSSz2k+ucFf+8uLBDq2kV6bfo06+X23uWvlaEbtHnq5dbtxxe4Ukl2mOpOYrkfX7PDAV1IyA5mg73rYmgtU/SWdDuYDfaubaK1tl8cfWqD3qlf0TbR/OvSRRefsoRMArerTaGkMoStD2EInmyTubWYPnSiNVhyK10IJg4Ygd10nSiNYhy6bYA+14EKD1pfa3/sQS1pAw5Gu67WpNffEZ1jSAhOV1Sg5X/q6icgN9zCorEajbqJKRPhtMcQmKOKK5ViSvn4pe32qoh0K2fYW/VKF3CS6MiIE8gqSNg1axan/UXMoDw+26gjLnXYPUxUCCqn2p9eqBS3PQn7I1ekK6VxI9Lzl5vQDIhh3hLITv+J7PTOUhpQ/IAp1hzQaxZ8DEZW3EaTnDLIUlD2kIlLVc7vCsCe1Ne/MyZQh3Uy0spmqb5RIO43fnLO4Q1oSW6uhqL0zI/X4rDonsSHtxFS/M6OoW+m+/wa1kjqX6reCVE4te3ck41s+vPr1oOHNLnkS4+XFUM8YyLuhGwIt5u+uvanU5IqBvO64qcSg6e08RWKAY4klmeMoH1ljxWvj+4fyF6Vs2+3hUC3Rs+77h8riI/YeizpSlP/rv2Gpfoe0+45zMVBUpLc88Gr5lqykDcEVVBX7ntFbsuoX+lj02oR+T117afYesDo1wPxXVg6NlS1epm86a0T56QvtzUrZYmT+LrdOSS6PX7NSe+qOEpu31Tt99WPnzPgFdRtMz8rf2pO0RrQz7EzU1ZxU/LrOuPUXQj2MVBJ9kDDsDDUqAnjm1k3VEgWhMoFfGcPOSKPri7KDu93YO+h0MXalXqSUYSfRKV1hxJWHk2i1ogp5ukHOUFMgjmcu7sUDPdUaVXOLgqFmpwrlJ+zteIz0WlBr/r+NWoWLY+dXrwPRYhHltHEaaygVCmU1RMlTeMx4c+Qzr3vg901Wt4Rvlx9QM9VuqqMgkaju6CINMfQLeCWqobWkwNJCKo9yPYRtysPb1pSK0wrc6DDuJQTc0Y+nC9tYxXmQmwiFdray0FkMzRUPKuufF0Fhzb7o4y/u+q39GM1ykx9BUgqOQTYpXY12W/XESm4oqeanmWwyaDDuTzLT/y+Ms2y4HqhU7GSy3GTNWVWKZbqpPl2GnvzfvUqVePvQ0OiSjhunsj0fJIUqplWBSs+AIjGFxath1jBc8RZdms/12ffjvv/8O6+1+ln11BbcWgzJJRxsw7HwT0EPLNKfqFciJgbR/YKTFxLUwYdsYOFRz1wedGp5ERw8KFe5XOWhtoS+AXi2FnoA6aOAVLTS9qpgw7YexC7lcXIjZ2fI0Z5g6O51yusgXMJutlwbDTi1+i6VgFZcbyy7YMtQMMqNAX7cVg2Okv3SrH1sBoYBmZtWSY+5Nr9+qxD3h8bR/2ytGaY3zf2QBVIXVC2B2QPAAzz7RhpxxsA/AQsjgdimHOcdd3OI+3OgHFKIMNCjduhzfHYCRyjBDPM/fEDceKtUu6vEbJ3CAyLAOBcRz/QCJ7Ilihl1ygMcwxihjiRlPMYK4SOxbAQgowoCknKiUIq0gh4DHOMkz0F+gEep1GAWuWByjBHOIp9YekJUCb8eIXd84DNsMA02PuMG2rQckYiPSFMQ7hgWGC4Wu9SrhFNKyJx3N+tV5iP7ZbhimGByXS12O58IfhFRb7MlV6U5bkQ/m67WU1dNnK4ZHhFPxyOkp9NHM3mWZr6xE/TbD6L4s1PMhqG7tvD/wdGfN7aLNlmHQAAAABJRU5ErkJggg==';
const Home = () => {
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
    <section classNameName="Home-section">
     <body>



  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="index.html" className="logo">
                        <img src="assets/images/logo.png" alt="S/napX Photography Template"/>
                    </a>
                  
                    <ul className="nav">
                        <li><a href="index.html" className="active">Home</a></li>
                        <li className="has-sub">
                            <a href="javascript:void(0)">Photos &amp; Videos</a>
                            <ul className="sub-menu">
                                <li><a href="contests.html">Contests</a></li>
                                <li><a href="contest-details.html">Single Contest</a></li>
                            </ul>
                        </li>
                        <li><a href="categories.html">Categories</a></li>
                        <li><a href="users.html">Users</a></li>
                    </ul>   
                    <div className="border-button">
                      <a id="modal_trigger" href="#modal" className="sign-in-up"><i className="fa fa-user"></i> Sign In/Up</a>
                    </div>
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>

  <div id="modal" className="popupContainer"  style={{display: 'none' }}>
    <div className="popupHeader">
        <span className="header_title">Login</span>
        <span className="modal_close"><i className="fa fa-times"></i></span>
    </div>

    <section className="popupBody">
        <div className="social_login">
            <div className="">
                <a href="#" className="social_box fb">
                    <span className="icon"><i className="fab fa-facebook"></i></span>
                    <span className="icon_title">Connect with Facebook</span>

                </a>

                <a href="#" className="social_box google">
                    <span className="icon"><i className="fab fa-google-plus"></i></span>
                    <span className="icon_title">Connect with Google</span>
                </a>
            </div>

            <div className="centeredText">
                <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
                <div className="one_half"><a href="#" id="login_form" className="btn">Login</a></div>
                <div className="one_half last"><a href="#" id="register_form" className="btn">Sign up</a></div>
            </div>
        </div>

        <div className="user_login">
            <form action="" method="post">
                <label>Email / Username</label>
                <input name="username" type="text" id="username" />
              <br/>

                <label>Password</label>
                <input name="password" type="password" id="password" />
              <br/>

                <div className="checkbox">
                    <input id="remember" type="checkbox" />
                    <label for="remember">Remember me on this computer</label>
                </div>

                <div className="action_btns">
                    <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                    <div className="one_half last"><button type="submit" className="btn btn_red">Login</button></div>
                </div>
            </form>

            <a href="#" className="forgot_password">Forgot password?</a>
        </div>


        <div className="user_register">
            <form action="" method="post">
                <label>Username</label>
                <input name="username" type="text" id="username" />
                <br/>

                <label>Email Address</label>
                <input name="email" type="email" id="email" />
                <br/>

                <label>Password</label>
                <input name="password" type="password" id="password" />
                <br/>

                <div className="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label for="send_updates">Send me occasional email updates</label>
                </div>

                <div className="action_btns">
                    <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                    <div className="one_half last"><button type="submit" className="btn btn_red">Register</button></div>
                </div>
            </form>
        </div>
        
    </section>
  </div>

  <div className="main-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="header-text">
            <h2>Enter a world of <em>Photos</em> &amp; Amazing <em>Awards</em></h2>
            <p>SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. It is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates.</p>
            <div className="buttons">
              <div className="big-border-button">
                <a href="contests.html">Explore SnapX Contest</a>
              </div>
              <div className="icon-button">
                <a href="https://youtube.com/templatemo" target="_blank"><i className="fa fa-play"></i> Watch Our Video Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <section className="featured-items" id="featured-items">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-features owl-carousel"  style={{position: 'relative',  zIndex: 5,}}>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Smile In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Happy In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $8,400 + Canon EOS R1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Run In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $5,500 + Canon EOS R3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Stay In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $4,400 + Canon EOS R5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $3,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Shoot In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $2,400 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt=""/>
                <div className="hover-effect">
                  <div className="content">
                    <h4>Fly In The Nature <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <span>(4.5)</span></h4>
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
  </section>


  <section className="popular-categories">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Our Categories</h6>
            <h4>Check Out <em>Popular</em> Contest <em>Categories</em></h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="categories.html">Discover All Categories</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-01.png" alt=""/>
              </div>
              <div className="right">
                <h4>Nature Pic Contest</h4>
                <span><em>126</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-01.png" alt=""/>
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart"></i> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Br/owse Nature Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-02.png" alt=""/>
              </div>
              <div className="right">
                <h4>Random Pic Contest</h4>
                <span><em>116</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-02.png" alt=""/>
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart"></i> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Br/owse Random Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-03.png" alt=""/>
              </div>
              <div className="right">
                <h4>Portrait Pic Contest</h4>
                <span><em>164</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-03.png" alt=""/>
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart"></i> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Br/owse Portrait Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-04.png" alt=""/>
              </div>
              <div className="right">
                <h4>Space Pic Contest</h4>
                <span><em>135</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-04.png" alt=""/>
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart"></i> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Br/owse Space Pic Contests</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="closed-contests">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Closed Photography Contests</h6>
            <h4><em>Previous Contests</em> With Handpicked <em>Winners</em></h4>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="owl-features owl-carousel" style={{position: 'relative',  zIndex: 5,}}>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-01.jpg" alt=""/>
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $1,600</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>88 Participants <br/><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">320 Pictures <br/><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-02.jpg" alt=""/>
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $4,200</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>96 Participants <br/><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">410 Pictures <br/><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-03.jpg" alt=""/>
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $3,200</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>74 Participants <br/><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">284 Pictures <br/><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="border-button text-center">
            <a href="contests.html">Br/owse Open Contests</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="pricing-plans">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Our Pricing</h6>
            <h4>Photography <em>Contest Plans</em> and Price <em>Awards</em></h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-01.jpg" alt=""/>
            <h4>Basic Plan</h4>
            <ul className="first-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$25 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-02.jpg" alt=""/>
            <h4>Standard Plan</h4>
            <ul className="second-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$45 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-03.jpg" alt=""/>
            <h4>Advanced Plan</h4>
            <ul className="third-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$85 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>Copyright © 2048 <a href="#">SnapX</a> Photo Contest Co., Ltd. All rights reserved. 
          
          Design: <a title="CSS Templates" rel="sponsored" href="https://templatemo.com/page/1" target="_blank">TemplateMo</a></p>
        </div>
      </div>
    </div>
  </footer>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>

  <script src="assets/js/tabs.js"></script>
  <script src="assets/js/popup.js"></script>
  <script src="assets/js/custom.js"></script>

  </body>
    </section>
  );
};

export default Home;