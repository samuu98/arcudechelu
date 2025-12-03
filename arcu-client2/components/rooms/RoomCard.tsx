"use client"

import React from 'react';
import * as Icons from 'lucide-react';
import { useLanguage } from '@/locales';
import { ImageCarousel } from '@/components/shared/ImageCarousel';
import { AvaiBookCalendar } from './AvaiBookCalendar';
import { RoomData } from '@/lib/data/rooms';
import { canneAlVentoImages, arcuDeChechuImages, viaRomaImages } from '@/lib/data/images';

interface RoomCardProps {
    room: RoomData;
}

/**
 * Individual room card component
 */
export function RoomCard({ room }: RoomCardProps) {
    const { t } = useLanguage();

    // Map image keys to actual image arrays
    const imageMap = {
        canneAlVento: canneAlVentoImages,
        arcuDeChelu: arcuDeChechuImages,
        viaRoma: viaRomaImages,
    };

    const images = imageMap[room.imageKey];

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
            {/* Image Carousel */}
            <div className="relative h-64 overflow-hidden">
                <ImageCarousel
                    images={images}
                    altText={t(room.titleKey, room.id)}
                    autoSlideInterval={room.id === 'canne-al-vento' ? 5000 : room.id === 'arcu-de-chelu' ? 5500 : undefined}
                    priority={room.id === 'canne-al-vento'}
                />
            </div>

            {/* Room Details */}
            <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">
                    {t(room.titleKey, room.id)}
                </h3>
                <p className="text-natural-600 mb-4">
                    {t(room.descriptionKey, '')}
                </p>

                {/* Features Grid */}
                <div className="flex flex-col items-center justify-end my-6 h-full">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-xs text-natural-700">
                        {room.features.map((feature, index) => {
                            const IconComponent = (Icons as any)[feature.iconName];
                            return (
                                <div key={index} className="flex items-center gap-1.5">
                                    {IconComponent && (
                                        <IconComponent className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                                    )}
                                    <span>{t(feature.labelKey)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Calendar Widget (if available) */}
                {room.calendarId && room.available && (
                    <AvaiBookCalendar calendarId={room.calendarId} roomName={room.id} />
                )}
            </div>
        </div>
    );
}
