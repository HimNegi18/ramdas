import { useState } from "react";
import Heading from "../components/Heading";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWarehouse,
  FaUser,
} from "react-icons/fa";
import mumbaiImg from "../assets/images/contact/mumbai.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the terms & conditions.");
      return;
    }
    console.log("Form submitted:", formData);
  };
  return (
    <section className="bg-gray-200">
      <Heading title="Contact Us" path="/contact" />
      <section>
        <div className="flex flex-wrap gap-32 justify-center items-center p-5 my-10 ">
          {/* Left — Info Card */}
          <div
            className="w-[350px] lg:w-[450px] px-10 bg-white py-20 
            border-t-2 border-red-800 lg:px-8 lg:gap-3 rounded-xl mt-10 space-y-4"
          >
            <h2 className="text-2xl font-bold text-red-800 pb-4">
              Head Office
            </h2>
            {/* Address */}
            <div className="flex items-start gap-x-4 z-10 ">
              <FaMapMarkerAlt
                className="text-[#991b1b] mt-1 shrink-0"
                size={18}
              />
              <div>
                <p className="text-xl font-bold text-red-800 ">Address</p>
                <p className="lg:w-[350px] text-lg">
                  Ramdas Sales India Pvt.Ltd, G-10, Mewad, E S Patanwala
                  Complex, LBSMarg, Ghatkopar West, Mumbai - 400086
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-x-4 z-10">
              <FaPhone className="text-[#991b1b] mt-1 shrink-0" size={18} />
              <div>
                <p className="text-xl font-bold text-red-800 ">Phone</p>
                <p className="lg:w-[350px] text-lg  hover:text-[#03a9f5] transition-colors duration-200">
                  +919821307100, +91 - 22 - 25002846 / 25000313
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-x-4 z-10">
              <FaEnvelope className="text-[#991b1b] mt-1 shrink-0" size={18} />
              <div>
                <p className="text-xl font-bold text-red-800 ">Email</p>
                <a
                  href="mailto:info@ramdas.co.in"
                  className="lg:w-[350px] text-lg hover:text-[#03a9f5] transition-colors duration-200"
                >
                  info@ramdas.co.in
                </a>
              </div>
            </div>

            {/* Warehouse */}
            <div className="flex items-start gap-x-4 z-10">
              <FaWarehouse className="text-[#991b1b] mt-1 shrink-0" size={18} />
              <div>
                <p className="text-xl font-bold text-red-800 ">Warehouse</p>
                <p className="lg:w-[350px] text-lg">
                  Bldg No. 18 Arihant Commercial Complex, Near Kopar Bus Stop,
                  Purna Village Bhiwandi, 421302
                </p>
              </div>
            </div>
          </div>

          {/* Right — Google Map */}
          <div className="rounded-xl min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d966392.9744563131!2d72.76542798447048!3d18.888298621680857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.5246164!2d73.8629674!4m5!1s0x3be7bd001ef6fd4f%3A0x14b183df391bc427!2sramdas%20sales%20corporation!3m2!1d19.252031199999998!2d73.0281881!5e0!3m2!1sen!2sin!4v1710869260269!5m2!1sen!2sin"
              width="650"
              class="relative lg:right-20 lg:pr-4 lg:py-4 rounded-lg bg-gray-700 w-[550px] lg:w-[600px] mt-4"
              height="540"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="relative mb-[-16px]">
        {/* Background Image — top half */}
        <div
          style={{ backgroundImage: `url(${mumbaiImg})` }}
          className=" bg-red-800  py-32 w-full -mb-32 mt-20 bg-no-repeat bg-cover bg-center  "
        />

        {/* White Form Card — overlaps image */}
        <div
          className=" flex flex-wrap flex-col lg:px-44 lg:py-20 lg:mx-52 bg-white shadow-lg rounded-lg"
        >
          {/* Heading */}
          <h2 className="lg:text-5xl text-2xl font-semibold py-3 text-center text-gray-800">
            Get in <span className="lg:text-6xl text-3xl font-bold text-red-800">Touch</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col lg:px-0 px-10 py-10">
            {/* Row 1 — Name + Email */}
            <div className="mb-4 flex flex-wrap">
              <div className="w-1/2 pr-2 relative ">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}     
                  placeholder="Full name"
                  className="input border-gray-300 w-full border  px-6 py-2"
                />
                <FaUser
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
              </div>

              <div className="w-1/2 pl-2 relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-gray-300 w-full border  px-6 py-2 "
                />
                <FaEnvelope
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
              </div>
            </div>

            {/* Row 2 — Phone */}
            <div className="relative mb-4 ">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="border-gray-300 w-full border px-6 py-2   "
              />
              <FaPhone
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
            </div>

            {/* Row 3 — Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="border-gray-300 w-full border  px-6 py-2 mb-4"
            />

            {/* Row 4 — Checkbox + Button */}
            <div className="flex flex-wrap lg:justify-between justify-center items-center ">
              {/* Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#991b1b] cursor-pointer"
                />
                I agree to the terms & conditions.
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="bg-red-800 text-white px-5 py-3 mt-5 rounded-lg
                 flex justify-center items-center hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
