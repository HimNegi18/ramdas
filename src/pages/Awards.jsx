import Heading from '../components/Heading'
import award1 from "../assets/images/awards&accolades/award.jpeg"
import award2 from "../assets/images/awards&accolades/award2.jpeg"
import award3 from "../assets/images/awards&accolades/award3.jpeg"
import award4 from "../assets/images/awards&accolades/award4.jpeg"
import award5 from "../assets/images/awards&accolades/award5.jpeg"
import award6 from "../assets/images/awards&accolades/award6.jpeg"
import award7 from "../assets/images/awards&accolades/award7.jpeg"
import award8 from "../assets/images/awards&accolades/award8.jpeg"

const awards = [
  { image: award1, alt: "Business Partner Excellence Award" },
  { image: award2, alt: "Certificate of Achievement FY 2021-22" },
  { image: award3, alt: "Operational Excellence OTIF FY 2021-22" },
  { image: award4, alt: "Crisis Management FY 2018-19" },
  { image: award5, alt: "1st Distributor to Hit the Market" },
  { image: award6, alt: "British Biologicals Certificate" },
  { image: award7, alt: "Certificate of Appreciation" },
  { image: award8, alt: "Glenmark Recognition Award" },
]

const Awards = () => {
  return (
    <section>
      <Heading title="Awards & Accolades" path="/awards-accolades" />
      <section className="px-8 md:px-16 py-10">
      <div className="flex flex-wrap justify-center gap-13">
        {awards.map((award) => (
          <div
            key={award.alt}
            className="w-75 h-75 py-[5px]
                       bg-[#991b1b] rounded-[20px] overflow-hidden
                       hover:shadow-lg transition-all duration-300 hover:scale-101 hover:opacity-[0.9]"
          >
            <img
              src={award.image}
              alt={award.alt}
              className="w-full h-full object-fill bg-white rounded-[20px]
               "
            />
          </div>
        ))}
      </div>
    </section>
    </section>
  )
}

export default Awards