import { useState } from "react"
import map from "../../assets/images/indiamap.jpeg"

const benefits = [
  {
    title: "Reliability:",
    desc: "Our proven record of accomplishment in pharmaceutical industry underscores our reliability and commitment to excellence.",
  },
  {
    title: "Cost Efficiency:",
    desc: "By streamlining distribution processes, we help our clients reduce operational costs and improve overall efficiency.",
  },
  {
    title: "Scalability:",
    desc: "Our flexible solutions are scalable to accommodate varying demand fluctuations and evolving business needs.",
  },
  {
    title: "Safety and Security:",
    desc: "We prioritize the safety and security of pharmaceutical products throughout the supply chain, employing stringent quality control measures and security protocols.",
  },
  {
    title: "Customer Satisfaction:",
    desc: "Our customer-centric approach ensures personalized service and prompt resolution of inquiries, fostering long-term partnerships with our clients.",
  },
]

const extraContent = [
  "In the highly regulated and demanding pharmaceutical industry, efficient distribution & supply chain operations play a pivotal role in ensuring reliability, and compliance. Collaborating with a trusted provider like us can streamline your supply chain, enhance operational efficiency, and ultimately contribute to better healthcare outcomes.",
  "Partner with us to embark on a journey of excellence in pharmaceutical distribution, where quality and safety are non-negotiable priorities.",
]

const BenefitsOfServices = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <section className="bg-[#991b1b] px-10 py-10 lg:mx-40">

        {/* Heading */}
        <h2 className="text-white font-bold text-2xl mb-10">
          Benefits of our services:
        </h2>

        {/* Benefits List */}
        <ul className="flex flex-col gap-3 mb-10">
          {benefits.map((item) => (
            <li key={item.title} className="text-white text-xl leading-7">
              <span className="font-bold">{item.title}</span>{" "}
              {item.desc}
            </li>
          ))}
        </ul>

        {/* Extra Content — shows when expanded */}
        {isExpanded && (
          <div className="flex flex-col gap-6 mb-10">
            {extraContent.map((para, index) => (
              <p key={index} className="text-white text-xl leading-7">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Button — toggles between View More / View Less */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-5 py-3 rounded-lg bg-white text-black font-bold
                     hover:scale-105 transition-transform cursor-pointer"
        >
          {isExpanded ? "View Less" : "View More"}
        </button>

      </section>

      <img src={map} alt="India Map" className="w-full h-auto pop-in" />
    </>
  )
}

export default BenefitsOfServices