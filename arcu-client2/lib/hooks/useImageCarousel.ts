import { useState } from 'react';

/**
 * Custom hook for managing image carousel state and navigation
 * @param totalImages - Total number of images in the carousel
 * @returns Current index, navigation functions
 */
export function useImageCarousel(totalImages: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const goTo = (index: number) => {
        if (index >= 0 && index < totalImages) {
            setCurrentIndex(index);
        }
    };

    return {
        currentIndex,
        next,
        prev,
        goTo,
        setCurrentIndex,
    };
}
