import Heading from "../components/Heading";

const milestones = [
  {
    year: "1950",
    desc: "Coming to India post partition, our founder Late Mr. Ramchand Tulsani started a small medical store KDas & Sons with his brothers in Ulhasnagar – a town in Thane district in Western Maharashtra, which exits to date.",
  },
  {
    year: "1952",
    desc: "Mr. Ramchand Tulsani became one of the founder members of the Pharma Chemists and Drugist's Association.",
  },
  {
    year: "1960 - 1970",
    desc: "Creating a name for themselves in the pharmaceutical retail trade business, they went on to establish their foothold in the wholesale business.",
  },
  {
    year: "1976",
    desc: "Inception of Ramdas Pharma Distributors was done by Mr. Ramchand Tulsani. It was one of the first stockiest established in Shahad town in Thane to cater medicines to chemists in Ulhasnagar, Kalyan and other cities in Thane district.",
  },
  {
    year: "1977",
    desc: "Ramdas Pharma Distributors Pvt. Ltd became the first stockiest for Glenmark Pharmaceuticals Ltd globally.",
  },
  {
    year: "1980 - 1990",
    desc: "Ramdas Pharma Distributors Pvt. Ltd became an authorized distributor for around more than 80 companies with new leaders in the business Late Mr. Khial Tulsani and Mr. Girdhari Tulsani (sons of Mr. Ramchand Tulsani)",
  },
  {
    year: "1990 -1995",
    desc: "Moving from catering in Thane district, we spread our wings to Mumbai to obtain new opportunities in a then highly developing pharmaceutical industry.",
  },
  {
    year: "1996",
    desc: "A foundation of Ramdas Sales Corporation was laid down by Late Mr. Khial Tulsani and Mr. Girdhari Tulsani. Ramdas Sales Corporation became the first Super Stockist for Glenmark Pharmaceuticals Ltd.",
  },
  {
    year: "2000",
    desc: "Looking at the business requirements, additional warehousing space & office space was acquired & RSC soon made an impact in the Supply chain industry.",
  },
  {
    year: "2005-2010",
    desc: "We saw a significant growth with addition of multiple clientele like Himalaya Wellness, Ajanta Pharma and others under the strong leadership of its partner’s Mr. Girdhari Tulsani and Mrs. Ekta Tulsani.",
  },
  {
    year: "2010-2019",
    desc: "Expanding the horizons, RSC catered its supply chain services to Goa and Rest of Maharashtra.",
  },
  {
    year: "2020-2022",
    desc: "To cater the industry growing needs, we expanded our warehousing facilities, digitized many operations and currently operate in area of 175000 sq ft.",
  },
  {
    year: "2022",
    desc: "Our Director’s daughter Dr. Sneha Tulsani, the 3rd generation; after her career of 10 years in dental space stepped into the business and is currently inheriting the values of business conduct and looking into execution of our vision to serve all India Pharma distribution needs.",
  },
  {
    year: "2024",
    desc: "Ramdas Sales Corporation makes a significant transition from a Partnership firm to a Pvt. Ltd Company Ramdas Sales India Pvt. Ltd.This change marks a pivotal step in our growth, enabling us to enhance our operational efficiencies, attract more investments, and expand our capabilities to serve you better.",
    boldDesc: {
      label: "New Warehouse and Distribution Hub in Pune:",
      text: " To streamline our operations and ensure timely delivery across Maharashtra, we have established a new warehouse and distribution hub in Pune. This strategic move will allow us to better manage our inventory, improve distribution efficiency, and serve our customers more effectively across the state.",
    },
  },
  {
    year: "2025",
    desc: null,
    boldDesc: {
      label: "Warehouse Hub in Nagpur:",
      text: " With our vision aligned to serve healthcare supply chain industry, the opening of our Nagpur warehouse for our existing client in 2025 reflects not just our expanding footprint, but the enduring trust and strong partnerships we share with our valued clients across the country."
    },    
  }
];

const OurJourney = () => {
  return (
    <section>
      <Heading title="Our Journey" path="/our-journey" />
      <div className="bg-[#f0f0f0] px-8 md:px-16 py-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#991b1b] mb-3">Our Journey</h2>

          <p>
            Founded as Ramdas Pharma Distribution Pvt. Ltd. in 1976 as one of
            the first few stockist and distributors in the Pharmaceutical
            industry, company has established itself as a leading name in Pharma
            industry with a successful journey spanning over 45 years.
          </p>
        </div>
      </div>
      <section className="px-4 md:px-16 py-16">
        <div className="max-w-7xl mx-auto relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#991b1b]" />

          {/* Milestones */}
          <div className="flex flex-col gap-16">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative flex items-center justify-between gap-8"
                >
                  {/* Left side */}
                  <div
                    className={`w-[42%] cursor-pointer ${isLeft ? "block" : "invisible"} 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pop-in`}
                  >
                    <div className="bg-[#e5e7eb] rounded-lg p-3 md:p-6 border-l-4 border-[#991b1b]">
                      <h3 className="text-xl text-black font-medium mb-5">
                        {item.year}
                      </h3>
                      {
                        item.desc && <p className="text-xs sm:text-sm">{item.desc}</p>
                      }
                      {/* Bold inline text — only renders if boldDesc exists */}
                      {item.boldDesc && (
                        <p className="text-xs sm:text-sm mt-2">
                          <span className="font-bold">
                            {item.boldDesc.label}
                          </span>
                          {item.boldDesc.text}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center dot with number */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-10
                                w-6 h-6 rounded-full bg-[#991b1b]
                                flex items-center justify-center
                                text-white text-xs font-bold shrink-0"
                  >
                    {index + 1}
                  </div>

                  {/* Right side */}
                  <div
                    className={`w-[42%] cursor-pointer ${!isLeft ? "block" : "invisible"} 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pop-in`}
                  >
                    <div className="bg-[#e5e7eb] rounded-lg p-3 md:p-6 border-r-4 border-[#991b1b]">
                      <h3 className="text-xl text-black font-medium mb-5">
                        {item.year}
                      </h3>
                      {item.desc && <p className="text-xs sm:text-sm">{item.desc}</p>}
                      {/* Bold inline text — only renders if boldDesc exists */}
                      {item.boldDesc && (
                        <p className="text-xs sm:text-sm mt-2">
                          <span className="font-bold">
                            {item.boldDesc.label}
                          </span>
                          {item.boldDesc.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurJourney;
