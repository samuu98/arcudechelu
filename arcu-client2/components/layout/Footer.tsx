"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/locales';
import { siteConfig } from '@/config';

/**
 * Footer component with links, contact info, and newsletter
 */
export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-natural-800 text-natural-200 py-12">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h4 className="text-xl font-serif text-white mb-4">
                            {siteConfig.name}
                        </h4>
                        {siteConfig.logo && (
                            <div className="flex items-center mb-4">
                                <div className="relative h-10 w-10 mr-2">
                                    <Image
                                        src={siteConfig.logo}
                                        alt={`${siteConfig.name} Logo`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        sizes="40px"
                                        quality={90}
                                    />
                                </div>
                            </div>
                        )}
                        <p className="text-natural-400 mb-6">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-natural-400 hover:text-white transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-natural-400 hover:text-white transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">
                            {t('footer.quickLinks.title', 'Link Rapidi')}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#about"
                                    className="text-natural-400 hover:text-white transition-colors"
                                >
                                    {t('footer.quickLinks.about', 'Chi Siamo')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#rooms"
                                    className="text-natural-400 hover:text-white transition-colors"
                                >
                                    {t('footer.quickLinks.rooms', 'Le Nostre Camere')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="text-natural-400 hover:text-white transition-colors"
                                >
                                    {t('footer.quickLinks.services', 'Servizi')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#gallery"
                                    className="text-natural-400 hover:text-white transition-colors"
                                >
                                    {t('footer.quickLinks.gallery', 'Galleria')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="text-natural-400 hover:text-white transition-colors"
                                >
                                    {t('footer.quickLinks.contact', 'Contatti')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">
                            {t('footer.contact.title', 'Contatti')}
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-bnb-500 mr-2" />
                                <span className="text-natural-400">
                                    {siteConfig.contact.address}
                                </span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 text-bnb-500 mr-2" />
                                <span className="text-natural-400">
                                    {siteConfig.contact.phoneDisplay || siteConfig.contact.phone}
                                </span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 text-bnb-500 mr-2" />
                                <span className="text-natural-400">
                                    {siteConfig.contact.email}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">
                            {t('footer.newsletter.title', 'Newsletter')}
                        </h4>
                        <p className="text-natural-400 mb-4">
                            {t(
                                'footer.newsletter.description',
                                'Iscriviti alla nostra newsletter per ricevere aggiornamenti e offerte speciali.'
                            )}
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                className="px-4 py-2 w-full bg-natural-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-bnb-500"
                                placeholder={t('footer.newsletter.placeholder', 'La tua email')}
                            />
                            <Button variant="bnb" className="rounded-l-none">
                                {t('footer.newsletter.button', 'Iscriviti')}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-natural-700 mt-12 pt-8 text-center text-natural-500">
                    <p>
                        © {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights', 'Tutti i diritti riservati.')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
