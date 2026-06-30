import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Services } from './components/Services';
import { PriceList } from './components/PriceList';
import { Masters } from './components/Masters';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Promotions } from './components/Promotions';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Contacts } from './components/Contacts';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';

// ============================================================
// ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
// Порядок секций изменяется здесь
// ============================================================

function App() {
  // Smooth scroll polyfill
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Screen */}
        <Hero />

        {/* 2. Advantages */}
        <Advantages />

        {/* 3. Services */}
        <Services />

        {/* 4. Price List */}
        <PriceList />

        {/* 5. Masters */}
        <Masters />

        {/* 6. Gallery */}
        <Gallery />

        {/* 7. Reviews */}
        <Reviews />

        {/* 8. Promotions */}
        <Promotions />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Online Booking */}
        <BookingForm />

        {/* 11. Contacts */}
        <Contacts />
      </main>

      {/* Floating Contact Buttons */}
      <FloatingButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
