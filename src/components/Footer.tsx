/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { MapPin, PhoneCall, MailOpen, Activity, Compass, MessageCircle } from "lucide-react";

interface FooterProps {
  lang: Language;
  t: TranslationSchema;
}

export default function Footer({ lang, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Top detailed grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white font-black text-sm">
                帝
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                CryoLock 極凍鎖鮮 | 帝保股份有限公司
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === "zh"
                ? "專業商用原料供應。提供100%純芋頭泥，冷凍保存、解凍即用。品質穩定，標準化出品。"
                : "Professional commercial ingredient supplier. Providing 100% pure taro paste, frozen storage, thaw and use. Stable quality, standardized production."}
            </p>
            
            <div className="mt-6 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 flex items-center justify-center text-slate-500 font-bold">👤</span>
                <span className="font-mono">聯絡人：張承瑋</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span className="font-mono">聯絡方式：0901394309</span>
              </div>
            </div>
          </div>

          {/* Column 2: Nav Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono border-b border-slate-800 pb-2 mb-4">
              {lang === "zh" ? "快捷網頁章節" : "PAGE LINKAGES"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: t.nav.origin, targetId: "origin" },
                { label: t.nav.advantages, targetId: "advantages" },
                { label: t.nav.specs, targetId: "specs" },
                { label: t.nav.faq, targetId: "faq" },
                { label: t.nav.contact, targetId: "contact" }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.targetId);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-purple-400 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trading office hours */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono border-b border-slate-800 pb-2 mb-4">
              {t.footer.hours}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="block font-semibold text-slate-200">
                  {lang === "zh" ? "預約考察與洽公：" : "Work days:"}
                </span>
                <span>{lang === "zh" ? "週一至週五 08:30 - 17:30" : "Mon - Fri 08:30 - 17:30"}</span>
              </li>
              <li>
                <span className="block font-semibold text-slate-200">
                  {lang === "zh" ? "冷鏈車出貨配送：" : "Cold logistics:"}
                </span>
                <span>{lang === "zh" ? "全台週一至週六上午配送" : "Mon - Sat morning delivery"}</span>
              </li>
              <li>
                <span className="block font-semibold text-slate-200">
                  {lang === "zh" ? "線上 B2B 諮詢客服：" : "Online Support:"}
                </span>
                <span>24 小時（本站表單全年無休）</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://lin.ee/UBRd8jb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#06C755] hover:text-[#05b34c] transition-colors font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === "zh" ? "LINE 官方客服" : "LINE Support"}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom copyrights bar */}
      <div className="border-t border-slate-800 bg-slate-950 text-slate-500 py-6 text-xs text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0">
          <span>
            {t.footer.rights}
          </span>
          <div className="flex space-x-4 text-[10px]">
            <span>ISO 22000 CERTIFIED</span>
            <span>·</span>
            <span>HACCP COMPLIANT</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
