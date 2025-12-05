import { SiteConfig } from './types';

export const sito3: SiteConfig = {
    name: "Casa Sisina",
    domain: "casasisina.com",
    description: "Casa vacanze a Flussio, Sardegna. A 10 minuti dal mare.",
    // TODO: Aggiungere logo quando disponibile
    // logo: "/images/sito3/logo.png",

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
        address: "Flussio (OR), Sardegna",
        email: "info@casasisina.com",
        phone: "+39 000 000 0000",
        phoneDisplay: "+39 000 000 0000",
        whatsapp: "+39000000000",
        mapUrl: "https://maps.google.com/?q=Flussio+Sardegna",
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
        { iconName: 'MapPin', textKey: 'about.features.location', defaultText: 'Paesino con tutti i servizi' },
        { iconName: 'Waves', textKey: 'about.features.beach', defaultText: 'A 10 minuti dal mare' },
        { iconName: 'Home', textKey: 'about.features.authentic', defaultText: 'Autentica Sardegna' },
        { iconName: 'Building2', textKey: 'about.features.terrace', defaultText: 'Terrazza panoramica' },
        { iconName: 'ChefHat', textKey: 'about.features.kitchen', defaultText: 'Cucina attrezzata' },
        { iconName: 'Wifi', textKey: 'about.features.wifi', defaultText: 'Wi-Fi gratuito' },
        { iconName: 'Mountain', textKey: 'about.features.nature', defaultText: 'Immerso nella natura' },
        { iconName: 'Coffee', textKey: 'about.features.quiet', defaultText: 'Tranquillità assoluta' },
    ],

    rooms: [
        {
            id: 'appartamento-flussio',
            titleKey: 'rooms.appartamento.title',
            descriptionKey: 'rooms.appartamento.description',
            imageKey: 'appartamento',
            calendarId: '', // TODO: Inserire calendar ID se disponibile
            available: true,
            features: [
                { iconName: 'Users', labelKey: 'roomFeatures.capacity4' },
                { iconName: 'Bed', labelKey: 'roomFeatures.twoRooms' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBeds' },
                { iconName: 'Bath', labelKey: 'roomFeatures.privateBathroom' },
                { iconName: 'ChefHat', labelKey: 'roomFeatures.fullKitchen' },
                { iconName: 'Building2', labelKey: 'roomFeatures.terrace' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Tv', labelKey: 'roomFeatures.tv' },
            ],
        },
        {
            id: 'camera-angolo-cottura',
            titleKey: 'rooms.camera.title',
            descriptionKey: 'rooms.camera.description',
            imageKey: 'camera',
            calendarId: '', // TODO: Inserire calendar ID se disponibile
            available: true,
            features: [
                { iconName: 'Users', labelKey: 'roomFeatures.capacity2' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBed' },
                { iconName: 'Bath', labelKey: 'roomFeatures.privateBathroom' },
                { iconName: 'ChefHat', labelKey: 'roomFeatures.kitchenette' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Tv', labelKey: 'roomFeatures.tv' },
            ],
        },
    ],

    images: {
        hero: [],
        modolo: [], // Immagini di Flussio (usate in AboutSection)
        gallery: [
            // TODO: Aggiungere immagini reali
            "/images/sito3/gallery/placeholder1.jpg",
        ],
        rooms: {
            appartamento: [
                // TODO: Aggiungere immagini reali
                "/images/sito3/rooms/appartamento/placeholder1.jpg",
            ],
            camera: [
                // TODO: Aggiungere immagini reali
                "/images/sito3/rooms/camera/placeholder1.jpg",
            ],
        }
    },

    // TODO: Inserire path all'immagine hero reale
    heroImage: "/images/sito3/hero.jpg",

    reviews: [
        {
            name: "Laura M.",
            rating: 5,
            comment: "Posizione perfetta per scoprire la Sardegna autentica! Flussio è un paesino tranquillo con tutti i servizi, e il mare è vicinissimo. Casa accogliente e ben attrezzata.",
            date: "Settembre 2024"
        },
        {
            name: "Giovanni e famiglia",
            rating: 5,
            comment: "Ottima esperienza! L'appartamento è spazioso, la cucina ha tutto il necessario. La terrazza è perfetta per rilassarsi. Paesino molto caratteristico!",
            date: "Agosto 2024"
        },
        {
            name: "Thomas K.",
            rating: 5,
            comment: "Perfect place to experience authentic Sardinia. Quiet village, close to beautiful beaches. Very comfortable apartment with everything you need.",
            date: "Luglio 2024"
        },
    ],

    metadata: {
        title: "Casa Sisina - Casa Vacanze a Flussio, Sardegna",
        keywords: ["casa vacanze", "flussio", "sardegna", "mare", "autenticità", "tranquillità", "casa sisina"]
    }
};

export default sito3;
