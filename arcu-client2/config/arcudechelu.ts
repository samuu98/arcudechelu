import { SiteConfig } from './types';

export const arcudechelu: SiteConfig = {
    name: "Arcu de Chelu",
    domain: "arcudechelu.com",
    description: "B&B nel cuore della Sardegna, in un contesto tranquillo e ricco di tradizioni.",
    logo: "/images/B2_reduction_optimized_.png",
    tagline: "Guest House",

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
        address: "Via Roma 42, 09090 Modolo (OR)",
        email: "arcudechelubnb@gmail.com",
        phone: "+39 347 240 55 80",
        phoneDisplay: "+39 347 240 55 80 / +39 340 895 1010",
        whatsapp: "+393472405580",
        mapUrl: "https://maps.google.com/?q=Arcu+de+Chelu+Modolo",
    },

    booking: {
        urlPattern: "https://bookonline.pro/{language}/properties/101334?unidades=1&filter_zone=1&referencia_propietario=Prenotazione%2520da%2520sito",
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
        { iconName: 'PlaneTakeoff', textKey: 'about.features.plane', defaultText: '100 km da aeroporto AHO' },
        { iconName: 'Bike', textKey: 'about.features.motorcyclists', defaultText: 'Ideale per motociclisti e ciclisti' },
        { iconName: 'AirVent', textKey: 'about.features.airConditioning', defaultText: 'Ambiente climatizzato' },
        { iconName: 'Leaf', textKey: 'about.features.nature', defaultText: 'Immerso nella natura' },
    ],

    rooms: [
        {
            id: 'canne-al-vento',
            titleKey: 'rooms.canneAlVento.title',
            descriptionKey: 'rooms.canneAlVento.description',
            imageKey: 'canneAlVento',
            calendarId: '173836',
            available: true,
            features: [
                { iconName: 'Square', labelKey: 'roomFeatures.area27' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBed' },
                { iconName: 'Bed', labelKey: 'roomFeatures.singleBed' },
                { iconName: 'Sun', labelKey: 'roomFeatures.panoramicTerrace' },
                { iconName: 'Bath', labelKey: 'roomFeatures.privateBathroom' },
                { iconName: 'ChefHat', labelKey: 'roomFeatures.kitchenette' },
                { iconName: 'AirVent', labelKey: 'roomFeatures.airConditioning' },
                { iconName: 'Tv', labelKey: 'roomFeatures.smartTv' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Utensils', labelKey: 'roomFeatures.diningArea' },
                { iconName: 'Coffee', labelKey: 'roomFeatures.breakfastKit' },
            ],
        },
        {
            id: 'arcu-de-chelu',
            titleKey: 'rooms.arcuDeChelu.title',
            descriptionKey: 'rooms.arcuDeChelu.description',
            imageKey: 'arcuDeChelu',
            calendarId: '173838',
            available: true,
            features: [
                { iconName: 'Square', labelKey: 'roomFeatures.area50' },
                { iconName: 'Bed', labelKey: 'roomFeatures.twoRooms' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBeds' },
                { iconName: 'Bed', labelKey: 'roomFeatures.singleBeds' },
                { iconName: 'Building2', labelKey: 'roomFeatures.panoramicBalconies' },
                { iconName: 'Bath', labelKey: 'roomFeatures.exclusiveBathroom' },
                { iconName: 'ChefHat', labelKey: 'roomFeatures.kitchenArea' },
                { iconName: 'Utensils', labelKey: 'roomFeatures.diningArea' },
                { iconName: 'AirVent', labelKey: 'roomFeatures.airConditioning' },
                { iconName: 'Tv', labelKey: 'roomFeatures.smartTv' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Lock', labelKey: 'roomFeatures.totalPrivacy' },
                { iconName: 'Users', labelKey: 'roomFeatures.capacity' },
                { iconName: 'Coffee', labelKey: 'roomFeatures.breakfastKit' },
            ],
        },
        {
            id: 'via-roma',
            titleKey: 'rooms.viaRoma.title',
            descriptionKey: 'rooms.viaRoma.description',
            imageKey: 'viaRoma',
            calendarId: '173839',
            available: true,
            features: [
                { iconName: 'Square', labelKey: 'roomFeatures.area15' },
                { iconName: 'Bed', labelKey: 'roomFeatures.doubleBed' },
                { iconName: 'Bath', labelKey: 'roomFeatures.privateBathroom' },
                { iconName: 'AirVent', labelKey: 'roomFeatures.airConditioning' },
                { iconName: 'Tv', labelKey: 'roomFeatures.smartTv' },
                { iconName: 'Wifi', labelKey: 'roomFeatures.freeWifi' },
                { iconName: 'Coffee', labelKey: 'roomFeatures.breakfastKit' },
                { iconName: 'Lock', labelKey: 'roomFeatures.totalPrivacy' },
            ],
        },
    ],

    images: {
        hero: [], // Not strictly defined in data files but good to have
        modolo: [
            "/images/modolo/modolo1.jpg",
            "/images/modolo/modolo2.jpg",
            "/images/modolo/modolo3.jpg",
            "/images/modolo/modolo4.jpg",
        ],
        gallery: [
            "/images/gallery/gallery1.jpg",
            "/images/gallery/gallery2.jpg",
            "/images/gallery/gallery3.jpg",
            "/images/gallery/gallery4.jpg",
            "/images/gallery/gallery5.jpg",
            "/images/gallery/gallery6.jpg",
            "/images/gallery/gallery7.jpg",
        ],
        rooms: {
            canneAlVento: [
                "/images/canne_al_vento/DSC_1515_edited_optimized_.jpg",
                "/images/canne_al_vento/DSC_1495_optimized_.jpeg",
                "/images/canne_al_vento/DSC_1500_optimized_.jpeg",
                "/images/canne_al_vento/DSC_1505_optimized_.jpeg",
                "/images/canne_al_vento/DSC_1511_optimized_.jpeg",
            ],
            arcuDeChelu: [
                "/images/arcu_de_chelu/DSC_1469_optimized_.jpeg",
                "/images/arcu_de_chelu/DSC_1475_optimized_.jpeg",
                "/images/arcu_de_chelu/photo_5778594136029511850_w_1_optimized_.jpg",
                "/images/arcu_de_chelu/msg417320986-1047_optimized_.jpg",
                "/images/arcu_de_chelu/msg417320986-1054_optimized_.jpg",
            ],
            viaRoma: [
                "/images/via_roma/398828_6908b43f87fe7_1.jpg",
                "/images/via_roma/398828_6908b43f88fd0_2.jpg",
                "/images/via_roma/398828_6908b43f8a309_3.jpg",
                "/images/via_roma/398828_6908b43f8b248_4.jpg",
                "/images/via_roma/398828_6908b43f8bc0b_5.jpg",
                "/images/via_roma/398828_6908b43f8cb9c_7.jpg",
                "/images/via_roma/398828_6908b43f8d586_8.jpg",
                "/images/via_roma/398828_48aa19ba24_8.jpg",
                "/images/via_roma/398828_a77da6dc65_9.jpg"
            ]
        }
    },

    heroImage: "/images/IMG_20230511_224007.jpg",

    reviews: [
        {
            name: "Marco R.",
            rating: 5,
            comment: "Posto meraviglioso, camera pulitissima e proprietari molto accoglienti. La colazione è abbondante e con prodotti locali. Tornerò sicuramente!",
            date: "Ottobre 2024"
        },
        {
            name: "Sarah T.",
            rating: 5,
            comment: "Amazing experience! The rooms are beautifully decorated and the hosts are incredibly kind. The location is perfect for exploring Sardinia.",
            date: "Settembre 2024"
        },
        {
            name: "Giuseppe M.",
            rating: 5,
            comment: "Struttura curata nei minimi dettagli, posizione strategica per visitare la costa. I proprietari sono disponibili e gentili. Consigliatissimo!",
            date: "Agosto 2024"
        },
        {
            name: "Anna P.",
            rating: 5,
            comment: "Una vacanza fantastica! Il B&B è pulito, confortevole e in una posizione ideale. La colazione è ottima e i proprietari sono molto cordiali.",
            date: "Luglio 2024"
        },
        {
            name: "Thomas K.",
            rating: 5,
            comment: "Perfect stay in Sardinia. Clean rooms, great breakfast, and wonderful hosts. Highly recommended for anyone visiting the area!",
            date: "Giugno 2024"
        },
        {
            name: "Lucia F.",
            rating: 5,
            comment: "Accoglienza calorosa, ambiente familiare e stanze molto confortevoli. Ottima base per visitare le spiagge della zona. Esperienza da ripetere!",
            date: "Maggio 2024"
        }
    ],

    metadata: {
        title: "Arcu de Chelu - B&B nel cuore della Sardegna",
        keywords: ["b&b", "sardegna", "modolo", "bed and breakfast", "vacanze sardegna"]
    }
};
