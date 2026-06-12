/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Factory } from "lucide-react";

interface HeroSectionProps {
  lang: Language;
  t: TranslationSchema;
}

export default function HeroSection({ lang, t }: HeroSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSpecs = () => {
    const el = document.getElementById("specs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/75 via-white to-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative ambient background blur vectors */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-2/3">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-indigo-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main textual CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start space-x-2 bg-purple-50 border border-purple-150 px-3.5 py-1.5 rounded-full text-purple-800 text-[11px] font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse shrink-0" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.2] lg:leading-[1.15]">
              {lang === "zh" ? (
                <>
                  <span className="text-purple-600 relative inline-block">
                    芋研所
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-purple-100 rounded-full -z-10" />
                  </span>
                  <span className="text-slate-900 block sm:inline mt-1.5 sm:mt-0 sm:ml-3">
                    大甲急凍純芋泥
                  </span>
                </>
              ) : (
                t.hero.titleMain
              )}
            </h1>

            <p className="text-base sm:text-xl font-bold text-slate-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.titleSub}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.desc}
            </p>

            {/* Micro specifications tag */}
            <div className="bg-slate-50/90 border border-slate-200/60 p-4 rounded-xl inline-flex self-center lg:self-start items-center space-x-3 text-slate-700 text-xs font-mono max-w-lg shadow-sm">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold">
                ✓
              </span>
              <span className="font-medium">{t.hero.specSummary}</span>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg shadow-purple-100 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={scrollToSpecs}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-purple-300 text-slate-700 font-bold text-base transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>無添加綠豆、澱粉及防腐劑</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>通過 HACCP / ISO22000</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold">
                <Factory className="w-4 h-4 text-emerald-500" />
                <span>自有工廠，供貨穩定可持續</span>
              </div>
            </div>
          </div>

          {/* Majestic Hero Image Panel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-3xl rotate-3 scale-95 opacity-50 blur-lg -z-10" />
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl overflow-hidden group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-purple-50">
                <img
                  src="/src/assets/images/taro_product_hero_1779949714720.png"
                  alt="Dajia 100% Frozen Pure Taro Paste Product Bag"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating pill for "100% Pure" */}
                <span className="absolute top-4 right-4 inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FAF9FC] text-purple-700 border border-purple-200 shadow-sm backdrop-blur-md">
                  100% 純天然免調味
                </span>
                {/* Micro branding overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-6 text-white text-left">
                  <p className="text-xs font-semibold text-purple-200 tracking-wider font-mono">
                    Premium B2B Supply
                  </p>
                  <p className="text-lg font-bold">大甲冷凍檳榔心芋泥 1kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
