import Heading from "../components/Heading"
import TeamValues from "../components/Home/TeamValues"
import VisionMission2 from "../components/Home/VisionMission"

const VisionMission = () => {
  return (
    <section>
      <Heading title="Vision & Mission"  path='/vision-mission' />
      <div className="mt-8">
        <VisionMission2 bg="bg-white"/>
      </div>
      <TeamValues/>
    </section>
  )
}

export default VisionMission