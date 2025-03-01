"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Bed, Coffee, Wifi, Utensils, MapPin, Phone, Mail, Star, ChevronRight, Instagram, Facebook, Umbrella, ChevronLeft, HardHat, Calendar, Construction } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Home() {
  // State per il carosello delle immagini di Canne Al Vento
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const canneAlVentoImages = [
    "/images/canne_al_vento/DSC_1515_edited.jpg",
    "/images/canne_al_vento/DSC_1495.jpeg",
    "/images/canne_al_vento/DSC_1500.jpeg",
    "/images/canne_al_vento/DSC_1505.jpeg",
    "/images/canne_al_vento/DSC_1511.jpeg",
  ];

  // State per il carosello delle immagini di Arcu de Chelu
  const [arcuImageIndex, setArcuImageIndex] = useState(0);
  const arcuDeChechuImages = [
    "/images/arcu_de_chelu/DSC_1474.jpeg",
    "/images/arcu_de_chelu/DSC_1469.jpeg",
    "/images/arcu_de_chelu/DSC_1475.jpeg",
    "/images/arcu_de_chelu/photo_5778594136029511850_w (1).jpg",
    "/images/arcu_de_chelu/msg417320986-1047.jpg",
    "/images/arcu_de_chelu/msg417320986-1054.jpg",
  ];

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

  // Cambia automaticamente l'immagine ogni 5 secondi - Canne Al Vento
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Cambia automaticamente l'immagine ogni 5 secondi - Arcu de Chelu
  useEffect(() => {
    const interval = setInterval(() => {
      nextArcuImage();
    }, 5500); // Intervallo leggermente diverso per evitare sincronizzazione con l'altro carousel
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold text-bnb-700">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/images/B2_reduction.png" 
                  alt="Arcu de Chelu Logo" 
                  fill
                  style={{objectFit: "contain"}}
                  priority
                />
              </div>
              <span className="font-serif italic">Arcu de Chelu</span>
              <span className="text-sm ml-2 text-natural-600 font-normal">B&B</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 text-natural-700">
            <Link href="#about" className="hover:text-bnb-600 transition-colors">Chi Siamo</Link>
            <Link href="#rooms" className="hover:text-bnb-600 transition-colors">Camere</Link>
            <Link href="#services" className="hover:text-bnb-600 transition-colors">Servizi</Link>
            <Link href="#gallery" className="hover:text-bnb-600 transition-colors">Galleria</Link>
            <Link href="#contact" className="hover:text-bnb-600 transition-colors">Contatti</Link>
          </nav>
          <Button variant="bnb" size="sm" className="md:hidden">Menu</Button>
          <Button variant="bnb" className="hidden md:flex">Prenota Ora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center text-white pt-16 relative">
        <div className="container mx-auto text-center px-4 flex flex-col h-full justify-center">
          <div className="animate-fade-in flex flex-col items-center mb-auto mt-auto">
            <div className="relative h-96 w-96 mx-auto mb-0" style={{animation: 'scaleIn 1.5s ease forwards'}}>
              <Image 
                src="/images/B2_reduction_edited.png" 
                alt="Arcu de Chelu Symbol" 
                fill
                style={{objectFit: "contain"}}
                priority
                className="opacity-75 drop-shadow-xl"
              />
            </div>
            <div className="space-y-2 mt-[-55px]">
              <h1 className="text-5xl md:text-7xl font-serif font-extralight tracking-widest leading-tight text-white/95 drop-shadow-md">
                Arcu de Chelu
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wider italic text-white/90 drop-shadow-sm">
                — Bed &amp; Breakfast —
              </p>
            </div>
          </div>
          
          <div className="mt-auto mb-12">
            <Button 
              variant="bnb" 
              size="xl" 
              className="animate-slide-in backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 shadow-lg"
            >
              Scopri le Nostre Camere
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-natural-100">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-natural-800">Benvenuti a <span className="text-bnb-600 italic">Modolo</span></h2>
              <p className="text-natural-700 leading-relaxed">
                Modolo è un affascinante villaggio immerso nella splendida campagna sarda. 
                Situato a pochi chilometri da Bosa, offre una fuga tranquilla e autentica. 
                Uliveti, vigneti e agrumeti adornano la campagna, creando un paesaggio che dona serenità.
              </p>
              <p className="text-natural-700 leading-relaxed">
                La vicinanza alla costa occidentale permette di godere di un mare unico nel suo genere, 
                dove puoi trovare spiagge immacolate e calette mozzafiato. 
                Questo piccolo borgo è il luogo ideale per scoprire l'autentica bellezza naturale della Sardegna.
              </p>
              <Button variant="outline" className="border-bnb-500 text-bnb-700 hover:bg-bnb-50">
                Scopri di più su di noi
              </Button>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/DSC_1446.jpeg" 
                alt="Arcu de Chelu B&B" 
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">Le Nostre Camere</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              Le nostre camere sono pensate per offrire il massimo comfort durante il vostro soggiorno.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room Feature 1 - Canne Al Vento */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                {/* Carosello delle immagini */}
                <div className="relative h-full w-full">
                  <Image 
                    src={canneAlVentoImages[currentImageIndex]}
                    alt="Camera Canne Al Vento" 
                    fill
                    style={{objectFit: "cover"}}
                    className="transition-opacity duration-500"
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
                <h3 className="text-xl font-serif text-natural-800 mb-2">Canne Al Vento</h3>
                <p className="text-natural-600 mb-4">
                  Un'incantevole camera matrimoniale indipendente con bagno privato, angolo cottura e magnifico terrazzo panoramico. 
                  Questo rifugio di tranquillità offre letto matrimoniale confortevole, climatizzazione, TV smart e tutti i comfort necessari per un soggiorno romantico e indimenticabile, cullati dalla brezza marina e dai profumi del Mediterraneo.
                </p>
              </div>
            </div>

            {/* Room Feature 2 - Arcu de Chelu */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                {/* Carosello delle immagini */}
                <div className="relative h-full w-full">
                  <Image 
                    src={arcuDeChechuImages[arcuImageIndex]}
                    alt="Appartamento Arcu de Chelu" 
                    fill
                    style={{objectFit: "cover"}}
                    className="transition-opacity duration-500"
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
                <h3 className="text-xl font-serif text-natural-800 mb-2">Arcu de Chelu</h3>
                <p className="text-natural-600 mb-4">
                  Un elegante appartamento con due camere: "Romeo & Giulietta" in stile classico con pavimento in cementine liberty e "L'infinito" in stile moderno con parquet. 
                  Entrambe le camere hanno balconi con vista sulla pittoresca piazzetta e sulla vallata che conduce al mare di Bosa. L'appartamento offre bagno condiviso, angolo cottura attrezzato, TV, climatizzazione e tutti i comfort per un soggiorno autentico nel cuore di Modolo.
                </p>
              </div>
            </div>

            {/* Room Feature 3 - Via Roma (In Costruzione) */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card relative">
              {/* Indicatore elegante "Coming Soon" */}
              <div className="absolute top-3 right-3 z-20">
                <div className="bg-natural-800/80 backdrop-blur-sm text-white text-xs uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm border border-natural-200/20">
                  Disponibile Giugno 2025
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden bg-natural-50">
                <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-natural-200 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
                      <Calendar className="h-10 w-10 text-natural-800/50" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-natural-800 mb-2 italic">Coming Soon</h3>
                  <div className="w-12 h-0.5 bg-natural-300 my-2"></div>
                </div>
                
                {/* Sfondo elegante */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full text-natural-200 opacity-10" fill="currentColor" viewBox="0 0 100 100">
                    <path d="M50,0 L100,100 L0,100 Z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 border-t border-natural-100">
                <h3 className="text-xl font-serif text-natural-800 mb-2">Via Roma</h3>
                <p className="text-natural-600 mb-4">
                  La nostra prossima novità a Modolo sarà una confortevole camera matrimoniale con bagno privato, 
                  pensata per i viaggiatori che cercano un'opzione più economica senza rinunciare al comfort. 
                  La camera "Via Roma" offrirà tutti i servizi essenziali in uno spazio raccolto e accogliente, 
                  ideale per brevi soggiorni e per chi desidera scoprire la Sardegna senza spendere una fortuna.
                </p>
                <div className="flex items-center text-natural-500 text-sm mt-4">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Prenotazioni disponibili da marzo 2025</span>
                </div>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-bnb-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">I Nostri Servizi</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              Offriamo un'ampia gamma di servizi per rendere il vostro soggiorno indimenticabile, 
              combinando comfort moderni con l'autentica ospitalità sarda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Coffee className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Breakfast</h3>
              <p className="text-natural-600">
                Inizia la tua giornata al nostro accogliente B&B con una colazione irresistibile. 
                Deliziosi dolci fatti in casa, latte fresco, una selezione di cereali e yogurt cremoso ti attendono. 
                Gusta i succhi di frutta rinfrescanti e le marmellate genuine. Una colazione completa e deliziosa 
                per iniziare la giornata nel migliore dei modi!
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Umbrella className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Summer Bag</h3>
              <p className="text-natural-600">
                Teli da spiaggia soffici e colorati per sdraiarti comodamente sulla sabbia. 
                E non dimenticare l'ombrellone leggero e facile da montare, per ripararti dal sole quando ne hai bisogno. 
                Una borsa frigo per tenere al fresco panini e bevande. Con questa pratica borsa, avrai il minimo 
                indispensabile per goderti una giornata perfetta al mare.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Wifi className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Free WiFi</h3>
              <p className="text-natural-600">
                Ti offriamo un servizio di WiFi gratuito per rendere il tuo soggiorno ancora più confortevole e connesso. 
                Con il nostro veloce accesso a Internet, potrai rimanere in contatto con amici e familiari, condividere i momenti 
                speciali del tuo viaggio sui social media o lavorare comodamente, se necessario. Siamo felici di offrirti questo 
                servizio aggiuntivo per assicurarti un soggiorno piacevole e senza interruzioni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">La Nostra Galleria</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              Scopri la bellezza di Arcu de Chelu attraverso le immagini della nostra struttura e dei dintorni.
            </p>
          </div>
          
          <div className="gallery-grid">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/DSC_1467.jpeg" 
                alt="Vista esterna" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/DSC_1513.jpeg" 
                alt="Colazione" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/IMG_20220805_115752.jpg" 
                alt="Spiaggia vicina" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/IMG_20220811_113556.jpg" 
                alt="Camera da letto" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/photo_5778594136029511850_w (1).jpg" 
                alt="Prodotti tipici" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/1665427737133 (1).jpeg" 
                alt="Giardino" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-bnb-500 text-bnb-700 hover:bg-bnb-50">
              Visualizza Tutte le Foto
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-natural-100">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-4">Cosa Dicono di Noi</h2>
            <p className="text-natural-600 max-w-2xl mx-auto">
              Le opinioni dei nostri ospiti sono la nostra migliore pubblicità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="flex items-center text-bnb-500 mb-4">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-natural-700 italic mb-4">
                "Un soggiorno meraviglioso in un posto incantevole. Le camere sono curate nei minimi dettagli e la colazione è superba. I proprietari sono gentilissimi e sempre disponibili."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/B2_reduction.png" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "contain"}}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-800">Laura M.</h4>
                  <p className="text-sm text-natural-500">Milano, Italia</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="flex items-center text-bnb-500 mb-4">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-natural-700 italic mb-4">
                "Arcu de Chelu è un angolo di paradiso. La posizione è strategica per visitare le spiagge più belle della zona. Torneremo sicuramente la prossima estate!"
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/B2_reduction.png" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "contain"}}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-800">Marco P.</h4>
                  <p className="text-sm text-natural-500">Torino, Italia</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="flex items-center text-bnb-500 mb-4">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-natural-700 italic mb-4">
                "Un'esperienza indimenticabile. La struttura è bellissima, immersa nella natura. La cena tipica sarda è stata il momento più bello del nostro soggiorno."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/B2_reduction.png" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "contain"}}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-800">Sofia R.</h4>
                  <p className="text-sm text-natural-500">Berlino, Germania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-natural-800 mb-6">Contattaci</h2>
              <p className="text-natural-600 mb-8">
                Siamo a vostra disposizione per qualsiasi informazione o per prenotare il vostro soggiorno. 
                Contattateci tramite i seguenti mezzi o compilando il modulo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">Indirizzo</h3>
                    <p className="text-natural-600">Via Roma 42, 09090<br />Modolo, Oristano, Sardegna, Italia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">Telefono</h3>
                    <p className="text-natural-600">+39 3408951010 / +39 3472405580</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">Email</h3>
                    <p className="text-natural-600">info@arcudechelubnb.com</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="bg-bnb-50 p-3 rounded-full text-bnb-600 hover:bg-bnb-100 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-bnb-50 p-3 rounded-full text-bnb-600 hover:bg-bnb-100 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-natural-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif text-natural-800 mb-6">Inviaci un Messaggio</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-natural-700 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-natural-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-natural-700 mb-1">Oggetto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-natural-700 mb-1">Messaggio</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-natural-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bnb-500 focus:border-transparent"
                    placeholder="Il tuo messaggio"
                  />
                </div>
                <Button variant="bnb" className="w-full">Invia Messaggio</Button>
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
              <h4 className="text-xl font-serif text-white mb-4">Arcu de Chelu</h4>
              <div className="flex items-center mb-4">
                <div className="relative h-10 w-10 mr-2">
                  <Image 
                    src="/images/B2_reduction_edited.png" 
                    alt="Arcu de Chelu Logo" 
                    fill
                    style={{objectFit: "contain"}}
                  />
                </div>
              </div>
              <p className="text-natural-400 mb-6">
                Un B&B esclusivo nel cuore della Sardegna, dove tradizione e comfort si incontrano.
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
              <h4 className="text-lg font-medium text-white mb-4">Collegamenti Rapidi</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-natural-400 hover:text-white transition-colors">Chi Siamo</Link></li>
                <li><Link href="#rooms" className="text-natural-400 hover:text-white transition-colors">Camere</Link></li>
                <li><Link href="#services" className="text-natural-400 hover:text-white transition-colors">Servizi</Link></li>
                <li><Link href="#gallery" className="text-natural-400 hover:text-white transition-colors">Galleria</Link></li>
                <li><Link href="#contact" className="text-natural-400 hover:text-white transition-colors">Contatti</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Contattaci</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">Via Roma 42, Modolo, Oristano</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">+39 3408951010</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">info@arcudechelubnb.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Newsletter</h4>
              <p className="text-natural-400 mb-4">
                Iscriviti alla nostra newsletter per ricevere offerte speciali e novità.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  className="px-4 py-2 w-full bg-natural-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-bnb-500"
                  placeholder="La tua email"
                />
                <Button variant="bnb" className="rounded-l-none">
                  Iscriviti
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-natural-700 mt-12 pt-8 text-center text-natural-500">
            <p>© {new Date().getFullYear()} Arcu de Chelu B&B. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 