const ServiceList = ({ lists }) => {
  return (
    <section className="shadow-2xl lg:w-[800px] m-auto -mb-4 px-10 py-20 space-y-4 text-justify ">
      {/* Heading */}
      <h2 className="text-2xl font-semibold">{lists.heading}</h2>

      {/* Intro */}
      <p>{lists.intro}</p>

      {
        lists.intro2 && <p>{lists.intro2}</p>
      }

      {/* Key Features */}
      <h3 className="text-lg font-semibold">{lists.listHead}</h3>

      <ul className="space-y-4">
        {lists.listItems.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-5 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
            <p>
              <span className="font-bold">{item.title}</span> {item.desc}
            </p>
          </li>
        ))}
      </ul>
      {
        lists.outro && <p>{lists.outro}</p>
      }
    </section>
  );
};

export default ServiceList;
