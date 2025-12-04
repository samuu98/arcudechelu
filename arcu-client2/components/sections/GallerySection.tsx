"use client"

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/locales';
import { ImageCarousel } from '@/components/shared/ImageCarousel';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { siteConfig } from '@/config';

/**
 * Gallery section with image carousel
 */
export function GallerySection() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    // Get gallery images from siteConfig
    const galleryImages = siteConfig.images.gallery;

    return (
        <section id="gallery" className="py-16 md:py-24 bg-natural-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={t('gallery.title', 'Galleria')}
                    subtitle={t('gallery.subtitle', 'Scopri la bellezza del nostro B&B')}
                />

                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-2">
                        <div className="h-[500px] relative rounded overflow-hidden">
                            <ImageCarousel
                                images={galleryImages}
                                altText={t('gallery.imageAlt', 'Galleria')}
                                autoSlideInterval={7000}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-6 gap-2 mt-2">
                            {galleryImages.map((img, i) => (
                                <div
                                    key={i}
                                    className={`relative rounded overflow-hidden shadow-sm h-16 transition-all duration-300 cursor-pointer ${i === currentIndex
                                        ? 'ring-2 ring-bnb-500 ring-offset-1 opacity-100'
                                        : 'opacity-70 hover:opacity-100 hover:shadow-md'
                                        }`}
                                    onClick={() => setCurrentIndex(i)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${t('gallery.imageAlt', 'Galleria')} ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        quality={60}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
