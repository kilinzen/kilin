/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language, TranslationSchema } from "../types";
import { HelpCircle, ChevronDown, ChevronUp, Truck, Thermometer, ShieldCheck, Factory } from "lucide-react";

interface FaqSectionProps {
  lang: Language;
  t: TranslationSchema;
}

export default function FaqSection({ lang, t }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Match the 4 cold chain steps with elegant lucide-react icons
  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Factory className="w-6 h-6 text-purple-400" />;
      case 2:
        return <Thermometer className="w-6 h-6 text-purple-400" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      case 4:
        return <Truck className="w-6 h-6 text-purple-400" />;
      default:
        return <HelpCircle className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-purple-50/20 via-white to-purple-50/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Q&A Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Header Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
              <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
              <span>{lang === "zh" ? "客戶支持專區" : "Wholesale Support Q&A"}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {t.faq.title}
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              {t.faq.sub}
            </p>

            <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100/40 relative overflow-hidden hidden lg:block">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-purple-100/50 pointer-events-none text-9xl font-extrabold select-none">
                芋
              </div>
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
                {lang === "zh" ? "契作契載承諾" : "CONTRACT FARMING GUARANTEE"}
              </p>
              <p className="text-sm font-semibold text-slate-600 leading-relaxed relative z-10">
                {lang === "zh" 
                  ? "所有樣品均直接由大甲自營食品加工廠包裝出貨，不收取任何樣品費與常低溫冷鏈物流費用。歡迎線上聯絡提出客製對接需求。" 
                  : "All experimental trial packs are dispatched directly from our certified factory lines. Shipping costs are fully reimbursed by our executive wholesale accounts."}
              </p>
            </div>
          </div>

          {/* Interactive Accordion list */}
          <div className="lg:col-span-7 space-y-4">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${
                    isOpen 
                      ? "border-purple-300 ring-2 ring-purple-100/50" 
                      : "border-slate-100 hover:border-purple-200"
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isOpen ? "bg-purple-100/85 text-purple-600" : "bg-slate-50 text-slate-400"
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] border-t border-slate-50" : "max-h-0"
                  }`}>
                    <p className="p-6 text-sm sm:text-base text-slate-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Horizontal Timeline for Cold-Chain steps */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-900 overflow-hidden relative">
          
          {/* Subtle background abstract circle */}
          <div className="absolute right-0 bottom-0 pointer-events-none translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px]" />
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-950/80 text-purple-300 border border-purple-800/80 tracking-wide">
              {lang === "zh" ? "100% 產地到店安全溯源" : "100% SAFE COLD-CHAIN SYSTEM"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
              {t.faq.logisticsTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-400">
              {t.faq.logisticsSub}
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {t.faq.steps.map((step, index) => (
              <div key={step.id} className="relative group text-center md:text-left">
                
                {/* Horizontal dash connector (desktop-only) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-[28px] left-[calc(50%_+_24px)] w-[calc(100%_-_48px)] h-[1px] border-t border-dashed border-slate-800 group-hover:border-purple-500/50 transition-colors duration-300 z-0" />
                )}

                <div className="space-y-4 relative z-10 flex flex-col md:items-start">
                  {/* Step number icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-purple-500 group-hover:bg-purple-950/30 text-purple-400 font-bold text-sm flex items-center justify-center transition-all duration-300 shadow-sm mx-auto md:mx-0">
                    {getStepIcon(step.id)}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-purple-450 uppercase block mb-1">
                      STAGE 0{step.id}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-450 transition-colors">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
