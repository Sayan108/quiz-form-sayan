import React from "react";
import "../Design/about.css";
const About = () => {
  return (
    <>
      <div className="banner">
        <img
          className="banner-img"
          src="assets/images/calqulusLogo.jpg"
          style={{ alignContent: "center" }}
        ></img>
        <h6 className="banner-text">
          {" "}
          CalQulus is a youth based quiz organisation that regularly hosts
          quizzes across the country. CalQulus was founded in 2019, with a group
          of young quiz enthusiasts at Silchar, Assam. We organise the quizzes
          across the country with significant support from our members and our
          valuable corporate sponsors who believe in our working capacity.
        </h6>
      </div>
      <h6 className="first-text">
        {" "}
        CalQulas's first venture in West Bengal begins with a Double Header Quiz
        in Rajpur-Sonarpur, West Bengal on 25th December, 2023. Some quiz lovers
        from South 24 Pgs are hosting this show in active association with
        Rajpur M. N. Roy Road Nabarun Sangha Club.
      </h6>
      <ul className="quiz-names">
        <li>
          <h6> i) বগলার বঙ্গদর্শন ( An open to all Bangaliyana quiz) </h6>
        </li>
        <li>
          {" "}
          <h6>
            ii) Everything Under the Sun (An open to all General quiz)
          </h6>{" "}
        </li>
      </ul>
      <h6 className="team-strength">
        {" "}
        Team Strength: maximum 3 members per team{" "}
      </h6>
      <h6 className="venue">
        Venue: Rajpur Nabarun Sangha mini indoor complex, M. N. Roy Road,
        Rajpur, Kolkata - 700149{" "}
        <a href="https://maps.app.goo.gl/vP7RHgxfkQbDqFhf7" target="_blank">
          <u>Click here to see the location on Google Map</u>
        </a>
      </h6>{" "}
      <h6 className="time"> Time: 10:30 AM onwards</h6>
      <h6 className="address-one">
        Train Route: Take any southwards train (except Budgebudge local) from
        Sealdah and get off at Sonarpur junction. Cross the overbridge and take
        an exit from no. 1 platform. Board an auto towards Rajpur and get off at
        "Bashtola" stoppage. Take a rickshaw mentioning the venue or ask any
        local person about the venue, it's 10 mins walk.
      </h6>
      <h6 className="address-two">
        Other option: From Kavi Najrul metro station, take an auto towards
        Rajpur/Baruipur and get off at "Rajpur Phari" stoppage. Take a Sonarpur
        bound auto and get off at "Bashtola" stoppage. Take a rickshaw
        mentioning the venue or ask any local person about the venue, it's 10
        mins walk.
      </h6>
      <h6 className="cash-rewards">
        {" "}
        Cash rewards for the podium finishers and all finalists!
      </h6>
    </>
  );
};

export default About;
