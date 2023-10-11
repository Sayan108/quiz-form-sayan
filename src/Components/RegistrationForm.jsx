import React, { useState } from 'react';
import './RegistrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    gender: "",
    quiz: "",
    screenshot: null,
  });

  const form = document.forms["submit-to-google-sheet"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwimYQaeOFy6KrNRlFB5K4bk1bWw-EOm8w2_RWizIMEu8RxV_1mWXVldw6_Hgzu3YwGFA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, screenshot: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or Google Sheets.
    console.log(formData);
    // await formService(formData);

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Submitted");
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="form-container">
      <h2>Register Here! Double Header Quiz presented by CalQulas!</h2>
      <h3>Knowledge Partner: 5Point Education Centre & Business Unplugged</h3>
      <form name="submit-to-google-sheet" encType="multipart/form-data">
        <label>
          Name:
          <input
            type="text"
            name="name_one"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name for perticipant two:
          <input
            type="text"
            name="name_two"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Address for perticipant one:
          <textarea
            name="address_one"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Address for perticipant two:
          <textarea
            name="address_two"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender of perticipant one:
          <select
            name="gender_one"
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
          Gender of perticipant two:
          <select
            name="gender_two"
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
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phoneNumber}
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

        <label>Quiz(s):</label>
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
          <img
            className="qr-code-img"
            src="assets/images/qr.jpeg"
            alt="9051879329@paytm"
          ></img>
          <span>UPI ID: 9051879329@paytm</span>
          <span>A/c Number- 919051879329 </span>
        </div>
        <label className="upload-payment-text">
          Upload Screenshot of the Payment:
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleScreenshotChange}
            name="payment_data"
          />
        </label>

        <button type="submit" disabled={false} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
