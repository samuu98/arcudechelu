/**
 * Room data configuration
 * Contains all room information including features and calendar IDs
 */

export interface RoomFeature {
    iconName: string; // Icon component name from lucide-react
    labelKey: string; // Translation key for the feature label
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
];
