import React from "react";

const videos = [
  { id: "M7NA_Mjjf8k?si=ZtGzMLf_tJvWY9En", title: "ARC kolkata given 100% success" },
  { id: "f6nC2tGyLw0?si=i9osyo4DxqAK0M4p", title: "Malaysia Couple Pregnancy at age 46" },
  { id: "qDJIpukgwP8?si=NP49D30_tioms_gs", title: "Patient Share her Experience " },
  { id: "3Y3IvHLE6gg?si=x9Fw64ggGRPznDUH", title: "Miraculous Success Stories Of ARC" },
  { id: "afWVk1KtPPU?si=2-AJpwLNu1wmBWxW", title: "Emotional outburst of couple after treatment " },
  { id: "7v8LREB47S8?si=B0IDf6Dmdmm0xQ6Z", title: "Hi-Tech IVF Lab Chennai Egmore " },
  { id: "6i2LOhhXbT0?si=gL6YKpvjdjMLjimQ", title: "Best Low Cost IVF Package Rate 0% EMI " },
  { id: "-Eond9ws-Pw?si=sK1Uzo5hEBmtjsLn", title: "Happy Customes " },
  { id: "bpiQQCHVdCA?si=wYXwC3J8OkFZWF25", title: "No more difficulties to get pregnancy " },
  { id: "X7zmvSZcGXA?si=4iJRPrJYmy5hzzRA", title: "ARC ICSI cares U " },
  // { id: "9bZkp7q19f0", title: "Testimonial " },
  // { id: "3tmd-ClpJxA", title: "Testimonial " },
];

const YouTubeGallery = () => {
  return (
    <div className="min-h-screen font-[choco]  p-6 bg-[#fd95a4] w-full mt-25 md:mt-25 mb-15">
      <h2 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-1 px-0 text-white tracking-wide p-5 mb-5">Patient <span className="text-[]">Reviews</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-[#fadadd] shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-48 md:h-64 rounded-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeGallery;
