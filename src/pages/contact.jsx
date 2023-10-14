import React from "react";
import "./styles.css";
const Contacts = () => {
  return (
    <div>
      <h3>Shuvam</h3>
      <img className="about-img" src="assets/images/Shubham_image.jpg"></img>
      <h6>
        Shuvam writes to earn bread and butter. Interested in history &
        politics, buys books but never reads them. He participates in quizzes
        but never wins.
      </h6>
      <h5>
        📱
        <a href="tel:+919051879329">+919051879329</a>
      </h5>{" "}
      <h3>Shubhamoy</h3>
      <img className="about-img" src="assets/images/subhmoy_image.jpg"></img>
      <h6>
        Shubhamoy , a history graduate and a final year engineering student.
        Primarily a quiz enthusiast, addicted to quizzing habits.{" "}
      </h6>
      <h3>Abhijit</h3>
      <img className="about-img" src="assets/images/abhijit_image.jpg"></img>
      <h6>test</h6>
    </div>
  );
};

export default Contacts;
