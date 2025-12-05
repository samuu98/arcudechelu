import { SiteConfig } from './types';

export const sito2: SiteConfig = {
    name: "Casa Menica",
    domain: "casamenica.com",
    description: "Appartamento vacanze a Lido di Savio, Ravenna. Vicino a Mirabilandia.",

    theme: {
        colors: {
            bnb: {
                100: "#e6f7ff",
                200: "#bae7ff",
                300: "#91d5ff",
                400: "#69c0ff",
                500: "#40a9ff",
                600: "#1890ff",
                700: "#096dd9",
                800: "#0050b3",
                900: "#003a8c",
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
                100: "#fff1e6",
                200: "#ffe0c2",
                300: "#ffca94",
                400: "#ffb366",
                500: "#ff9933",
                600: "#ff8000",
                700: "#cc6600",
                800: "#994d00",
                900: "#663300",
            },
        },
    },

    contact: {
        address: "Lido di Savio, Ravenna (RA), Emilia-Romagna",
        email: "info@casamenica.com",
        phone: "+39 000 000 0000",
        phoneDisplay: "+39 000 000 0000",
        whatsapp: "+39000000000",
        mapUrl: "https://maps.google.com/?q=Lido+di+Savio+Ravenna",
    },

    booking: {
        // TODO: Inserire il link di prenotazione fornito dall'utente
        urlPattern: "https://INSERIRE_LINK_PRENOTAZIONE/{language}",
    },

    languages: {
        it: 'Italiano',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        fr: 'Français',
    },

    features: [
        { iconName: 'MapPin', textKey: 'about.features.location', defaultText: 'Vicino a Mirabilandia' },
        { iconName: 'Waves', textKey: 'about.features.beach', defaultText: 'Vicino al mare' },
        { iconName: 'Car', textKey: 'about.features.parking', defaultText: 'Parcheggio auto riservato' },
        { iconName: 'AirVent', textKey: 'about.features.airConditioning', defaultText: '2 Condizionatori' },
        { iconName: 'Building2', textKey: 'about.features.balconies', defaultText: '2 Balconi' },
        { iconName: 'Users', textKey: 'about.features.capacity', defaultText: 'Fino a 5 persone' },
        { iconName: 'ChefHat', textKey: 'about.features.kitchen', defaultText: 'Cucina completa' },
        { iconName: 'Bath', textKey: 'about.features.bathrooms', defaultText: '2 Bagni' },
    ],

    rooms: [
        {
            id: 'appartamento-casa-menica',
            titleKey: 'rooms.appartamento.title',
            descriptionKey: 'rooms.appartamento.description',
            imageKey: 'appartamento',
            calendarId: '', // TODO: Inserire calendar ID se disponibile
            available: true,
            features: [
                { iconName: 'Users', labelKey: 'roomFeatures.capacity5' },
                { iconName: 'Bed', labelKey: 'roomFeatures.twoRooms' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBed' },
                { iconName: 'Bed', labelKey: 'roomFeatures.singleBeds' },
                { iconName: 'Bath', labelKey: 'roomFeatures.twoBathrooms' },
                { iconName: 'ChefHat', labelKey: 'roomFeatures.fullKitchen' },
                { iconName: 'Building2', labelKey: 'roomFeatures.twoBalconies' },
                { iconName: 'AirVent', labelKey: 'roomFeatures.twoAirConditioners' },
                { iconName: 'Car', labelKey: 'roomFeatures.reservedParking' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Tv', labelKey: 'roomFeatures.tv' },
            ],
        },
    ],

    images: {
        hero: [],
        modolo: [], // Immagini di Lido di Savio (usate in AboutSection)
        gallery: [
            // TODO: Aggiungere immagini reali
            "/images/sito2/gallery/placeholder1.jpg",
        ],
        rooms: {
            appartamento: [
                // TODO: Aggiungere immagini reali
                "/images/sito2/rooms/appartamento/placeholder1.jpg",
            ],
        }
    },

    // TODO: Inserire path all'immagine hero reale
    heroImage: "/images/sito2/hero.jpg",

    reviews: [
        {
            name: "Famiglia Rossi",
            rating: 5,
            comment: "Appartamento perfetto per le vacanze! Molto vicino a Mirabilandia e al mare. Pulito, spazioso e ben attrezzato.",
            date: "Agosto 2024"
        },
        {
            name: "Marco B.",
            rating: 5,
            comment: "Ottima posizione, appartamento confortevole con tutto il necessario. Parcheggio riservato molto comodo!",
            date: "Luglio 2024"
        },
        {
            name: "Anna e famiglia",
            rating: 5,
            comment: "Perfetto per famiglie! Due camere spaziose, cucina ben attrezzata. I bambini hanno adorato Mirabilandia!",
            date: "Giugno 2024"
        },
    ],

    metadata: {
        title: "Casa Menica - Appartamento Vacanze a Lido di Savio",
        keywords: ["casa vacanze", "lido di savio", "ravenna", "mirabilandia", "appartamento", "mare", "romagna"]
    }
};
