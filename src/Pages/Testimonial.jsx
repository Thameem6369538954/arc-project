import React from "react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Testimonial 1" },
  { id: "3JZ_D3ELwOQ", title: "Testimonial 2" },
  { id: "L_jWHffIx5E", title: "Testimonial 3" },
  { id: "M3BM9TB-8yA", title: "Testimonial 4" },
  { id: "tgbNymZ7vqY", title: "Testimonial 5" },
  { id: "V-_O7nl0Ii0", title: "Testimonial 6" },
  { id: "kJQP7kiw5Fk", title: "Testimonial 7" },
  { id: "2Vv-BfVoq4g", title: "Testimonial 8" },
  { id: "9bZkp7q19f0", title: "Testimonial 9" },
  { id: "3tmd-ClpJxA", title: "Testimonial 10" },
];

const YouTubeGallery = () => {
  return (
    <div className="min-h-screen  p-6 bg-[#fd95a4] w-full mt-25 md:mt-25 mb-15">
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
