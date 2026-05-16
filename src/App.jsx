import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Clientele from "./pages/Clientele";
import Infrastructure from "./pages/Infrastructure";
import Gallery from "./pages/Gallery";
import CompanyOverview from "./pages/CompanyOverview";
import Leadership from "./pages/Leadership";
import VisionMission from "./pages/VisionMission";
import OurJourney from "./pages/OurJourney";
import Awards from "./pages/Awards";
import ServiceList from "./pages/ServicesList";
import ScrollToTop from "./components/ScrollToTop";

const cfaFeatures = {
  heading: "Carrying & Forwarding Agent Services",
  intro:
    "Our team efficiently handles CFA operations for Pharmaceutical and FMCG companies for West India. We handle over 7000+ invoices and dispatch approximately gross volume of 1 lakh shippers monthly across India.",
  listHead: "Key features of our CFA operations:",
  listItems: [
    {
      title: "Warehousing and Storage:",
      desc: "Temperature-controlled facilities to preserve the efficacy of pharmaceutical products. We adhere to stringent quality standards to safeguard the integrity of goods throughout the storage period.",
    },
    {
      title: "Inventory Management:",
      desc: "Along with our clients, we constantly monitor stock levels, providing information, facilitating timely replenishment and optimization of inventory turnover. Monthly stock checks are performed to ensure inventory hygiene and provide real time picture.",
    },
    {
      title: "Order Fulfilment:",
      desc: "Prompt daily order processing and fulfilment services to ensure timely delivery of pharmaceutical products to stockists & institutions. Timely payment collection, coordination with field force and up to date accounting helps us enhance customer experience.",
    },
    {
      title: "Transportation and Distribution:",
      desc: "With a robust distribution network, and our established connections with our transport vendors, we ensure swift and secure transportation of pharmaceutical goods to their intended destinations. 24 hours delivery is facilitated for local destinations and 72 hours outstation deliveries.",
    },
    {
      title: "Regulatory Compliance & Documentation:",
      desc: "We adhere to all regulatory guidelines and quality standards governing the pharmaceutical industry. Our team stays updated with the latest regulatory requirements to ensure compliance at every stage of the supply chain.",
    },
  ],
};
const stockistFeatures = {
  heading: "Super Stockist/Super Distributor Operations",
  intro:
    "RSIPL is regional, state-wide stockist/distributor for well-known pharmaceutical companies. As a super stockist, we play a pivotal role in the supply chain eco system acting as key intermediaries between manufacturer and their end customers.",
  listHead: "Key features of our Super Stockist operations include:",
  listItems: [
    {
      title: "",
      desc: "Warehouse and storage facility catered to client's requirements.",
    },
    {
      title: "",
      desc: "Quality Assurance",
    },
    {
      title: "",
      desc: "Stock/inventory ownership to keep the smooth functioning of super-stockist activities.",
    },
    {
      title: "",
      desc: "Regular Stock audits and inventory management.",
    },
    {
      title: "",
      desc: "Regulatory compliances by maintaining drug license records/ FDA records as per Indian regulatory authorities.",
    },
    {
      title: "",
      desc: "End-to-end solution for order execution, dispatch, credit management & payment collection.",
    },
    {
      title: "",
      desc: "Efficient return goods management system.",
    },
    {
      title: "",
      desc: "Pharmaceutical industry requires urgent supply of drugs at times. Our team efficiently collaborates with courier services to deliver lifesaving drugs on urgent requirements.",
    },
    {
      title: "",
      desc: "Continuous feedback and coordination with field force and distributors to ensure highest customer satisfaction.",
    },
    {
      title: "",
      desc: "Pan India Supply points.",
    },
    {
      title: "",
      desc: "Relationship Management with principal company and distributors, retailer as well government bodies to ensure smooth delivery and supply.",
    },
  ],
}
const coldChainFeatures = {
  heading: "Cold Chain Distribution",
  intro:
    "Cold Chain distribution forms a critical part of the pharmaceutical supply chain. At RSIPL, we carry out cold chain distribution adhering to utmost quality assurance throughout storage and transit.",
  listHead: "Key features of our Cold Chain operations include:",
  listItems: [
    {
      title: "Infrastructure:",
      desc: "Deep freezers and cold chain rooms of approximately 500-600 sqft in size and 24 hour back up facility to ensure no failure of electricity.",
    },
    {
      title: "Temperature Monitoring & Control:",
      desc: "Tracking of temperature conditions in real time, Temperature controlled packaging, quick deliveries in 24 hours to outstations.",
    },
    {
      title: "Regulatory compliances:",
      desc: "Regulatory compliances followed with respect to Drug laws and FDA.",
    },
    {
      title: "Extensive:",
      desc: "Extensive hygiene and stringent quality assurance.",
    },
  ],
}
const promotionalFeatures = {
  heading: "Promotional Material Handling",
  intro:
    "Ramdas Sales provides quality services in the field of Promotional Material Handling. Promotional material includes literature, samples, etc. We cater to specific requirements of Pharmaceutical Promotional Operations with utmost accuracy and tracking.",
  listHead: "Key features of our Promotional Material Operations include:",
  listItems: [
    {
      title: "",
      desc: "Special Dispatches are made within 24 hours from the time of allocation. Monthly dispatches are carried out as per the pre specified timeline.",
    },
    {
      title: "",
      desc: "Our staff is trained to handle physician's sample/ expiry defacing destruction activity.",
    },
    {
      title: "",
      desc: "Lowest error ratio of complaints to shipments through POD tracking for each & every shipment",
    },
    {
      title: "",
      desc: "Timely immediate delivery of promotional materials before launch of a product or a specific marketing campaign to support the marketing needs of our clients.",
    },
  ],
}
const reverseLogisticsFeatures = {
  heading: "Reverse logistics",
  intro:
    "Reverse logistics in pharmaceutical distribution involves the management of returned products, expired medications, and the overall optimization of the supply chain in the reverse direction. The pharmaceutical industry operates within strict regulatory frameworks. Proper handling of returned medications is not just good business practice but also a legal requirement.",
  intro2:
    "At Ramdas Sales, we ensure compliance with regulations governing the disposal, destruction, or potential resale of returned pharmaceutical products.",
  listHead: "Key Features of Reverse Logistics Operations include:",
  listItems: [
    {
      title: "",
      desc: "Assessing the condition of returned products, determining if they can be restocked, repurposed, or safely disposed of, thereby reducing financial losses for pharmaceutical companies and minimizing environmental impact.",
    },
    {
      title: "",
      desc: "Quality Assurance",
    },
    {
      title: "",
      desc: "Ensuring proper storage conditions are maintained throughout the return process.",
    },
    {
      title: "",
      desc: "We continuously streamline the returns process, reducing waste, and maximizing the value of returned products, which can help companies, can improve their bottom line.",
    },
    {
      title: "",
      desc: "Settling the Reverse Logistics accounting for stockists in a timely manner ensuring customer satisfaction.",
    },
    {
      title: "",
      desc: "Working as per principal companies SOPs in handling return goods to ensure safety in disposal and enhance customer satisfaction.",
    },
    {
      title: "",
      desc: "Data Analytics and Reporting provided by us enables our pharmaceutical clientele to identify the areas of improvement, product performance and return trends.",
    },
  ],
}
const valueAddedFeatures = {
  heading: "Value Added Services",
  intro:
    "In today's dynamic healthcare landscape, we understand the critical role that value-added services play in optimizing efficiency, improving patient outcomes, and ensuring regulatory compliance. Our commitment is to provide innovative solutions that go beyond traditional distribution, empowering our partners to thrive in an increasingly competitive market.",
  intro2:
    "We are an extension of your team. We offer dependability & an array of services that enable you to focus on their core strength and leave the fulfilment expertise to us thus streamlining your final customer experience.",
  listHead: "Some of the Value added Services offered –",
  listItems: [
    { title: "", desc: "Kitting/De-kitting" },
    { title: "", desc: "Customised bundling, labelling" },
    { title: "", desc: "Stickering, strapping & other related services." },
    { title: "", desc: "E-commerce Packaging & Supply" },
    { title: "", desc: "Business intelligence" },
  ],
  outro:
    "Reach out to us today to learn more about our specialized services and how we can support your pharmaceutical distribution needs.",
}
function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/awards-accolades" element={<Awards />} />
        <Route path="/our-journey" element={<OurJourney />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Carrying-&-Forwarding-Agent-Services" element={<ServiceList lists={cfaFeatures} />} />
        <Route path="/Super-Stockist-Super-Distributor-Operations" element={<ServiceList lists={stockistFeatures} />} />
        <Route path="/Cold-Chain-Distribution" element={<ServiceList lists={coldChainFeatures} />} />
        <Route path="/Promotional-Material-Handling" element={<ServiceList lists={promotionalFeatures} />} />
        <Route path="/Reverse-Logistics" element={<ServiceList lists={reverseLogisticsFeatures} />} />
        <Route path="/Value-Added-Services" element={<ServiceList lists={valueAddedFeatures} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
