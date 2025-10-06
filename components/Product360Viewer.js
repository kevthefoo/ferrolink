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
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                            <p className="text-slate-600">
                                Loading 360° view...
                            </p>
                            <p className="text-sm text-slate-500">
                                {loadedImages} / {images.length} images loaded
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
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                </div>

                {/* Instructions overlay */}
                {!isDragging && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm opacity-75 hover:opacity-100 transition-opacity">
                        <span className="hidden sm:inline">
                            Drag to rotate •{" "}
                        </span>
                        <span className="sm:hidden">Swipe to rotate • </span>
                        360° View
                    </div>
                )}
            </div>

            {/* Thumbnail navigation */}
            <div className="mt-4 flex justify-center">
                <div className="flex space-x-2 overflow-x-auto max-w-full">
                    {images
                        .slice(0, Math.min(12, images.length))
                        .map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                                    currentImageIndex === index
                                        ? "border-orange-600 ring-2 ring-orange-200"
                                        : "border-slate-200 hover:border-slate-300"
                                }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                    width={48}
                                    height={48}
                                    unoptimized
                                />
                            </button>
                        ))}
                </div>
            </div>

            {/* Progress bar */}
            <div className="mt-2 w-full bg-slate-200 rounded-full h-1">
                <div
                    className="bg-orange-600 h-1 rounded-full transition-all duration-200"
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
