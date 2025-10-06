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
                    (currentImageIndex + direction + images.length) %
                    images.length;
                setCurrentImageIndex(newIndex);
                setStartX(e.clientX);
            }
        },
        [isDragging, images, startX, sensitivity, currentImageIndex]
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
                className="bg-slate-200 rounded-lg flex items-center justify-center"
                style={{ width, height }}
            >
                <div className="text-center text-slate-500">
                    <div className="text-4xl mb-2">📷</div>
                    <p>No images available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className={`relative bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200 ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{ width, height }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10 rounded-xl">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-orange-500 mx-auto mb-6"></div>
                            <p className="text-white font-bold text-lg mb-2">
                                LOADING 360° VIEW
                            </p>
                            <div className="w-48 bg-gray-700 rounded-full h-2 mb-2">
                                <div
                                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${
                                            (loadedImages / images.length) * 100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-400 font-semibold">
                                {loadedImages} / {images.length} IMAGES LOADED
                            </p>
                        </div>
                    </div>
                )}

                <Image
                    src={images[currentImageIndex]}
                    alt={"place holder"}
                    className="w-full h-full object-cover"
                    draggable={false}
                    style={{ userSelect: "none" }}
                    width={width}
                    height={height}
                    priority
                    unoptimized
                />

                {/* Rotation indicator */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    {currentImageIndex + 1} / {images.length}
                </div>

                {/* Progress arc indicator */}
                <div className="absolute top-4 right-4">
                    <div className="relative w-12 h-12">
                        <svg
                            className="w-12 h-12 transform -rotate-90"
                            viewBox="0 0 48 48"
                        >
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
                                    (currentImageIndex / (images.length - 1)) *
                                    125.6
                                } 125.6`}
                            />
                            <defs>
                                <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#ff6b35" />
                                    <stop offset="100%" stopColor="#e74c3c" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                                360°
                            </span>
                        </div>
                    </div>
                </div>

                {/* Instructions overlay */}
                {!isDragging && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 border border-gray-700 text-white px-6 py-3 rounded-lg text-sm font-semibold opacity-90 hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <span className="hidden sm:inline text-orange-400">
                            DRAG TO ROTATE •
                        </span>
                        <span className="sm:hidden text-orange-400">
                            SWIPE TO ROTATE •{" "}
                        </span>
                        <span className="text-white">360° INDUSTRIAL VIEW</span>
                    </div>
                )}
            </div>

            {/* Thumbnail navigation */}
            <div className="mt-6 flex justify-center">
                <div className="flex space-x-3 overflow-x-auto max-w-full p-2 bg-gray-800 rounded-xl">
                    {images
                        .slice(0, Math.min(12, images.length))
                        .map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`group flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                    currentImageIndex === index
                                        ? "border-orange-500 ring-2 ring-orange-400/50 shadow-lg scale-110"
                                        : "border-gray-600 hover:border-orange-400 hover:scale-105"
                                }`}
                            >
                                <Image
                                    src={image}
                                    alt={`View ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                                    draggable={false}
                                    width={56}
                                    height={56}
                                    unoptimized
                                />
                                {currentImageIndex === index && (
                                    <div className="absolute inset-0 bg-orange-500/20 rounded-lg"></div>
                                )}
                            </button>
                        ))}
                </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2 shadow-inner">
                <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300 shadow-lg"
                    style={{
                        width: `${
                            ((currentImageIndex + 1) / images.length) * 100
                        }%`,
                    }}
                ></div>
            </div>
        </div>
    );
}
