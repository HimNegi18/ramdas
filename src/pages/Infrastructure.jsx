import Heading from '../components/Heading'
import infra1 from "../assets/images/infrastructure/infra1.jpg"
import infra2 from "../assets/images/infrastructure/infra2.jpg"
import infra3 from "../assets/images/infrastructure/infra3.jpg"
import infra4 from "../assets/images/infrastructure/infra4.jpg"
import infra5 from "../assets/images/infrastructure/infra5.jpg"
import infra6 from "../assets/images/infrastructure/infra6.jpg"
import infra7 from "../assets/images/infrastructure/infra7.jpg"
import infra8 from "../assets/images/infrastructure/infra8.jpg"
import infra9 from "../assets/images/infrastructure/infra9.jpg"

const features = [
  "The company operates in 1, 60,000+ sq. ft. of warehousing space.",
  "Scalability of business space as required is the model followed.",
  "The warehouse is equipped with Air Conditioned Rooms for temperature controlled stock storage.",
  "Multiple Cold Room (2-8 degrees) storage facilities for temperature sensitive drugs.",
  "Deep Freezer Facilities (-15°C).",
  "Online Temperature Monitoring System.",
  "The premises is powered with local power supply and 24-hour invertor back up facility.",
  "Conveyor Belts for efficient unloading and loading process.",
  "Computer systems with LAN facility & Wi-Fi connectivity.",
  "Conference & Meeting rooms for field force.",
  "Record maintenance rooms.",
  "Pest Control and Hygienic Work Environment.",
]
const imageRows = [
  [infra1, infra2, infra3],
  [infra4, infra5, infra6],
  [infra7, infra8, infra9],
]

const Infrastructure = () => {
  return (
    <section>
      <Heading title="Infrastructure" path="/infrastructure"/>
       <section>
      <div className="flex flex-wrap justify-center items-center">

        {/* Left — Text */}
        <div className="lg:w-[600px] w-[400px] lg:pr-20 px-10 py-6 lg:text-left text-center">
          <ul className="flex flex-col gap-2 mb-4">
            {features.map((feature) => (
              <li key={feature} className="">
                {feature}
              </li>
            ))}
          </ul>
          <p >
            We collaborate with the best in the business, courier and freight
            companies, who are committed and resonate with our standards and values.
          </p>
        </div>

        {/* Right — 3 rows, each row is its own div with 3 images */}
        <div className='w-[]'>

          {imageRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center flex-wrap gap-3 py-6">
              {row.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  style={{ backgroundImage: `url(${img})` }}
                  className="lg:w-[200px] w-[350px] h-[200px] 
                  hover:scale-110 transition-all ease-in-out bg-cover bg-no-repeat bg-center rounded-lg cursor-pointer"
                />
              ))}
            </div>
          ))}

        </div>

      </div>
    </section>
    </section>
  )
}

export default Infrastructure