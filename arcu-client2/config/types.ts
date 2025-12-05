import { LucideIcon } from 'lucide-react';

export interface Review {
    name: string;
    rating: number; // 1-5
    comment: string;
    date?: string;
}

export interface Feature {
    iconName: string;
    textKey: string;
    defaultText: string;
}

export interface SiteConfig {
    name: string;
    domain: string;
    description: string;
    logo?: string;  // Path to logo image
    tagline?: string;  // Tagline/subtitle for header (e.g., "Guest House")

    theme: {
        colors: {
            bnb: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            natural: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            terracotta: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
        };
    };

    contact: {
        address: string;
        email: string;
        phone: string;
        phoneDisplay: string;
        whatsapp: string;
        mapUrl: string;
    };

    booking: {
        urlPattern: string;
    };

    languages: Record<string, string>;

    features: Feature[];

    rooms: {
        id: string;
        titleKey: string;
        descriptionKey: string;
        imageKey: string;
        calendarId: string;
        available: boolean;
        features: {
            iconName: string;
            labelKey: string;
        }[];
    }[];

    images: {
        hero: string[];
        modolo: string[];
        gallery: string[];
        rooms: Record<string, string[]>;
    };

    heroImage: string;

    reviews: Review[];

    metadata?: {
        title: string;
        ogImage?: string;
        keywords?: string[];
    };
}
