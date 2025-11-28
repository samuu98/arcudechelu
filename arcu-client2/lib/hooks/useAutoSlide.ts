import { useEffect, useRef } from 'react';

/**
 * Custom hook for auto-advancing carousel with visibility handling
 * Pauses when page is hidden (tab switching) and resumes when visible
 * @param callback - Function to call on each interval (e.g., next slide)
 * @param interval - Interval duration in milliseconds
 * @param enabled - Whether auto-slide is enabled
 */
export function useAutoSlide(
    callback: () => void,
    interval: number,
    enabled: boolean = true
) {
    const callbackRef = useRef(callback);
    const intervalIdRef = useRef<NodeJS.Timeout>();
    const animationFrameIdRef = useRef<number>();

    // Update callback ref when it changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        // Function to start the interval
        const startInterval = () => {
            intervalIdRef.current = setInterval(() => {
                animationFrameIdRef.current = requestAnimationFrame(() => {
                    callbackRef.current();
                });
            }, interval);
        };

        // Handle visibility change
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Page is hidden, clear intervals
                if (intervalIdRef.current) {
                    clearInterval(intervalIdRef.current);
                }
                if (animationFrameIdRef.current) {
                    cancelAnimationFrame(animationFrameIdRef.current);
                }
            } else {
                // Page is visible, restart interval
                startInterval();
            }
        };

        // Start interval initially
        startInterval();

        // Add visibility change listener
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [interval, enabled]);
}
