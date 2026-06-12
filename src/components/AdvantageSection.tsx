/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, TranslationSchema } from "../types";
import { 
  Users, 
  Sparkles, 
  Clock, 
  Trash2, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Award,
  Coffee,
  Cookie,
  Cake,
  Building2
} from "lucide-react";
import taroLaborSaved from "../assets/images/taro_labor_saved_1779950193601.png";
import taroConsistent from "../assets/images/taro_consistent_1779950213423.png";
import taroTimeSaved from "../assets/images/taro_time_saved_1779950233924.png";
import taroWasteReduced from "../assets/images/taro_waste_reduced_1779950252096.png";
import taroFastServing from "../assets/images/taro_fast_serving_1779950268384.png";
import taroPureQuality from "../assets/images/taro_pure_quality_1779950284138.png";

interface AdvantageSectionProps {
  lang: Language;
  t: TranslationSchema;
}

export default function AdvantageSection({ lang, t }: AdvantageSectionProps) {
  // Map custom generated real-world images for the 6 advantages to maximize realism
  const getBenefitImage = (id: number) => {
    switch (id) {
      case 1:
        return (
          <img 
            src={taroLaborSaved} 
            alt="Reduced Labor Cost Workstation" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      case 2:
        return (
          <img 
            src={taroConsistent} 
            alt="Premium Testing Spoon Consistency" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      case 3:
        return (
          <img 
            src={taroTimeSaved} 
            alt="Minimalist Hourglass Timer Setup" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      case 4:
        return (
          <img 
            src={taroWasteReduced} 
            alt="Cryogenic Frozen Vacuum Sealed Package" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      case 5:
        return (
          <img 
            src={taroFastServing} 
            alt="Smooth Taro milk tea Swirl prep" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      case 6:
        return (
          <img 
            src={taroPureQuality} 
            alt="Pure 100 percent natural taro scoop" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        );
      default:
        return (
          <div className="w-full h-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">
            芋
          </div>
        );
    }
  };

  return (
    <section id="advantages" className="py-20 bg-[#FAF9FC] border-y border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100 uppercase">
            {lang === "zh" ? "B2B 核心革命" : "B2B Core Revolution"}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            {t.advantages.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.advantages.sub}
          </p>
        </div>

        {/* Process Comparison Section (Traditional vs Ours) */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-10 tracking-tight flex items-center justify-center space-x-2">
            <span>{t.advantages.processTitle}</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Traditional in-house recipe card */}
            <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full translate-x-1/3 -translate-y-1/3 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-400 opacity-40" />
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100 mb-6">
                  <span>Traditional</span>
                  <span>·</span>
                  <span>{t.advantages.traditional}</span>
                </div>

                <p className="text-sm font-semibold text-slate-700 mb-6">
                  {lang === "zh" 
                    ? "後廚傳統製作：耗時、高損耗、且品管極困難" 
                    : "Traditional In-store Cooking: labor-heavy, unreliable quality, high wastage"}
                </p>

                {/* Steps Timeline or Flow */}
                <div className="space-y-4">
                  {[
                    { step: 1, text: lang === "zh" ? "採購與庫存生鮮芋頭 (容易乾癟、發熱、腐爛)" : "Procuring whole fresh root (highly perishable)" },
                    { step: 2, text: lang === "zh" ? "人工削皮與壞果切除 (不僅高危險，果實折損高達 30%-40%)" : "Hazardous manual peeling & sorting (losses up to 35%)" },
                    { step: 3, text: lang === "zh" ? "大量自來水高覆蓋切塊與清洗" : "Water flushing & batch washing" },
                    { step: 4, text: lang === "zh" ? "高溫爐火蒸煮 (高瓦斯與水電耗能，且夏季後廚酷熱)" : "Prolonged steaming (high power bills, generates high humidity)" },
                    { step: 5, text: lang === "zh" ? "機器打泥或手工擣碎 (容易造成纖維攪拌不均，產生硬塊結粒)" : "Whipping & smashing (prone to lumpy uneven consistency)" },
                    { step: 6, text: lang === "zh" ? "降溫裝盒並置於冷藏 (易造成高微生物總菌數，保存期限僅 2 天)" : "Cooling down & refrigeration (fragile food safety, lasts only 2 days)" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3 text-slate-600 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-200 text-red-500 flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                        {item.step}
                      </span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-50 text-xs text-red-500 flex items-center space-x-1.5 font-semibold">
                <span className="block italic">
                  {lang === "zh" 
                    ? "⚠️ 現作隱形成本：薪人工資 + 巨額水電瓦斯費 + 嚴重食材報廢 = 原料面高達2.5倍真實支出" 
                    : "⚠️ Hidden costs: labor salary + extreme gas bills + severe raw bulb waste = 2.5X raw purchase costs"}
                </span>
              </div>
            </div>

            {/* Our Frozen Packets card */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl text-white shadow-md relative overflow-hidden flex flex-col justify-between">
              {/* Abstract decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-white/10 rounded-full" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/20 mb-6 backdrop-blur-md">
                  <span>Our process</span>
                  <span>·</span>
                  <span>{t.advantages.ours}</span>
                </div>

                <p className="text-sm font-bold text-purple-100 mb-6">
                  {lang === "zh" 
                    ? "革命性極簡備料：即時供應、100% 潔淨天然、安心備戰" 
                    : "Revolutionary simplicity: instant, zero-touch, clean safety"}
                </p>

                {/* Steps Timeline or Flow */}
                <div className="space-y-6">
                  {[
                    { step: 1, title: lang === "zh" ? "大甲契作農場，精選頂級芋肉" : "Dajia Contract Farming", desc: lang === "zh" ? "產地直送自有 ISO22000 認證自動化整潔工廠" : "Direct transit to our certified automated facility" },
                    { step: 2, title: lang === "zh" ? "專業高溫蒸煮與智能極細打泥" : "High-speed Refining", desc: lang === "zh" ? "透過精密機組均質化，確保每袋達到分子級細緻，口感絲滑不帶結塊" : "Homogenized molecular texture, silky smoothness with zero lumps" },
                    { step: 3, title: lang === "zh" ? "1kg 量身袋裝 ➔ IQF 急速深冷急凍 -18°C" : "1kg Cryogenic Sealing & Flash Freezing", desc: lang === "zh" ? "完美鎖住初蒸出爐時的純白芋香與營養纖維" : "Locks in fresh-out-of-steamer aroma and prebiotic fiber" },
                    { step: 4, title: lang === "zh" ? "冷藏解凍 ➔ 剪袋即用！" : "Thaw & Squeeze to Use!", desc: lang === "zh" ? "不花一秒鐘、不費一分力，完美與其他原料搭配使用" : "Zero stress, zero labor hours, instantly applicable to recipes" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3.5">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-purple-700 flex items-center justify-center font-bold text-xs shadow-sm mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-purple-150 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-400/30 text-xs text-purple-100 flex items-center space-x-1.5 font-bold">
                <span className="block">
                  {lang === "zh"
                    ? "✓ 實踐效益：備料時間立刻改寫為「0 毫秒」，無廢棄皮屑，完美高良率。"
                    : "✓ Outcomes: Kitchen preparation time cut down to '0 ms' with absolutely zero waste."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 四大商用客戶解決方案 Segment */}
        <div className="my-24 py-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#7E60B8] uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
              {lang === "zh" ? "四大範疇對接" : "FOUR SEGMENTS"}
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              {lang === "zh" ? "為四大指標客群，解鎖更高效的獲利路徑" : "Tailored Operational Pathways for F&B Clients"}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-650">
              {lang === "zh" 
                ? "無論您是深耕飲品的街邊店，還是出貨龐大的中央廚房，我們都能完美對接您的工藝細節，讓好口感也能標準化。"
                : "Deliver artisan-level taro textures in highly standardized, hassle-free batches regardless of your scale."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(lang === "zh" ? [
              {
                id: "drinks",
                icon: <Coffee className="w-5 h-5 text-purple-600" />,
                tag: "手搖茶飲店 / 連鎖茶飲",
                title: "秒速調配 ‧ 絲滑不吸阻",
                painpoint: "傳統現場現熬常產生粗硬硬塊、造成粗吸管堵塞，且尖峰用餐期備料容易中斷。",
                solution: "微米級 homogeneous 研磨，保留檳榔心芋天然鬆綿口感且無一絲結粒，與鮮奶、厚椰乳 5 秒調勻即刻出餐。",
                metric: "出餐調配速度 +400%"
              },
              {
                id: "bakery",
                icon: <Cookie className="w-5 h-5 text-amber-600" />,
                tag: "專業麵包坊 / 烘焙連鎖",
                title: "高耐焙烤 ‧ 內餡飽滿紮實",
                painpoint: "市售芋泥高壓烤焙時水分快速析出，造成麵包空洞塌陷、爆裂外溢；手工剝皮費時具有受傷風險。",
                solution: "專業多段溫控均質，含水量與黏彈度針對烘焙環境黃金比例調配，烤後膨潤飽滿，口口皆能咬到純香芋餡。",
                metric: "烘焙備料工時節省 4小時/日"
              },
              {
                id: "cake",
                icon: <Cake className="w-5 h-5 text-rose-500" />,
                tag: "精品蛋糕店 / 網紅甜點坊",
                title: "優雅莫蘭迪粉紫 ‧ 抹面絲滑",
                painpoint: "廉價批發芋泥常摻混著色劑、人工香精與綠豆沙，味道粗糙不純，破壞精品千層或生乳捲質感。",
                solution: "堅持 100% 大甲原產純熟芋，不加一滴澱粉。與高脂進口動物鮮奶油完美拌合，抹面無氣孔、色澤自然高級。",
                metric: "100% 天然素材無化學添加"
              },
              {
                id: "factory",
                icon: <Building2 className="w-5 h-5 text-emerald-600" />,
                tag: "食品加工廠 / 中央廚房",
                title: "雙重國際食安 ‧ 年度保價合約",
                painpoint: "生鮮散裝採購受節氣與颱風影響價格劇烈波動，且多數無法通過大型食品級工序與菌落檢驗。",
                solution: "自建高規格 ISO 22000 與 HACCP 自動化食品廠，出廠均附檢驗。契作合約保價，鎖定每季食材成本。",
                metric: "安全規範：雙重國際頂規驗證"
              }
            ] : [
              {
                id: "drinks",
                icon: <Coffee className="w-5 h-5 text-purple-600" />,
                tag: "Beverage & Boba Shops",
                title: "Instant Mixing, Ultra-Smooth",
                painpoint: "Crude manual whipping clogs straws. Keeping up with hot stove cooking during high rushes is stressful.",
                solution: "Homogenized micro-refining leaves zero lumps. Pairs beautifully with fresh milk or cream caps in 5s flat.",
                metric: "Dispense Speed: 5s / Cup"
              },
              {
                id: "bakery",
                icon: <Cookie className="w-5 h-5 text-[#D97706]" />,
                tag: "Artisan Bakeries",
                title: "Bake-Stable Moisture, Solid Fillings",
                painpoint: "Inconsistent water holding splits or causes hollow bake collapses. Manual bulb peeling is dangerous & trashy.",
                solution: "Calibrated density holds hydration under high heat. Guarantees beautiful oven swelling in pastries and classic bread buns.",
                metric: "Bake Prep Time: Saves 4 hrs/day"
              },
              {
                id: "cake",
                icon: <Cake className="w-5 h-5 text-rose-500" />,
                tag: "Cake Studios & Pâtisseries",
                title: "Gourmet Lavender Hue, Smooth Cream",
                painpoint: "Dye-loaded second-tier pastes carry artificial scents or mung bean flour, ruining fresh whipping creams.",
                solution: "Zero extra starches or chemicals. Perfect natural lavender purplish hue and aroma profile for mille-crepes or Swiss rolls.",
                metric: "100% Premium Ingredient Trust"
              },
              {
                id: "factory",
                icon: <Building2 className="w-5 h-5 text-[#059669]" />,
                tag: "Catering & Food Processing OEM",
                title: "Global Audits Passed, Budget Hedged",
                painpoint: "Agricultural supply fluctuates wildly based on typhoon seasons. Small farms fail basic commercial sanitation audits.",
                solution: "State-of-the-art ISO 22000 & HACCP specialized line. Direct contract options for large corporate franchises to lockdown costs.",
                metric: "Standardization: Dual ISO & HACCP"
              }
            ]).map((client) => (
              <div 
                key={client.id}
                className="bg-white p-6 rounded-2xl border border-purple-100/30 hover:border-purple-300/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      {client.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono tracking-wider block">SEGMENT SOLUTION</span>
                      <span className="text-sm font-black text-slate-800 leading-none">{client.tag}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-black text-slate-900 mb-3 tracking-tight leading-snug">
                    {client.title}
                  </h4>

                  <div className="space-y-3.5 mb-5">
                    <p className="text-xs text-red-600 bg-red-50/70 py-1.5 px-2.5 rounded-lg border border-red-100/40 leading-relaxed font-medium">
                      <span className="font-bold mr-1">{lang === "zh" ? "⚠️ 傳統後廚痛點：" : "⚠️ Traditional Pain:"}</span>
                      {client.painpoint}
                    </p>
                    <p className="text-xs text-slate-600 bg-purple-50/30 py-2 px-2.5 rounded-lg border border-purple-100/10 leading-relaxed">
                      <span className="font-bold text-[#7E60B8] mr-1">{lang === "zh" ? "✓ 芋研所解決方案：" : "✓ Taro Research Solution:"}</span>
                      {client.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-[#7E60B8] bg-purple-50 px-2 py-0.5 rounded font-black uppercase tracking-wider font-mono">
                    {client.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 6 Advantages Cards Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              {t.advantages.vsTitle}
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              {t.advantages.benefitsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advantages.list.map((advantage) => (
              <div 
                key={advantage.id}
                className="bg-white p-7 rounded-2xl border border-purple-100/40 hover:border-purple-300/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 group"
              >
                {/* 16:9 aspect ratio real photo visual banner */}
                <div className="w-full aspect-[16/10] rounded-xl bg-purple-50/50 overflow-hidden relative shadow-sm border border-slate-100">
                  {getBenefitImage(advantage.id)}
                  <div className="absolute top-2 left-2 bg-slate-900/60 backdrop-blur-md text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full">
                    BENEFIT 0{advantage.id}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                  {advantage.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
