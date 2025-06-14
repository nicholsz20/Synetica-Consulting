import { useEffect, useState } from "react";
import axios from "axios";

import { FormData } from "../Types/ContactForm";
import "../styles/ContactForm.css";

export default function ContactForm() {
  // Initial form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("https://test.com/send-email", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              name="firstName"
              id="fname"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="item"
              autoComplete="off"
              required
            />
          </div>

          <div className="input-field field">
            <input
              type="text"
              name="lastName"
              id="lname"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="item"
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="input-box">
          <div className="input-field field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="item"
              autoComplete="off"
              required
            />
          </div>

          <div className="input-field field">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="item"
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="input-field field">
          <textarea
            name="message"
            id="message"
            placeholder="What can we help you with?"
            value={formData.message}
            onChange={handleChange}
            className="item"
            rows={10}
            autoComplete="off"
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
