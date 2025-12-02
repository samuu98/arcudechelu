"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/locales';

/**
 * Contact section with contact information and form
 */
export function ContactSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert('Grazie per averci contattato! Ti risponderemo presto.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4 text-center">
                    {t('contact.title', 'Contattaci')}
                </h2>
                <p className="text-center text-natural-600 mb-12 max-w-2xl mx-auto">
                    {t('contact.subtitle', 'Siamo qui per rispondere a tutte le tue domande')}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif text-natural-800 mb-6">
                                {t('contact.info.title', 'Informazioni di Contatto')}
                            </h3>

                            {/* Email */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-bnb-100 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-bnb-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-natural-800 mb-1">Email</h4>
                                    <a
                                        href="mailto:info@arcudechelu.com"
                                        className="text-bnb-600 hover:text-bnb-700 transition-colors"
                                    >
                                        info@arcudechelu.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-bnb-100 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-bnb-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-natural-800 mb-1">Telefono</h4>
                                    <a
                                        href="tel:+393401234567"
                                        className="text-bnb-600 hover:text-bnb-700 transition-colors"
                                    >
                                        +39 340 123 4567
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="bg-bnb-100 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-bnb-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-natural-800 mb-1">Indirizzo</h4>
                                    <p className="text-natural-600">
                                        Via Roma, 123<br />
                                        08010 Modolo (NU)<br />
                                        Sardegna, Italia
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-natural-50 rounded-lg p-6">
                            <h4 className="font-semibold text-natural-800 mb-2">
                                {t('contact.hours.title', 'Orari di Contatto')}
                            </h4>
                            <p className="text-natural-600">
                                Lun - Dom: 9:00 - 20:00<br />
                                Rispondiamo entro 24 ore
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-serif text-natural-800 mb-6">
                            {t('contact.form.title', 'Inviaci un Messaggio')}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-natural-700 mb-2"
                                >
                                    {t('contact.form.name', 'Nome')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-natural-300 rounded-lg focus:ring-2 focus:ring-bnb-500 focus:border-transparent transition-all"
                                    placeholder="Il tuo nome"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-natural-700 mb-2"
                                >
                                    {t('contact.form.email', 'Email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-natural-300 rounded-lg focus:ring-2 focus:ring-bnb-500 focus:border-transparent transition-all"
                                    placeholder="tua.email@esempio.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-natural-700 mb-2"
                                >
                                    {t('contact.form.message', 'Messaggio')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-natural-300 rounded-lg focus:ring-2 focus:ring-bnb-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Come possiamo aiutarti?"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-bnb-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-bnb-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            >
                                <Send className="h-5 w-5" />
                                {t('contact.form.submit', 'Invia Messaggio')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
