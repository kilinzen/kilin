/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { Globe, Phone, MapPin, Sparkles } from "lucide-react";

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationSchema;
}

export default function Header({ lang, setLang, t }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand area */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-purple-200 shrink-0">
              研
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 flex items-center block leading-none">
                芋研所
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-purple-100 text-purple-700 border border-purple-200/50 uppercase tracking-widest shrink-0">
                  B2B
                </span>
              </span>
              <span className="text-[9px] text-slate-500 block font-mono tracking-wider mt-0.5 truncate uppercase">
                Taro Research Labs
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection("origin")}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              {t.nav.origin}
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              {t.nav.advantages}
            </button>
            <button
              onClick={() => scrollToSection("specs")}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              {t.nav.specs}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="flex items-center space-x-4">
            {/* Language switch button */}
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 rounded-lg hover:border-purple-300 hover:text-purple-600 text-xs font-semibold text-slate-600 transition-all cursor-pointer bg-slate-50"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === "zh" ? "ENGLISH" : "繁體中文"}</span>
            </button>

            {/* Micro Call-To-Action */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center space-x-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs hover:from-purple-700 hover:to-indigo-700 transition-all shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.orderSample}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
