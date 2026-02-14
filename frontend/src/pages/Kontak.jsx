import React from "react";
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
} from "lucide-react";

export default function Kontak() {
  const officers = [
    { name: "Aulian", role: "Customer Relation Officer", phone: "6285158887675" },
    { name: "Irfan", role: "Customer Relation Officer", phone: "6285158887676" },
    { name: "Alfian", role: "Customer Relation Officer", phone: "6285158887677" },
    { name: "Mega", role: "Customer Relation Officer", phone: "6285158887678" },
    { name: "Amin", role: "Customer Relation Officer", phone: "6285158887679" },
  ];

  const steps = [
    { icon: <MessageCircle className="w-6 h-6 text-blue-600" />, title: "Hubungi CS" },
    { icon: <FileText className="w-6 h-6 text-blue-600" />, title: "Penawaran / Invoice" },
    { icon: <CreditCard className="w-6 h-6 text-blue-600" />, title: "DP Minimal 4%" },
    { icon: <PenTool className="w-6 h-6 text-blue-600" />, title: "Masuk Desain" },
    { icon: <Package className="w-6 h-6 text-blue-600" />, title: "Barang Jadi" },
    { icon: <Wallet className="w-6 h-6 text-blue-600" />, title: "Pelunasan" },
  ];

  const contacts = [
    { icon: <Phone className="w-6 h-6 text-blue-600" />, label: "Telepon", value: "+62 851 5888 7675" },
    { icon: <Mail className="w-6 h-6 text-blue-600" />, label: "Email", value: "info@diametersouvenir.com" },
    { icon: <MapPin className="w-6 h-6 text-blue-600" />, label: "Alamat", value: "Jl. Contoh No. 123, Yogyakarta" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Customer Relation Officers */}
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Customer Relation Officers
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {officers.map((officer, index) => (
          <div key={index} className="border rounded-lg p-4 shadow text-center">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h3 className="font-bold text-blue-700">{officer.name}</h3>
            <p className="text-sm text-gray-600">{officer.role}</p>
            <a
              href={`https://wa.me/${officer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Cara Order */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
        Cara Order
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="font-semibold text-blue-700">{step.title}</h3>
          </div>
        ))}
      </div>

      {/* Hubungi Kami */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
        Hubungi Kami
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-purple-50 p-6 rounded-lg shadow flex flex-col items-center text-center hover:shadow-md transition"
          >
            <div className="mb-3">{contact.icon}</div>
            <h3 className="font-semibold text-blue-700">{contact.label}</h3>
            <p className="text-gray-700 text-sm">{contact.value}</p>
          </div>
        ))}
      </div>

      {/* Standar Layanan */}
      <div className="bg-purple-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Standar Layanan</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Dukungan administrasi & faktur pajak instansi.</li>
          <li>Privasi data dan informasi klien terjamin.</li>
          <li>Perubahan pesanan tidak dapat dilakukan setelah produksi berjalan.</li>
          <li>Garansi revisi & penggantian sesuai standar kualitas.</li>
          <li>Klaim garansi memerlukan dokumentasi unboxing.</li>
        </ul>
      </div>
    </div>
  );
}