const VisionMission = ({ bg }) => {
  return (
    <section className={`${bg} p-5`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Vision */}
        <div className="max-w-125 mx-auto lg:max-w-none">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Vision</h2>
          <p className=" leading-7 text-justify">
            RSIPL aims to be a customer - oriented 3PL provider in the healthcare
            industry with dynamic supply chain management solutions, with a
            commitment to excellence and with a moral responsibility to all
            stakeholders.
          </p>
        </div>

        {/* Mission */}
        <div className=" max-w-100 mx-auto lg:max-w-none ">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Mission</h2>
          <p className=" leading-7 text-justify">
            To simplify and modify the distribution logistics across India by
            bringing the best in class supply chain services to Indian
            pharmaceutical market.
          </p>
        </div>

      </div>
    </section>
  )
}

export default VisionMission