import { useEffect, useRef, useState } from "react"
import { FaTruck, FaFileInvoice, FaBoxes, FaMapMarkerAlt } from "react-icons/fa"

const metrics = [
  {
    icon: <FaTruck size={75} />,
    target: 130000,
    startFrom: 99900,
    suffix: "+",
    label: "Gross Volume Shippers Delivered per month",
    bg: true,
  },
  {
    icon: <FaFileInvoice size={75} />,
    target: 7000,
    startFrom: 6900, 
    suffix: "+",
    label: "Invoices per Month",
    bg: false,
  },
  {
    icon: <FaBoxes size={75} />,
    target: 4000,
    startFrom: 3900, 
    suffix: "+",
    label: "SKUs handled",
    bg: true,
  },
  {
    icon: <FaTruck size={75} />,
    target: 30,
    startFrom: 0,
    suffix: "+",
    label: "Delivery points",
    bg: false,
  },
]

// Counter hook
const useCounter = (target, duration = 10000, start, startFrom = 0) => {
  const [count, setCount] = useState(startFrom)

//   useEffect(() => {
//     if (!start) return
//     let startTime = null
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp
//       const progress = Math.min((timestamp - startTime) / duration, 1)
//       setCount(Math.floor(progress * target))
//       if (progress < 1) requestAnimationFrame(step)
//     }
//     requestAnimationFrame(step)
//   }, [start, target, duration, startFrom])

useEffect(() => {
    if (!start) return
    
    let startTime = null
    // Calculate the total distance the counter needs to travel
    const range = target - startFrom

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Calculate: starting point + (percentage of the distance covered)
      const currentCount = Math.floor(startFrom + (progress * range))
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [start, target, duration, startFrom])
  return count
}

// Single metric card
const MetricCard = ({ icon, target, suffix, label, bg, start, startFrom }) => {
  const count = useCounter(target, 20000, start, startFrom)

  return (
    <div className={`flex flex-col items-center justify-center gap-4 px-4 py-16 lg:py-14 lg:px-10 rounded-sm lg:rounded-none pop-in
                     ${bg ? "bg-[#991b1b] text-white" : "bg-[#f0f0f0] text-gray-800 "}
                     `}>
      <div className={bg ? "text-white" : "text-black"}>
        {icon}
      </div>
      <span className={`text-4xl font-bold ${bg ? "text-white" : "text-[#991b1b]"}`}>
        {count.toLocaleString()}{suffix}
      </span>
      <p className="text-lg  text-center font-semibold">{label}</p>
    </div>
  )
}

const KeyMetrics = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef(null)

  // Start counter only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#e5e7eb]  pt-8">

      {/* Heading */}
      <div className="text-center mb-12  px-8 md:px-16">
        <h2 className="text-4xl font-bold text-[#991b1b] mb-2">Key Metrics</h2>
        <div className="w-49 h-1 bg-[#991b1b] mx-auto mb-6" />
        <p className="text-xl max-w-xl mx-auto font-semibold leading-7 text-center">
          We remain fully committed to our customers and go an extra mile to
          serve them. The numbers show the believe and trust our clients have on us.
        </p>
      </div>

      {/* Cards */}
      <div ref={sectionRef} className="grid lg:grid-cols-4 gap-4 lg:gap-0 px-8 lg:px-0 ">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} start={hasStarted} />
        ))}
      </div>

    </section>
  )
}

export default KeyMetrics