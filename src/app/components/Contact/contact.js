"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    sending: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, error: null, success: false });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: "nyaagaaluoch@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KE
      );

      if (result.status === 200) {
        setStatus({ sending: false, error: null, success: true });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus({
        sending: false,
        error: error.message || "Failed to send message. Please try again.",
        success: false,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <h1 className="text-4xl font-bold text-center py-10">Contact</h1>
      <div className="flex justify-evenly">
        <div className="flex flex-col space-y-4 p-6 max-w-sm w-96">
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-yellow-200/50 via-yellow-100/50 to-yellow-300/50 animate-gradient-xy">
            <div
              className="bg-gray-700 hover:bg-gray-500 transform hover:scale-105 
              transition-all duration-300 p-6 rounded-lg shadow-lg cursor-pointer flex flex-col items-center justify-center
              relative
            before:absolute before:inset-0 before:rounded-lg
            before:animate-pulse before:bg-yellow-200/20 before:blur-sm"
            >
              <MapPin className="w-8 h-8 text-yellow-600 mb-2" />
              <h2 className="text-lg font-semibold text-white mb-1">
                Location
              </h2>
              <p className="text-white">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="p-[2px] rounded-lg bg-gradient-to-r from-yellow-200/50 via-yellow-100/50 to-yellow-300/50 animate-gradient-xy">
            <div
              className="bg-gray-700 hover:bg-gray-500 transform hover:scale-105 
              transition-all duration-300 p-6 rounded-lg shadow-lg cursor-pointer flex flex-col items-center justify-center
              relative
            before:absolute before:inset-0 before:rounded-lg
            before:animate-pulse before:bg-yellow-200/20 before:blur-sm"
            >
              <Mail className="w-8 h-8 text-yellow-600 mb-2" />
              <h2 className="text-lg font-semibold text-white mb-1">Email</h2>
              <p className="text-white">nyaagaaluoch@gmail.com</p>
            </div>
          </div>

          <div className="p-[2px] rounded-lg bg-gradient-to-r from-yellow-200/50 via-yellow-100/50 to-yellow-300/50 animate-gradient-xy">
            <div
              className="bg-gray-700 hover:bg-gray-500 transform hover:scale-105 
              transition-all duration-300 p-6 rounded-lg shadow-lg cursor-pointer flex flex-col items-center justify-center
              relative
            before:absolute before:inset-0 before:rounded-lg
            before:animate-pulse before:bg-yellow-200/20 before:blur-sm"
            >
              <Phone className="w-8 h-8 text-yellow-600 mb-2" />
              <h2 className="text-lg font-semibold text-white mb-1">Phone</h2>
              <p className="text-white">(+254) 796063321</p>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold">Reach Out!</h2>
          <form onSubmit={handleSubmit} className="mt-10 max-w-lg">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded mb-4 text-white bg-gray-800 space-y-4  border-yellow-600 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded mb-4 text-white bg-gray-800 space-y-4  border-yellow-600 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border rounded mb-4 text-white bg-gray-800 space-y-4  border-yellow-600 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded mb-4 text-white bg-gray-800 space-y-4  border-yellow-600 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
              rows="4"
            ></textarea>

            <button
              type="submit"
              disabled={status.sending}
              className="w-full p-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 space-y-4  transition-colors duration-300 disabled:opacity-50"
            >
              {status.sending ? "Sending..." : "Send Message"}
            </button>

            {status.error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>


    </section>
  );
};

export default Contact;
