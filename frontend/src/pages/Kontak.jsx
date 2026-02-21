import React, { useEffect, useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  CreditCard,
  PenTool,
  Package,
  Wallet,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import Footer from "../components/Footer";

export default function Kontak() {
  const [officers, setOfficers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/contacts")
    .then((res) => res.json())
    .then((data) => {
      setOfficers(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetch contacts:", err);
      setLoading(false);
    });
}, []);

  const steps = [
    { icon: <MessageCircle className="w-5 h-5" />, title: "Hubungi CS" },
    { icon: <FileText className="w-5 h-5" />, title: "Penawaran / Invoice" },
    { icon: <CreditCard className="w-5 h-5" />, title: "DP Minimal 40%" },
    { icon: <PenTool className="w-5 h-5" />, title: "Masuk Desain" },
    { icon: <Package className="w-5 h-5" />, title: "Barang Jadi" },
    { icon: <Wallet className="w-5 h-5" />, title: "Pelunasan" },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-800 pb-20">
      {/* HEADER SECTION */}
      <div className="bg-white border-b border-gray-100 py-16 mb-12 shadow-sm text-center">
        <h1 className="text-4xl font-black italic tracking-tighter text-blue-900 mb-2 uppercase">
          Contact <span className="text-blue-600">Support</span>
        </h1>
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">
          Konsultasi Gratis & Respon Cepat Untuk Anda
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* CUSTOMER RELATION OFFICERS */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-lg font-black uppercase tracking-widest text-blue-900 shrink-0">
              Our Officers
            </h2>
            <div className="h-px bg-gray-100 w-full"></div>
          </div>

          {loading ? (
            <div className="text-center py-10 text-gray-400 animate-pulse">Loading contacts...</div>
          ) : (
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {officers.length === 0 ? (
    <div className="text-center py-10 text-gray-400 animate-pulse">
      Loading contact...
    </div>
  ) : (
    officers.map((officer, index) => (
      <div
        key={index}
        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group"
      >
        <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full mb-4 flex items-center justify-center">
          {officer.image ? (
            <img
              src={`http://127.0.0.1:8000/storage/${officer.image}`}
              alt={officer.title}
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-100 rounded-full border-4 border-white flex items-center justify-center font-black text-gray-300">
              {(officer.title || "DS").substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <h3 className="font-bold text-blue-900 text-sm mb-1">{officer.title}</h3>
        <p className="text-[10px] text-gray-400 uppercase font-bold mb-4 tracking-wide">
          {officer.text}
        </p>
        <a
          href={`https://wa.me/${officer.icon}`} // gunakan nomor WA dari field icon
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white text-[10px] font-black py-2.5 rounded-full transition-all shadow-lg shadow-green-100"
        >
          <MessageCircle className="w-3.5 h-3.5" /> WHATSAPP
        </a>
      </div>
    ))
  )}
</div>
          )}
        </section>

        {/* ALUR PEMESANAN */}
        <section className="mb-20">
          <div className="bg-blue-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <h2 className="relative z-10 text-xl font-black text-white uppercase tracking-widest mb-10 text-center italic">
              Alur Pemesanan <span className="text-blue-400">Mudah</span>
            </h2>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group relative">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-[10px] font-bold text-blue-100 text-center uppercase tracking-widest leading-tight">
                    {step.title}
                  </h3>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-6 text-white/20">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* COMPANY INFO */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-lg font-black uppercase tracking-widest text-blue-900 shrink-0">Company Info</h2>
              <div className="h-px bg-gray-100 w-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Phone className="w-5 h-5 text-blue-600" />, label: "Call Center", value: "+62 851 5888 7675" },
                { icon: <Mail className="w-5 h-5 text-blue-600" />, label: "Official Email", value: "info@diametersouvenir.com" },
                { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: "Workshop & Office", value: "Jl. Contoh No. 123, Yogyakarta" },
              ].map((contact, index) => (
                <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{contact.label}</h3>
                    <p className="text-xs font-bold text-gray-700">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STANDAR LAYANAN */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-blue-900 mb-6 uppercase tracking-widest border-b border-gray-50 pb-4">
                  Standar Layanan
                </h3>
                <ul className="space-y-4">
                  {[
                    "Dukungan administrasi & faktur pajak instansi.",
                    "Privasi data dan informasi klien terjamin.",
                    "Perubahan pesanan terbatas setelah produksi berjalan.",
                    "Garansi revisi & penggantian kualitas.",
                    "Klaim garansi memerlukan dokumentasi unboxing."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[11px] font-medium text-gray-500 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[8px] font-black text-blue-400">
                      DS
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-gray-400 italic">
                  Trusted by 1000+ Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER MINI */}
      <div className="mt-20 text-center">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Diameter Souvenir - Excellence in Quality
        </p>
      </div>
        <Footer />
    </div>
  );

}
