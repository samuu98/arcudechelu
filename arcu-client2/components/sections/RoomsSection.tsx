"use client"

import React from 'react';
import { useLanguage } from '@/locales';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { RoomCard } from '@/components/rooms/RoomCard';
import { siteConfig } from '@/config';

/**
 * Rooms section with room cards
 */
export function RoomsSection() {
    const { t } = useLanguage();

    return (
        <section id="rooms" className="py-16 md:py-24 bg-natural-50">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader
                    title={t('rooms.title', 'Le Nostre Camere')}
                    subtitle={t(
                        'rooms.subtitle',
                        'Le nostre camere sono pensate per offrire il massimo comfort durante il vostro soggiorno.'
                    )}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteConfig.rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </section>
    );
}
