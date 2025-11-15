"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Bed, Coffee, Wifi, Utensils, AirVent, MapPin, Phone, Bike, Mail, Star, ChevronRight, PlaneTakeoff, Instagram, Facebook, Umbrella, ChevronLeft, HardHat, Leaf, Calendar, Construction, Map, Columns, ParkingSquare, Tv, Square, Eye, Sun, Lock, Users, ChefHat, Bath, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/locales'
import { LanguageSwitcher } from '@/components/ui/language-switcher'


export default function Home() {
    // Carosello immagini Via Roma (identico a Arcu de Chelu)
    const viaRomaImages = [
      "/images/via_roma/398828_6908b43f87fe7_1.jpg",
      "/images/via_roma/398828_6908b43f88fd0_2.jpg",
      "/images/via_roma/398828_6908b43f8a309_3.jpg",
      "/images/via_roma/398828_6908b43f8b248_4.jpg",
      "/images/via_roma/398828_6908b43f8bc0b_5.jpg",
      "/images/via_roma/398828_6908b43f8cb9c_7.jpg",
      "/images/via_roma/398828_6908b43f8d586_8.jpg",
      "/images/via_roma/398828_48aa19ba24_8.jpg",
      "/images/via_roma/398828_a77da6dc65_9.jpg"
    ];
    const [viaRomaImageIndex, setViaRomaImageIndex] = React.useState(0);
    const prevViaRomaImage = () => setViaRomaImageIndex((prev) => (prev - 1 + viaRomaImages.length) % viaRomaImages.length);
    const nextViaRomaImage = () => setViaRomaImageIndex((prev) => (prev + 1) % viaRomaImages.length);
  const { translations, t } = useLanguage();

  // State per il carosello delle immagini di Canne Al Vento
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const canneAlVentoImages = [
    "/images/canne_al_vento/DSC_1515_edited_optimized_.jpg",
    "/images/canne_al_vento/DSC_1495_optimized_.jpeg",
    "/images/canne_al_vento/DSC_1500_optimized_.jpeg",
    "/images/canne_al_vento/DSC_1505_optimized_.jpeg",
    "/images/canne_al_vento/DSC_1511_optimized_.jpeg",
  ];

  // State per il carosello delle immagini di Arcu de Chelu
  const [arcuImageIndex, setArcuImageIndex] = useState(0);
  const arcuDeChechuImages = [
    "/images/arcu_de_chelu/DSC_1469_optimized_.jpeg",
    "/images/arcu_de_chelu/DSC_1475_optimized_.jpeg",
    "/images/arcu_de_chelu/photo_5778594136029511850_w_1_optimized_.jpg",
    "/images/arcu_de_chelu/msg417320986-1047_optimized_.jpg",
    "/images/arcu_de_chelu/msg417320986-1054_optimized_.jpg",
  ];

  // State per il carosello delle immagini di Modolo
  const [currentModoloImageIndex, setCurrentModoloImageIndex] = useState(0);
  
  // Array delle immagini di Modolo (tutte in un'unica coda)
  const modoloImages = [
    "/images/modolo/modolo1.jpg",
    "/images/modolo/modolo2.jpg",
    "/images/modolo/modolo3.jpg",
    "/images/modolo/modolo4.jpg",
  ];

  // State per il carosello delle recensioni
  const [currentReviewGroup, setCurrentReviewGroup] = useState(0);
  const totalReviewGroups = 3;
  
  // Funzione per passare alla recensione successiva
  const nextReviewGroup = () => {
    setCurrentReviewGroup((prevIndex) => 
      prevIndex === totalReviewGroups - 1 ? 0 : prevIndex + 1
    );
  };

  // Funzione per passare alla recensione precedente
  const prevReviewGroup = () => {
    setCurrentReviewGroup((prevIndex) => 
      prevIndex === 0 ? totalReviewGroups - 1 : prevIndex - 1
    );
  };
  
  // Funzione per passare a una recensione specifica
  const goToReviewGroup = (index: number) => {
    setCurrentReviewGroup(index);
  };

  // Cambia automaticamente le recensioni ogni 8 secondi
  useEffect(() => {
    // Usa requestAnimationFrame per assicurarsi che il browser sia pronto
    let animationFrameId: number;
    let intervalId: NodeJS.Timeout;
    
    // Funzione che avvia l'intervallo solo quando la pagina è visibile
    const startInterval = () => {
      intervalId = setInterval(() => {
        animationFrameId = requestAnimationFrame(() => {
          nextReviewGroup();
        });
      }, 8000);
    };
    
    // Avvia l'intervallo inizialmente
    startInterval();
    
    // Gestisce la visibilità della pagina
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Se la pagina è nascosta, pulisci gli intervalli
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      } else {
        // Se la pagina torna visibile, riavvia gli intervalli
        startInterval();
      }
    };
    
    // Aggiungi event listener per quando l'utente cambia tab
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Pulizia
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // Aggiorna il carosello delle recensioni e gli indicatori quando cambia il gruppo di recensioni
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Aggiorna la trasformazione del carosello
      const slider = document.getElementById('reviewsSlider');
      if (slider) {
        slider.style.transform = `translateX(-${currentReviewGroup * 100}%)`;
      }
      
      // Aggiorna gli indicatori
      for (let i = 0; i < totalReviewGroups; i++) {
        const indicator = document.getElementById(`indicator${i+1}`);
        if (indicator) {
          if (i === currentReviewGroup) {
            indicator.classList.remove('bg-bnb-200');
            indicator.classList.add('bg-bnb-500');
          } else {
            indicator.classList.remove('bg-bnb-500');
            indicator.classList.add('bg-bnb-200');
          }
        }
      }
      
      // Collega eventi ai pulsanti
      const prevBtn = document.getElementById('prevReviewBtn');
      const nextBtn = document.getElementById('nextReviewBtn');
      
      if (prevBtn && nextBtn) {
        prevBtn.onclick = () => prevReviewGroup();
        nextBtn.onclick = () => nextReviewGroup();
      }
      
      // Collega eventi agli indicatori
      for (let i = 0; i < totalReviewGroups; i++) {
        const indicator = document.getElementById(`indicator${i+1}`);
        if (indicator) {
          const groupIndex = i; // Creiamo una costante per mantenere il valore corretto nella closure
          indicator.onclick = () => goToReviewGroup(groupIndex);
        }
      }
    }
  }, [currentReviewGroup]);

  // Funzione per passare all'immagine successiva - Canne Al Vento
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === canneAlVentoImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Funzione per passare all'immagine precedente - Canne Al Vento
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? canneAlVentoImages.length - 1 : prevIndex - 1
    );
  };

  // Funzione per passare all'immagine successiva - Arcu de Chelu
  const nextArcuImage = () => {
    setArcuImageIndex((prevIndex) => 
      prevIndex === arcuDeChechuImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Funzione per passare all'immagine precedente - Arcu de Chelu
  const prevArcuImage = () => {
    setArcuImageIndex((prevIndex) => 
      prevIndex === 0 ? arcuDeChechuImages.length - 1 : prevIndex - 1
    );
  };

  // Funzione per passare all'immagine successiva - Modolo
  const nextModoloImage = () => {
    setCurrentModoloImageIndex((prevIndex) => 
      prevIndex === modoloImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Funzione per passare all'immagine precedente - Modolo
  const prevModoloImage = () => {
    setCurrentModoloImageIndex((prevIndex) => 
      prevIndex === 0 ? modoloImages.length - 1 : prevIndex - 1
    );
  };

  // Cambia automaticamente l'immagine ogni 5 secondi - Canne Al Vento
  useEffect(() => {
    // Usa requestAnimationFrame per assicurarsi che il browser sia pronto
    let animationFrameId: number;
    let intervalId: NodeJS.Timeout;
    
    // Funzione che avvia l'intervallo solo quando la pagina è visibile
    const startInterval = () => {
      intervalId = setInterval(() => {
        animationFrameId = requestAnimationFrame(() => {
          nextImage();
        });
      }, 5000);
    };
    
    // Avvia l'intervallo inizialmente
    startInterval();
    
    // Gestisce la visibilità della pagina
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Se la pagina è nascosta, pulisci gli intervalli
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      } else {
        // Se la pagina torna visibile, riavvia gli intervalli
        startInterval();
      }
    };
    
    // Aggiungi event listener per quando l'utente cambia tab
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Pulizia
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Cambia automaticamente l'immagine ogni 5 secondi - Arcu de Chelu
  useEffect(() => {
    let animationFrameId: number;
    let intervalId: NodeJS.Timeout;
    
    const startInterval = () => {
      intervalId = setInterval(() => {
        animationFrameId = requestAnimationFrame(() => {
          nextArcuImage();
        });
      }, 5500);
    };
    
    startInterval();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      } else {
        startInterval();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Cambia automaticamente l'immagine ogni 6 secondi - Modolo
  useEffect(() => {
    let animationFrameId: number;
    let intervalId: NodeJS.Timeout;
    
    const startInterval = () => {
      intervalId = setInterval(() => {
        animationFrameId = requestAnimationFrame(() => {
          nextModoloImage();
        });
      }, 6000);
    };
    
    startInterval();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      } else {
        startInterval();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // State per il carosello della galleria
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const galleryCarouselImages = [
    "/images/gallery/gallery1.jpg",
    "/images/gallery/gallery2.jpg",
    "/images/gallery/gallery3.jpg",
    "/images/gallery/gallery4.jpg",
    "/images/gallery/gallery5.jpg",
    "/images/gallery/gallery6.jpg",
    "/images/gallery/gallery7.jpg",
  ];

  // Funzione per passare all'immagine successiva nella galleria
  const nextGalleryImage = () => {
    setGalleryImageIndex((prevIndex) => 
      prevIndex === galleryCarouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Funzione per passare all'immagine precedente nella galleria
  const prevGalleryImage = () => {
    setGalleryImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryCarouselImages.length - 1 : prevIndex - 1
    );
  };

  // Cambia automaticamente l'immagine della galleria ogni 7 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      nextGalleryImage();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  // Funzione per determinare se un'immagine deve essere precaricata
  const shouldPreloadImage = (currentIndex: number, imageIndex: number, totalImages: number) => {
    // Precarica solo l'immagine corrente, la precedente e la successiva
    const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    return imageIndex === currentIndex || imageIndex === prevIndex || imageIndex === nextIndex;
  };

  // State per tracciare le immagini che non si caricano correttamente
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Funzione per gestire gli errori di caricamento delle immagini
  const handleImageError = (src: string) => {
    console.warn(`Failed to load image: ${src}`);
    setFailedImages(prev => ({
      ...prev,
      [src]: true
    }));
  };

  return (
    <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold text-bnb-700">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/images/B2_reduction_optimized_.png" 
                  alt="Arcu de Chelu Logo" 
                  fill
                  sizes="40px"
                  style={{objectFit: "contain"}}
                  priority
                  quality={90}
                />
              </div>
              <span className="font-serif italic">Arcu de Chelu</span>
              <span className="text-sm ml-2 text-natural-600 font-normal"><i>Guest House</i></span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-natural-700">
            <Link href="#about" className="hover:text-bnb-600 transition-colors">{t('nav.about', 'Chi Siamo')}</Link>
            <Link href="#rooms" className="hover:text-bnb-600 transition-colors">{t('nav.rooms', 'Camere')}</Link>
            <Link href="#services" className="hover:text-bnb-600 transition-colors">{t('nav.services', 'Servizi')}</Link>
            <Link href="#gallery" className="hover:text-bnb-600 transition-colors">{t('nav.gallery', 'Galleria')}</Link>
            <Link href="#contact" className="hover:text-bnb-600 transition-colors">{t('nav.contact', 'Contatti')}</Link>
            <LanguageSwitcher />
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="bnb" size="sm" className="md:hidden">{t('nav.menu', 'Menu')}</Button>
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <a href="https://bookonline.pro/it/properties/101334?unidades=1&filter_zone=1&referencia_propietario=Prenotazione%2520da%2520sito" target="_blank" rel="noopener noreferrer">
              <Button variant="bnb" className="hidden md:flex">{t('nav.bookNow', 'Prenota Ora')}</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-natural-900 overflow-hidden">
        {/* Immagine statica invece del carosello */}
        <div className="absolute inset-0">
          <Image 
            src="/images/copertina.jpg"
            alt={t('hero.imageAlt', 'Arcu de Chelu B&B')}
            fill
            priority
            sizes="100vw"
            style={{objectFit: "cover"}}
            className="opacity-80"
            quality={85}
          />
        </div>
        
        <div className="container mx-auto text-center px-4 flex flex-col h-full justify-center">
          <div className="animate-fade-in flex flex-col items-center mb-auto mt-auto">
            <div className="relative h-96 w-96 mx-auto mb-0" style={{animation: 'scaleIn 1.5s ease forwards'}}>
              <Image 
                src="/images/B2_reduction_edited_optimized_.png" 
                alt="Arcu de Chelu Symbol" 
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                style={{objectFit: "contain"}}
                priority
                className="opacity-75 drop-shadow-xl"
                quality={90}
              />
            </div>
            <div className="space-y-2 mt-[-55px]">
              <h1 className="text-5xl md:text-7xl font-serif font-extralight tracking-widest leading-tight text-white/95 drop-shadow-md">
                {t('hero.title', 'Arcu de Chelu')}
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wider italic text-white/90 drop-shadow-sm">
                {t('hero.subtitle', '— Guest House —')}
              </p>
            </div>
          </div>
          
          <div className="mt-auto mb-12">
            <Link href="#rooms">
              <Button 
                variant="bnb" 
                size="xl" 
                className="animate-slide-in backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 shadow-lg"
              >
                {t('hero.cta', 'Scopri le Nostre Camere')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Chi Siamo */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center mb-12 md:mb-16 relative">
            <span className="relative bg-natural-50 px-4 text-bnb-600 text-sm uppercase tracking-widest font-medium">
              {t('about.pretitle', 'Benvenuti a')}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-natural-800 mt-4 mb-3 text-center font-light tracking-wide">
              {t('about.title', 'Modolo')}
            </h2>
            <div className="w-20 h-0.5 bg-bnb-500/70 mb-6"></div>
            <p className="text-natural-600 text-center max-w-2xl text-lg md:text-xl font-light italic">
              {t('about.shortIntro', 'Un\'oasi di tranquillità nel cuore della costa occidentale sarda')}
            </p>
          </div>
          
          {/* Carosello e descrizione - migliorato allineamento */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Carosello delle immagini di Modolo */}
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-3">
                <div className="h-[500px] relative rounded overflow-hidden">
                  {/* Carosello delle immagini di Modolo */}
                  <div id="modoloCarousel" className="relative w-full h-full">
                    {/* Immagini del carosello principale */}
                    {modoloImages.map((img, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 transform ${
                          index === currentModoloImageIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                        } optimize-gpu`}
                      >
                        <Image 
                          src={img}
                          alt={t('about.imageAlt', 'Immagini di Modolo')}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          quality={90}
                        />
                      </div>
                    ))}
                    
                    {/* Controlli del carosello */}
                    <div className="absolute inset-0 flex items-center justify-between p-2 z-20">
                      <button 
                        onClick={prevModoloImage} 
                        className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors shadow-lg transform -translate-x-2 hover:scale-105"
                        aria-label="Immagine precedente"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextModoloImage} 
                        className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors shadow-lg transform translate-x-2 hover:scale-105"
                        aria-label="Immagine successiva"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Indicatori del carosello principale */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
                      {modoloImages.slice(0, 5).map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentModoloImageIndex(index)}
                          className={`h-1.5 rounded-full transition-all ${
                            currentModoloImageIndex === index || (currentModoloImageIndex >= 5 && index === 4)
                              ? "w-6 bg-white" 
                              : "w-1.5 bg-white/60"
                          }`}
                          aria-label={`Vai all'immagine ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Elementi decorativi */}
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-bnb-500/20 rounded-full blur-xl"></div>
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-bnb-600/10 rounded-full blur-xl"></div>
              </div>
              
              {/* Mini-gallery sotto al carosello */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {Array.from({ length: 3 }).map((_, i) => {
                  // Mostriamo l'immagine corrente, la successiva e la precedente
                  const totalImages = modoloImages.length;
                  
                  // Calcolo corretto degli indici per mostrare immagine precedente, corrente e successiva
                  let idx;
                  if (i === 0) {
                    // Immagine precedente
                    idx = (currentModoloImageIndex - 1 + totalImages) % totalImages;
                  } else if (i === 1) {
                    // Immagine corrente
                    idx = currentModoloImageIndex;
                  } else {
                    // Immagine successiva
                    idx = (currentModoloImageIndex + 1) % totalImages;
                  }
                  
                  return (
                    <div 
                      key={i} 
                      className={`relative rounded overflow-hidden shadow-md h-28 transition-all duration-300 cursor-pointer ${
                        idx === currentModoloImageIndex 
                          ? 'ring-2 ring-bnb-500 ring-offset-2 transform scale-105' 
                          : 'hover:opacity-90 hover:shadow-lg hover:transform hover:scale-105'
                      }`} 
                      onClick={() => setCurrentModoloImageIndex(idx)}
                    >
                      <Image 
                        src={modoloImages[idx]}
                        alt={t('about.thumbAlt', 'Miniatura di Modolo')}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Testo - allineato con il carosello */}
            <div className="order-1 md:order-2 space-y-6 pt-0">
              <div className="prose prose-lg max-w-none text-natural-700">
                <p className="text-xl leading-relaxed font-light">
                  {t('about.description1', 'Arcu de Chelu sorge nel cuore di Modolo, un borgo autentico della Sardegna occidentale. La nostra struttura, recentemente ristrutturata, fonde l\'antico fascino sardo con moderni comfort per un soggiorno indimenticabile.')}
                </p>
                <p className="text-xl leading-relaxed font-light">
                  {t('about.description2', 'A soli 5 minuti dalle spettacolari spiagge di Bosa e da tutti i servizi essenziali, il nostro B&B è il punto di partenza privilegiato per esplorare le meraviglie della costa. A un\'ora dall\'aeroporto di Alghero, siamo facilmente raggiungibili per chi arriva dall\'esterno dell\'isola.')}
                </p>
              </div>
              
              {/* Box di enfasi */}
              <div className="bg-natural-50/70 p-5 border-l-4 border-bnb-500/50 rounded-r-lg italic text-natural-600 my-6">
                <p>
                  {t('about.emphasis', 'Scopri il fascino autentico della Sardegna in un ambiente accogliente e raffinato, dove la tradizione incontra il comfort moderno in perfetta armonia con il paesaggio circostante.')}
                </p>
              </div>
              
              {/* Features in punti */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8">
                {[
                  { icon: <Map className="h-5 w-5 text-bnb-600" />, text: t('about.features.location', 'Posizione strategica') },
                  { icon: <Coffee className="h-5 w-5 text-bnb-600" />, text: t('about.features.breakfast', 'Colazione di qualità') },
                  { icon: <Wifi className="h-5 w-5 text-bnb-600" />, text: t('about.features.wifi', 'Wi-Fi gratuito') },
                  { icon: <Umbrella className="h-5 w-5 text-bnb-600" />, text: t('about.features.beaches', 'Vicino alle spiagge') },
                  { icon: 
                    <PlaneTakeoff className="h-5 w-5 text-bnb-600"/>, 
                    text: t('about.features.plane', '100 km da aeroporto AHO') 
                  },
                  { icon: 
                    <Bike className="h-5 w-5 text-bnb-600"/>, 
                    text: t('about.features.motorcyclists', 'Ideale per motociclisti e ciclisti') 
                  },
                  { icon: 
                    <AirVent  className="h-5 w-5 text-bnb-600" />, 
                    text: t('about.features.airConditioning', 'Ambiente climatizzato') 
                  },
                  { icon: 
                    <Leaf className="h-5 w-5 text-bnb-600"/>, 
                    text: t('about.features.nature', 'Immerso nella natura') 
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 p-2 bg-bnb-50 rounded-full transform transition group-hover:scale-110 group-hover:bg-bnb-100">
                      {feature.icon}
                    </div>
                    <p className="text-natural-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Le Nostre Camere */}
      <section id="rooms" className="py-16 md:py-24 bg-natural-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">{t('rooms.title', 'Le Nostre Camere')}</h2>
            <p className="text-natural-600">
              {t('rooms.subtitle', 'Le nostre camere sono pensate per offrire il massimo comfort durante il vostro soggiorno.')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room Feature 1 - Canne Al Vento */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                {/* Carosello delle immagini */}
                <div className="relative h-full w-full">
                  <Image 
                    src={canneAlVentoImages[currentImageIndex]}
                    alt={t('rooms.canneAlVento.title', 'Camera Canne Al Vento')} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: "cover"}}
                    className="transition-opacity duration-500 optimize-gpu"
                    priority={currentImageIndex === 0}
                    loading={currentImageIndex === 0 ? undefined : "lazy"}
                    quality={80}
                  />
                  
                  {/* Controlli del carosello */}
                  <div className="absolute inset-0 flex items-center justify-between p-2">
                    <button 
                      onClick={prevImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine precedente"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine successiva"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Indicatori */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    {canneAlVentoImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          currentImageIndex === index 
                            ? "w-4 bg-white" 
                            : "w-1.5 bg-white/60"
                        }`}
                        aria-label={`Vai all'immagine ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">{t('rooms.canneAlVento.title', 'Canne Al Vento')}</h3>
                <p className="text-natural-600 mb-4">
                  {t('rooms.canneAlVento.description', 'Camera matrimoniale con balcone e vista sulla piazzetta. La camera include un bagno privato, TV, aria condizionata e accesso a una cucina attrezzata. Ideale per coppie.')}
                </p>
                  {/* Elenco caratteristiche compatto */}
                  <div className="flex flex-col items-center justify-end my-6 h-full">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-xs text-natural-700">
                      <div className="flex items-center gap-1.5">
                      <Square className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Circa 27 mq</span>
                    </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Letto matrimoniale</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Letto singolo</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sun className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Terrazzo panoramico</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Bagno privato</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ChefHat className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Angolo cottura attrezzato</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <AirVent className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Aria condizionata</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tv className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Smart TV</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wifi className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Wi-Fi gratuito</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Utensils className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Zona pranzo</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Coffee className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                        <span>Kit colazione</span>
                      </div>
                        </div>
                      </div>
                {/* Collapsible AvaiBook calendar widget */}
                {(() => {
                  const [showCanneCalendar, setShowCanneCalendar] = useState(false);
                  return (
                    <div className="flex flex-col items-center justify-end my-6 h-full">
                      <Button
                        variant="bnb"
                        className="w-full max-w-xs mb-2"
                        onClick={() => setShowCanneCalendar((prev) => !prev)}
                        aria-expanded={showCanneCalendar}
                        aria-controls="canne-calendar-iframe"
                      >
                        {showCanneCalendar ? 'Nascondi calendario' : 'Verifica disponibilità e prenota'}
                      </Button>
                      {showCanneCalendar && (
                        <iframe
                          id="canne-calendar-iframe"
                          src="https://www.avaibook.com/widgets_propietarios/loader.php?id=173837&lang=IT"
                          style={{ width: '500px', height: '355px', border: 0 }}
                          frameBorder={0}
                          allowTransparency={true}
                        >
                          Calendario non disponibile
                        </iframe>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Room Feature 2 - Arcu de Chelu */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                {/* Carosello delle immagini */}
                <div className="relative h-full w-full">
                  <Image 
                    src={arcuDeChechuImages[arcuImageIndex]}
                    alt={t('rooms.arcuDeChelu.title', 'Appartamento Arcu de Chelu')} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: "cover"}}
                    className="transition-opacity duration-500 optimize-gpu"
                    priority={arcuImageIndex === 0}
                    loading={arcuImageIndex === 0 ? undefined : "lazy"}
                    quality={80}
                  />
                  
                  {/* Controlli del carosello */}
                  <div className="absolute inset-0 flex items-center justify-between p-2">
                    <button 
                      onClick={prevArcuImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine precedente"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextArcuImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine successiva"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Indicatori */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    {arcuDeChechuImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setArcuImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          arcuImageIndex === index 
                            ? "w-4 bg-white" 
                            : "w-1.5 bg-white/60"
                        }`}
                        aria-label={`Vai all'immagine ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">{t('rooms.arcuDeChelu.title', 'Arcu de Chelu')}</h3>
                <p className="text-natural-600 mb-4">
                  {t('rooms.arcuDeChelu.description', 'Elegante appartamento con due camere: "Romeo & Giulietta" in stile classico e "L\'infinito" in stile moderno. Entrambe dispongono di balconi con vista sulla piazzetta e sulla valle verso il mare di Bosa. Bagno in comune, cucina attrezzata, TV e aria condizionata.')}
                </p>
                <div className="flex flex-col items-center justify-end my-6 h-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-xs text-natural-700">
                    <div className="flex items-center gap-1.5">
                      <Square className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Circa 50 mq</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>2 camere separate</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Letti matrimoniali</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Letti singoli</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Balconi panoramici</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Bagno ad uso esclusivo</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ChefHat className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Angolo cottura</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Utensils className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Zona pranzo</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <AirVent className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Aria condizionata</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tv className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Smart TV</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Wi-Fi gratuito</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Privacy totale</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>1-4 persone</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Coffee className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Kit colazione</span>
                    </div>
                  </div>
                </div>
                {/* Collapsible AvaiBook calendar widget - Arcu de Chelu */}
                {(() => {
                  const [showArcuCalendar, setShowArcuCalendar] = useState(false);
                  return (
                    <div className="flex flex-col items-center justify-end my-6 h-full">
                      <Button
                        variant="bnb"
                        className="w-full max-w-xs mb-2"
                        onClick={() => setShowArcuCalendar((prev) => !prev)}
                        aria-expanded={showArcuCalendar}
                        aria-controls="arcu-calendar-iframe"
                      >
                        {showArcuCalendar ? 'Nascondi calendario' : 'Verifica disponibilità e prenota'}
                      </Button>
                      {showArcuCalendar && (
                        <iframe
                          id="arcu-calendar-iframe"
                          src="https://www.avaibook.com/widgets_propietarios/loader.php?id=173838&lang=IT"
                          style={{ width: '500px', height: '355px', border: 0 }}
                          frameBorder={0}
                          allowTransparency={true}
                        >
                          Tu navegador no soporta iframes
                        </iframe>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Room Feature 3 - Via Roma */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                {/* Carosello delle immagini - Via Roma */}
                <div className="relative h-full w-full">
                  <Image 
                    src={viaRomaImages[viaRomaImageIndex]}
                    alt={t('rooms.viaRoma.title', 'Camera Via Roma')} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: "cover"}}
                    className="transition-opacity duration-500 optimize-gpu"
                    priority={viaRomaImageIndex === 0}
                    loading={viaRomaImageIndex === 0 ? undefined : "lazy"}
                    quality={80}
                  />
                  {/* Controlli del carosello */}
                  <div className="absolute inset-0 flex items-center justify-between p-2">
                    <button 
                      onClick={prevViaRomaImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine precedente"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextViaRomaImage} 
                      className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white hover:bg-white/40 transition-colors"
                      aria-label="Immagine successiva"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  {/* Indicatori */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    {viaRomaImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setViaRomaImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          viaRomaImageIndex === index 
                            ? "w-4 bg-white" 
                            : "w-1.5 bg-white/60"
                        }`}
                        aria-label={`Vai all'immagine ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">{t('rooms.viaRoma.title', 'Via Roma')}</h3>
                <p className="text-natural-600 mb-4">
                  {t('rooms.viaRoma.description', 'La nostra nuova camera di lusso, attualmente in fase di costruzione, sarà disponibile a partire da giugno 2025. Questa elegante sistemazione offrirà il massimo del comfort con finiture di pregio e una vista mozzafiato.')}
                </p>
                <div className="flex flex-col items-center justify-end my-6 h-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-xs text-natural-700">
                    <div className="flex items-center gap-1.5">
                      <Square className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Circa 15 mq</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Letto matrimoniale</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Bagno privato</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Vista sul borgo</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <AirVent className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Aria condizionata</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tv className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Smart TV</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Utensils className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Tavolo con sedie</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Wi-Fi gratuito</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Coffee className="h-3.5 w-3.5 text-bnb-600 flex-shrink-0" />
                      <span>Kit colazione</span>
                    </div>
                  </div>
                </div>
                {/* Collapsible AvaiBook calendar widget - Via Roma */}
                {(() => {
                  const [showViaRomaCalendar, setShowViaRomaCalendar] = useState(false);
                  return (
                    <div className="flex flex-col items-center justify-end my-6 h-full">
                      <Button
                        variant="bnb"
                        className="w-full max-w-xs mb-2"
                        onClick={() => setShowViaRomaCalendar((prev) => !prev)}
                        aria-expanded={showViaRomaCalendar}
                        aria-controls="viaroma-calendar-iframe"
                      >
                        {showViaRomaCalendar ? 'Nascondi calendario' : 'Verifica disponibilità e prenota'}
                      </Button>
                      {showViaRomaCalendar && (
                        <iframe
                          id="viaroma-calendar-iframe"
                          src="https://www.avaibook.com/widgets_propietarios/loader.php?id=173839&lang=IT"
                          style={{ width: '500px', height: '355px', border: 0 }}
                          frameBorder={0}
                          allowTransparency={true}
                        >
                          Tu navegador no soporta iframes
                        </iframe>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-natural-50 p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
            <p className="text-natural-700 leading-relaxed text-center italic">
              Le camere degli ospiti sono situate in un piano dedicato, garantendo una maggiore privacy e tranquillità. 
              Gli host non vivono nello stesso piano, ma saranno sempre a vostra disposizione per assicurarsi che il 
              vostro soggiorno sia perfetto in ogni dettaglio.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Servizi */}
      <section id="services" className="bg-natural-50 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">{t('services.title', 'Servizi')}</h2>
            <p className="text-natural-600">
              {t('services.subtitle', 'Scopri tutti i servizi inclusi nel tuo soggiorno al B&B Arcu de Chelu.')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Breakfast */}
            <div className="p-6 border border-natural-200 bg-white rounded-lg hover:shadow-md transition duration-300">
              <div className="p-3 inline-block rounded-full bg-primary-50 text-primary-600 mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">{t('services.breakfast.title', 'Colazione')}</h3>
              <p className="text-natural-600">
                {t('services.breakfast.description', 'Colazione con prodotti freschi locali servita in terrazza con vista sulla valle. Offriamo specialità dolci e salate, frutta fresca e bevande calde.')}
              </p>
            </div>
            
            {/* Service 2 - WiFi */}
            <div className="p-6 border border-natural-200 bg-white rounded-lg hover:shadow-md transition duration-300">
              <div className="p-3 inline-block rounded-full bg-primary-50 text-primary-600 mb-4">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">{t('services.wifi.title', 'WiFi Gratuito')}</h3>
              <p className="text-natural-600">
                {t('services.wifi.description', 'Connessione Wi-Fi gratuita ad alta velocità in tutte le aree del B&B. Resta connesso con i tuoi cari e condividi subito i tuoi momenti più belli.')}
              </p>
            </div>
            
            {/* Service 3 - Bike Facilities */}
            <div className="p-6 border border-natural-200 bg-white rounded-lg hover:shadow-md transition duration-300">
              <div className="p-3 inline-block rounded-full bg-primary-50 text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="5.5" cy="17.5" r="3.5"/>
                  <circle cx="18.5" cy="17.5" r="3.5"/>
                  <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">{t('services.bikeGarage.title', 'Servizi per Ciclisti')}</h3>
              <p className="text-natural-600">
                {t('services.bikeGarage.description', 'Il nostro B&B è una tappa ideale per i ciclisti che esplorano la Sardegna. Offriamo un garage sicuro per le biciclette, un\'area di parcheggio dedicata e una selezione di attrezzi per piccole riparazioni e manutenzione. La posizione strategica permette di accedere facilmente a numerosi percorsi cicloturistici che attraversano paesaggi mozzafiato dalla montagna al mare.')}
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-natural-600 italic max-w-3xl mx-auto">
              {t('services.cyclistNote', 'In particolare, i ciclisti apprezzeranno la nostra posizione strategica tra montagne e mare, con facile accesso a percorsi panoramici che offrono viste spettacolari della costa occidentale sarda. Dopo una giornata in sella, potrete rilassarvi nella tranquillità del nostro B&B.')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - Completamente semplificata */}
      <section id="gallery" className="py-16 bg-natural-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-serif text-natural-800 mb-3">{t('gallery.title', 'La Nostra Galleria')}</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              {t('gallery.subtitle', 'Scopri gli scorci più suggestivi della Sardegna e dei suoi paesaggi attraverso i nostri occhi.')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-bnb-400 to-bnb-600 mx-auto mt-5 rounded-full"></div>
          </div>
          
          {/* Carosello principale ripristinato */}
          <div className="relative mb-8 overflow-hidden rounded-xl shadow-lg">
            <div className="relative aspect-[16/9] w-full">
              {/* Controlli del carosello */}
              <div className="absolute inset-y-0 left-0 flex items-center z-20 pl-4">
                <button 
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2.5 backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
                  onClick={() => prevGalleryImage()}
                  aria-label="Immagine precedente"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-20 pr-4">
                <button 
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2.5 backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
                  onClick={() => nextGalleryImage()}
                  aria-label="Immagine successiva"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Contenitore immagini carosello */}
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-in-out carousel-container optimize-gpu"
                style={{ transform: `translateX(-${galleryImageIndex * 100}%)` }}
              >
                {galleryCarouselImages.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="absolute inset-0"
                    style={{ transform: `translateX(${idx * 100}%)` }}
                  >
                    <Image 
                      src={imgSrc}
                      alt={t('gallery.landscapeAlt', 'Paesaggio della Sardegna')}
                      fill
                      priority={idx === galleryImageIndex}
                      sizes="100vw"
                      style={{objectFit: "cover"}}
                      loading={idx === galleryImageIndex ? undefined : "lazy"}
                      quality={80}
                    />
                  </div>
                ))}
              </div>
              
              {/* Testo overlay con sfondo solido per leggibilità */}
              <div className="absolute bottom-0 left-0 right-0 bg-natural-900/70 p-5 md:p-6 z-10">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-1">
                    {t('gallery.captionTitle', 'La Bellezza della Sardegna')}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    {t('gallery.captionText', 'Scopri le meraviglie naturali, le tradizioni e i panorami mozzafiato che rendono unica la nostra terra.')}
                  </p>
                </div>
              </div>
              
              {/* Indicatori */}
              <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center space-x-1.5">
                {galleryCarouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === galleryImageIndex ? "bg-white w-6" : "bg-white/40 w-1.5"
                    }`}
                    onClick={() => setGalleryImageIndex(idx)}
                    aria-label={`Vai all'immagine ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mini-galleria delle miniature */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryCarouselImages.map((img, idx) => (
              <div 
                key={idx}
                className={`relative h-20 w-32 md:h-24 md:w-40 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200 ${idx === galleryImageIndex ? 'ring-2 ring-bnb-500' : ''}`}
                onClick={() => setGalleryImageIndex(idx)}
              >
                <Image
                  src={img}
                  alt={t('gallery.thumbnailAlt', 'Miniatura')}
                  fill
                  sizes="(max-width: 768px) 32vw, 160px"
                  style={{objectFit: "cover"}}
                  className="hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={60}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-bnb-300 text-bnb-600 hover:bg-bnb-50 hover:text-bnb-700 shadow-sm px-6 py-2">
              <Instagram className="mr-2 h-4 w-4" /> {t('gallery.instagramCTA', 'Seguici su Instagram per altre foto')}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 bg-gradient-to-b from-natural-50 to-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">{t('testimonials.title', 'Cosa Dicono i Nostri Ospiti')}</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              {t('testimonials.subtitle', 'Recensioni autentiche dei nostri ospiti su Booking.com')}
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-bnb-500 text-white px-3 py-1 rounded-md">
                <Star className="h-4 w-4 fill-current mr-1" />
                <span className="font-bold text-lg">9.5</span>
                <span className="mx-1">/</span>
                <span>10</span>
              </div>
              <span className="mx-2 text-natural-500">•</span>
              <span className="text-natural-600">Oltre 80 recensioni verificate</span>
            </div>
          </div>
          
          {/* Recensioni Desktop Carousel */}
          <div className="hidden md:block relative">
            {/* Controlli del carosello */}
            <div className="absolute inset-y-0 left-0 flex items-center -ml-6 z-10">
              <button 
                id="prevReviewBtn"
                className="bg-white/80 hover:bg-white text-natural-700 rounded-full p-3 shadow-md focus:outline-none transition-transform hover:scale-105"
                aria-label="Recensione precedente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-6 z-10">
              <button 
                id="nextReviewBtn"
                className="bg-white/80 hover:bg-white text-natural-700 rounded-full p-3 shadow-md focus:outline-none transition-transform hover:scale-105"
                aria-label="Recensione successiva"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Carosello desktop */}
            <div className="overflow-hidden py-6">
              <div id="reviewsSlider" className="flex transition-transform duration-500 ease-in-out">
                {/* Gruppo 1 di recensioni */}
                <div className="min-w-full grid grid-cols-3 gap-6">
                  {/* Recensione 1 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Italia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Ordine e pulizia della stanza impeccabili, ha tutto quello che serve, hosts molto gentili, posizione molto carina e tra i letti più comodi che io abbia mai provato."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Enrico</h4>
                          <p className="text-sm text-natural-500">Appartamento Deluxe • Luglio 2023</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Gruppo
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 2 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Italia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Pulizia, ampiezza della stanza, che in realtà è un monolocale con terrazza. Attrezzatura, c'è tutto quello che devi trovare in un B&B e anche di più; comodità del letto matrimoniale. Infine, una mega colazione dal salato al dolce con ampia scelta per entrambi."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Pablez</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Agosto 2024</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Coppia
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 3 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Regno Unito</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Absolutely amazing stay, the place was lovely and with a lot of Sardinian products and pictures, it felt like staying at home away from home. Breakfast was tasty and full of healthy options, and you get to consume it in your room privately."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Desirèe</h4>
                          <p className="text-sm text-natural-500">Appartamento Deluxe • Luglio 2024</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Famiglia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gruppo 2 di recensioni */}
                <div className="min-w-full grid grid-cols-3 gap-6">
                  {/* Recensione 4 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Francia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Un emplacement très tranquille dans un village à taille humaine, une vraie maison de famille, des hôtes accueillants, souriants, toujours disponibles et bienveillants, un petit déjeuner délicieux... Bref: que du bonheur!"
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Margherita</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Settembre 2024</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Famiglia
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 5 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Australia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "I had a wonderful stay here. Clean, comfortable and beautiful accommodation. My hosts were so helpful and kind. I highly recommend this place to anyone visiting Sardinia."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Rachel</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Giugno 2023</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Coppia
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 6 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Italia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Accoglienza, gentilezza, disponibilità e pulizia eccellenti. Spazio interno anche per riporre le bici se siete cicloturisti. Consiglio assolutamente."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Giovanna</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Giugno 2023</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Coppia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gruppo 3 di recensioni */}
                <div className="min-w-full grid grid-cols-3 gap-6">
                  {/* Recensione 7 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Italia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Ambiente accogliente, pulito, moderno. Posizione centrale che permette di raggiungere in pochi minuti le più belle località della Sardegna. Proprietari disponibili, gentili e sempre pronti a darti consigli utili per scoprire luoghi fantastici."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Gianluigi</h4>
                          <p className="text-sm text-natural-500">Appartamento Deluxe • Aprile 2024</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Famiglia
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 8 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Australia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Host super cordiali, camera e bagno molto puliti e spaziosi. A pochi minuti da Bosa, ottimo punto di partenza per vedere la costa occidentale. Colazione semplice ma molto ricca."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Emanuela</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Maggio 2024</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Coppia
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recensione 9 */}
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col h-full my-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-bnb-500 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="text-2xl font-bold text-natural-800">10/10</div>
                      </div>
                      <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                        <span className="text-natural-700 font-medium">Italia</span>
                      </div>
                    </div>
                    <p className="text-natural-700 italic mb-4 flex-grow">
                      "Cura di ogni singolo dettaglio, dalla posizione, all'arredamento delle stanze, alla colazione. Pulizia ottima, stanza molto confortevole. Ottima accoglienza."
                    </p>
                    <div className="border-t border-natural-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-natural-800">Emanuele</h4>
                          <p className="text-sm text-natural-500">Camera Matrimoniale • Giugno 2023</p>
                        </div>
                        <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                          Coppia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Indicatori del carosello */}
            <div className="flex justify-center mt-8 space-x-2">
              <button id="indicator1" className="w-3 h-3 rounded-full bg-bnb-500"></button>
              <button id="indicator2" className="w-3 h-3 rounded-full bg-bnb-200"></button>
              <button id="indicator3" className="w-3 h-3 rounded-full bg-bnb-200"></button>
            </div>
          </div>
          
          {/* Recensioni Mobile Carousel */}
          <div className="md:hidden mt-8 px-2 py-3">
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex space-x-4 pb-6 pt-1">
                
                {/* Recensione Mobile 1 */}
                <div className="snap-center min-w-[90%] bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col my-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center text-bnb-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-natural-800">10/10</div>
                    </div>
                    <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                      <span className="text-natural-700 font-medium">Italia</span>
                    </div>
                  </div>
                  <p className="text-natural-700 italic mb-4">
                    "Pulizia, ampiezza della stanza, che in realtà è un monolocale con terrazza. Attrezzatura, c'è tutto quello che devi trovare in un B&B e anche di più; comodità del letto matrimoniale. Infine, una mega colazione dal salato al dolce con ampia scelta per entrambi."
                  </p>
                  <div className="border-t border-natural-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-natural-800">Pablez</h4>
                        <p className="text-sm text-natural-500">Camera Matrimoniale • Agosto 2024</p>
                      </div>
                      <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                        Coppia
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recensione Mobile 2 */}
                <div className="snap-center min-w-[90%] bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col my-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center text-bnb-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-natural-800">10/10</div>
                    </div>
                    <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                      <span className="text-natural-700 font-medium">Regno Unito</span>
                    </div>
                  </div>
                  <p className="text-natural-700 italic mb-4">
                    "Absolutely amazing stay, the place was lovely and with a lot of Sardinian products and pictures, it felt like staying at home away from home. Breakfast was tasty and full of healthy options, and you get to consume it in your room privately."
                  </p>
                  <div className="border-t border-natural-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-natural-800">Desirèe</h4>
                        <p className="text-sm text-natural-500">Appartamento Deluxe • Luglio 2024</p>
                      </div>
                      <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                        Famiglia
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recensione Mobile 3 */}
                <div className="snap-center min-w-[90%] bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col my-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center text-bnb-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-natural-800">10/10</div>
                    </div>
                    <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                      <span className="text-natural-700 font-medium">Francia</span>
                    </div>
                  </div>
                  <p className="text-natural-700 italic mb-4">
                    "Un emplacement très tranquille dans un village à taille humaine, une vraie maison de famille, des hôtes accueillants, souriants, toujours disponibles et bienveillants, un petit déjeuner délicieux... Bref: que du bonheur!"
                  </p>
                  <div className="border-t border-natural-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-natural-800">Margherita</h4>
                        <p className="text-sm text-natural-500">Camera Matrimoniale • Settembre 2024</p>
                      </div>
                      <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                        Famiglia
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recensione Mobile 4 */}
                <div className="snap-center min-w-[90%] bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col my-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center text-bnb-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-natural-800">10/10</div>
                    </div>
                    <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                      <span className="text-natural-700 font-medium">Australia</span>
                    </div>
                  </div>
                  <p className="text-natural-700 italic mb-4">
                    "I had a wonderful stay here. Clean, comfortable and beautiful accommodation. My hosts were so helpful and kind. I highly recommend this place to anyone visiting Sardinia."
                  </p>
                  <div className="border-t border-natural-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-natural-800">Rachel</h4>
                        <p className="text-sm text-natural-500">Camera Matrimoniale • Giugno 2023</p>
                      </div>
                      <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                        Coppia
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recensione Mobile 5 */}
                <div className="snap-center min-w-[90%] bg-white p-6 rounded-lg shadow-md border border-natural-100 flex flex-col my-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center text-bnb-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-natural-800">10/10</div>
                    </div>
                    <div className="flex items-center bg-natural-50 px-2 py-1 rounded text-xs text-natural-600">
                      <span className="text-natural-700 font-medium">Italia</span>
                    </div>
                  </div>
                  <p className="text-natural-700 italic mb-4">
                    "Accoglienza, gentilezza, disponibilità e pulizia eccellenti. Spazio interno anche per riporre le bici se siete cicloturisti. Consiglio assolutamente."
                  </p>
                  <div className="border-t border-natural-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-natural-800">Giovanna</h4>
                        <p className="text-sm text-natural-500">Camera Matrimoniale • Giugno 2023</p>
                      </div>
                      <div className="bg-natural-50 text-natural-600 text-xs px-2 py-1 rounded">
                        Coppia
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a href="https://www.booking.com/hotel/it/arcu-de-chelu-b-amp-b.it.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Button variant="bnb" size="lg" className="shadow-md hover:shadow-lg transition-all">
                {t('testimonials.ctaButton', 'Leggi tutte le recensioni su Booking.com')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-6">{t('contact.title', 'Contattaci')}</h2>
              <p className="text-natural-600 mb-8">
                {t('contact.subtitle', 'Siamo qui per rispondere a tutte le tue domande e aiutarti a pianificare il tuo soggiorno perfetto in Sardegna.')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">{t('contact.address.title', 'Indirizzo')}</h3>
                    <p className="text-natural-600">{t('contact.address.value', 'Via Roma 42, 09090 Modolo (OR), Sardegna, Italia')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">{t('contact.phone.title', 'Telefono')}</h3>
                    <p className="text-natural-600">{t('contact.phone.value', '+39 347 240 55 80 / +39 340 895 1010')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">{t('contact.email.title', 'Email')}</h3>
                    <p className="text-natural-600">{t('contact.email.value', 'arcudechelubnb@gmail.com')}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="bg-bnb-50 p-3 rounded-full text-bnb-600 hover:bg-bnb-100 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-natural-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif text-natural-800 mb-6">{t('contact.form.title', 'Invia un Messaggio')}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-natural-700 mb-1">{t('contact.form.name', 'Nome')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                      placeholder={t('contact.form.namePlaceholder', 'Il tuo nome')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-natural-700 mb-1">{t('contact.form.email', 'Email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                      placeholder={t('contact.form.emailPlaceholder', 'La tua email')}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-natural-700 mb-1">{t('contact.form.subject', 'Oggetto')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                    placeholder={t('contact.form.subjectPlaceholder', 'Oggetto del messaggio')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-natural-700 mb-1">{t('contact.form.message', 'Messaggio')}</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                    placeholder={t('contact.form.messagePlaceholder', 'Il tuo messaggio...')}
                  />
                </div>
                <Button className="w-full">{t('contact.form.submitButton', 'Invia Messaggio')}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-natural-800 text-natural-200 py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-serif text-white mb-4">{t('footer.title', 'Arcu de Chelu')}</h4>
              <div className="flex items-center mb-4">
                <div className="relative h-10 w-10 mr-2">
                  <Image 
                    src="/images/B2_reduction_edited_optimized_.png" 
                    alt={t('footer.logoAlt', 'Arcu de Chelu Logo')} 
                    fill
                    style={{objectFit: "contain"}}
                    sizes="40px"
                    quality={90}
                  />
                </div>
              </div>
              <p className="text-natural-400 mb-6">
                {t('footer.description', 'B&B nel cuore della Sardegna, in un contesto tranquillo e ricco di tradizioni. Offriamo camere confortevoli e servizi di qualità per un soggiorno indimenticabile.')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-natural-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-natural-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">{t('footer.quickLinks.title', 'Link Rapidi')}</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-natural-400 hover:text-white transition-colors">{t('footer.quickLinks.about', 'Chi Siamo')}</Link></li>
                <li><Link href="#rooms" className="text-natural-400 hover:text-white transition-colors">{t('footer.quickLinks.rooms', 'Le Nostre Camere')}</Link></li>
                <li><Link href="#services" className="text-natural-400 hover:text-white transition-colors">{t('footer.quickLinks.services', 'Servizi')}</Link></li>
                <li><Link href="#gallery" className="text-natural-400 hover:text-white transition-colors">{t('footer.quickLinks.gallery', 'Galleria')}</Link></li>
                <li><Link href="#contact" className="text-natural-400 hover:text-white transition-colors">{t('footer.quickLinks.contact', 'Contatti')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">{t('footer.contact.title', 'Contatti')}</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">{t('footer.contact.address', 'Via Roma 42, 09090 Modolo (OR)')}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">{t('footer.contact.phone', '+39 347 240 55 80 / +39 340 895 1010')}</span  >
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">{t('footer.contact.email', 'arcudechelubnb@gmail.com')}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">{t('footer.newsletter.title', 'Newsletter')}</h4>
              <p className="text-natural-400 mb-4">
                {t('footer.newsletter.description', 'Iscriviti alla nostra newsletter per ricevere aggiornamenti e offerte speciali.')}
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
          
          <div className="border-t border-natural-700 mt-12 pt-8 text-center text-natural-500">
            <p>{t('footer.copyright', '© {year} Arcu de Chelu B&B. Tutti i diritti riservati.').replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 