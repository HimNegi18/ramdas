import Heading from '../components/Heading'
import KeyMetrices from '../components/Home/KeyMetrices'
import image from '../assets/images/company-over.jpg'
import CompanyOverview1 from '../components/Home/CompanyOverview'

const CompanyOverview = () => {
  return (
    <section>
        <Heading title='Company Overview' path='/company-overview' />
        <CompanyOverview1 height="h-117" image={image} />
        <KeyMetrices/>
    </section>
  )
}

export default CompanyOverview