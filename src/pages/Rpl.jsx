import React from 'react'
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";


import img2 from "../assets/images/gallery/img2.JPG"
import img4 from "../assets/images/gallery/img4.JPG"
import img6 from "../assets/images/gallery/img6.JPG"
import img8 from "../assets/images/gallery/img8.JPG"
import img10 from "../assets/images/gallery/img10.JPG"
import img11 from "../assets/images/gallery/img11.JPG"

const images = [
  { src: img2 },
  { src: img4 },    
  { src: img6 },
  { src: img8 },
  { src: img10 },
  { src: img11 },
]

const Rpl = () => {
  return (
    <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-[#8b1d1d] my-6 inline-block mx-auto border-b-4 border-[#8b1d1d] pb-3">
          RPL Cricket Tournament 2026
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

export default Rpl