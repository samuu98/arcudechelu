/**
 * Room data configuration
 * Contains all room information including features and calendar IDs
 */

export interface RoomFeature {
    iconName: string; // Icon component name from lucide-react
    label: string;
}

export interface RoomData {
    id: string;
    titleKey: string;
    descriptionKey: string;
    imageKey: 'canneAlVento' | 'arcuDeChelu' | 'viaRoma';
    features: RoomFeature[];
    calendarId?: string;
    available: boolean;
}

export const rooms: RoomData[] = [
    {
        id: 'canne-al-vento',
        titleKey: 'rooms.canneAlVento.title',
        descriptionKey: 'rooms.canneAlVento.description',
        imageKey: 'canneAlVento',
        calendarId: '173836',
        available: true,
        features: [
            { iconName: 'Square', label: 'Circa 27 mq' },
            { iconName: 'Bed', label: 'Letto matrimoniale' },
            { iconName: 'Bed', label: 'Letto singolo' },
            { iconName: 'Sun', label: 'Terrazzo panoramico' },
            { iconName: 'Bath', label: 'Bagno privato' },
            { iconName: 'ChefHat', label: 'Angolo cottura attrezzato' },
            { iconName: 'AirVent', label: 'Aria condizionata' },
            { iconName: 'Tv', label: 'Smart TV' },
            { iconName: 'Wifi', label: 'Wi-Fi gratuito' },
            { iconName: 'Utensils', label: 'Zona pranzo' },
            { iconName: 'Coffee', label: 'Kit colazione' },
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
            { iconName: 'Square', label: 'Circa 50 mq' },
            { iconName: 'Bed', label: '2 camere separate' },
            { iconName: 'Bed', label: 'Letti matrimoniali' },
            { iconName: 'Bed', label: 'Letti singoli' },
            { iconName: 'Building2', label: 'Balconi panoramici' },
            { iconName: 'Bath', label: 'Bagno ad uso esclusivo' },
            { iconName: 'ChefHat', label: 'Angolo cottura' },
            { iconName: 'Utensils', label: 'Zona pranzo' },
            { iconName: 'AirVent', label: 'Aria condizionata' },
            { iconName: 'Tv', label: 'Smart TV' },
            { iconName: 'Wifi', label: 'Wi-Fi gratuito' },
            { iconName: 'Lock', label: 'Privacy totale' },
            { iconName: 'Users', label: '1-4 persone' },
            { iconName: 'Coffee', label: 'Kit colazione' },
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
            { iconName: 'Square', label: 'Circa 15 mq' },
            { iconName: 'Bed', label: 'Letto matrimoniale' },
            { iconName: 'Bath', label: 'Bagno privato' },
            { iconName: 'AirVent', label: 'Aria condizionata' },
            { iconName: 'Tv', label: 'Smart TV' },
            { iconName: 'Wifi', label: 'Wi-Fi gratuito' },
            { iconName: 'Coffee', label: 'Kit colazione' },
            { iconName: 'Lock', label: 'Privacy totale' },
        ],
    },
];
