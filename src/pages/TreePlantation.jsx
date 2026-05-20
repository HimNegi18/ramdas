import React from 'react'
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";


import img1 from "../assets/images/gallery/img1.webp"
import img3 from "../assets/images/gallery/img3.webp"
import img5 from "../assets/images/gallery/img5.webp"
import img7 from "../assets/images/gallery/img7.webp"
import img9 from "../assets/images/gallery/img9.webp"

const images = [
  { src: img1 },
  { src: img3 },  
  { src: img5 },
  { src: img7 },
  { src: img9 }
]

const TreePlantation = () => {
  return (
    <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-[#8b1d1d] my-6 inline-block mx-auto border-b-4 border-[#8b1d1d] pb-3">
          Tree plantation & Warehouse opening (Nagpur)
        </h2>
        <div className="p-[25px]">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          getCaptionFromTitleOrAlt={false}
          elementClassNames="grid  md:grid-cols-3 gap-2 md:gap-4"
        >
          {images.map((image, id) => (
            <a href={image.src} key={id} className="group relative">
              <img className="w-full h-[300px] object-cover" alt={`gallery-${id}`} src={image.src} loading="lazy" />
              <div className="opacity-0 group-hover:opacity-100  flex items-center justify-center absolute inset-0 bg-[#0000009e] h-[40%] md:h-[25%] text-white text-[20px] transition-all duration-500">
                Click Here
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
      </div>
  )
}

export default TreePlantation