import axios from "axios";
import React, { useRef } from "react";
import "../components/contactUs/contactUs.css";

export default function ContactUs() {
  const credentials = useRef({
    name: "",
    number: "",
    email: "",
    cv: "",
    linkedin: "",
    why: "",
  });

  const uploadMe = (data) => {
    console.log(data);
    // console.log(credentials.current);
    axios.post(`${process.env.REACT_APP_SHEET_API}`, data).then(()=>{
      alert("Your application has been submitted successfully!"); // will add a loading modal later
    }).catch((err)=>{
      alert("Something went wrong. Please try again later");
    })

  };

  return (
    <>
      <h2 className="border-white border-solid border-b block text-6xl p-7 text-center text-white">
        Future Enabled
      </h2>

      <div id="contact-us" className="contact-us-container">
        <p className="p-0 text-white text-3xl">Submit your application </p>
        <input
          className="contact-us-textbox"
          required
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            credentials.current.name = e.target.value;
          }}
        />
        <input
          className="contact-us-textbox"
          required
          type="tel"
          placeholder="Your Number"
          onChange={(e) => {
            credentials.current.number = e.target.value;
          }}
        />
        <input
          className="contact-us-textbox"
          required
          type="email"
          placeholder="Your email"
          onChange={(e) => {
            credentials.current.email = e.target.value;
          }}
        />
        <input
          className="contact-us-textbox"
          required
          type="text"
          placeholder="CV/Resume/Portfolio URL (optional)"
          onChange={(e) => {
            credentials.current.cv = e.target.value;
          }}
        />
        <input
          className="contact-us-textbox"
          required
          type="text"
          placeholder="LinkedIn Profile URL (optional)"
          onChange={(e) => {
            credentials.current.linkedin = e.target.value;
          }}
        />
        <textarea
          className="contact-us-textbox resize-none"
          rows={5}
          required
          type="text"
          placeholder="Why do you want to join us?"
          onChange={(e) => {
            credentials.current.why = e.target.value;
          }}
        />

        <input
          type="button"
          value={"Submit!"}
          className="mx-auto inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xl cursor-pointer leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={
            () => uploadMe(credentials.current)
          }
        />
      </div>
    </>
  );
}
