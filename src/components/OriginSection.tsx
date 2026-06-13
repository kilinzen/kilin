/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { Droplets, ShieldCheck, Landmark, Heart } from "lucide-react";
import taroNaturalSource from "../assets/images/taro_natural_source_1779949735167.png";

interface OriginSectionProps {
  lang: Language;
  t: TranslationSchema;
}

export default function OriginSection({ lang, t }: OriginSectionProps) {
  return (
    <section id="origin" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Story telling text (Left) */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
              {lang === "zh" ? "正宗源頭 · 在地精神" : "Dajia Pedigree & Spirit"}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {lang === "zh" ? (
                <>
                  <span className="inline-block">芋研所契約農作</span>
                  <span className="inline-block">檳榔心芋</span>
                </>
              ) : (
                t.hero.originLabel
              )}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {t.hero.originDesc}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              {lang === "zh"
                ? "台灣大甲位居大安溪與大甲溪下游沖積扇，黑黏土富含有機質，特別受惠於濕潤溫熱的微氣候，造就了「澱粉質極高、香氣綿長」的檳榔心芋。我們的工廠就座落在產區的核心方圓 15 公里之內，當季採收立即載運處理，絕不進行長途貨運顛簸，保障純淨香氣完全鎖存。"
                : "Dajia represents the ultimate alluvial delta in Taiwan which produces premium Betel Nut Taro with high-density starch fibers. Our facility is situated only 15 kilometers adjacent to the contract crops."}
            </p>

            {/* Bullet list of trust traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mt-0.5">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {lang === "zh" ? "純淨大甲地下天然水源" : "Pristine Local Spring"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "zh" ? "終年豐富微量元素灌溉" : "Nourished with microelements"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {lang === "zh" ? "嚴選大甲契作班底" : "Artisan Famers Collective"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "zh" ? "只採收熟化度最圓潤之果體" : "Strict agricultural audits"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {lang === "zh" ? "100% 自有食品工廠加工" : "100% In-House Processing"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "zh" ? "非委外貼牌，品管一手掌控" : "Zero multi-party outsourcing"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {lang === "zh" ? "無塵包裝高潔淨度" : "Cleanroom Grade Sealing"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "zh" ? "保障絕無二次交叉感染" : "Fulfill high bio-standards"}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Sourcing Visual Banner Panel (Right) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-3xl -rotate-2 scale-95 opacity-40 blur-lg -z-10" />
            <div className="bg-white p-4 rounded-3xl border border-slate-150 shadow-lg group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-purple-50">
                <img
                  src={taroNaturalSource}
                  alt="Taiwan Dajia Farm fields"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Visual badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-200">Taichung, Taiwan</p>
                    <h3 className="text-lg font-bold">正大甲檳榔心芋原鄉土地</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
