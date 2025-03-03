import useEmblaCarousel from 'embla-carousel-react';
import A from "../AwardImg/A.jpeg";
import B from "../AwardImg/B.jpeg";
import C from "../AwardImg/C.jpg";
import D from "../AwardImg/D.png";
import E from "../AwardImg/E.png";
import { useEffect } from 'react';

const images = [A, B, C, D, E];

const FlipBookSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', speed: 10 });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center bg-[#fff8ef] py-10">
      <h1 className="text-4xl font-[Belli] text-black mb-10 text-center">
        Awards <span className='text-[#1c97c8]'>& Recognitions</span>
      </h1>
      <div className="embla w-[90%] max-w-[800px] overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img src={img} alt={`slide ${index}`} className="w-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipBookSlider;
