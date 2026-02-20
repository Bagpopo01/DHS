import React, { useEffect, useState } from "react";

export default function VideoShorts() {
  const [shorts, setShorts] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/video-shorts")
      .then((res) => res.json())
      .then((data) => setShorts(data.data || data))
      .catch((err) => console.error("Error fetch shorts:", err));
  }, []);

  return (
    <section id="video-short" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Koleksi Souvenir Video
        </h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 max-w-fit mx-auto">
  {shorts.map((item) => (
    <div
      key={item.id}
      className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={() =>
        setActiveVideo(
          item.video_full_url?.includes("watch?v=")
            ? item.video_full_url.replace("watch?v=", "embed/")
            : item.video_full_url
        )
      }
    >
      <img
        src={item.thumbnail_url}
        alt={item.title}
        className="w-[160px] h-[240px] object-cover rounded-lg"
      />
    </div>
  ))}
</div>

{/* Modal video player portrait */}
{activeVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg overflow-hidden w-[260px] h-[420px] relative flex flex-col">
      <video
        src={activeVideo}
        controls
        autoPlay
        className="w-full h-full object-cover"
      />
      {/* Tombol keluar di pojok kanan atas */}
      <button
        onClick={() => setActiveVideo(null)}
        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
      >
        ✕
      </button>
    </div>
  </div>
)}
      </div>
    </section>
  );
}