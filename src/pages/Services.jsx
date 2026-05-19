import Heading from "../components/Heading"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import serveice11 from "../assets/images/services/service11.jpg";
import serveice12 from "../assets/images/services/service12.jpg";
import serveice21 from "../assets/images/services/service21.jpg";
import serveice22 from "../assets/images/services/service22.jpg";
import serveice31 from "../assets/images/services/service31.jpg";
import serveice32 from "../assets/images/services/service32.jpg";
import serveice41 from "../assets/images/services/service41.jpg";
import serveice42 from "../assets/images/services/service42.jpg";
import serveice51 from "../assets/images/services/service51.jpeg";
import serveice52 from "../assets/images/services/service52.jpeg";
import serveice61 from "../assets/images/services/service61.jpg";
import serveice62 from "../assets/images/services/service62.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Carrying & Forwarding Agent Services",
    desc: "Our team efficiently handles CFA operations for Pharmaceutical and FMCG companies for West India. We handle over 7000+ invoices and dispatch approximately gross volume of 1 lakh shippers monthly across India.....",
    images: [serveice11, serveice12], // 👈 multiple images per service
    imageLeft: true, // 👈 image on right
    link: "/Carrying-&-Forwarding-Agent-Services",
  },
  {
    title: "Super Stockist/Super Distributor Operations",
    desc: "RSIPL is regional, state-wide stockist/distributor for well-known pharmaceutical companies. As a super stockist, we play a pivotal role in the supply chain eco system acting as key intermediaries between manufacturer and their end customers....",
    images: [serveice21, serveice22],
    imageLeft: false, // 👈 image on left
    link: "/Super-Stockist-Super-Distributor-Operations",
  },
  {
    title: "Cold Chain Distribution",
    desc: "Cold Chain distribution forms a critical part of the pharmaceutical supply chain. At RSIPL, we carry out cold chain distribution adhering to utmost quality assurance throughout storage and transit....",
    images: [serveice31, serveice32],
    imageLeft: true, // 👈 image on left
    link: "/Cold-Chain-Distribution",
  },
  {
    title: "Promotional Material Handling",
    desc: "Ramdas Sales provides quality services in the field of Promotional Material Handling. Promotional material includes literature, samples, etc. We cater to specific requirements of Pharmaceutical Promotional Operations with utmost accuracy and tracking....",
    images: [serveice41, serveice42],
    imageLeft: false, // 👈 image on left
    link: "/Promotional-Material-Handling",
  },
  {
    title: "Reverse logistics",
    desc: "Reverse logistics in pharmaceutical distribution involves the management of returned products, expired medications, and the overall optimization of the supply chain in the reverse direction. The pharmaceutical industry operates within strict regulatory frameworks. Proper handling of returned medications is not just good business practice but also a legal requirement....",
    images: [serveice51, serveice52],
    imageLeft: true, // 👈 image on left
    link: "/Reverse-Logistics",
  },
  {
    title: "Value Added Services",
    desc: "In today's dynamic healthcare landscape, we understand the critical role that value-added services play in optimizing efficiency, improving patient outcomes, and ensuring regulatory compliance. Our commitment is to provide innovative solutions that go beyond traditional distribution, empowering our partners to thrive in an increasingly competitive market. We are an extension of your team. We offer dependability & an array of services that enable you to focus on their core strength and leave the fulfilment expertise to us thus streamlining your final customer experience....",
    images: [serveice61, serveice62],
    imageLeft: false, // 👈 image on left
    link: "/Value-Added-Services",
  }
];

const ServiceCard = ({ title, desc, images, imageLeft, link }) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} 
                     items-center lg:px-40 px-4 py-5 w-full gap-6 lg:gap-12`}
    >
      {/* Text */}
      <div className=" lg:w-[500px] text-gray-800 space-t-8 text-center lg:text-left pop-in">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F2937] mb-6">
          {title}
        </h2>
        <p className="text-justify mb-6">
          {desc}
        </p>
        <Link to={link}>
          <button
            className="px-5 py-3 bg-[#991b1b] text-white rounded-md hover:scale-105 cursorservices/-pointer
                             transition-all duration-300"
          >
            View More
          </button>
        </Link>
      </div>

      {/* Swiper Image */}
      <div className="w-[330px] lg:w-[400px] pop-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el:'.custom-pagination',
          }}
          loop
          className="w-full h-[300px] rounded-lg lg:rounded-none"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination below image */}
        <div className="custom-pagination flex justify-center items-center gap-2 py-4" />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <Heading title="Services" path="/services"/>
      <section >
        {/* Top description */}
        <p
          className="text-center text-lg font-bold  lg:px-40 px-4 py-10  lg:pb-20 pb-8 "
        >
          In the fast-paced world of pharmaceuticals & FMCG, efficient supply
          chain management is paramount to ensure timely delivery of crucial
          medicines and healthcare products. With our 40 years of expertise and
          dedication, we ensure seamless transportation and distribution of
          pharmaceutical goods, maintaining the integrity and efficacy of the
          products throughout the supply chain.
        </p>


        {/* Service Cards */}
        {services.map((service) => (
          <div key={service.title}>
            <ServiceCard {...service} />
          </div>
        ))} 
      </section>
    </section>
  )
}

export default Services