import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

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
    <section id="video-short" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Showcase</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Koleksi Souvenir <span className="text-blue-600">Video</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Lihat detail produk kami secara lebih nyata melalui video singkat berkualitas tinggi.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {shorts.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-gray-100"
              onClick={() => setActiveVideo(item.video_full_url)}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail_url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay & Play Icon */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                >
                  <Play className="text-white fill-white w-5 h-5 ml-1" />
                </motion.div>
              </div>

              {/* Title Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-bold truncate">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative bg-black rounded-3xl overflow-hidden w-full max-w-[360px] aspect-[9/16] shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()} // Stop closing when clicking video
              >
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full transition-all border border-white/20"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
