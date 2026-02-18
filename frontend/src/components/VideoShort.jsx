import React, { useEffect, useState } from "react";

export default function VideoShorts() {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    // Panggil API Laravel
    fetch("http://127.0.0.1:8000/api/video-shorts")
      .then((res) => res.json())
      .then((data) => setShorts(data.data || data)) // paginate -> data.data
      .catch((err) => console.error("Error fetch shorts:", err));
  }, []);

  return (
    <section id="video-short" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">1Souvenir Shorts</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {shorts.map((item) => (
            <div
              key={item.id}
              className="w-72 border rounded-lg shadow bg-white p-4 text-center"
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-contain rounded"
              />

              {/* Video player */}
              {item.video_url && (
                <video
                  src={item.video_url}
                  controls
                  className="w-full h-48 mt-3 rounded"
                >
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Judul */}
              <p className="text-sm font-medium mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}