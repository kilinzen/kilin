/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language } from "./types";
import { translations } from "./translations";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OriginSection from "./components/OriginSection";
import AdvantageSection from "./components/AdvantageSection";
import FaqSection from "./components/FaqSection";
import ProductSpecs from "./components/ProductSpecs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<Language>("zh");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Sticky Bilingual Navigation Header */}
      <Header lang={lang} setLang={setLang} t={t} />

      {/* 2. Premium Landing Hero */}
      <HeroSection lang={lang} t={t} />

      {/* 3. Genuine Origin & Agricultural Roots Sourcing */}
      <OriginSection lang={lang} t={t} />

      {/* 4. Deep-dive B2B Advantages Analysis */}
      <AdvantageSection lang={lang} t={t} />

      {/* 5. Frequently Asked Questions & Cold Chain Logistics Process Journey */}
      <FaqSection lang={lang} t={t} />

      {/* 6. Technical Specifications & Safety Certifications Grid */}
      <ProductSpecs lang={lang} t={t} />

      {/* 7. Sample Acquisition / Dynamic Lead Form */}
      <ContactForm lang={lang} t={t} />

      {/* 8. Factory ownership credentials & cold chain system status footer */}
      <Footer lang={lang} t={t} />

    </div>
  );
}

