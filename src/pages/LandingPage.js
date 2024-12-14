import React from "react";
import Header from "../component/landingpage/LandingPageheader";
import "./pagecss/landingpage.css";
import busImage from "../images/DJV JUL 2390-05.jpg"; // Importing hero image
import routeIcon from "../images/icons8-route-64.png"; // Importing feature icons
import trackingIcon from "../images/icons8-tracking-32.png";
import bookingIcon from "../images/icons8-booking-50.png";

import BusRouteForm from "../component/landingpage/RouteForm";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <section className="hero">
            <div className="hero-content">
              <h2>Streamline Your College Commute</h2>
              <p>
                Efficiently manage bus schedules, track routes, and ensure a
                hassle-free journey for students and staff.
              </p>

              <a href="signup.html" className="cta-button">
                Get Started
              </a>
            </div>
            <div className="hero-image">
              <img src={busImage} alt="College Bus" />
            </div>
          </section>

          <section id="search-route">
            <div id="form-container">
              <h2>Select a Route to View Details</h2>
              <BusRouteForm />
            </div>
          </section>

          <section id="features" className="features">
            <h2>Features</h2>
            <div className="feature-list">
              <div className="feature-item">
                <img src={routeIcon} alt="Route Management" />
                <h3>Route Management</h3>
                <p>
                  Easily manage and update bus routes for students and staff.
                </p>
              </div>
              <div className="feature-item">
                <img src={trackingIcon} alt="Live Tracking" />
                <h3>Live Tracking</h3>
                <p>Track buses in real-time for better commute planning.</p>
              </div>
              <div className="feature-item">
                <img src={bookingIcon} alt="Booking" />
                <h3>Seat Booking</h3>
                <p>Reserve seats for daily or special commutes with ease.</p>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <h2>About Us</h2>
            <p>
              Our College Bus Management System aims to simplify the
              transportation experience for colleges, ensuring students and
              staff have a reliable and efficient way to commute. With advanced
              route management and real-time tracking, we bring convenience to
              every journey.
            </p>
          </section>

          <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Reach out to us!</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 College Bus Management System. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
