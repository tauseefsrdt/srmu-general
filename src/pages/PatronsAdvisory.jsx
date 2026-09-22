import React from 'react';
import PageHero from '../components/PageHero';
import { patronsData } from '../data/patronsData';
import { Award, ShieldCheck, Building2, Globe } from 'lucide-react';

export default function PatronsAdvisory() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* Page Hero */}
      <PageHero
        title="Patrons & Advisory Leadership"
        subtitle="Institutional leadership and honorary patrons guiding the scholarly vision of the International Journal of Scientific Progress in Applied Science and Technology."
        badge="University Leadership"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Patrons & Advisory" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-left">

        {/* ================= PATRONS SECTION ================= */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[140px]"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
              Patrons
            </h2>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {patronsData.patrons.map((patron) => (
              <div
                key={patron.id}
                className="academic-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white"
              >
                <div className="relative w-28 h-28 rounded-full p-1 patron-gold-ring group-hover:scale-105 transition-transform duration-300 mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0f4a85] group-hover:text-blue-800 transition-colors leading-snug">
                  {patron.name}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  {patron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CO PATRONS SECTION ================= */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[140px]"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
              Co Patrons
            </h2>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {patronsData.coPatrons.map((copatron) => (
              <div
                key={copatron.id}
                className="academic-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white"
              >
                <div className="relative w-28 h-28 rounded-full p-1 patron-gold-ring group-hover:scale-105 transition-transform duration-300 mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={copatron.image}
                      alt={copatron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0f4a85] group-hover:text-blue-800 transition-colors leading-snug">
                  {copatron.name}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  {copatron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Governance Statement */}
        <div className="academic-card rounded-2xl p-6 bg-blue-50/60 border border-blue-200/80 space-y-2">
          <h4 className="text-sm font-bold text-[#0f4a85] flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-amber-500" />
            <span>Institutional Support & Research Sponsorship</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            The journal operates with the academic governance and infrastructure support of Shri Ramswaroop Memorial University, promoting international scientific progress and global open-access dissemination.
          </p>
        </div>

      </div>
    </div>
  );
}
