"use client"

import React from 'react';
import { useLanguage } from '@/locales';
import { ImageCarousel } from '@/components/shared/ImageCarousel';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { galleryCarouselImages } from '@/lib/data/images';

/**
 * Gallery section with image carousel
 */
export function GallerySection() {
    const { t } = useLanguage();

    return (
        <section id="gallery" className="py-16 md:py-24 bg-natural-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={t('gallery.title', 'Galleria')}
                    subtitle={t('gallery.subtitle', 'Scopri la bellezza del nostro B&B')}
                />

                <div className="max-w-4xl mx-auto">
                    <div className="h-[500px] relative rounded-lg overflow-hidden shadow-xl">
                        <ImageCarousel
                            images={galleryCarouselImages}
                            altText={t('gallery.imageAlt', 'Galleria')}
                            autoSlideInterval={7000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
