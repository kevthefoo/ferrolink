"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Product360Viewer({
  images,
  productName,
  width = 400,
  height = 400,
  sensitivity = 2,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef(null);

  // Preload all images
  useEffect(() => {
    if (!images || images.length === 0) return;

    let loaded = 0;
    images.forEach((src) => {
      // Use the native browser Image constructor
      const img = new window.Image();
      img.onload = () => {
        loaded++;
        setLoadedImages(loaded);
        if (loaded === images.length) {
          setIsLoading(false);
        }
      };
      img.src = src;
    });
  }, [images]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !images) return;

      const deltaX = e.clientX - startX;
      const threshold = sensitivity;

      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? 1 : -1;
        const newIndex =
          (currentImageIndex + direction + images.length) % images.length;
        setCurrentImageIndex(newIndex);
        setStartX(e.clientX);
      }
    },
    [isDragging, images, startX, sensitivity, currentImageIndex],
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !images) return;

    const deltaX = e.touches[0].clientX - startX;
    const threshold = sensitivity;

    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? 1 : -1;
      const newIndex =
        (currentImageIndex + direction + images.length) % images.length;
      setCurrentImageIndex(newIndex);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  if (!images || images.length === 0) {
    return (
      <div
        className="flex items-center justify-center rounded-lg bg-slate-200"
        style={{ width, height }}
      >
        <div className="text-center text-slate-500">
          <div className="mb-2 text-4xl">📷</div>
          <p>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-lg border-2 border-slate-200 bg-slate-100 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ width, height }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray-900">
            <div className="text-center">
              <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-orange-500"></div>
              <p className="mb-2 text-lg font-bold text-white">
                LOADING 360° VIEW
              </p>
              <div className="mb-2 h-2 w-48 rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
                  style={{
                    width: `${(loadedImages / images.length) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">
                {loadedImages} / {images.length} IMAGES LOADED
              </p>
            </div>
          </div>
        )}

        <Image
          src={images[currentImageIndex]}
          alt={"place holder"}
          className="h-full w-full object-cover"
          draggable={false}
          style={{ userSelect: "none" }}
          width={width}
          height={height}
          priority
          unoptimized
        />

        {/* Rotation indicator */}
        <div className="absolute top-4 left-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Progress arc indicator */}
        <div className="absolute top-4 right-4">
          <div className="relative h-12 w-12">
            <svg className="h-12 w-12 -rotate-90 transform" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${
                  (currentImageIndex / (images.length - 1)) * 125.6
                } 125.6`}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#e74c3c" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white">360°</span>
            </div>
          </div>
        </div>

        {/* Instructions overlay */}
        {!isDragging && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-lg border border-gray-700 bg-gray-900/90 px-6 py-3 text-sm font-semibold text-white opacity-90 backdrop-blur-sm transition-all duration-300 hover:opacity-100">
            <span className="hidden text-orange-400 sm:inline">
              DRAG TO ROTATE •
            </span>
            <span className="text-orange-400 sm:hidden">
              SWIPE TO ROTATE •{" "}
            </span>
            <span className="text-white">360° INDUSTRIAL VIEW</span>
          </div>
        )}
      </div>

      {/* Thumbnail navigation */}
      <div className="mt-6 flex justify-center">
        <div className="flex max-w-full space-x-3 overflow-x-auto rounded-xl bg-gray-800 p-2">
          {images.slice(0, Math.min(12, images.length)).map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`group h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                currentImageIndex === index
                  ? "scale-110 border-orange-500 shadow-lg ring-2 ring-orange-400/50"
                  : "border-gray-600 hover:scale-105 hover:border-orange-400"
              }`}
            >
              <Image
                src={image}
                alt={`View ${index + 1}`}
                className="h-full w-full object-cover transition-all group-hover:brightness-110"
                draggable={false}
                width={56}
                height={56}
                unoptimized
              />
              {currentImageIndex === index && (
                <div className="absolute inset-0 rounded-lg bg-orange-500/20"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 w-full rounded-full bg-gray-700 shadow-inner">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transition-all duration-300"
          style={{
            width: `${((currentImageIndex + 1) / images.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
