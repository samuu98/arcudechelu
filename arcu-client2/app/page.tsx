"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Bed, Coffee, Wifi, Utensils, MapPin, Phone, Mail, Star, ChevronRight, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold text-bnb-700">
            <Link href="/" className="flex items-center">
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
      <section className="hero-section h-screen flex items-center justify-center text-white pt-16">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif mb-4 font-light tracking-wide">Arcu de Chelu</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Un'oasi di pace nel cuore della Sardegna</p>
            <Button variant="bnb" size="xl" className="mt-4 animate-slide-in">
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
              <h2 className="text-3xl md:text-4xl font-serif text-natural-800">Benvenuti ad <span className="text-bnb-600 italic">Arcu de Chelu</span></h2>
              <p className="text-natural-700 leading-relaxed">
                Il nostro B&B prende il nome dall'arcobaleno in lingua sarda, "S'Arcu de Chelu", 
                proprio come questo fenomeno naturale incanta con i suoi colori, il nostro B&B 
                vi stupirà con la sua bellezza e ospitalità.
              </p>
              <p className="text-natural-700 leading-relaxed">
                Immerso tra le colline della Sardegna, Arcu de Chelu offre un'esperienza autentica 
                in un ambiente tranquillo e accogliente. Le nostre camere, arredate con cura, combinano 
                lo stile tradizionale sardo con comfort moderni.
              </p>
              <Button variant="outline" className="border-bnb-500 text-bnb-700 hover:bg-bnb-50">
                Scopri di più su di noi
              </Button>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
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
              Rilassatevi nelle nostre splendide camere, ognuna con un carattere unico, 
              che offrono il perfetto equilibrio tra tradizione e comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Camera Ginestra" 
                  fill
                  style={{objectFit: "cover"}}
                  className="room-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">Camera Ginestra</h3>
                <div className="flex items-center text-bnb-500 mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-natural-600 mb-4">
                  Una spaziosa camera matrimoniale con vista sui monti e un bagno privato con doccia.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-bnb-700">€90 <span className="text-sm text-natural-500 font-normal">/ notte</span></span>
                  <Button variant="bnb" size="sm">Visualizza Dettagli</Button>
                </div>
              </div>
            </div>

            {/* Room Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Camera Olivastro" 
                  fill
                  style={{objectFit: "cover"}}
                  className="room-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">Camera Olivastro</h3>
                <div className="flex items-center text-bnb-500 mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4" />
                </div>
                <p className="text-natural-600 mb-4">
                  Una confortevole camera matrimoniale con balcone e bagno privato con vasca.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-bnb-700">€85 <span className="text-sm text-natural-500 font-normal">/ notte</span></span>
                  <Button variant="bnb" size="sm">Visualizza Dettagli</Button>
                </div>
              </div>
            </div>

            {/* Room Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 room-card">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Camera Mirto" 
                  fill
                  style={{objectFit: "cover"}}
                  className="room-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-natural-800 mb-2">Camera Mirto</h3>
                <div className="flex items-center text-bnb-500 mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-natural-600 mb-4">
                  La nostra suite premium con zona soggiorno, vista panoramica e bagno con jacuzzi.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-bnb-700">€120 <span className="text-sm text-natural-500 font-normal">/ notte</span></span>
                  <Button variant="bnb" size="sm">Visualizza Dettagli</Button>
                </div>
              </div>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Coffee className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Colazione Gourmet</h3>
              <p className="text-natural-600">
                Ogni mattina serviamo una colazione abbondante con prodotti locali e fatti in casa.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Wifi className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Wi-Fi Gratuito</h3>
              <p className="text-natural-600">
                Connessione Wi-Fi ad alta velocità disponibile gratuitamente in tutte le aree.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Bed className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Pulizia Giornaliera</h3>
              <p className="text-natural-600">
                Servizio di pulizia giornaliero per garantire il massimo comfort durante il soggiorno.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
              <div className="mb-4 text-bnb-600 rounded-full bg-bnb-50 p-3 inline-block">
                <Utensils className="h-8 w-8 amenities-icon" />
              </div>
              <h3 className="text-xl font-serif text-natural-800 mb-2">Cucina Tipica</h3>
              <p className="text-natural-600">
                Su richiesta, cene con menu tipico sardo preparato con ingredienti locali.
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
                src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Vista esterna" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Colazione" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Spiaggia vicina" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Camera da letto" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Prodotti tipici" 
                fill
                style={{objectFit: "cover"}}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "cover"}}
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "cover"}}
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
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Cliente" 
                    fill
                    style={{objectFit: "cover"}}
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
                    <p className="text-natural-600">Via dei Ginepri, 23, 08048<br />Tortolì, Sardegna, Italia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">Telefono</h3>
                    <p className="text-natural-600">+39 123 4567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bnb-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-natural-800 mb-1">Email</h3>
                    <p className="text-natural-600">info@arcudechelu.it</p>
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
                  <span className="text-natural-400">Via dei Ginepri, 23, Tortolì</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">+39 123 4567890</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-bnb-500 mr-2" />
                  <span className="text-natural-400">info@arcudechelu.it</span>
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