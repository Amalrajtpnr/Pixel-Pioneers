// src/components/ImageGallery.js
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.js";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        setImages([...images, ...data]);
      } else {
        console.error("Error fetching images:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-9 bg-black">
      <NavBar />
      <div className="w-full h-full flex flex-col items-center justify-center p-16">
        <img src="/header.jpg" className="w-[80%] h-[10%] -mt-10 mb-8 rounded-lg shadow-md" alt="" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src={image.download_url} alt={image.author} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={loadMoreImages}
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
