import React from "react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Feedback 1" },
  { id: "3JZ_D3ELwOQ", title: "Feedback 2" },
  { id: "L_jWHffIx5E", title: "Feedback 3" },
  { id: "M3BM9TB-8yA", title: "Feedback 4" },
  { id: "tgbNymZ7vqY", title: "Feedback 5" },
  { id: "V-_O7nl0Ii0", title: "Feedback 6" },
  { id: "kJQP7kiw5Fk", title: "Feedback 7" },
  { id: "2Vv-BfVoq4g", title: "Feedback 8" },
  { id: "9bZkp7q19f0", title: "Feedback 9" },
  { id: "3tmd-ClpJxA", title: "Feedback 10" },
];

const YouTubeGallery = () => {
  return (
    <div className="min-h-screen  p-6 bg-[#fd95a4] w-full mt-15 md:mt-25">
      <h2 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 px-5 text-white tracking-wide p-5">User Feedback Videos</h2>
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
