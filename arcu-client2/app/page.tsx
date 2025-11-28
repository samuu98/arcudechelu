"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import { RoomsSection } from '@/components/sections/RoomsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Main page - Refactored into component-based architecture
 * 
 * This page now orchestrates reusable components instead of containing
 * all logic inline. This improves:
 * - Maintainability: Each component is self-contained
 * - Scalability: Easy to add/remove/modify sections
 * - Reusability: Components can be reused across pages
 * - Testability: Individual components can be tested in isolation
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}