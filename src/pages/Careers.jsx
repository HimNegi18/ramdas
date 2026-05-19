import { useState, useRef } from "react";
import Heading from "../components/Heading";
import careersImg from "../assets/images/carrers/carrer.jpg";
import teamImg from "../assets/images/carrers/carrer2.jpg";
import { FaUser, FaEnvelope, FaPhone, FaFile } from "react-icons/fa";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [fileName, setFileName] = useState("No file chosen");
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFileName(files[0].name);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section>
      <Heading title="Careers" path="/careers" />

      {/* Careers Info */}
      <section>
        <div className="flex flex-wrap gap-10 justify-center items-center p-5 my-10">

          {/* Left — Image */}
          <div className="relative flex-shrink-0 rounded-lg bg-[#991b1b] pt-1 w-[500px]">
            <img
              src={careersImg}
              alt="Careers"
              className="relative w-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right — Text */}
          <div className="w-[500px]">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">Careers</h2>
            <p className="text-justify">
              As a leading provider of service solutions in the pharmaceutical
              industry, we play a critical role in ensuring the safe and
              efficient delivery of life-saving medications to patients. At
              Ramdas Sales India Pvt.Ltd, we believe in fostering a dynamic work
              environment where employees can thrive and grow. We appreciate
              employees who bring in fresh ideas and are aligned with company's
              goals. Whether you are an experienced professional or just
              starting your career, we offer a range of opportunities across
              various departments. We are committed to investing in our
              employees' development and providing ongoing training and support
              to help them succeed. Contact us below to join us in our mission
              to deliver excellence in logistics and healthcare.
            </p>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#e5e7eb] mb-[-16px]">
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20 py-20 bg-gray-200">

          {/* Left — Form Card */}
          <div className="w-[500px] p-4 bg-white rounded-xl shadow-md flex flex-col gap-8">

            {/* Heading */}
            <div className="text-center pb-2">
              <p className="lg:text-xl text-lg font-semibold text-gray-800 uppercase">
                Work With Us
              </p>
              <h2 className="lg:text-2xl text-xl font-bold text-red-800 uppercase">
                Join Ramdas Sales India Pvt. Ltd.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="input border-gray-300 w-full border px-6 py-2"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="input border-gray-300 w-full border px-6 py-2"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  className="input border-gray-300 w-full border px-6 py-2"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FaPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Custom File Input */}
              <div
                className="flex items-center border border-gray-300 rounded-md
                           overflow-hidden cursor-pointer hover:border-gray-400
                           transition-colors duration-200"
                onClick={() => fileRef.current.click()}
              >
                {/* Hidden real input */}
                <input
                  ref={fileRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="hidden"
                />

                {/* Choose File button */}
                <span className="px-4 py-2 bg-white border-r border-gray-300
                                 text-sm text-gray-700 hover:bg-gray-50
                                 transition-colors duration-200 shrink-0">
                  Choose File
                </span>

                {/* File name */}
                <span className="px-4 py-2 text-sm text-gray-400 truncate flex-1">
                  {fileName}
                </span>

                {/* Icon */}
                <FaFile className="mr-3 text-gray-400 shrink-0" size={14} />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-5 px-5 py-3 bg-[#991b1b] text-white
                             rounded-md hover:bg-[#7f1d1d] transition-all"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* Right — Image Card */}
          <div
            className="w-[400px] h-[470px] bg-[#991b1b] rounded-xl
                       lg:pt-2 lg:pr-2
                       lg:hover:pt-0 lg:hover:pr-0
                       transition-all duration-300 ease-in cursor-pointer"
          >
            <img
              src={teamImg}
              alt="Join Our Team"
              className="w-full h-full object-cover hover:rounded-xl"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </section>
  );
};

export default Careers;