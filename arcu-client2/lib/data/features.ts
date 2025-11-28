/**
 * Feature lists for various sections
 */

export interface Feature {
    iconName: string; // Icon component name from lucide-react
    textKey: string; // Translation key
    defaultText: string; // Fallback text
}

export const aboutFeatures: Feature[] = [
    { iconName: 'Map', textKey: 'about.features.location', defaultText: 'Posizione strategica' },
    { iconName: 'Coffee', textKey: 'about.features.breakfast', defaultText: 'Colazione di qualità' },
    { iconName: 'Wifi', textKey: 'about.features.wifi', defaultText: 'Wi-Fi gratuito' },
    { iconName: 'Umbrella', textKey: 'about.features.beaches', defaultText: 'Vicino alle spiagge' },
    { iconName: 'PlaneTakeoff', textKey: 'about.features.plane', defaultText: '100 km da aeroporto AHO' },
    { iconName: 'Bike', textKey: 'about.features.motorcyclists', defaultText: 'Ideale per motociclisti e ciclisti' },
    { iconName: 'AirVent', textKey: 'about.features.airConditioning', defaultText: 'Ambiente climatizzato' },
    { iconName: 'Leaf', textKey: 'about.features.nature', defaultText: 'Immerso nella natura' },
];
