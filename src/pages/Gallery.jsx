import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Gallery = () => {
  return (
    <section>
      <Heading title="Gallery" path="/gallery" />
     <Outlet />      
    </section>
  );
};

export default Gallery;
