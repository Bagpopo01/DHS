import React from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer">
      <img
        src={`http://127.0.0.1:8000/storage/${category.image}`}
        alt={category.name}
        className="w-20 h-20 object-cover rounded mb-3"
      />
      <span className="font-medium text-sm">{category.name}</span>
    </div>
  );
}