"use client"

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/locales';

interface Review {
    rating: string;
    text: string;
    author: string;
    roomType: string;
    date: string;
    guestType: string;
}

const reviews: Review[] = [
    {
        rating: '10/10',
        text: 'Ordine e pulizia della stanza impeccabili, ha tutto quello che serve, hosts molto gentili, posizione molto carina e tra i letti più comodi che io abbia mai provato.',
        author: 'Enrico',
        roomType: 'Appartamento Deluxe',
        date: 'Luglio 2023',
        guestType: 'Gruppo'
    },
    {
        rating: '10/10',
        text: 'Pulizia, ampiezza della stanza, che in realtà è un monolocale con terrazza. Attrezzatura, c\'è tutto quello che devi trovare in un B&B e anche di più; comodità del letto matrimoniale. Infine, una mega colazione dal salato al dolce con ampia scelta per entrambi.',
        author: 'Pablez',
        roomType: 'Camera Matrimoniale',
        date: 'Agosto 2024',
        guestType: 'Coppia'
    },
    {
        rating: '10/10',
        text: 'Absolutely amazing stay, the place was lovely and with a lot of Sardinian products and pictures, it felt like staying at home away from home. Breakfast was tasty and full B&B healthy options, and you get to consume it in your room privately.',
        author: 'Desiree',
        roomType: 'Appartamento Deluxe',
        date: 'Luglio 2024',
        guestType: 'Famiglia'
    }
];

/**
 * Reviews section with carousel and Booking.com rating
 */
export function ReviewsSection() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    };

    return (
        <section id="reviews" className="py-16 md:py-24 bg-natural-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-3 text-center">
                    Cosa Dicono di Noi
                </h2>
                <p className="text-center text-natural-600 mb-6">
                    Le opinioni dei nostri ospiti sono la nostra migliore pubblicità.
                </p>

                {/* Rating Badge */}
                <div className="flex justify-center items-center gap-3 mb-12">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
                        <Star className="h-5 w-5 fill-white" />
                        <span className="font-bold text-lg">9.5 / 10</span>
                    </div>
                    <span className="text-natural-600">• Oltre 80 recensioni verificate</span>
                </div>

                {/* Reviews Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {getVisibleReviews().map((review, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                                {/* Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                                    ))}
                                </div>

                                {/* Rating */}
                                <div className="text-2xl font-bold text-natural-800 mb-3">
                                    {review.rating}
                                </div>

                                {/* Review Text */}
                                <p className="text-natural-600 italic mb-6 text-sm leading-relaxed">
                                    "{review.text}"
                                </p>

                                {/* Author Info */}
                                <div className="border-t pt-4">
                                    <div className="font-semibold text-natural-800">{review.author}</div>
                                    <div className="text-sm text-natural-500">
                                        {review.roomType} • {review.date}
                                    </div>
                                    <div className="text-sm text-natural-400 mt-1">{review.guestType}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Navigation - Hidden on mobile, visible on desktop */}
                    <button
                        onClick={prevReview}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-natural-50 transition-colors"
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="h-6 w-6 text-natural-600" />
                    </button>
                    <button
                        onClick={nextReview}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-natural-50 transition-colors"
                        aria-label="Next review"
                    >
                        <ChevronRight className="h-6 w-6 text-natural-600" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mb-8">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-8' : 'bg-natural-300'
                                    }`}
                                aria-label={`Go to review ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Booking.com Button */}
                    <div className="flex justify-center">
                        <a
                            href="https://www.booking.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors"
                        >
                            Leggi tutte le recensioni su Booking.com
                            <ChevronRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
