import Heading from "../components/Heading";
import directorImg from "../assets/images/gridhar.png";
import ekta from "../assets/images/ekta.png";
import sneha from "../assets/images/sneha.png";
import narendra from "../assets/images/narendra.png";
import priya from "../assets/images/Priya.png";
const team = [
  {
    image: ekta,
    name: "Ekta Tulsani",
    role: "Director (Admin, CSR)",
  },
  {
    image: sneha,
    name: "Dr. Sneha Tulsani",
    role: "Chief Executive Officer",
  },
  {
    image: narendra,
    name: "Narendra Khemani",
    role: "General Manager - (Warehouse Operations)",
  },
  {
    image: priya,
    name: "Priya Sengunthar",
    role: "General Manager - (Client Operations)",
  },
];

const Leadership = () => {
  return (
    <section>
      <Heading title="Leadership" path="/leadership" />
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left — Text */}
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
              Girdhari Tulsani
            </h2>
            <h3 className="text-lg font-semibold mb-4">Managing Director</h3>

            <div className="flex flex-col gap-4">
              <p>
                On behalf of the entire team, I welcome you to this virtual
                platform of Ramdas Sales India Pvt.Ltd.
              </p>
              <p>
                We understand that the success of our logistics operations is
                deeply intertwined with the trust you place in us. We also
                recognize that in today's rapidly changing global landscape,
                distribution plays a pivotal role in connecting businesses,
                optimizing supply chains, and driving growth. That's why we
                strive to be your trusted partner, offering innovative solutions
                and unwavering support at every step.
              </p>
              <p>
                Our commitment to excellence extends beyond our services. We
                place great emphasis on building long-term relationships with
                our clients, based on trust, transparency, and open
                communication.
              </p>
              <p>
                We invite you to explore the wide range of services we offer &
                look forward to having you on board with us.
              </p>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex-shrink-0 lg:border-2 lg:border-[#991b1b] rounded-lg sm:w-[396px] sm:h-[450px] pop-in">
            {/* Image */}
            <img
              src={directorImg}
              alt="Girdhari Tulsani"
              className="relative w-full h-full object-cover rounded-lg cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-8 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-3 w-40"
            >
              {/* Circular Image with burgundy border */}
              <div className="w-37.5 h-37.5 rounded-full border-2 border-[#991b1b] bg-cover
               overflow-hidden shrink-0 hover:scale-110 transition-all ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${member.image})` }}>
              </div>

              {/* Name & Role */}
              <div className="text-center">
                <p className="text-lg font-semibold">
                  {member.name}
                </p>
                <p className="mt-1 leading-5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Leadership;
