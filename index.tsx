import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Flame, 
  Factory, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Recycle, 
  Zap, 
  Award, 
  Building2, 
  Users, 
  Send, 
  ChevronRight, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  Calculator,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pome');
  
  // Interactive Calculator State
  const [wasteVolume, setWasteVolume] = useState(500);
  const [wasteType, setWasteType] = useState('pome'); // pome, shell, pellet

  // Calculated ROI values based on selected parameters
  const calculateMetrics = () => {
    let multiplierCo2 = 1.8;
    let energyMwh = 0.45;
    let savingsUsd = 42;

    if (wasteType === 'shell') {
      multiplierCo2 = 2.4;
      energyMwh = 0.85;
      savingsUsd = 65;
    } else if (wasteType === 'pellet') {
      multiplierCo2 = 2.1;
      energyMwh = 0.72;
      savingsUsd = 58;
    }

    const co2Reduction = Math.round(wasteVolume * multiplierCo2);
    const energyGenerated = Math.round(wasteVolume * energyMwh);
    const estimatedSavings = Math.round((wasteVolume * savingsUsd) / 1000);

    return { co2Reduction, energyGenerated, estimatedSavings };
  };

  const metrics = calculateMetrics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4FBFB] text-[#0F2D38] font-sans antialiased selection:bg-[#B2F0F7] selection:text-[#005B7F] overflow-x-hidden">
      
      {/* 1. NAVIGATION HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-[#E0F2F1]' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C2D1] to-[#0096C7] p-2 flex items-center justify-center text-white shadow-md shadow-[#00C2D1]/20 transition-transform group-hover:scale-105">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg leading-none tracking-tight text-[#083D56]">
                  SUMBER KARYA HIJAU
                </span>
                <span className="text-[10px] font-semibold text-[#00A896] tracking-widest uppercase mt-0.5">
                  INDONESIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-[#2C5282] hover:text-[#00A896] transition-colors">Tentang Kami</a>
              <a href="#layanan" className="text-sm font-medium text-[#2C5282] hover:text-[#00A896] transition-colors">Layanan</a>
              <a href="#solutions" className="text-sm font-medium text-[#2C5282] hover:text-[#00A896] transition-colors">Solusi Industri</a>
              <a href="#impact" className="text-sm font-medium text-[#2C5282] hover:text-[#00A896] transition-colors">Dampak & Sertifikasi</a>
              <a href="#calculator" className="text-sm font-medium text-[#2C5282] hover:text-[#00A896] transition-colors">Kalkulator ROI</a>
            </nav>

            {/* Header Action Button */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact" 
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#00B4D8] to-[#0077B6] hover:from-[#00A2C2] hover:to-[#005F92] shadow-lg shadow-[#00B4D8]/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Mulai Kemitraan
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#083D56] hover:bg-[#E0F2F1] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-[#E0F2F1] px-4 pt-4 pb-6 space-y-3 mt-3 shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#083D56]">Tentang Kami</a>
            <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#083D56]">Layanan</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#083D56]">Solusi Industri</a>
            <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#083D56]">Dampak & Sertifikasi</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#083D56]">Kalkulator ROI</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00B4D8] to-[#0077B6]"
            >
              Mulai Kemitraan
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Layout Family A: Asymmetric Split Hero) */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Soft Blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#C4F1F9] rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E2F8DB] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#E0E7FF] rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F7FA] border border-[#B2EBF2] text-[#0077B6] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00B4D8]" />
              Pelopor Energi Hijau Terbarukan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#083D56] leading-[1.15]">
              Transformasi Limbah Sawit Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6]">Energi Bersih Berkelanjutan</span>
            </h1>

            <p className="text-lg text-[#3A6B7E] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              PT Sumber Karya Hijau Indonesia menghadirkan solusi perdagangan minyak sawit ramah lingkungan, pengelolaan limbah terpadu, dan pasokan bahan bakar biomassa standar internasional untuk mitra industri global.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-bold text-base shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
              >
                Jajaki Kerjasama Industri
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#layanan" 
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-[#B2EBF2] text-[#0077B6] font-bold text-base hover:bg-[#E0F7FA]/50 shadow-sm transition-all text-center"
              >
                Eksplorasi Portofolio
              </a>
            </div>

            {/* Key Stats Counter Pills */}
            <div className="pt-8 border-t border-[#E0F2F1]/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#083D56]">250K+</p>
                <p className="text-xs sm:text-sm font-medium text-[#5B8898] mt-1">Ton Limbah Didaur Ulang</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0096C7]">100%</p>
                <p className="text-xs sm:text-sm font-medium text-[#5B8898] mt-1">Patuh Standar RSPO & ISCC</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00A896]">50+</p>
                <p className="text-xs sm:text-sm font-medium text-[#5B8898] mt-1">Mitra Industri Aktif</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column (3D Aesthetic Card Graphic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Glowing Pastel Card */}
              <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl shadow-[#00B4D8]/15 transform hover:-rotate-1 transition-transform duration-500">
                
                {/* 3D Flow Simulation Illustration */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between bg-[#F0FDF4] p-4 rounded-2xl border border-[#BBF7D0]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#22C55E] text-white flex items-center justify-center shadow-md">
                        <Recycle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#166534]">POME & Limbah Sawit</h4>
                        <p className="text-xs text-[#15803D]">Bahan baku biomassa mentah</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#166534] bg-[#DCFCE7] px-2.5 py-1 rounded-full">Input</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-8 h-8 rounded-full bg-[#E0F7FA] border border-[#B2EBF2] flex items-center justify-center text-[#00B4D8] animate-bounce">
                      ↓
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#F0F9FF] p-4 rounded-2xl border border-[#BAE6FD]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-md">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#0C4A6E]">Proses Rafinasi & Biogas</h4>
                        <p className="text-xs text-[#0369A1]">Konversi tinggi efisiensi</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-full">Proses</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-8 h-8 rounded-full bg-[#E0F7FA] border border-[#B2EBF2] flex items-center justify-center text-[#00B4D8] animate-bounce">
                      ↓
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#FAF5FF] p-4 rounded-2xl border border-[#E9D5FF]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#9333EA] text-white flex items-center justify-center shadow-md">
                        <Flame className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#581C87]">Energi Hijau Siap Pakai</h4>
                        <p className="text-xs text-[#6B21A8]">Briket, Pelet, Bio-fuel</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#9333EA] bg-[#F3E8FF] px-2.5 py-1 rounded-full">Output</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E0F2F1] flex items-center gap-3 animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-[#E0F7FA] text-[#00B4D8] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#083D56]">Keberlanjutan Terverifikasi</p>
                    <p className="text-[10px] text-[#5B8898]">Sertifikasi ESG Internasional</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY VALUE PROPOSITION (Layout Family B: Interactive Grid / 3D Card Hover) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#00B4D8] mb-3">Pilar Keunggulan Utama</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#083D56] tracking-tight">
              Ekosistem Energi Terbarukan Terintegrasi
            </p>
            <p className="mt-4 text-base text-[#5B8898]">
              Kami menjembatani potensi limbah industri kelapa sawit Indonesia dengan kebutuhan energi bersih manufaktur modern melalui sistem tertutup yang efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] hover:border-[#00B4D8] shadow-sm hover:shadow-xl hover:shadow-[#00B4D8]/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E0F7FA] text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-3">Energi Terbarukan</h3>
                <p className="text-sm text-[#4A7888] leading-relaxed">
                  Penyediaan solusi energi bersih dari pengolahan limbah biomassa sawit untuk mendukung target net zero emission industri Anda.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E0F2F1] flex items-center text-xs font-bold text-[#00B4D8] group-hover:translate-x-1 transition-transform">
                Pelajari Detail <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] hover:border-[#00A896] shadow-sm hover:shadow-xl hover:shadow-[#00A896]/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E6FFFA] text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <Recycle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-3">Bio-Biomass & POME</h3>
                <p className="text-sm text-[#4A7888] leading-relaxed">
                  Pengelolaan Palm Oil Mill Effluent (POME) dan cangkang sawit bermutu tinggi untuk bahan bakar boiler hemat emisi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E0F2F1] flex items-center text-xs font-bold text-[#00A896] group-hover:translate-x-1 transition-transform">
                Pelajari Detail <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] hover:border-[#0077B6] shadow-sm hover:shadow-xl hover:shadow-[#0077B6]/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0077B6] group-hover:bg-[#0077B6] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-3">Perdagangan Sawit</h3>
                <p className="text-sm text-[#4A7888] leading-relaxed">
                  Jaringan distribusi produk kelapa sawit dan produk turunannya yang tersertifikasi RSPO & ISCC untuk pasar domestik serta ekspor.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E0F2F1] flex items-center text-xs font-bold text-[#0077B6] group-hover:translate-x-1 transition-transform">
                Pelajari Detail <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] hover:border-[#0284C7] shadow-sm hover:shadow-xl hover:shadow-[#0284C7]/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-3">Circular Economy</h3>
                <p className="text-sm text-[#4A7888] leading-relaxed">
                  Menerapkan komitmen nol limbah (zero-waste) melalui optimalisasi nilai guna sampingan industri minyak sawit secara berkelanjutan.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E0F2F1] flex items-center text-xs font-bold text-[#0284C7] group-hover:translate-x-1 transition-transform">
                Pelajari Detail <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT PT SUMBER KARYA HIJAU (Layout Family C: Editorial Horizontal Split) */}
      <section id="about" className="py-24 bg-[#EBF8F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Card Stack Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80" 
                  alt="Fasilitas Biomassa Energi Terbarukan" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083D56]/80 via-transparent to-transparent rounded-2xl flex flex-col justify-end p-6 text-white">
                  <p className="text-xs uppercase tracking-wider text-[#7CD8C1] font-bold">Infrastruktur Berstandar Modern</p>
                  <p className="text-lg font-bold">Pengolahan Limbah & Fasilitas Bioenergi Terpadu</p>
                </div>
              </div>

              {/* Floating Feature Card */}
              <div className="absolute -bottom-8 -right-4 bg-white p-6 rounded-3xl shadow-xl border border-[#E0F2F1] max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6FFFA] text-[#00A896] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Sertifikasi Internasional</h4>
                    <p className="text-xs text-[#5B8898]">ISCC EU & RSPO Certified Supply Chain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase tracking-wider">
                Profil Perusahaan
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#083D56] tracking-tight leading-tight">
                Mendorong Transisi Energi Hijau Melalui Pengelolaan Sawit Berkelanjutan
              </h2>
              <p className="text-base text-[#3A6B7E] leading-relaxed">
                PT Sumber Karya Hijau Indonesia berdiri dengan visi menjadi penggerak utama dalam rantai pasok energi terbarukan berbasis limbah kelapa sawit. Kami percaya bahwa pertumbuhan ekonomi industri dapat berjalan seiring dengan pelestarian lingkungan.
              </p>
              <p className="text-base text-[#3A6B7E] leading-relaxed">
                Melalui integrasi teknologi pengolahan canggih, kami mengolah POME (Palm Oil Mill Effluent) dan limbah padat sawit menjadi sumber energi bio-biomassa bermutu tinggi yang efisien, ekonomis, dan rendah emisi karbon.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Pasokan Terjamin & Stabil</h4>
                    <p className="text-xs text-[#5B8898]">Kapasitas produksi kontinyu sepanjang tahun</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Jejak Karbon Rendah</h4>
                    <p className="text-xs text-[#5B8898]">Membantu pencapaian target ESG korporasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Kepatuhan Regulasi Penuh</h4>
                    <p className="text-xs text-[#5B8898]">Sesuai standar Kementerian LHK & ESDM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Kemitraan Jangka Panjang</h4>
                    <p className="text-xs text-[#5B8898]">Layanan transparan dan terpercaya</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. WASTE MANAGEMENT & RENEWABLE SOLUTIONS (Layout Family D: Multi-tab Showcase) */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#00B4D8] mb-3">Layanan & Produksi</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#083D56] tracking-tight">
              Solusi Produk & Pengelolaan Limbah
            </p>
            <p className="mt-4 text-base text-[#5B8898]">
              Pilih kategori produk dan layanan kami untuk melihat spesifikasi serta manfaat operasional bagi bisnis Anda.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => setActiveTab('pome')}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === 'pome' 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'bg-[#F4FBFB] text-[#3A6B7E] hover:bg-[#E0F7FA]'
              }`}
            >
              Pengolahan POME & Biogas
            </button>
            <button 
              onClick={() => setActiveTab('pellet')}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === 'pellet' 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'bg-[#F4FBFB] text-[#3A6B7E] hover:bg-[#E0F7FA]'
              }`}
            >
              Pelet Biomassa & Briket
            </button>
            <button 
              onClick={() => setActiveTab('shell')}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === 'shell' 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'bg-[#F4FBFB] text-[#3A6B7E] hover:bg-[#E0F7FA]'
              }`}
            >
              Cangkang Sawit (Palm Kernel Shell)
            </button>
            <button 
              onClick={() => setActiveTab('trading')}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === 'trading' 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'bg-[#F4FBFB] text-[#3A6B7E] hover:bg-[#E0F7FA]'
              }`}
            >
              Perdagangan Minyak Sawit (CPO & Derivatives)
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="bg-[#F4FBFB] rounded-3xl p-8 sm:p-12 border border-[#E0F2F1] shadow-sm">
            {activeTab === 'pome' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Teknologi Biogas Sawit</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#083D56]">POME (Palm Oil Mill Effluent) Treatment</h3>
                  <p className="text-sm sm:text-base text-[#4A7888] leading-relaxed">
                    Kami mengolah limbah cair pabrik kelapa sawit menjadi energi metana terbarukan melalui sistem biodigester modern. Mengurangi emisi gas rumah kaca secara drastis sekaligus menghasilkan energi listrik atau uap industri.
                  </p>
                  <ul className="space-y-2 text-sm text-[#083D56] font-medium pt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Reduksi BOD & COD hingga 90%+</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Penangkapan gas metana terintegrasi</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Hasil samping berupa pupuk organik berkualitas</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80" alt="POME Processing Facility" className="w-full h-80 object-cover" />
                </div>
              </div>
            )}

            {activeTab === 'pellet' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Bahan Bakar Padat Hijau</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#083D56]">Pelet Biomassa Terkompresi</h3>
                  <p className="text-sm sm:text-base text-[#4A7888] leading-relaxed">
                    Diproduksi dari tandan kosong dan serat sawit berkualitas tinggi dengan tingkat kelembapan rendah dan kalori tinggi. Pengganti batubara ideal untuk boiler pabrik dan pembangkit listrik berskala besar.
                  </p>
                  <ul className="space-y-2 text-sm text-[#083D56] font-medium pt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Nilai Kalori: 4,000 - 4,400 kcal/kg</li>
                    <li className="flex items-center gap-[#00A896]"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Kadar air (Moisture) rendah &lt; 10%</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Residu abu minim & ramah pemeliharaan boiler</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" alt="Biomass Pellets" className="w-full h-80 object-cover" />
                </div>
              </div>
            )}

            {activeTab === 'shell' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Biomassa Premium</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#083D56]">Cangkang Sawit (Palm Kernel Shell)</h3>
                  <p className="text-sm sm:text-base text-[#4A7888] leading-relaxed">
                    Cangkang sawit siap pakai dengan pengayakan dan pembersihan optimal dari pengotor. Cocok untuk industri manufaktur, tekstil, dan ekspor ke pembangkit listrik tenaga biomassa di Asia Tenggara & Asia Timur.
                  </p>
                  <ul className="space-y-2 text-sm text-[#083D56] font-medium pt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Nilai Kalori Tinggi: 4,200 - 4,600 kcal/kg</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Screening ketat untuk minimalkan impurity</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Pengiriman fleksibel melalui curah laut & darat</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" alt="Palm Kernel Shell Supply" className="w-full h-80 object-cover" />
                </div>
              </div>
            )}

            {activeTab === 'trading' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Perdagangan Minyak Sawit</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#083D56]">CPO & Produk Turunan Berkelanjutan</h3>
                  <p className="text-sm sm:text-base text-[#4A7888] leading-relaxed">
                    Melayani transaksi pasokan Crude Palm Oil (CPO), Palm Acid Oil (PAO), dan Used Cooking Oil (UCO) yang memiliki rekam jejak ketertelusuran penuh dari perkebunan hingga titik pengiriman akhir.
                  </p>
                  <ul className="space-y-2 text-sm text-[#083D56] font-medium pt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> 100% Traceable ke PKS asal</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Jaminan kualitas kuantitas independen (Sucofindo/SGS)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Kontrak fleksibel spot dan jangka panjang</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Palm Oil Trading Logistics" className="w-full h-80 object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. SUSTAINABILITY IMPACT & COMPLIANCE (Layout Family E: Data Stats Dashboard) */}
      <section id="impact" className="py-24 bg-[#083D56] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#00B4D8]/20 border border-[#00B4D8]/40 text-[#7CD8C1] text-xs font-bold uppercase">Dampak Lingkungan & ESG</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Komitmen Nyata Pada Dekarbonisasi Industri
              </h2>
              <p className="text-sm sm:text-base text-[#B2D8E5] leading-relaxed">
                Setiap ton limbah sawit yang kami kelola berkontribusi langsung pada pengurangan emisi gas rumah kaca global dan pencapaian Sustainable Development Goals (SDGs).
              </p>

              {/* Certification Badges Grid */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#7CD8C1] mb-4">Sertifikasi & Kepatuhan Standar:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm text-center">
                    <p className="font-extrabold text-sm text-white">ISCC EU</p>
                    <p className="text-[10px] text-[#A0C4D3]">Bioenergy Compliance</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm text-center">
                    <p className="font-extrabold text-sm text-white">RSPO</p>
                    <p className="text-[10px] text-[#A0C4D3]">Sustainable Supply</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm text-center">
                    <p className="font-extrabold text-sm text-white">ISO 14001</p>
                    <p className="text-[10px] text-[#A0C4D3]">Env. Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Metric Card Right */}
            <div className="lg:col-span-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00B4D8]" /> Indikator Kinerja Keberlanjutan Tahunan
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-[#B2D8E5] font-semibold mb-1">
                    <span>Pengurangan Reduksi Karbon CO2e</span>
                    <span className="text-[#00B4D8]">380,000 Ton</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#00B4D8] to-[#00A896] h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#B2D8E5] font-semibold mb-1">
                    <span>Target Substitusi Energi Fosil</span>
                    <span className="text-[#00A896]">92% Achieved</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#00A896] to-[#22C55E] h-3 rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#B2D8E5] font-semibold mb-1">
                    <span>Pemanfaatan POME Menjadi Biogas</span>
                    <span className="text-[#00B4D8]">1.2M M3</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#3B82F6] to-[#00B4D8] h-3 rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#A0C4D3]">Status ESG Rating</p>
                  <p className="text-xl font-black text-white">A+ Prime Rating</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00A896] text-white flex items-center justify-center font-bold">
                  ✓
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. B2B CLIENT & INVESTOR SOLUTIONS (Layout Family B Variant: Target Segments) */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#00B4D8] mb-3">Segmen Kemitraan</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#083D56] tracking-tight">
              Solusi Disesuaikan Untuk Pemangku Kepentingan
            </p>
            <p className="mt-4 text-base text-[#5B8898]">
              Kami melayani berbagai pemangku kepentingan strategis dalam ekosistem industri dan energi terbarukan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Segment 1 */}
            <div className="bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E0F7FA] text-[#00B4D8] flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-2">Klien Industri & Manufaktur</h3>
                <p className="text-sm text-[#5B8898] leading-relaxed mb-4">
                  Solusi pasokan cangkang sawit dan briket biomassa terjamin untuk penghematan biaya bahan bakar boiler dan konversi energi fosil ke hijau.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#083D56] font-semibold pt-4 border-t border-[#E0F2F1]">
                <li>• Efisiensi biaya energi hingga 25%</li>
                <li>• Kontrak pasokan jangka panjang</li>
              </ul>
            </div>

            {/* Segment 2 */}
            <div className="bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A896] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-2">Investor Hijau & ESG Funds</h3>
                <p className="text-sm text-[#5B8898] leading-relaxed mb-4">
                  Peluang investasi proyek infrastruktur bioenergi dan pabrik pengolahan limbah sawit dengan tingkat pengembalian yang terukur dan berisiko rendah.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#083D56] font-semibold pt-4 border-t border-[#E0F2F1]">
                <li>• Transparent Carbon Offsetting</li>
                <li>• ROI stabil berlandaskan proyek riil</li>
              </ul>
            </div>

            {/* Segment 3 */}
            <div className="bg-[#F4FBFB] rounded-3xl p-8 border border-[#E0F2F1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0077B6] flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#083D56] mb-2">Pemerintah & Regulator</h3>
                <p className="text-sm text-[#5B8898] leading-relaxed mb-4">
                  Mitra strategis pelaksanaan program pencampuran bahan bakar nabati (Mandat Biodiesel) serta pengelolaan limbah daerah terpadu.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#083D56] font-semibold pt-4 border-t border-[#E0F2F1]">
                <li>• Dukungan Kebijakan EBTKE</li>
                <li>• Kepatuhan lingkungan komprehensif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE CALCULATOR / ROI ESTIMATOR (Layout Family F: Tool Widget) */}
      <section id="calculator" className="py-24 bg-[#EBF8F9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0F2F1] shadow-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Input Section */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Simulasi Estimasi</span>
                  <h2 className="text-3xl font-extrabold text-[#083D56] mt-2">Kalkulator Konversi & Manfaat Emisi</h2>
                  <p className="text-sm text-[#5B8898] mt-1">Hitung estimasi pengurangan CO2 dan potensi penghematan energi dari konversi limbah sawit Anda.</p>
                </div>

                {/* Select Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#083D56] uppercase tracking-wider">Jenis Bahan / Limbah:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setWasteType('pome')}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        wasteType === 'pome' ? 'bg-[#00B4D8] text-white border-[#00B4D8]' : 'bg-[#F4FBFB] text-[#083D56] border-[#E0F2F1]'
                      }`}
                    >
                      POME (Cair)
                    </button>
                    <button 
                      onClick={() => setWasteType('shell')}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        wasteType === 'shell' ? 'bg-[#00B4D8] text-white border-[#00B4D8]' : 'bg-[#F4FBFB] text-[#083D56] border-[#E0F2F1]'
                      }`}
                    >
                      Cangkang Sawit
                    </button>
                    <button 
                      onClick={() => setWasteType('pellet')}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        wasteType === 'pellet' ? 'bg-[#00B4D8] text-white border-[#00B4D8]' : 'bg-[#F4FBFB] text-[#083D56] border-[#E0F2F1]'
                      }`}
                    >
                      Pelet Biomassa
                    </button>
                  </div>
                </div>

                {/* Volume Slider */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-[#083D56] uppercase tracking-wider">Volume Bahan Baku (Ton / Bulan):</label>
                    <span className="text-lg font-black text-[#00B4D8]">{wasteVolume} Ton</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={wasteVolume} 
                    onChange={(e) => setWasteVolume(Number(e.target.value))}
                    className="w-full h-2 bg-[#E0F2F1] rounded-lg appearance-none cursor-pointer accent-[#00B4D8]"
                  />
                  <div className="flex justify-between text-[10px] text-[#5B8898]">
                    <span>100 Ton</span>
                    <span>2,500 Ton</span>
                    <span>5,000 Ton</span>
                  </div>
                </div>

              </div>

              {/* Right Output Dashboard */}
              <div className="lg:col-span-6 bg-[#F4FBFB] p-8 rounded-2xl border border-[#E0F2F1] space-y-6">
                <h3 className="text-base font-bold text-[#083D56] flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#00B4D8]" /> Estimasi Hasil Dihasilkan
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-[#E0F2F1] shadow-sm">
                    <p className="text-xs text-[#5B8898] font-medium">Estimasi Reduksi Karbon</p>
                    <p className="text-2xl font-black text-[#00A896] mt-1">{metrics.co2Reduction.toLocaleString()} Ton CO2e</p>
                    <p className="text-[10px] text-[#5B8898] mt-1">Setara penanaman 15,000 pohon</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-[#E0F2F1] shadow-sm">
                    <p className="text-xs text-[#5B8898] font-medium">Potensi Energi Bersih</p>
                    <p className="text-2xl font-black text-[#0096C7] mt-1">{metrics.energyGenerated.toLocaleString()} MWh</p>
                    <p className="text-[10px] text-[#5B8898] mt-1">Dapat menyuplai listrik pabrik</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] p-6 rounded-2xl text-white shadow-md">
                  <p className="text-xs text-[#E0F7FA] font-medium">Estimasi Penghematan Operasional Industri</p>
                  <p className="text-3xl font-black mt-1">~ USD ${metrics.estimatedSavings.toLocaleString()} Ribu / Tahun</p>
                  <p className="text-xs text-[#E0F7FA] opacity-90 mt-2">
                    *Perhitungan merupakan estimasi awal berdasarkan harga referensi biomassa dan efisiensi konversi standar.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 9. CONTACT & PARTNERSHIP INQUIRY FORM (Layout Family C Variant) */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#E0F7FA] text-[#0077B6] text-xs font-bold uppercase">Hubungi Kami</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#083D56] tracking-tight mt-2">
                  Mari Diskusikan Proyek Energi Bersih Anda
                </h2>
                <p className="mt-4 text-base text-[#5B8898] leading-relaxed">
                  Tim pakar kami siap membantu kebutuhan pasokan biomassa, pengolahan limbah POME, atau peluang investasi hijau berkelanjutan.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E0F7FA] text-[#00B4D8] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Kantor Pusat</h4>
                    <p className="text-sm text-[#5B8898] mt-1">
                      PT SUMBER KARYA HIJAU INDONESIA<br />
                      Gedung Menara Energi Lt. 18, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta, Indonesia 12190
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A896] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Email Kemitraan</h4>
                    <p className="text-sm text-[#5B8898] mt-0.5">info@sumberkaryahijau.co.id</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0077B6] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#083D56]">Telepon Layanan Klien</h4>
                    <p className="text-sm text-[#5B8898] mt-0.5">+62 (21) 5790 8821</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 bg-[#F4FBFB] p-8 sm:p-10 rounded-3xl border border-[#E0F2F1] shadow-lg">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#083D56] uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      placeholder="Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl border border-[#E0F2F1] bg-white text-sm text-[#083D56] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#083D56] uppercase tracking-wider mb-2">Email Perusahaan</label>
                    <input 
                      type="email" 
                      placeholder="budi@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E0F2F1] bg-white text-sm text-[#083D56] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#083D56] uppercase tracking-wider mb-2">Nama Perusahaan / Organisasi</label>
                    <input 
                      type="text" 
                      placeholder="PT Industri Makmur"
                      className="w-full px-4 py-3 rounded-xl border border-[#E0F2F1] bg-white text-sm text-[#083D56] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#083D56] uppercase tracking-wider mb-2">Kategori Mitra</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E0F2F1] bg-white text-sm text-[#083D56] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                      <option>Klien Manufaktur / Pembeli Biomassa</option>
                      <option>Pabrik Kelapa Sawit (Penyedia Limbah)</option>
                      <option>Green Investor / Lembaga Keuangan</option>
                      <option>Instansi Pemerintah / Regulator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#083D56] uppercase tracking-wider mb-2">Pesan atau Kebutuhan Spesifik</label>
                  <textarea 
                    rows={4}
                    placeholder="Jelaskan kebutuhan volume biomassa atau rencana pengolahan limbah sawit Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E0F2F1] bg-white text-sm text-[#083D56] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#00B4D8] to-[#0077B6] hover:from-[#00A2C2] hover:to-[#005F92] shadow-lg shadow-[#00B4D8]/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Kirim Permohonan Kemitraan
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#042331] text-white pt-16 pb-12 border-t border-[#083D56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00B4D8] flex items-center justify-center text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-base tracking-tight text-white">
                  PT SUMBER KARYA HIJAU INDONESIA
                </span>
              </div>
              <p className="text-xs text-[#8BB0C0] max-w-sm leading-relaxed">
                Perusahaan pelopor energi terbarukan, perdagangan minyak sawit berkelanjutan, serta pengolahan limbah POME dan biomassa sawit terintegrasi di Indonesia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8] mb-4">Navigasi</h4>
              <ul className="space-y-2 text-xs text-[#8BB0C0]">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Layanan & Produk</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Solusi Industri</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Sertifikasi & ESG</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8] mb-4">Produk Utama</h4>
              <ul className="space-y-2 text-xs text-[#8BB0C0]">
                <li>Pengolahan Biogas POME</li>
                <li>Pelet Biomassa Sawit</li>
                <li>Palm Kernel Shell (PKS)</li>
                <li>Crude Palm Oil (CPO)</li>
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8] mb-4">Kepatuhan</h4>
              <ul className="space-y-2 text-xs text-[#8BB0C0]">
                <li>Sertifikasi RSPO</li>
                <li>Sertifikasi ISCC EU</li>
                <li>Kebijakan Keberlanjutan</li>
                <li>Laporan ESG Tahunan</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#083D56] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8BB0C0]">
            <p>© 2026 PT Sumber Karya Hijau Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
