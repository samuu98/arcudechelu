/**
 * Service features data
 */

export interface ServiceFeature {
    iconName: string;
    titleKey: string;
    descriptionKey: string;
    defaultTitle: string;
    defaultDescription: string;
}

export const serviceFeatures: ServiceFeature[] = [
    {
        iconName: 'Wifi',
        titleKey: 'services.wifi.title',
        descriptionKey: 'services.wifi.description',
        defaultTitle: 'Wi-Fi Gratuito',
        defaultDescription: 'Connessione internet ad alta velocità in tutte le camere e aree comuni'
    },
    {
        iconName: 'Coffee',
        titleKey: 'services.breakfast.title',
        descriptionKey: 'services.breakfast.description',
        defaultTitle: 'Colazione',
        defaultDescription: 'Colazione continentale con prodotti freschi e locali ogni mattina'
    },
    {
        iconName: 'AirVent',
        titleKey: 'services.airConditioning.title',
        descriptionKey: 'services.airConditioning.description',
        defaultTitle: 'Aria Condizionata',
        defaultDescription: 'Climatizzazione in tutte le camere per il massimo comfort'
    },
    {
        iconName: 'ParkingCircle',
        titleKey: 'services.parking.title',
        descriptionKey: 'services.parking.description',
        defaultTitle: 'Parcheggio',
        defaultDescription: 'Parcheggio privato gratuito per tutti gli ospiti'
    },
    {
        iconName: 'Tv',
        titleKey: 'services.tv.title',
        descriptionKey: 'services.tv.description',
        defaultTitle: 'TV',
        defaultDescription: 'Televisore a schermo piatto in ogni camera'
    },
    {
        iconName: 'Shower',
        titleKey: 'services.bathroom.title',
        descriptionKey: 'services.bathroom.description',
        defaultTitle: 'Bagno Privato',
        defaultDescription: 'Ogni camera dispone di bagno privato con doccia e asciugacapelli'
    }
];
