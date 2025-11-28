"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/locales';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageCarousel } from '@/components/shared/ImageCarousel';
import { FeatureList } from '@/components/shared/FeatureList';
import { modoloImages } from '@/lib/data/images';
import { aboutFeatures } from '@/lib/data/features';
import * as Icons from 'lucide-react';

/**
 * About section with Modolo carousel and description
 */
export function AboutSection() {
    const { t } = useLanguage();
    const [currentModoloImageIndex, setCurrentModoloImageIndex] = useState(0);

    // Convert features with translation
    const features = aboutFeatures.map(f => ({
        iconName: f.iconName,
        text: t(f.textKey, f.defaultText)
    }));

    return (
        <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader
                    pretitle={t('about.pretitle', 'Benvenuti a')}
                    title={t('about.title', 'Modolo')}
                    subtitle={t('about.shortIntro', "Un'oasi di tranquillità nel cuore della costa occidentale sarda")}
                />

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Carousel and Thumbnails */}
                    <div className="order-2 md:order-1 relative">
                        <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-3">
                            <div className="h-[500px] relative rounded overflow-hidden">
                                <ImageCarousel
                                    images={modoloImages}
                                    altText={t('about.imageAlt', 'Immagini di Modolo')}
                                    autoSlideInterval={6000}
                                    priority
                                    onIndexChange={setCurrentModoloImageIndex}
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-bnb-500/20 rounded-full blur-xl"></div>
                            <div className="absolute -top-5 -left-5 w-20 h-20 bg-bnb-600/10 rounded-full blur-xl"></div>
                        </div>

                        {/* Mini-gallery thumbnails */}
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            {Array.from({ length: 3 }).map((_, i) => {
                                const totalImages = modoloImages.length;
                                let idx;
                                if (i === 0) {
                                    idx = (currentModoloImageIndex - 1 + totalImages) % totalImages;
                                } else if (i === 1) {
                                    idx = currentModoloImageIndex;
                                } else {
                                    idx = (currentModoloImageIndex + 1) % totalImages;
                                }

                                return (
                                    <div
                                        key={i}
                                        className={`relative rounded overflow-hidden shadow-md h-28 transition-all duration-300 cursor-pointer ${idx === currentModoloImageIndex
                                                ? 'ring-2 ring-bnb-500 ring-offset-2 transform scale-105'
                                                : 'hover:opacity-90 hover:shadow-lg hover:transform hover:scale-105'
                                            }`}
                                        onClick={() => setCurrentModoloImageIndex(idx)}
                                    >
                                        <Image
                                            src={modoloImages[idx]}
                                            alt={t('about.thumbAlt', 'Miniatura di Modolo')}
                                            fill
                                            className="object-cover"
                                            quality={70}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Description and Features */}
                    <div className="order-1 md:order-2 space-y-6 pt-0">
                        <div className="prose prose-lg max-w-none text-natural-700">
                            <p className="text-xl leading-relaxed font-light">
                                {t(
                                    'about.description1',
                                    "Arcu de Chelu sorge nel cuore di Modolo, un borgo autentico della Sardegna occidentale. La nostra struttura, recentemente ristrutturata, fonde l'antico fascino sardo con moderni comfort per un soggiorno indimenticabile."
                                )}
                            </p>
                            <p className="text-xl leading-relaxed font-light">
                                {t(
                                    'about.description2',
                                    "A soli 5 minuti dalle spettacolari spiagge di Bosa e da tutti i servizi essenziali, il nostro B&B è il punto di partenza privilegiato per esplorare le meraviglie della costa. A un'ora dall'aeroporto di Alghero, siamo facilmente raggiungibili per chi arriva dall'esterno dell'isola."
                                )}
                            </p>
                        </div>

                        {/* Emphasis box */}
                        <div className="bg-natural-50/70 p-5 border-l-4 border-bnb-500/50 rounded-r-lg italic text-natural-600 my-6">
                            <p>
                                {t(
                                    'about.emphasis',
                                    'Scopri il fascino autentico della Sardegna in un ambiente accogliente e raffinato, dove la tradizione incontra il comfort moderno in perfetta armonia con il paesaggio circostante.'
                                )}
                            </p>
                        </div>

                        {/* Features */}
                        <FeatureList features={features} columns={2} className="mt-8" />
                    </div>
                </div>
            </div>
        </section>
    );
}
