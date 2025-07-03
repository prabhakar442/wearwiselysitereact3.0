import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTabs from './components/ServiceTabs';
import ServicesGrid from './components/ServicesGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import JacketPage from './components/JacketPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServiceTabs />
                <ServicesGrid />
                <FAQ />
              </>
            }
          />

          <Route path="/jacket-cleaning" element={<JacketPage />} />

          <Route path="*" element={<h2 className="text-center py-20">Page Not Found</h2>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
