import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_hc5upb9",
        "template_zsg1hio", // Replace with your EmailJS template ID
        form.current,
        "VW3rFYvxFWpBNKDDg" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending message: ", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );

    // Clear the form fields
    form.current.reset();
  };

  return (
    <div className="text-center">
      <hr />
      <p className="text-2xl font-medium text-gray-800">Contact Us</p>
      <p className="text-gray-400 mt-3">
        Have any questions or feedback? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form
        ref={form}
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 mx-auto my-6"
      >
        <input
          className="w-full px-3 py-2 mb-3 border border-gray-300 text-black rounded-lg"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full px-3 py-2 mb-3 border border-gray-300 text-black rounded-lg"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full px-3 py-2 mb-3 border border-gray-300 text-black rounded-lg"
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-lg transition-colors duration-300 hover:bg-[#356699]"
        >
          SEND MESSAGE
        </button>
      </form>
      <hr />
    </div>
  );
};

export default ContactUs;
