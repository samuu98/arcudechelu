"use client"

import React from 'react';
import { useLanguage } from '@/locales';

/**
 * Services section - placeholder for now
 * TODO: Extract full content from original page.tsx
 */
export function ServicesSection() {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-8 text-center">
                    {t('services.title', 'Servizi')}
                </h2>
                <p className="text-center text-natural-600">
                    Sezione servizi - Da implementare con contenuto completo
                </p>
            </div>
        </section>
    );
}
