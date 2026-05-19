

const CompanyOverview = ({height, image}) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-5 md:px-16 py-16">

      {/* Left — Text */}
      <div className="flex-1 max-w-lg">
        <h2 className="text-xl font-bold text-[#991b1b] mb-4">
          Company Overview
        </h2>
        <p className="leading-7 text-justify">
          Ramdas Sales India Pvt.Ltd is a leading pharmaceutical supply chain
          solution provider engaged in C&F, Super Stockist Operations with
          specialization in the Distribution, Logistics, Warehousing, and
          Licensing facilities in Western India.
        </p>
      </div>

      {/* Right — Image with hover effect */}
      <div className={`flex-1 max-w-105 overflow-hidden relative group rounded-lg ${height} pop-in`}>

        {/* Burgundy border — top and right only */}
        <div className="absolute top-0 right-0 w-full h-full bg-[#991b1b] rounded-lg" />

        {/* Image */}
        <img
          src={`${image}`}
          alt="Distribution"
          className="relative w-full h-full object-cover rounded-lg
               lg:pt-2 lg:pr-2
               lg:hover:pt-0 lg:hover:pr-0
               transition-all duration-300 ease-in
               cursor-pointer"
          loading="lazy"
        />
      </div>

    </section>
  )
}

export default CompanyOverview