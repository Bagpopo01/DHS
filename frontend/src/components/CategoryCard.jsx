import React from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center justify-center p-2 border rounded-lg shadow hover:shadow-md transition cursor-pointer text-center w-20 md:w-24 lg:w-28 mx-auto">
      <div className="w-14 aspect-square rounded-md overflow-hidden mb-1">
        <img
          src={`http://127.0.0.1:8000/storage/${category.image}`}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-medium text-xs truncate">{category.name}</span>
    </div>
  );
}