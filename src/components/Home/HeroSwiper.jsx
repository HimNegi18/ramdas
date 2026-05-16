import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import your background images
import herobanner1 from '../../assets/images/herobanner1.jpeg'
import herobanner2 from '../../assets/images/herobanner2.jpg'
import herobanner3 from '../../assets/images/herobanner3.jpg'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: herobanner1,
    heading: 'Reliable, Sustainable, Customer Centric',
    subtext: 'Leading Pharmaceutical Supply Chain solutions provider in Western India.',
    btn: 'Contact Us',
    to:'contact'
  },
  {
    image: herobanner2,
    heading: 'Reliable, Sustainable, Customer Centric',
    subtext: 'Leading Pharmaceutical Supply Chain solutions provider in Western India.',
    btn: 'About Us',
    to: 'company-overview'
  },
  {
    image: herobanner3,
    heading: 'Reliable, Sustainable, Customer Centric',
    subtext: 'Leading Pharmaceutical Supply Chain solutions provider in Western India.',
    btn: 'Our Services',
    to: 'services'
  },
]

const HeroSwiper = () => {
  return (
      <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-pagination'}}
        navigation
        loop
        className="w-full h-125"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center
                              h-full text-center text-white px-4 md:px-12">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold
                               max-w-[1095px] leading-tight mb-6">
                  {slide.heading}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-[600px] mb-8">
                  {slide.subtext}
                </p>
                <button className="custom-btn mt-4 hover:bg-black  transition duration-300 ease-in-out">
                    <Link to={slide.to} className=' text-white hover:text-white font-semibold  '>
                      {slide.btn}
                    </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center items-center gap-2 py-4" />
    </section>
  )
}

export default HeroSwiper