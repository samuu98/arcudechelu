"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/locales';

/**
 * Hero section component with logo, title, and call-to-action buttons
 */
export function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className="relative h-screen bg-natural-900 overflow-hidden">
            {/* Immagine di sfondo */}
            <div className="absolute inset-0">
                <Image
                    src="/images/copertina.jpg"
                    alt={t('hero.imageAlt', 'Arcu de Chelu B&B')}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="opacity-80"
                    quality={85}
                />
            </div>

            <div className="container mx-auto text-center px-4 flex flex-col h-full justify-center relative z-10">
                <div className="animate-fade-in flex flex-col items-center mb-auto mt-auto">
                    {/* BLOCCO LOGO */}
                    <div
                        className="relative h-96 w-96 mx-auto mb-0 flex items-center justify-center"
                        style={{ animation: 'scaleIn 1.5s ease forwards' }}
                    >
                        {/* EFFETTO VETRO / PUNTO LUCE */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-white/20 backdrop-blur-md rounded-full blur-2xl -z-10"></div>

                        {/* Immagine Logo */}
                        <Image
                            src="/images/B2_reduction_edited_optimized_.png"
                            alt="Arcu de Chelu Symbol"
                            fill
                            sizes="(max-width: 768px) 90vw, 384px"
                            style={{ objectFit: 'contain' }}
                            priority
                            className="relative z-10 drop-shadow-xl opacity-95"
                            quality={90}
                        />
                    </div>

                    {/* BLOCCO TESTO */}
                    <div className="space-y-2 mt-[-55px] relative z-20 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-serif font-extralight tracking-widest leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-center">
                            {t('hero.title', 'Arcu de Chelu')}
                        </h1>
                        <p className="text-lg md:text-xl font-light tracking-wider italic text-white/95 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] text-center">
                            {t('hero.subtitle', '— Guest House —')}
                        </p>
                    </div>
                </div>

                <div className="mt-auto mb-12 flex flex-col items-center gap-4 relative z-20">
                    <Link href="#rooms">
                        <Button
                            variant="bnb"
                            size="xl"
                            className="animate-slide-in backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 shadow-lg"
                        >
                            {t('hero.cta', 'Scopri le Nostre Camere')}
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>

                    <a
                        href={`https://bookonline.pro/${language}/properties/101334?unidades=1&filter_zone=1&referencia_propietario=Prenotazione%2520da%2520sito`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden animate-slide-in"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Button
                            variant="bnb"
                            size="xl"
                            className="backdrop-blur-sm bg-bnb-600/90 hover:bg-bnb-700/90 border border-bnb-500/30 transition-all duration-300 shadow-lg"
                        >
                            {t('nav.bookNow', 'Prenota Ora')}
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
