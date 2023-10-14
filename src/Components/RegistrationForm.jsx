import React, { useState } from "react";
import "./RegistrationForm.css";
import Spinner from "./loader";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    quiz: "",
    payment_data: null,
  });
  const [showLoading, setShowLoading] = useState(false);
  const form = document.forms["submit-to-google-sheet"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwimYQaeOFy6KrNRlFB5K4bk1bWw-EOm8w2_RWizIMEu8RxV_1mWXVldw6_Hgzu3YwGFA/exec";
  const blobFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "payment_data") {
      blobFile(e.target.files).then((dataUri) => {
        setFormData({
          ...formData,
          [name]: dataUri,
        });
      });
    } else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name === "" && formData.quiz === "" && formData.phone === "") {
      alert("Please fill the required details");
      return;
    }
    // Handle form submission here, e.g., send data to server or Google Sheets.
    setShowLoading(true);
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          gender: "",
          quiz: "",
          payment_data: null,
        });
        setShowLoading(false);
        alert(`Thanks for registering with us ${formData.name} `);
      })
      .catch((error) => {
        setShowLoading(false);
        console.error("Error!", error.message);
        alert(`We couldn't process your request due to ${error.message}`);
      });
  };

  return (
    <>
      {showLoading ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <h2>Register Here! Double Header Quiz presented by CalQulus!</h2>
          <h3>
            Knowledge Partner: 5Point Education Centre & Business Unplugged
          </h3>
          <h5>Star marked fields are mandatory</h5>
          <form name="submit-to-google-sheet" encType="multipart/form-data">
            <label>
              Name *:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>

            <label>
              Gender :
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Phone Number *:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>Quiz(s):*</label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Bangaliyana"
                onChange={handleChange}
              />{" "}
              Bangaliyana
            </label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Open-to-all"
                onChange={handleChange}
              />{" "}
              Open-to-all
            </label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Both"
                onChange={handleChange}
              />{" "}
              Both
            </label>

            <div>
              <span>
                <p className="entry-fee">
                  {" "}
                  Entry fee for both the quizzes - Rs. 50/-{" "}
                </p>
              </span>
            </div>
            <div>
              <h3>Payment Method:</h3>
              <div>
                <img
                  className="qr-code-img"
                  src="assets/images/qr.jpeg"
                  alt="9051879329@paytm"
                />
              </div>

              <span>UPI ID: 9051879329@paytm</span>
              <span>A/c Number- 919051879329 </span>
            </div>
            {/* <label className="upload-payment-text">
              Upload Screenshot of the Payment:
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleChange}
                name="payment_data"
              />
            </label> */}
            <h3 style={{ color: "red" }}>
              Please whatsapp a screenshot of your successful payment to{" "}
              <a href="https://wa.me/+919051879329 ">
                <u>+919051879329</u>{" "}
              </a>{" "}
              to validate your registration.
            </h3>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
