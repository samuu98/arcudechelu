"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/locales';

/**
 * Header component with logo, navigation, and language switcher
 */
export function Header() {
    const { t } = useLanguage();

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
            {/* Livello Principale (Logo e Desktop Menu) */}
            <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4">
                <div className="text-2xl font-semibold text-bnb-700">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-10 w-10 mr-2">
                            <Image
                                src="/images/B2_reduction_optimized_.png"
                                alt="Arcu de Chelu Logo"
                                fill
                                sizes="40px"
                                style={{ objectFit: 'contain' }}
                                priority
                                quality={90}
                            />
                        </div>
                        <span className="font-serif italic">Arcu de Chelu</span>
                        <span className="text-sm ml-2 text-natural-600 font-normal hidden sm:inline-block">
                            <i>Guest House</i>
                        </span>
                    </Link>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center space-x-8 text-natural-700">
                    <Link
                        href="#about"
                        className="hover:text-bnb-600 transition-colors"
                    >
                        {t('nav.about', 'Chi Siamo')}
                    </Link>
                    <Link
                        href="#rooms"
                        className="hover:text-bnb-600 transition-colors"
                    >
                        {t('nav.rooms', 'Camere')}
                    </Link>
                    <Link
                        href="#services"
                        className="hover:text-bnb-600 transition-colors"
                    >
                        {t('nav.services', 'Servizi')}
                    </Link>
                    <Link
                        href="#gallery"
                        className="hover:text-bnb-600 transition-colors"
                    >
                        {t('nav.gallery', 'Galleria')}
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-bnb-600 transition-colors"
                    >
                        {t('nav.contact', 'Contatti')}
                    </Link>
                    <LanguageSwitcher />
                </nav>

                {/* Pulsanti Mobile/Desktop */}
                <div className="flex items-center space-x-3">
                    <div className="md:hidden">
                        <LanguageSwitcher />
                    </div>
                    <a
                        href="https://bookonline.pro/it/properties/101334?unidades=1&filter_zone=1&referencia_propietario=Prenotazione%2520da%2520sito"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="bnb" className="flex">
                            {t('nav.bookNow', 'Prenota Ora')}
                        </Button>
                    </a>
                </div>
            </div>

            {/* Header Secondo Livello (SOLO MOBILE) */}
            <div className="md:hidden w-full border-t border-natural-100 bg-white/95 backdrop-blur-sm overflow-x-auto scrollbar-hide">
                <nav className="flex items-center px-4 py-3 gap-6 min-w-max mx-auto">
                    <Link
                        href="#about"
                        className="text-sm font-medium text-natural-600 whitespace-nowrap active:text-bnb-600"
                    >
                        {t('nav.about', 'Chi Siamo')}
                    </Link>
                    <Link
                        href="#rooms"
                        className="text-sm font-medium text-natural-600 whitespace-nowrap active:text-bnb-600"
                    >
                        {t('nav.rooms', 'Camere')}
                    </Link>
                    <Link
                        href="#services"
                        className="text-sm font-medium text-natural-600 whitespace-nowrap active:text-bnb-600"
                    >
                        {t('nav.services', 'Servizi')}
                    </Link>
                    <Link
                        href="#gallery"
                        className="text-sm font-medium text-natural-600 whitespace-nowrap active:text-bnb-600"
                    >
                        {t('nav.gallery', 'Galleria')}
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-natural-600 whitespace-nowrap active:text-bnb-600"
                    >
                        {t('nav.contact', 'Contatti')}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
