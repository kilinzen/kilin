/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "zh" | "en";

export interface TranslationSchema {
  nav: {
    origin: string;
    advantages: string;
    specs: string;
    faq: string;
    contact: string;
    orderSample: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleSub: string;
    desc: string;
    specSummary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    originLabel: string;
    originDesc: string;
  };
  advantages: {
    title: string;
    sub: string;
    processTitle: string;
    traditional: string;
    traditionalDesc: string;
    ours: string;
    oursDesc: string;
    vsTitle: string;
    benefitsTitle: string;
    benefitsSub: string;
    list: Array<{
      id: number;
      title: string;
      desc: string;
    }>;
  };
  specs: {
    title: string;
    sub: string;
    weight: string;
    weightVal: string;
    storage: string;
    storageVal: string;
    shelfLife: string;
    shelfLifeVal: string;
    ingredients: string;
    ingredientsVal: string;
    origin: string;
    originVal: string;
    targetTitle: string;
    targets: string[];
    certification: string;
    certList: string[];
  };
  faq: {
    title: string;
    sub: string;
    items: Array<{
      q: string;
      a: string;
    }>;
    logisticsTitle: string;
    logisticsSub: string;
    steps: Array<{
      id: number;
      title: string;
      desc: string;
    }>;
  };
  contact: {
    title: string;
    sub: string;
    formName: string;
    formCompany: string;
    formType: string;
    companyTypes: string[];
    formEmail: string;
    formPhone: string;
    formMsg: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    sampleReq: string;
    sampleCheckbox: string;
  };
  footer: {
    factoryAddress: string;
    phone: string;
    email: string;
    hours: string;
    rights: string;
    addressVal: string;
  };
}
