import React from "react";
import "../Design/contact.css";
const Contacts = () => {
  return (
    <div className="cards">
      <div className="card">
        <img className="about-img" src="assets/images/Shubham_image.jpg"></img>
        <h3>Shuvam</h3>
        <h6>
          Shuvam writes to earn bread and butter. Interested in history &
          politics, buys books but never reads them. He participates in quizzes
          but never wins.
        </h6>
        <h5>
          📱
          <a href="tel:+919051879329">+919051879329</a>
        </h5>{" "}
      </div>

      <div className="card">
        <img className="about-img" src="assets/images/subhmoy_image.jpg"></img>
        <h3>Shubhamoy</h3>
        <h6>
          Shubhamoy , a history graduate and a final year engineering student.
          Primarily a quiz enthusiast, addicted to quizzing habits.{" "}
        </h6>
        <h5>
          📱
          <a href="tel:+917002139471">+917002139471</a>
        </h5>{" "}
      </div>

      <div className="card">
        <img className="about-img" src="assets/images/abhijit_image.jpg"></img>
        <h3>Avijit</h3>
        <h6>
          Avijit studied pol sc, but not into politics. His quizzing skill is
          complemented with his proficiency in winning a girl's heart.
        </h6>
        <h5>
          📱
          <a href="tel:+916290834445">+916290834445</a>
        </h5>{" "}
      </div>

      <div className="card">
        <img className="about-img" src="assets/images/Sayan_image.jpeg"></img>
        <h3>Sayan</h3>
        <h6>
          Sayan is a techie quizer who neither likes tech nor quiz.He writes
          code cleaner than his room and scores lower in quizzes than a sloth in
          a footrace.{" "}
        </h6>
        <h5>
          📱
          <a href="tel:+917679039012">+917679039012</a>
        </h5>{" "}
      </div>
    </div>
  );
};

export default Contacts;
