"use client"

import React from 'react';
import { useLanguage } from '@/locales';

/**
 * Reviews section - placeholder for now
 * TODO: Extract full content from original page.tsx
 */
export function ReviewsSection() {
    const { t } = useLanguage();

    return (
        <section id="reviews" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-8 text-center">
                    {t('reviews.title', 'Recensioni')}
                </h2>
                <p className="text-center text-natural-600">
                    Sezione recensioni - Da implementare con contenuto completo
                </p>
            </div>
        </section>
    );
}
