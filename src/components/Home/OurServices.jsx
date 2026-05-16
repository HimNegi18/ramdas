import { Link } from "react-router-dom";
import service1 from "../../assets/icons/service1.png";
import service2 from "../../assets/icons/service2.png";
import service3 from "../../assets/icons/service3.png";
import service4 from "../../assets/icons/service4.png";
import service5 from "../../assets/icons/service5.png";
import service6 from "../../assets/icons/service6.png";

const services = [
  {
    title: "Carrying and Forwarding Agent (C & FA)",
    description:
      "Our team efficiently handles CFA operations for Pharmaceutical and FMCG companies for West India.",
    icon: service1, // Replace with your actual icon components or images
  },
  {
    title: "Super Distribution",
    description:
      "RSIPL is regional, state-wide stockist/distributor for well-known pharmaceutical companies.",
    icon: service2,
  },
  {
    title: "Cold Chain Warehousing and Distribution",
    description:
      "Cold Chain distribution forms a critical part of the pharmaceutical supply chain.",
    icon: service3,
  },
];
const services2 = [
  {
    title: "Promotional Material Handling",
    description:
      "Ram das Sales India Pvt Ltd provides quality services in the field of Promotional Material Handling.",
    icon: service4,
  },
  {
    title: "Reverse Logistics",
    description:
      "Reverse logistics in pharmaceutical distribution involves the management of returned products..",
    icon: service5,
  },
  {
    title: "Value Added Services",
    description:
      "In to day's dynamic heal thcare landscape, we understand the critical role that value-added services play..",
    icon: service6,
  },
];
const OurServices = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#8b1d1d] mb-12 inline-block border-b-4 border-[#8b1d1d] pb-3">
        Our Services
      </h2>
      {/* 1st row of services */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white py-12.5 cursor-pointer border-animation w-95"
          >
            {/* Icon Box */}
            <img
              src={service.icon}
              alt={service.title}
              className="bg-[#8b1d1d] w-25 h-24 p-2 mx-auto mb-3 rounded-lg flex items-center justify-center"
            />
            <h3 className="text-sm font-semibold text-[#6f6f6f] mb-2.5 flex items-center justify-center">
              {service.title}
            </h3>

            <p className="text-[#757575] text-center px-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      {/* 2nd row of services */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {services2.map((service, index) => (
          <div
            key={index}
            className="bg-white py-12.5 cursor-pointer border-animation w-95"
          >
            {/* Icon Box */}
            <img
              src={service.icon}
              alt={service.title}
              className="bg-[#8b1d1d] w-25 h-24 p-2 mx-auto mb-3 rounded-lg flex items-center justify-center"
            />

            <h3 className="text-sm font-semibold text-[#6f6f6f] mb-2.5 flex items-center justify-center">
              {service.title}
            </h3>

            <p className="text-[#757575] text-center px-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <button className="bg-[#991b1b] text-white px-10
       py-3 rounded-md shadow-md hover:scale-105 transition-all duration-400 font-bold cursor-pointer">
        <Link to="/services">
          View More
        </Link>
      </button>
    </section>
  );
};

export default OurServices;
