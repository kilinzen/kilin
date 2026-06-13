/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language, TranslationSchema } from "../types";
import { Sparkles, Send, CheckCircle, Mail, Phone, MapPin, Building2 } from "lucide-react";

interface ContactFormProps {
  lang: Language;
  t: TranslationSchema;
}

export default function ContactForm({ lang, t }: ContactFormProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyType: "",
    email: "",
    phone: "",
    message: "",
    isSampleRequested: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, isSampleRequested: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick client-side validations
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setErrorMessage(lang === "zh" ? "請填寫所有必要欄位（姓名、公司、信箱、聯絡電話）" : "Please fill out all required fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    // Simulate backend API persistence delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#FAF9FC] to-white relative overflow-hidden">
      {/* Decorative ambient background vector */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Brief & Brand Trust Columns (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#7E60B8] uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                {lang === "zh" ? "B2B 樣品測試申請" : "Claim Wholesale Samples"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight break-keep">
                {t.contact.title}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.contact.sub}
              </p>
            </div>

            {/* Quick contact direct access details */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm space-y-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono border-b border-slate-100 pb-3">
                {lang === "zh" ? "B2B 批發採購諮詢處" : "B2B Headquarters Business Desk"}
              </h4>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100/60 flex items-center justify-center text-purple-700 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold font-mono tracking-wider uppercase">TEL PHONE</span>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">04-2688-6688（專屬客戶服務熱線）</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100/60 flex items-center justify-center text-purple-700 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold font-mono tracking-wider uppercase">EMAIL ADDR</span>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">b2b@tarolab.com.tw</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100/60 flex items-center justify-center text-purple-700 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold font-mono tracking-wider uppercase">FACTORY LOC</span>
                  <span className="text-xs font-bold text-slate-800 tracking-tight md:truncate block">台灣台中市大甲區頂安路芋頭科技工業區 88 號</span>
                </div>
              </div>
            </div>

            {/* Micro warning */}
            <div className="text-xs text-slate-400 leading-relaxed lg:max-w-sm">
              {lang === "zh"
                ? "* 每位烘焙主廚或飲品店主僅限索取一次 1kg 樣品包。非餐飲業者或私人名義恕不寄送，申請後專員會致電確認商標或統編，感謝體諒。"
                : "* Sample distributions are exclusive to licensed cafe owners or bakery workshops. Verified business ID required."}
            </div>
          </div>

          {/* Form Interactive Panel (Right) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/50 shadow-sm p-8 sm:p-10 relative">
            
            {isSuccess ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {lang === "zh" ? "我們已收到您的索取申請！" : "Inquiry Safely Received!"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  {t.contact.success}
                </p>

                <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-xl max-w-md w-full text-left font-mono text-xs text-slate-600 hidden sm:block">
                  <h4 className="font-bold border-b border-slate-100 pb-2 mb-3 text-slate-800 uppercase flex items-center justify-between">
                    <span>Inquiry Ticket Summary</span>
                    <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">PENDING REVIEWS</span>
                  </h4>
                  <p className="mb-1"><strong>NAME:</strong> {formData.name}</p>
                  <p className="mb-1"><strong>COMPANY:</strong> {formData.company}</p>
                  <p className="mb-1"><strong>PHONE:</strong> {formData.phone}</p>
                  <p className="mb-1"><strong>SAMPLE OPT-IN:</strong> {formData.isSampleRequested ? "YES (Free 1kg Bag)" : "NO (Inquiry Only)"}</p>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      company: "",
                      companyType: "",
                      email: "",
                      phone: "",
                      message: "",
                      isSampleRequested: true,
                    });
                  }}
                  className="font-bold text-xs text-[#7E60B8] hover:underline cursor-pointer"
                >
                  {lang === "zh" ? "← 重設表單與重新申請" : "← Reset and Submit Another Ticket"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 text-xs font-semibold text-red-700 rounded-md">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                      <span>{t.contact.formName}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={lang === "zh" ? "您的真實姓名（例：張經理）" : "Your Full Name"}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium"
                    />
                  </div>

                  {/* Company name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                      <span>{t.contact.formCompany}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Building2 className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder={lang === "zh" ? "店家招牌或公司統編" : "Store name or tax code"}
                        value={formData.company}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                      <span>{t.contact.formPhone}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      placeholder={lang === "zh" ? "電話或手機號碼" : "Contact Phone No."}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                      <span>{t.contact.formEmail}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="business@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Company Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t.contact.formType}
                  </label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium"
                  >
                    {t.contact.companyTypes.map((type, index) => (
                      <option key={index} value={index === 0 ? "" : type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message detail */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t.contact.formMsg}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={lang === "zh" ? "例如：我們全台有12家飲料加盟店，希望測試冷調芋頭鮮奶細乳化效果！" : "E.g., We have multiple bakeries, testing custom fillings..."}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm font-medium resize-none"
                  />
                </div>

                {/* Free Sample Checklist */}
                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="isSampleRequested"
                    checked={formData.isSampleRequested}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="isSampleRequested" className="text-xs sm:text-sm font-bold text-purple-900 cursor-pointer select-none">
                    {t.contact.sampleCheckbox}
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#7E60B8] hover:bg-[#684C9F] text-white font-bold text-base transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>{isLoading ? t.contact.submitting : t.contact.submit}</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
