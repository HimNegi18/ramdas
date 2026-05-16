import HeroSwiper from '../components/Home/HeroSwiper'
import CompanyOverview from '../components/Home/CompanyOverview'
import VisionMission from '../components/Home/VisionMission'
import TeamValues from '../components/Home/TeamValues'
import KeyMetrics from '../components/Home/KeyMetrices'
import OurServices from '../components/Home/OurServices'
import BenefitsOfServices from '../components/Home/BenefitsOfServices'
import distImage from "../assets/images/distribution.jpeg"

const Home = () => {
  return (
    <div>
        <HeroSwiper/>
        <CompanyOverview height="h-67" image={distImage}/>
        <VisionMission bg="bg-[#e5e7eb]"/>
        <TeamValues/>
        <KeyMetrics/>
        <OurServices/>
        <BenefitsOfServices/>
    </div>
  )
}

export default Home