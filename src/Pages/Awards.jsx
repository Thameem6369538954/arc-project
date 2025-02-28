import { motion } from "framer-motion";
import A from "../AwardImg/A.jpeg";
import B from "../AwardImg/B.jpeg";
import C from "../AwardImg/C.jpg";
import D from "../AwardImg/D.png";
import E from "../AwardImg/E.png";
import F from "../AwardImg/F.jpg";
import G from "../AwardImg/G.jpg";
import H from "../AwardImg/H.jpg";
import I from "../AwardImg/I.jpg";

const images = [
  { src: A, cols: 2, rows: 2 }, // Large image
  { src: B, cols: 1, rows: 1 },
  { src: C, cols: 1, rows: 1 },
  { src: D, cols: 2, rows: 1 }, // Wide image
  { src: E, cols: 1, rows: 1 },
  { src: F, cols: 1, rows: 1 },
  { src: G, cols: 1, rows: 1 },
  { src: H, cols: 1, rows: 1 },
  { src: I, cols: 2, rows: 2 }, // Large image
];

const ImageGallery = () => {
  return (
    <div className="w-full mx-auto p-4 bg-[#ffc9d7] mt-15 md:mt-25">
        <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 p-5 text-white tracking-wide">Awards & Recognitions</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg col-span-${img.cols} row-span-${img.rows} shadow-md`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
