import { Link } from 'react-router-dom';
import img3 from "../assets/images/gallery/img3.jpeg";
import img8 from "../assets/images/gallery/img8.JPG";

const GalleryTab = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap my-10">
        <div className="text-center ">
            <img
              src={img3}
              alt="tree plantation"
              className="h-[300px] w-[400px] object-cover"
              loading="lazy"
            />

          <p className="text-center my-3 font-bold">
            Tree plantation & Warehouse opening (Nagpur)
          </p>
          <Link to={`/gallery/tree-plantation`}>
            <button
              className="px-5 py-3 bg-[#991b1b] text-white rounded-md hover:scale-105 cursorservices/-pointer
                             transition-all duration-300 cursor-pointer"  
            >
              View More
            </button>
          </Link>
        </div>
        <div className="text-center ">
            <img
              src={img8}
              alt="RPL Cricket Tournament 2026"
              className="h-[300px] w-[400px] object-cover"
              loading="lazy"
            />

          <p className="text-center my-3 font-bold">
            RPL Cricket Tournament 2026
          </p>
          <Link to="/gallery/rpl">
            <button
              className="px-5 py-3 bg-[#991b1b] text-white rounded-md hover:scale-105 cursorservices/-pointer
                             transition-all duration-300 cursor-pointer"
            >
              View More
            </button>
          </Link>
        </div>
      </div>
  )
}

export default GalleryTab