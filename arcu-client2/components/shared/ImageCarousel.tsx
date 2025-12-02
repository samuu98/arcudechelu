"use client"

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageCarousel } from '@/lib/hooks/useImageCarousel';
import { useAutoSlide } from '@/lib/hooks/useAutoSlide';

interface ImageCarouselProps {
    images: string[];
    altText: string;
    autoSlideInterval?: number;
    showThumbnails?: boolean;
    className?: string;
    priority?: boolean;
    onIndexChange?: (index: number) => void;
}

/**
 * Reusable image carousel component with navigation and auto-slide
 */
export function ImageCarousel({
    images,
    altText,
    autoSlideInterval,
    showThumbnails = false,
    className = '',
    priority = false,
    onIndexChange,
}: ImageCarouselProps) {
    const { currentIndex, next, prev, goTo } = useImageCarousel(images.length);

    // Auto-slide if interval is provided
    useAutoSlide(next, autoSlideInterval || 5000, !!autoSlideInterval);

    // Notify parent of index changes
    React.useEffect(() => {
        if (onIndexChange) {
            onIndexChange(currentIndex);
        }
    }, [currentIndex, onIndexChange]);

    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Main carousel */}
            <div className="relative w-full h-full overflow-hidden">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 transform ${index === currentIndex
                            ? 'opacity-100 z-10 scale-100'
                            : 'opacity-0 z-0 scale-105'
                            } optimize-gpu`}
                    >
                        <Image
                            src={img}
                            alt={`${altText} ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={priority && index === 0}
                            loading={priority && index === 0 ? undefined : 'lazy'}
                            quality={index === currentIndex ? 90 : 80}
                        />
                    </div>
                ))}

                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-2 z-20">
                    <button
                        onClick={prev}
                        className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors shadow-lg transform -translate-x-2 hover:scale-105"
                        aria-label="Immagine precedente"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={next}
                        className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors shadow-lg transform translate-x-2 hover:scale-105"
                        aria-label="Immagine successiva"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`h-1.5 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60'
                                }`}
                            aria-label={`Vai all'immagine ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnails (optional) */}
            {showThumbnails && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {images.slice(0, 3).map((img, i) => {
                        const totalImages = images.length;
                        let idx;
                        if (i === 0) {
                            idx = (currentIndex - 1 + totalImages) % totalImages;
                        } else if (i === 1) {
                            idx = currentIndex;
                        } else {
                            idx = (currentIndex + 1) % totalImages;
                        }

                        return (
                            <div
                                key={i}
                                className={`relative rounded overflow-hidden shadow-md h-28 transition-all duration-300 cursor-pointer ${idx === currentIndex
                                    ? 'ring-2 ring-bnb-500 ring-offset-2 transform scale-105'
                                    : 'hover:opacity-90 hover:shadow-lg hover:transform hover:scale-105'
                                    }`}
                                onClick={() => goTo(idx)}
                            >
                                <Image
                                    src={images[idx]}
                                    alt={`${altText} miniatura ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    quality={70}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
