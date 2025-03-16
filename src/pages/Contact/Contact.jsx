import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactus from "../../assets/images/contactus.jpg";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 md:p-6 p-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${contactus})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white bg-opacity-90 shadow-lg rounded-2xl p-8 my-20 md:my-10"
      >
        <h2 className="text-3xl jost-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-8 jost-regular">
          We're here to help! Get in touch with us.
        </p>

        <div className="grid md:grid-cols-2 gap-8 jost-regular">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-600">contact@hotelnow.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <span className="text-gray-600">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span className="text-gray-600">
                123 Main Street, City, Country
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              rows={2}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
