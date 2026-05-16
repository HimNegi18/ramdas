const values = [
  {
    letter: "T",
    title: "ransparency",
    desc: "Building a transparent and trustworthy relationship with our clients.",
  },
  {
    letter: "E",
    title: "fficiency and Empathy",
    desc: "Efficient teams along with a culture of respect and empathy.",
  },
  {
    letter: "A",
    title: "ccountability & Agility",
    desc: "To be accountable and agile at every work we do.",
  },
  {
    letter: "M",
    title: "indfulness",
    desc: "Ensure that we are mindful fiscally and socially in our daily operations.",
  },
]

const TeamValues = () => {
  return (
    <section className={`px-6 md:px-16 py-10`}>
      <div className="max-w-5xl mx-auto bg-[#991b1b] rounded-xl p-10">

        {/* Heading */}
        <h2 className="text-white font-bold text-2xl mb-10">
          Our Values are summarized with acronym for T.E.A.M
        </h2>

        {/* Values List */}
        <ul className="flex flex-col gap-3">
          {values.map((item) => (
            <li key={item.letter} className="text-white text-xl leading-6">
              <span className="text-3xl font-bold">{item.letter}</span>
              <span className="text-xl">{item.title}:</span>{" "}
              {item.desc}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default TeamValues