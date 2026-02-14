import React, { useState } from "react";

const galleryImages = [
  "https://source.unsplash.com/random/300x200?plakat",
  "https://source.unsplash.com/random/300x200?trophy",
  "https://source.unsplash.com/random/300x200?medal",
  "https://source.unsplash.com/random/300x200?event",
  "https://source.unsplash.com/random/300x200?award",
  "https://source.unsplash.com/random/300x200?celebration",
  "https://source.unsplash.com/random/300x200?competition",
  "https://source.unsplash.com/random/300x200?winner",
  "https://source.unsplash.com/random/300x200?honor",
  "https://source.unsplash.com/random/300x200?achievement",
  "https://source.unsplash.com/random/300x200?ceremony",
  "https://source.unsplash.com/random/300x200?festival",
];

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Galeri Produk
      </h1>

      {/* Grid Galeri */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transform transition"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Galeri ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}