/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSchema } from "./types";

export const translations: Record<"zh" | "en", TranslationSchema> = {
  zh: {
    nav: {
      origin: "大甲產地",
      advantages: "研所優勢",
      specs: "產品規格",
      faq: "常見問題",
      contact: "聯絡我們",
      orderSample: "免費索取樣品",
    },
    hero: {
      badge: "芋研所 TARO LAB · 100% 大甲自營工廠低溫加工",
      titleMain: "芋研所大甲急凍純芋泥",
      titleSub: "免削皮、解凍即用！專為商用茶飲烘焙打造的頂級芋泥",
      desc: "大甲契作產地直營的極致熟化芋泥，配方乾淨簡單，僅含大甲特級檳榔心芋頭、水與砂糖。搭配自有食品廠專業蒸汽熟化與低溫高速急速冷凍技術，鎖住鮮甜，保留天然芋香與細緻綿密的極致口感，絕無防腐劑、色素、或任何其他化學添加物。",
      specSummary: "安心規格：純熟化芋泥（無防腐劑、色素化學添加） · 1kg 保鮮袋裝 · 20包/箱",
      ctaPrimary: "免費申請 1kg 樣品",
      ctaSecondary: "檢視產品詳細規格",
      originLabel: "芋研所契約農作檳榔心芋",
      originDesc: "大甲特有的肥沃黑黏土與純淨水源，孕育出澱粉質高、質地細緻綿密的檳榔心芋。我們深耕在地，深入契作農地，從源頭確保每一批原料都達到食品加工的最高標準。",
    },
    advantages: {
      title: "顛覆傳統！為什麼各大連鎖餐飲都改用我們的冷凍純芋泥？",
      sub: "與其每天在後廚面對不穩定的生鮮食材與繁重的體力勞動，不如交給專業工廠，讓您聚焦於品牌研發與客流增長。",
      processTitle: "繁瑣製程 VS. 全新簡化流程",
      traditional: "傳統現場手工製程",
      traditionalDesc: "採購生鮮 ➔ 人工削皮 (高損耗) ➔ 切塊洗滌 ➔ 蒸汽熟煮 (耗能耗時) ➔ 手工或機器打泥 (易結塊不均) ➔ 冷卻保存 (細菌滋生風險)",
      ours: "我們專利的冷凍芋泥流程",
      oursDesc: "大甲產地直達 ➔ 自有工廠科技清洗 ➔ 削皮蒸熟 ➔ 專業機組低溫細化打泥 (極度細緻) ➔ 1kg/袋分裝 ➔ 瞬間急凍運送",
      vsTitle: "我們產品帶給店家的 6 大絕佳優勢",
      benefitsTitle: "店家的極致營運優勢",
      benefitsSub: "不僅僅是食品原料，更是提升整體店鋪利潤率與管理效率的利器。",
      list: [
        {
          id: 1,
          title: "大幅降低人力成本",
          desc: "後廚不用再特別安排專職人員頂著熱氣削皮、高溫蒸煮、費力打泥，一鍵釋放後廚寶貴戰力。",
        },
        {
          id: 2,
          title: "極致穩定的產出品質",
          desc: "生鮮芋頭會隨季節與產地批次產生口感差異。我們經標準化均質製程，每包的細緻度、香氣與濃度皆100%一致。",
        },
        {
          id: 3,
          title: "節省大量黃金時間",
          desc: "繁複備料流程縮短為零！只需提前一晚置於冷藏解凍，剪開袋口即可立刻使用，出餐快人一步。",
        },
        {
          id: 4,
          title: "降低生鮮損耗與庫存壓力",
          desc: "不需再擔心生鮮芋頭在潮濕環境中腐爛或堆積皮屑垃圾，極凍包裝擁有12個月超長保鮮期，輕鬆控管食材庫存。",
        },
        {
          id: 5,
          title: "全面提升出餐效率",
          desc: "極其適合手搖飲品店連鎖、中央廚房、飯店宴席及需要大量、高效率、快速出貨的餐飲店家。",
        },
        {
          id: 6,
          title: "無化學添加之乾淨配方",
          desc: "市場上許多次級品會摻雜綠豆沙、便宜澱粉、色素或防腐劑來降低成本。我們堅守品質，除了必需的純水和砂糖之外，主要原料100%採用大甲特級芋頭，絕無添加任何綠豆沙、色素、防腐劑或化學香料。",
        },
      ],
    },
    specs: {
      title: "專業商用規格與安全認證",
      sub: "為了滿足高規格食品工廠和連鎖調飲大牌的品管稽核，我們提供最完整的檢驗與規格報告。",
      weight: "產品淨重",
      weightVal: "1.0 公斤 ± 5% / 精密食品級食品塑料袋裝",
      storage: "保存條件",
      storageVal: "低溫冷凍保存（不可反覆解凍）",
      shelfLife: "保存期限",
      shelfLifeVal: "未開封冷凍 12 個月 / 開封後請於 48 小時內冷藏使用完畢",
      ingredients: "產品成分",
      ingredientsVal: "大甲原產檳榔心芋頭、水、砂糖（無添加任何綠豆沙、色素、防腐劑或化學香料）",
      origin: "生產產地",
      originVal: "台灣台中大甲特約產區 / 自有食品工廠生產（通過 ISO22000 與 HACCP 雙認證）",
      targetTitle: "廣泛適用餐飲範疇",
      targets: [
        "連鎖手搖飲料店 (芋泥鮮奶、芋泥波波、芋頭冰沙等)",
        "專業麵包烘焙坊 (芋泥麵包餡、芋頭酥、傳統中式酥餅)",
        "低溫甜點與蛋糕店 (芋泥千層、生乳捲、生日蛋糕抹面夾餡)",
        "大型食品加工中央廚房 (冷凍預製食品、湯圓餡料)",
        "傳統冰品甜品連鎖 (芋圓八寶冰、仙草凍配料)"
      ],
      certification: "品質與安全保障",
      certList: [
        "SGS 無農藥殘留檢驗合格報告",
        "國際食品安全安全管理系統認證 ISO 22000",
        "食品危害分析管制系統標準 HACCP 驗證",
        "定期投保新台幣 2000 萬元產品責任險"
      ]
    },
    faq: {
      title: "常見問題與客戶解答",
      sub: "為您解答關於大甲冷凍純芋泥批發與供應鏈的所有疑問。",
      items: [
        {
          q: "芋泥到底有沒有加糖、加水或任何人工添加物？",
          a: "我們的芋泥僅包含：優質大甲檳榔心芋頭、水、與少許砂糖以維持風味與保濕度，絕無添加任何化學防腐劑、色素、人工香精、綠豆沙或便宜澱粉。成分單純、真材實料，出廠前皆隨貨提供完整 SGS 檢驗報告，請安心使用！"
        },
        {
          q: "商用後廚解凍與最佳使用的操作方法？",
          a: "建議在使用前一日（約 12-18 小時）將芋泥包從低溫冷凍庫移至冷藏庫（4°C）自然退冰解凍。解凍後只需剪開食品級密封包裝袋角，即可像擠花袋般輕鬆擠入調配杯或攪拌缸，流程極度便利。"
        },
        {
          q: "解凍後的冷藏保存期限多久？可否重新放回冷凍庫？",
          a: "因為芋泥製品一律零化學防腐劑添加，開封解凍後請置於 4°C 冷藏，並建議於 48 小時內儘速使用完畢。請特別注意：解凍後「切勿重新放回冷凍庫反覆冰凍」，否則會破壞芋頭澱粉熟化結構，造成水析並喪失滑順口感。"
        },
        {
          q: "全台配送起運箱數與免冷鏈運費門檻？",
          a: "全台各縣市皆有專業低溫冷鏈物流車配送（含外島地區）。一般常規出貨起運量為 1 箱（共 20 包，20kg）。全島訂購滿 3 箱即可直享免冷鏈物流運費之特惠方案。"
        },
        {
          q: "是否支持連鎖總部的糖度調整或顆粒粗細客製？",
          a: "可以！針對中大型連鎖茶飲研發部、上市櫃食品製造巨頭或中央廚房，當單次或年度簽約供貨量達一定規模時，我們可以利用自有工廠的精密均質研磨機組，專屬調製符合您調配配方的糖度或「顆粒粒徑粗細比例」規格。"
        }
      ],
      logisticsTitle: "產地直達 —— 專業無塵低溫冷鏈流程",
      logisticsSub: "從大甲肥沃土地的天然栽培，到您店鋪後廚的極致口感，我們以自有 ISO22000 科技控溫全程保鮮護送。",
      steps: [
        {
          id: 1,
          title: "契作精選採收",
          desc: "在大甲有機熟成達九個月的檳榔心芋，由農人清晨採掘，2小時內直送我們基地，避免養分流失。"
        },
        {
          id: 2,
          title: "科技高壓蒸煮",
          desc: "於自有 ISO22000 標準無塵車間進行洗滌、蒸汽高熱熟化與均質化研磨打泥，質地絲滑不留顆粒塊。"
        },
        {
          id: 3,
          title: "獨家冷凍鎖鮮技術",
          desc: "1kg 精準充填包裝 ➔ 獨家冷凍鎖鮮技術，封存天然色香，阻絕一切二次微生物滋生。"
        },
        {
          id: 4,
          title: "低溫物流車交付",
          desc: "全程低溫恆溫冷裝卡車交付全台客戶。店家免去整晚後廚的悶熱、削皮垃圾與高昂工資耗用。"
        }
      ]
    },
    contact: {
      title: "商業合作洽詢 & 樣品免費索取",
      sub: "台灣各縣市皆有全程低溫冷鏈物流配送。歡迎全台手搖飲、連鎖餐飲、麵包烘焙主廚索取 1kg 完整樣品包測試！",
      formName: "聯絡人姓名",
      formCompany: "公司/店家/品牌名稱",
      formType: "產業類別",
      companyTypes: ["請選擇產業類別", "手搖飲連鎖 / 個體店", "麵包烘焙坊 / 甜點工作室", "食品加工廠", "飯店 / 餐廳宴席", "其他餐飲相關"],
      formEmail: "電子郵件",
      formPhone: "聯絡電話 (手機或市話)",
      formMsg: "預計每日/每月芋頭需求量或測試細節描述",
      submit: "送出洽詢並申請樣品",
      submitting: "送出資料中...",
      success: "申請成功！我們專業的 B2B 業務專員將會在 24 小時內與您聯繫，並為您郵寄測試樣品包。謝謝您的支持！",
      error: "送出失敗，請檢查資料後再試",
      sampleReq: "樣品索取意願",
      sampleCheckbox: "我需要索取一份 1kg 免費試用樣品包 (運費由我們全額吸收)"
    },
    footer: {
      factoryAddress: "工廠地址",
      addressVal: "台灣台中市大甲區頂安路芋頭科技工業區 88 號",
      phone: "客服諮詢熱線",
      email: "商務電子信箱",
      hours: "營業時間",
      rights: "芋研所大甲冷凍食品科技版權所有。© 2026 Taro Research Labs. 高品質生鮮冷凍批發工廠直營。"
    }
  },
  en: {
    nav: {
      origin: "Dajia Origin",
      advantages: "Our Advantages",
      specs: "Specifications",
      faq: "Q&A FAQ",
      contact: "Contact us",
      orderSample: "Free Sample",
    },
    hero: {
      badge: "No.1 in Taiwan · Owned Specialized Cold Chain Processing Factory",
      titleMain: "Dajia 100% Flash-Frozen Pure Taro Paste",
      titleSub: "No peeling, thaw & use! Ultimate commercial taro recipe solution for wholesale vendors",
      desc: "Delightfully pure taro paste made with only Dajia taro, water, and sugar—absolutely zero chemical colors, starches, or preservatives. Sourced exclusively from premium Dajia taro in Taichung and processed in our certified facility using low-temperature flash freezing to lock in pure natural aroma.",
      specSummary: "Spec: Cooked Taro Paste (Zero Preservative / Starch Fillers) · 1.0 kg/bag · 20 bags/carton",
      ctaPrimary: "Request Free 1kg Sample",
      ctaSecondary: "Get Bulk Wholesale Quotes",
      originLabel: "100% Dajia Betel Nut Taro",
      originDesc: "Formed by premium alluvial soil and organic water resources in Dajia, the Betel Nut Taro variety yields the highest starch density and most fragrant creamy notes. We work with dynamic local contract farms ensuring crop premium standards.",
    },
    advantages: {
      title: "Disrupting the Kitchen! Why Major F&B Brands Switch to Our Frozen Taro Paste",
      sub: "Instead of battling with raw ingredient quality fluctuations, labor fatigue, and high waste, leverage professional off-site processing so you can focus strictly on growth.",
      processTitle: "Traditional Pain points VS. Seamless Modern Flow",
      traditional: "Traditional In-store Laborious Process",
      traditionalDesc: "Wholesale raw bulbs ➔ Manual peeling (High loss/waste) ➔ Slice & wash ➔ Electric steaming (High energy) ➔ Hand or machine smashing (Risks of lumpy texture) ➔ Cold storage & prep (High microbial danger)",
      ours: "Our Patent Cold-Chain Formulation",
      oursDesc: "Direct farm transport ➔ Factory automatic washing ➔ Slicing & steaming ➔ High-speed industrial homogenizing (Ultra smooth) ➔ Sterile 1kg bagging ➔ Cryogenic flash freezing & delivery",
      vsTitle: "6 Supreme Operational Perks Brought to Your Store",
      benefitsTitle: "Ultimate Vendor Advantages",
      benefitsSub: "More than just premium ingredients, it is a operational lever to boost kitchen margin, speed, and standard consistency.",
      list: [
        {
          id: 1,
          title: "Drastically Cuts Down Labor Cost",
          desc: "Staff no longer need to spend hours peeling, steaming, and whipping. Re-allocate precious team hours to direct customer-facing services instead.",
        },
        {
          id: 2,
          title: "Rock-solid Quality Consistency",
          desc: "Fresh taro flavor varies wildly across seasons and harvesting batches. Our standardized processing secures 100% consistency in density, natural sweetness, and silkiness.",
        },
        {
          id: 3,
          title: "Saves Massive Kitchen Prep Time",
          desc: "Kitchen preparation time drops to absolute zero. Simply transfer the frozen bag to a 4°C chiller the night before, snip open, and start cooking instantly.",
        },
        {
          id: 4,
          title: "Minimizes Spoilage & Inventory Overhead",
          desc: "Zero wastage from rotten fresh taro bulbs or massive peeling scrap disposal. Our frozen packets remain fresh and aromatic for up to 12 months.",
        },
        {
          id: 5,
          title: "Elevates Table Turn & Delivery Speed",
          desc: "Extremely optimized for high-volume beverage chains, central processing kitchens, corporate chefs, and multi-location bulk supply operations.",
        },
        {
          id: 6,
          title: "Clean Ingredient Formula",
          desc: "Low-end paste brands dilute taro with mung beans, starch fillers, or synthetic fragrance. We stay absolutely honest: containing only premium taro, water, and sugar, with zero preservatives or food dyes.",
        },
      ],
    },
    specs: {
      title: "Industrial Commercial Specs & Certifications",
      sub: "To seamlessly pass food auditing and fulfill safety regulations for global franchises, we provide absolute chemical and physical inspection reports.",
      weight: "Net Weight",
      weightVal: "1.0 kg ± 5% / High barrier commercial food-grade bag",
      storage: "Storage conditions",
      storageVal: "Low-temperature frozen storage (Do not refreeze after thawing)",
      shelfLife: "Shelf Life",
      shelfLifeVal: "12 months unopened frozen / Use within 48 hours chilled after opening",
      ingredients: "Ingredients List",
      ingredientsVal: "Taiwanese Dajia Betel Nut Taro, Water, Sugar (Zero chemical starch, zero mung beans, zero preservatives/fragrance)",
      origin: "Origin & Production",
      originVal: "Dajia, Taichung, Taiwan / Self-owned ISO 22000 and HACCP certified automated food factory",
      targetTitle: "Ideal Culinary Application Areas",
      targets: [
        "Beverage Brands (Taro Fresh Milk, Taro Boba Shakes, Taro Slush)",
        "Premium Bakeries (Taro Pastry buns, taro filled cakes, mid-autumn pastries)",
        "Dessert & Cake Studios (Taro Mille Crepes, Taro Swiss Rolls, Cream fillings)",
        "Central Kitchens & Catering (Ready-to-eat products, sweet dumplings)",
        "Asian Dessert Parlors (Taro ice toppings, grass jelly taro purees)"
      ],
      certification: "Quality Assurance & Standards",
      certList: [
        "SGS Non-residual Pesticide Standard certified",
        "ISO 22000 Food Safety Management System certification",
        "HACCP Food Safety Hazards Control standard validated",
        "NTD 20 million comprehensive product liability insurance covered"
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      sub: "Get answers regarding our Dajia frozen taro paste wholesale parameters & processing supply chains.",
      items: [
        {
          q: "Does your taro paste contain added water, sugar, or any artificial ingredients?",
          a: "Our taro paste contains only: premium Dajia Betel Nut taro, pure water, and white sugar for stability and flavor preservation. We absolutely do not use any chemical starch fillers, mung beans, preservatives, artificial colors, or artificial fragrances. Complete SGS reports are available for every batch."
        },
        {
          q: "What is the best configuration to thaw and use within professional kitchens?",
          a: "Simply transfer the required vacuum pouches from frozen chambers to standard chillers (4°C) roughly 12-18 hours prior to baking or mixer assembly. Snip the pouch corner to seamlessly pipe or spread. Prep labor time instantly becomes absolute zero."
        },
        {
          q: "How long is the shelf life once defrosted? Can we put it back in the freezer?",
          a: "Since the paste is completely free of chemical preservatives, keep it chilled under 4°C after opening and use within 48 hours. Crucial safety warning: DO NOT put it back in the freezer once defrosted. Re-freezing alters natural structures, leading to water separation and quality loss."
        },
        {
          q: "What is the bulk shipping threshold and free cold-transport terms?",
          a: "All Taiwanese cities (with overseas islands supported) are integrated into our professional cold trucks. Baseline wholesale shipping starts from 1 box (20 packs, i.e., 20kg cumulative). Cold storage delivery charges are waived for purchases over 3 boxes."
        },
        {
          q: "Do you offer private labeled sweetness adjustment or granule diameter customizations?",
          a: "Absolutely! For large beverage franchises and food factories, upon yearly volume contract sign-off, we can utilize custom automated milling gear to adjust sweetness profiles or specify customized granule diameters to match your recipes perfectly."
        }
      ],
      logisticsTitle: "Direct Cold-Chain Process Journey",
      logisticsSub: "From the rich soils of Dajia directly to your kitchen workstation, we preserve perfect farm freshness.",
      steps: [
        {
          id: 1,
          title: "Cultivation & Harvesting",
          desc: "Taro roots maturing in nutritious alluvial soil are harvested and sent directly within 2 hours to our factory base."
        },
        {
          id: 2,
          title: "Clean High-pressure Steam",
          desc: "In our specialized ISO22000 environment, whole raw roots are peeled, high-pasteurized, and ultra-liquefied to lock in fresh nutrients."
        },
        {
          id: 3,
          title: "IQF Cryogenic Sealing",
          desc: "Immediate flash-freezing in zero-oxygen plastic pouches preserves raw volatile aroma and natural purplish sheen."
        },
        {
          id: 4,
          title: "Cold Chain Logistics",
          desc: "Fully monitored refrigerated fleets ship exactly to your stores, dropping kitchen prep workloads to absolute zero."
        }
      ]
    },
    contact: {
      title: "B2B Sales Support & Free Samples",
      sub: "We provide wholesale low-temperature cold chain logistics throughout Taiwan. Beverage managers and baking chefs are welcome to apply for a free 1kg testing sample pouch!",
      formName: "Full Name",
      formCompany: "Company / Shop / Brand Name",
      formType: "Industry Category",
      companyTypes: ["Select Category", "Beverage Franchise / Shop", "Bakery / Dessert Studio", "Food Factory / OEM", "Hotel / Catering Group", "Other Food Service"],
      formEmail: "Business Email",
      formPhone: "Mobile or Direct phone",
      formMsg: "Estimated daily requirements or sample testing specifications",
      submit: "Submit and Claim Sample",
      submitting: "Submitting inquiry...",
      success: "Inquiry Sent! A representative will connect with you in 24 hours to organize your free 1kg sample shipment. Thank you!",
      error: "Error sending, please re-check your form",
      sampleReq: "Sample Request Opt-In",
      sampleCheckbox: "I would like to request a FREE 1kg trial sample package (Shipping fully covered by us)."
    },
    footer: {
      factoryAddress: "Factory Address",
      addressVal: "No. 88, Dingan Rd., Dajia Dist., Taichung City, Taiwan (Taro Technology Park)",
      phone: "Customer Support Hotlines",
      email: "B2B Business Email",
      hours: "Business Hours",
      rights: "Taro Research Labs Co., Ltd. (芋研所) All rights reserved. Organic Farming & Cold-Chain Processing Direct."
    }
  }
};
