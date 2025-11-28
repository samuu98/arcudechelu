import React from 'react';
import * as Icons from 'lucide-react';

export interface Feature {
    iconName: string;
    text: string;
}

interface FeatureListProps {
    features: Feature[];
    columns?: number;
    className?: string;
}

/**
 * Reusable feature list component with icons
 */
export function FeatureList({
    features,
    columns = 2,
    className = '',
}: FeatureListProps) {
    return (
        <div
            className={`grid gap-y-4 gap-x-6 ${columns === 2 ? 'grid-cols-2' : `grid-cols-${columns}`
                } ${className}`}
        >
            {features.map((feature, index) => {
                // Dynamically get the icon component
                const IconComponent = (Icons as any)[feature.iconName];

                return (
                    <div key={index} className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 p-2 bg-bnb-50 rounded-full transform transition group-hover:scale-110 group-hover:bg-bnb-100">
                            {IconComponent && (
                                <IconComponent className="h-5 w-5 text-bnb-600" />
                            )}
                        </div>
                        <p className="text-natural-700 font-medium">{feature.text}</p>
                    </div>
                );
            })}
        </div>
    );
}
