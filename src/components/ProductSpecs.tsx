/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { Scale, ShieldAlert, Archive, FileSpreadsheet, Map, Check } from "lucide-react";
import taroNaturalSource from "../assets/images/taro_natural_source_1779949735167.png";
import taroCommercialApp from "../assets/images/taro_commercial_app_1779949755244.png";

interface ProductSpecsProps {
  lang: Language;
  t: TranslationSchema;
}

export default function ProductSpecs({ lang, t }: ProductSpecsProps) {
  return (
    <section id="specs" className="py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
            {lang === "zh" ? "產品規格與品管" : "Industrial Spec & QC"}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            {lang === "zh" ? (
              <>
                <span className="inline-block">專業商用規格</span>
                <span className="inline-block">與安全認證</span>
              </>
            ) : (
              t.specs.title
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.specs.sub}
          </p>
        </div>

        {/* Bento Grid Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Spec details card (Left) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6 flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-purple-600" />
                <span>{lang === "zh" ? "產品主要規格書" : "Technical Specification Document"}</span>
              </h3>

              <div className="space-y-6">
                {[
                  { icon: <Scale className="w-4 h-4 text-purple-500" />, label: t.specs.weight, val: t.specs.weightVal },
                  { icon: <ShieldAlert className="w-4 h-4 text-purple-500" />, label: t.specs.storage, val: t.specs.storageVal },
                  { icon: <Archive className="w-4 h-4 text-purple-500" />, label: t.specs.shelfLife, val: t.specs.shelfLifeVal },
                  { icon: <Map className="w-4 h-4 text-purple-500" />, label: t.specs.ingredients, val: t.specs.ingredientsVal },
                  { icon: <Check className="w-4 h-4 text-emerald-500" />, label: t.specs.origin, val: t.specs.originVal }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase mb-0.5">{item.label}</h4>
                      <p className="text-sm font-semibold text-slate-800 leading-normal">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100/30 flex items-center space-x-3.5 mt-8">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs uppercase">
                100%
              </span>
              <p className="text-xs text-purple-800 font-medium">
                {lang === "zh" 
                  ? "我們堅持 100% 純天然，拒絕添加任何綠豆沙、修飾澱粉、黃色或紫色色素與化學香精。誠實申報，安心供貨。" 
                  : "We pledge absolute natural honesty. No mung beans, starch fillers, or chemical flavor agents."}
              </p>
            </div>
          </div>

          {/* Sourcing Visual Banner Panel (Right Top) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-slate-200/50 p-4 shadow-sm overflow-hidden flex-1 relative group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden rounded-xl bg-slate-50 mb-4">
                <img
                  src={taroNaturalSource}
                  alt="Dajia Taro fields"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-sm text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-md">
                  {lang === "zh" ? "大甲契作產地" : "Dajia Dedicated farms"}
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 tracking-tight">大甲特水檳榔心芋頭</h4>
                <p className="text-xs text-slate-500 mt-1 lines-2 leading-relaxed">
                  大甲擁有獨特有機腐殖土壤與豐沛水源，產出的檳榔心芋頭身形飽滿，澱粉香高、質地綿密，全台獨占鰲頭。
                </p>
              </div>
            </div>

            {/* Sourcing Visual Banner Panel (Right Bottom) */}
            <div className="bg-white rounded-2xl border border-slate-200/50 p-4 shadow-sm overflow-hidden flex-1 relative group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden rounded-xl bg-slate-50 mb-4">
                <img
                  src={taroCommercialApp}
                  alt="Taro application dessert"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-sm text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-md">
                  {lang === "zh" ? "商業餐飲應用" : "Commercial culinary use"}
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 tracking-tight">手搖飲與烘焙御用食材</h4>
                <p className="text-xs text-slate-500 mt-1 lines-2 leading-relaxed">
                  極佳的乳化與融合性，不論是鮮奶調茶、厚培土司抹面，還是千層切面，都能展現頂級天然的芋泥亮眼香氣。
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Target customer profiles and certifications cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Target Customers */}
          <div className="bg-white p-8 rounded-2xl border border-purple-100/40 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-6 border-b border-purple-50 pb-3 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7E60B8] mr-2"></span>
              {t.specs.targetTitle}
            </h3>
            <ul className="space-y-4">
              {t.specs.targets.map((target, index) => (
                <li key={index} className="flex items-start text-sm text-slate-650">
                  <span className="mr-3 flex items-center justify-center w-5 h-5 rounded-md bg-purple-50 text-[#7E60B8] mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="font-semibold">{target}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality certifications */}
          <div className="bg-white p-8 rounded-2xl border border-purple-100/40 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-6 border-b border-purple-50 pb-3 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>
                {t.specs.certification}
              </h3>
              <ul className="space-y-4">
                {t.specs.certList.map((cert, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-600">
                    <span className="mr-3 flex-shrink-0 w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                      ISO
                    </span>
                    <span className="font-semibold">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[11px] text-slate-400 mt-8 italic border-t border-slate-100 pt-4 leading-relaxed">
              {lang === "zh" 
                ? "* 所有出廠批次皆隨貨提供 SGS 安全衛生檢測與重金屬防腐劑驗證報告影本，支持各連鎖團隊進行溯源管理。" 
                : "* Every manufactured batch is shipped with physical carbon-copy safety cert logs."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
