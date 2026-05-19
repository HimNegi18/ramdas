import Heading from '../components/Heading'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

// Import your client logos
import clientele from "../assets/images/clientele/clientele.png"
import clientele2 from "../assets/images/clientele/clientele2.png"
import clientele3 from "../assets/images/clientele/clientele3.png"
import clientele4 from "../assets/images/clientele/clientele4.png"
import clientele5 from "../assets/images/clientele/clientele5.png"
import clientele6 from "../assets/images/clientele/clientele6.png"
import clientele7 from "../assets/images/clientele/clientele7.png"
import clientele8 from "../assets/images/clientele/clientele8.png"
import clientele9 from "../assets/images/clientele/clientele9.png"
import clientele10 from "../assets/images/clientele/clientele10.png"


const clients = [
  { image: clientele, alt: "Dabur" },
  { image: clientele2, alt: "Apex" },
  { image: clientele3, alt: "Sachio" },
  { image: clientele4, alt: "Integrace" },
  { image: clientele5, alt: "Pharmtak" },
  { image: clientele6, alt: "British Biological" },
  { image: clientele7, alt: "Alniche" },
  { image: clientele8, alt: "Eisen" },
  { image: clientele9, alt: "Glenmark" },
  { image: clientele10, alt: "Himalaya" },
]


const Clientele = () => {
  return (
    <section>
      <Heading title="Clientele" path="/clientele"/>
       <section className="px-3 md:px-16 py-16">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        centeredSlides={true}
        className="w-full"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
                <div className='flex items-center justify-center py-10 px-2 md:px-4'>
                <img
                  src={client.image}
                  alt={client.alt}
                  className="shadow-2xl py-14 px-10 lg:w-[200px] w-[350px] cursor-pointer
                  hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination below */}
      <div className="custom-pagination flex justify-center gap-6 mt-10" />

    </section>
    </section>
  )
}

export default Clientele