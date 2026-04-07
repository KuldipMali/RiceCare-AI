import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-12">
      <Navbar/>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Contact RiceCareAI
          </h2>

          <p className="text-gray-600 mb-6">
            Have questions about rice leaf disease detection or want to
            collaborate with us? Feel free to contact our team.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold text-green-700">Email:</span>{" "}
              support@ricecareai.com
            </p>

            <p>
              <span className="font-semibold text-green-700">Phone:</span>{" "}
              +91 9022503234
            </p>

            <p>
              <span className="font-semibold text-green-700">Location:</span>{" "}
              Shirpur, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;