/**
 * Centralized review data
 */

export interface Review {
    name: string;
    rating: number; // 1-5
    comment: string;
    date?: string;
}

export const reviews: Review[] = [
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
];
