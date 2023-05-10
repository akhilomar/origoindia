import React from "react";
import logo from "../images/logo.png";
import menubanner from "../images/menubanner.png";
import about from "../images/about.png";
import tacos from "../images/tacos.png";
import snacks from "../images/snacks.png";
import offer from "../images/offer.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";

import "../styles/home.css";

function Home() {
  return (
    <section class="home">
      <div class="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div class="container">
        <div class="logo-heading-container"></div>
      </div>
      <div style={{ paddingLeft: "6rem" }}>
        <h1>Mariachi</h1>
        <div
          style={{
            color: "#ffd8ac",
            inlineSize: "400px",
            overflowWrap: "break-word",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat commodo velit, ac malesuada purus faucibus ut.
        </div>
        <div style={{ padding: "1rem 0rem" }}>
          <button class="order-now-btn">Order Now</button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div
        style={{
          backgroundColor: "#ffd8ac",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "30%",
            padding: "50px",
          }}
        >
          <img src={about} alt="about" />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 style={{ color: "#4a1831" }}>About Mariachi</h1>
          <div
            style={{
              color: "#4a1831",
              inlineSize: "400px",
              overflowWrap: "break-word",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat commodo velit, ac malesuada purus faucibus ut.
          </div>
          <div style={{ padding: "1rem 0rem" }}>
            <button class="see-menu-btn">Tell Me More</button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            paddingLeft: "14rem",
          }}
        >
          <img src={tacos} alt="tacos" />
        </div>
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "30px",
            padding: "10px",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              color: "#e63956",
              fontSize: "100px",
            }}
          >
            25%
          </div>
          <div
            style={{
              color: "#55112e",
            }}
          >
            DISCOUNT
          </div>
          <div
            style={{
              color: "#6cc5ac",
              fontSize: "70px",
            }}
          >
            ON TACOS!
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu">
      <div class="banner-container">
        <h1>Don't Miss Our Menu!</h1>
        <div
          style={{
            color: "#4a1831",
            inlineSize: "500px",
            overflowWrap: "break-word",
            marginBottom: "2rem",
            paddingLeft: "25%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat commodo velit, ac malesuada purus faucibus ut.
        </div>
        <button class="see-menu-btn">See Menu</button>
      </div>
      <img src={menubanner} alt="bannerimage" />
    </section>
  );
}

function Offer() {
  return (
    <section id="offer">
      <div
        style={{
          backgroundColor: "#4a1831",
          display: "flex",
        }}
      >
        <div
          style={{
            marginLeft: "3%",
            marginTop: "10%",
          }}
        >
          <h1>See our Offers</h1>
          <div
            style={{
              color: "#ffd8ac",
              inlineSize: "400px",
              overflowWrap: "break-word",
              marginBottom: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat commodo velit, ac malesuada purus faucibus ut.
          </div>

          <button class="see-offer-btn">SEE OFFERS</button>
        </div>
        <div
          style={{
            width: "50%",
            height: "40%",
            padding: "2rem",
          }}
        >
          <img src={snacks} alt="snacks" />
        </div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={offer} alt="offer" />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(109, 33, 79, 0.3)",
          }}
        >
          <div
            style={{
              paddingLeft: "27rem",
              paddingTop: "15rem",

            }}
          >
            <div
              style={{
                paddingLeft : '8rem'
              }}
            >
              <img src={logo} alt="alt" />
            </div>
            <div
              style={{
                color: "#ffd8ac",
                inlineSize: "400px",
                overflowWrap: "break-word",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat commodo velit, ac malesuada purus faucibus ut.
            </div>
            <h2 style={{ color: "#ffd8ac", paddingLeft : '8rem' }}>
              Pedro Rodriguez
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div
        style={{
          backgroundColor: "#ffd8ac",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#4a1831" }}>Get our Latest Offers!</h1>
        <div
          style={{
            color: "#4a1831",
            inlineSize: "500px",
            overflowWrap: "break-word",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat commodo velit, ac malesuada purus faucibus ut.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "20px 0 0 20px",
              fontSize: "16px",
              width: "300px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4a1831",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "0 20px 20px 0",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div
        style={{
          background: "#4a1831",
          display: "flex",
          flexDirection: "row",
          marginTop: "5rem",
          justifyContent: 'space-around',
          paddingBottom: '10rem',
          paddingTop : '8rem'
        }}
      >
        <div>
          <h3 style={{ color: "#ffd8ac" }}>Mariachi</h3>
          <div
            style={{
              color: "#ffd8ac",
              inlineSize: "500px",
              overflowWrap: "break-word",
              marginBottom: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat commodo velit, ac malesuada purus faucibus ut.
          </div>
          <div style={{ display: "flex" }}>
            <a href = "#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href = "#" style = {{padding: '0rem 1rem'}}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href = "#" style = {{padding: '0rem 0rem 1rem'}}>
              <img src={twitter} alt="twitter" />
            </a>
            <a href = "#" style = {{padding : '0rem 1rem'}}>
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
        <div>
            <h3 style={{ color: "#ffd8ac" }}>About</h3>
            <p style={{ color: "#ffd8ac" }}>History</p>
            <p style={{ color: "#ffd8ac" }}>Our Team</p>
            <p style={{ color: "#ffd8ac" }}>Brand Guidelines</p>
            <p style={{ color: "#ffd8ac" }}>Terms & Condition</p>
            <p style={{ color: "#ffd8ac" }}>Privacy Policy</p>
        </div>
        <div >
            <h3 style={{ color: "#ffd8ac" }}>Services</h3>
            <p style={{ color: "#ffd8ac" }}>How to Order</p>
            <p style={{ color: "#ffd8ac" }}>Our Product</p>
            <p style={{ color: "#ffd8ac" }}>Offers</p>
            <p style={{ color: "#ffd8ac" }}>Promo</p>
            <p style={{ color: "#ffd8ac" }}>Payment Method</p>
        </div>
        <div>
            <h3 style={{ color: "#ffd8ac" }}>Other</h3>
            <p style={{ color: "#ffd8ac" }}>Contact Us</p>
            <p style={{ color: "#ffd8ac" }}>Help</p>

        </div>
      </div>
    </section>
  );
}

export { Home, About, Menu, Offer, Contact };
