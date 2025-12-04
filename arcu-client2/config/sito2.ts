import { SiteConfig } from './types';

export const sito2: SiteConfig = {
    name: "Sito 2",
    domain: "sito2.com",
    description: "Template per il secondo sito - da personalizzare",

    theme: {
        colors: {
            bnb: {
                100: "#f0f9ff",
                200: "#e6f7ff",
                300: "#bae6fd",
                400: "#7dd3fc",
                500: "#0ea5e9",
                600: "#0284c7",
                700: "#0369a1",
                800: "#075985",
                900: "#0c4a6e",
            },
            natural: {
                100: "#f8fafc",
                200: "#f1f5f9",
                300: "#e2e8f0",
                400: "#cbd5e1",
                500: "#94a3b8",
                600: "#64748b",
                700: "#475569",
                800: "#1e293b",
                900: "#0f172a",
            },
            terracotta: {
                100: "#fee2e2",
                200: "#fecaca",
                300: "#fca5a5",
                400: "#f87171",
                500: "#ef4444",
                600: "#dc2626",
                700: "#b91c1c",
                800: "#991b1b",
                900: "#7f1d1d",
            },
        },
    },

    contact: {
        address: "Via Esempio 123, 00000 Città (XX)",
        email: "info@sito2.com",
        phone: "+39 000 000 0000",
        phoneDisplay: "+39 000 000 0000",
        whatsapp: "+39000000000",
        mapUrl: "https://maps.google.com/?q=Sito2",
    },

    booking: {
        urlPattern: "https://bookonline.pro/{language}/properties/XXXXX?unidades=1&filter_zone=1&referencia_propietario=Prenotazione%2520da%2520sito",
    },

    languages: {
        it: 'Italiano',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        fr: 'Français',
    },

    features: [
        { iconName: 'Map', textKey: 'about.features.location', defaultText: 'Posizione strategica' },
        { iconName: 'Coffee', textKey: 'about.features.breakfast', defaultText: 'Colazione di qualità' },
        { iconName: 'Wifi', textKey: 'about.features.wifi', defaultText: 'Wi-Fi gratuito' },
        { iconName: 'Umbrella', textKey: 'about.features.beaches', defaultText: 'Vicino alle spiagge' },
        { iconName: 'AirVent', textKey: 'about.features.airConditioning', defaultText: 'Ambiente climatizzato' },
        { iconName: 'Leaf', textKey: 'about.features.nature', defaultText: 'Immerso nella natura' },
    ],

    rooms: [
        {
            id: 'room-1',
            titleKey: 'rooms.room1.title',
            descriptionKey: 'rooms.room1.description',
            imageKey: 'room1',
            calendarId: 'XXXXXX',
            available: true,
            features: [
                { iconName: 'Square', labelKey: 'roomFeatures.area25' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBed' },
                { iconName: 'Bath', labelKey: 'roomFeatures.privateBathroom' },
                { iconName: 'AirVent', labelKey: 'roomFeatures.airConditioning' },
                { iconName: 'Tv', labelKey: 'roomFeatures.smartTv' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Coffee', labelKey: 'roomFeatures.breakfastKit' },
            ],
        },
    ],

    images: {
        hero: [],
        modolo: [],
        gallery: [
            // Template - aggiungere immagini effettive
            "/images/sito2/gallery/placeholder1.jpg",
        ],
        rooms: {
            room1: [
                "/images/sito2/rooms/room1/placeholder1.jpg",
            ],
        }
    },

    heroImage: "/images/sito2/hero.jpg",

    reviews: [
        {
            name: "Cliente A.",
            rating: 5,
            comment: "Template recensione - da personalizzare",
            date: "Gennaio 2025"
        },
    ],

    metadata: {
        title: "Sito 2 - Template",
        keywords: ["template", "sito2"]
    }
};
