import React from 'react';

interface SectionHeaderProps {
    pretitle?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

/**
 * Reusable section header component with consistent styling
 */
export function SectionHeader({
    pretitle,
    title,
    subtitle,
    centered = true,
    className = '',
}: SectionHeaderProps) {
    return (
        <div
            className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'
                } mb-12 md:mb-16 relative ${className}`}
        >
            {pretitle && (
                <span className="relative bg-natural-50 px-4 text-bnb-600 text-sm uppercase tracking-widest font-medium">
                    {pretitle}
                </span>
            )}
            <h2 className="text-4xl md:text-6xl font-serif text-natural-800 mt-4 mb-3 font-light tracking-wide">
                {title}
            </h2>
            <div className="w-20 h-0.5 bg-bnb-500/70 mb-6"></div>
            {subtitle && (
                <p className="text-natural-600 max-w-2xl text-lg md:text-xl font-light italic">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
