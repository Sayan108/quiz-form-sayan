import React from "react";
import "../Design/partners.css";
const Partners = () => {
  return (
    <>
      <div className="banner">
        <img
          className="banner-img"
          src="assets/images/fivePointLogo.jpg"
          alt="logo"
        ></img>
        <h2 style={{ color: "white" }}>
          Discover Excellence at the Best Coaching Center
        </h2>
        <h4 className="label">
          🏆📚 When it comes to quality education, we lead the way.
        </h4>
        <h4>Here's why we're renowned as the best coaching center:</h4>
        <h5 className="fivepoint-catch-one">
          {" "}
          👨‍🏫 Expert Faculty: Our seasoned educators are dedicated to nurturing
          your talents and guiding you toward success.
        </h5>{" "}
        <h5 className="fivepoint-catch-two">
          {" "}
          📖 Comprehensive Study Resources: Access a wealth of well-researched
          study materials that cover all aspects of your academic journey.
        </h5>{" "}
        <h5 className="fivepoint-catch-three">
          🏆 Proven Track Record: Our students' achievements stand as a
          testament to our commitment to excellence.
        </h5>
        <h5 className="fivepoint-contact">
          📱
          <a href="tel:+918100567748">8100567748</a>
        </h5>
        <h5 className="fivepoint-contact">
          📧
          <a href="mailto:admin@5pointeducation.in">admin@5pointeducation.in</a>
        </h5>
        <h5 className="fivepoint-contact">
          🌐
          <a href="https://5pointeducation.in/" target="_blank">
            5pointeducation.in
          </a>
        </h5>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="assets/images/busniessFiveLogo.jpg"
        ></img>
        <h5 className="business-text">
          {" "}
          The primary aim of Business Unplugged is to place across the best of
          Practical knowledge and skills in context of Stock Market Trading &
          Investment, Business coaching and other Financial aspects such as
          Equity research, Valuation, Financial Modelling etc.
        </h5>
        <h5 className="business-catch">Want to make your business big?</h5>
        <h5 className="business-catch">Contact </h5>
        <h5 className="business-contact">
          📱
          <a href="tel:+917003845233">+917003845233</a>
        </h5>{" "}
        <h5 className="business-contact">
          🌐
          <a href="https://capitalbu.com/" target="_blank">
            https://capitalbu.com/
          </a>
        </h5>{" "}
      </div>
    </>
  );
};

export default Partners;
