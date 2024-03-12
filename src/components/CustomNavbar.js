import React, { useState } from "react";
import "../components/CustomNavbar.css";
import image1 from "../images/watches-1.png";
import image2 from "../images/watches-2.png";
import image3 from "../images/watches-3.png";
import image from "../images/watches-border.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="/" className="nav_logo">
            WATCHES
          </a>

          <div className="nav_menu" id={showMenu ? "show-menu" : ""}>
            <ul className="nav_list">
              <li className="nav_item">
                <a href="/home" className="nav_link">
                  <span>HOME</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="/featured" className="nav_link">
                  <span>ABOUT</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="/discount" className="nav_link">
                  <span>FEATURED</span>
                </a>
              </li>

              <li className="nav_item">
                <a href="/new" className="nav_link">
                  <span>NEW</span>
                </a>
              </li>
            </ul>

            <div className="nav_social">
              <a href="" target="_blank" className="nav_social-link">
                <i class="ri-facebook-circle-line"></i>
              </a>
              <a href="" target="_blank" className="nav_social-link">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="" target="_blank" className="nav_social-link">
                <i class="ri-twitter-x-line"></i>
              </a>
            </div>

            <div className="nav_close" id="nav-close">
              <i
                className="ri-close-line"
                onClick={() => {
                  closeMenu();
                }}
              ></i>
            </div>
          </div>

          <div className="nav_toggle" id="nav-toggle">
            <i
              className="ri-menu-fill"
              onClick={() => {
                toggleMenu();
              }}
            ></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home">
          <div className="home_container">
            <div className="home_data">
              <div className="home_content">
                <div className="home_stars">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>

                <h1 className="home_title">
                  Baume Custom <br></br>
                  Timepiece Small <br></br>
                  Second
                </h1>

                <h3 className="home_price">$620</h3>
              </div>

              <a href="/" className="home_button">
                ADD TO CART
                <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>

            <div className="home_images">
              <div className="home_swiper ">
                <div>
                  <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 0,
                      modifier: 2.5,
                    }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    className="swiper_container"
                  >
                    <SwiperSlide className="home_article">
                      <img src={image1}></img>
                    </SwiperSlide>
                    <SwiperSlide className="home_article">
                      <img src={image2}></img>
                    </SwiperSlide>
                    <SwiperSlide className="home_article">
                      <img src={image3}></img>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="home_info">
              <img src={image} alt="image" className="home_info-image"></img>

              <div className="home_info-content">
                <p className="home_info-description">
                  Personalized watches are a job of quality and commitment. Each
                  piece is handcrafted in small quantities, using only the
                  finest materials to ensure that every detail is present and
                  correct. The process begins with carefully selected metals.
                </p>

                <a href="/" className="home_button-link">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CustomNavbar;
