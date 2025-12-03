"use client"

import React from 'react';
import { Coffee, Wifi, Bike } from 'lucide-react';
import { useLanguage } from '@/locales';

/**
 * Services section with focus on cyclist amenities
 */
export function ServicesSection() {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4 text-center">
                    {t('services.title', 'I Nostri Servizi')}
                </h2>
                <p className="text-center text-natural-600 mb-12 max-w-3xl mx-auto">
                    {t('services.subtitle', 'Offriamo un\'ampia gamma di servizi per rendere il vostro soggiorno indimenticabile, combinando comfort moderni con l\'autentica ospitalità sarda.')}
                </p>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Breakfast Welcome Kit */}
                    <div className="bg-natural-50 rounded-lg p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-bnb-100 p-4 rounded-full">
                                <Coffee className="h-10 w-10 text-bnb-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-natural-800 mb-4">
                            {t('services.breakfast.title', 'Breakfast Welcome Kit')}
                        </h3>
                        <p className="text-natural-600 text-sm leading-relaxed">
                            {t('services.breakfast.description', 'Vi diamo il benvenuto con un pratico kit colazione che troverete ad attendervi in camera: caffè, tè, tisane, biscotti, cornetti confezionati, marmellata e fette biscottate. Insieme a bollitore e stoviglie, avrete tutto per uno spuntino autonomo e senza orari, il kit è il nostro modo di accogliervi, perfetto per i primi momenti del vostro soggiorno in totale libertà.')}
                        </p>
                    </div>

                    {/* Free WiFi */}
                    <div className="bg-natural-50 rounded-lg p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-bnb-100 p-4 rounded-full">
                                <Wifi className="h-10 w-10 text-bnb-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-natural-800 mb-4">
                            {t('services.wifi.title', 'Free WiFi')}
                        </h3>
                        <p className="text-natural-600 text-sm leading-relaxed">
                            {t('services.wifi.description', 'Ti offriamo un servizio di WiFi gratuito per rendere il tuo soggiorno più confortevole e connesso. Con il nostro veloce accesso a Internet, potrai rimanere in contatto con amici e familiari, condividere i momenti migliori del tuo viaggio sui social media o lavorare comodamente, se necessario. Siamo felici di offrirti questo servizio aggiuntivo per assicurarti un soggiorno piacevole e senza interruzioni.')}
                        </p>
                    </div>

                    {/* Servizi per Ciclisti */}
                    <div className="bg-natural-50 rounded-lg p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-bnb-100 p-4 rounded-full">
                                <Bike className="h-10 w-10 text-bnb-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-natural-800 mb-4">
                            {t('services.cyclists.title', 'Servizi per Ciclisti')}
                        </h3>
                        <p className="text-natural-600 text-sm leading-relaxed">
                            {t('services.cyclists.description', 'Il nostro B&B è una tappa ideale per i ciclisti che esplorano la Sardegna. Offriamo un garage sicuro per le biciclette, un\'area di parcheggio dedicata e una selezione di attrezzi per piccole riparazioni e manutenzione. La posizione strategica permette di accedere facilmente a numerosi percorsi cicloturistici che attraversano paesaggi mozzafiato dalla montagna al mare.')}
                        </p>
                    </div>
                </div>

                {/* Additional Cyclist Info */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-natural-600 italic leading-relaxed">
                        {t('services.cyclists.additionalInfo', 'In particolare, i ciclisti apprezzeranno la nostra posizione strategica tra montagne e mare, con facile accesso a percorsi panoramici che offrono viste spettacolari della costa occidentale sarda. Dopo una giornata in sella, potrete rilassarvi nella tranquillità del nostro B&B.')}
                    </p>
                </div>
            </div>
        </section>
    );
}
