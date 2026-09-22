import React from 'react';
import {
  Crown,
  Award,
  Users,
  Mail,
  Building2,
  ShieldCheck,
  GraduationCap,
  User,
  Globe
} from 'lucide-react';
import PageHero from '../components/PageHero';

// Real asset images
import pankajImg from '../assets/pankaj-DsE5rnwQ.webp';
import poojaImg from '../assets/pooja-B1uI8fBS.webp';
import vijayTiwariImg from '../assets/vijaytiwari-DtLhXa4L.webp';
import nabeelAhmadImg from '../assets/Nabeel-Ahmad.jpeg';
import alkeshAgrawalImg from '../assets/Alkesh_Agrawal.webp';

// Avatar component with fallback skeleton placeholder
function MemberAvatar({ image, name, size = "md" }) {
  const [imgError, setImgError] = React.useState(false);

  const sizeClasses = {
    sm: "w-14 h-14",
    md: "w-16 h-16 sm:w-20 sm:h-20",
    lg: "w-24 h-24 sm:w-28 sm:h-28"
  };

  return (
    <div className={`relative ${sizeClasses[size]} rounded-full p-1 patron-gold-ring shrink-0 group-hover:scale-105 transition-transform duration-300`}>
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 flex items-center justify-center shadow-inner">
        {image && !imgError ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          /* Neutral Academic Skeleton Placeholder */
          <div className="w-full h-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
            {/* Subtle animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>

            {/* Minimalist Profile Silhouette */}
            <svg
              className="w-full h-full text-slate-300 fill-current translate-y-2 scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EditorialBorad() {
  // Exact data from Editorial Board.docx
  const patrons = [
    {
      name: "Er. Pankaj Agarwal",
      designation: "Hon'ble Chancellor",
      affiliation: "SRMU, Barabanki-India",
      image: pankajImg
    },
    {
      name: "Er. Pooja Agarwal",
      designation: "Hon'ble Pro-Chancellor",
      affiliation: "SRMU, Barabanki-India",
      image: poojaImg
    }
  ];

  const editorInChief = {
    name: "Prof. (Dr.) Vijay Tiwari",
    designation: "Hon'ble Vice-Chancellor",
    affiliation: "SRMU, Barabanki-India",
    email: "vc@srmu.ac.in",
    image: vijayTiwariImg
  };

  const deputyEditorsInChief = [
    {
      name: "Prof. (Dr.) Nabeel Ahmad",
      designation: "Director (Research)",
      affiliation: "SRMU, Barabanki-India",
      email: "director.research@srmu.ac.in",
      image: nabeelAhmadImg
    },
    {
      name: "Prof. (Dr.) Alkesh Agrawal",
      designation: "Deputy Director (Research)",
      affiliation: "SRMU, Barabanki-India",
      email: "dd.research@srmu.ac.in",
      image: alkeshAgrawalImg
    }
  ];

  const associateEditors = [
    { name: "Dr. Jay Kumar Pandey", affiliation: "DEEE", email: "jay.pandey@srmu.ac.in" },
    { name: "Dr. Md. Saaquib Bin Reyaz", affiliation: "FoME", email: "saquibbinreyaz.research@srmu.ac.in" },
    { name: "Dr. Mriyunjay Rai", affiliation: "DEEE", email: "mritunjayrai.foeee@srmu.ac.in" },
    { name: "Dr. Md. Zain", affiliation: "FoCE", email: "mohdzain.ce@srmu.ac.in" },
    { name: "Dr. Devendra Singh", affiliation: "IBST", email: "devendrasingh.ibst@srmu.ac.in" },
    { name: "Dr. Garima Gupta", affiliation: "IBST", email: "garimagupta.ibst@srmu.ac.in" },
    { name: "Dr. Rajeev Kumar", affiliation: "DCSIS", email: "rajeevkr.csis@srmu.ac.in" },
    { name: "Dr. Sunil K Singh", affiliation: "DEEE", email: "sunilkrsingh.foeee@srmu.ac.in" },
    { name: "Prof. (Dr.) Dilip Jaiswal", affiliation: "FoMSS", email: "dilipkr.maths@srmu.ac.in" },
    { name: "Dr. Md. Nadeem", affiliation: "DCSE", email: "mdnadeem.cse@srmu.ac.in" },
    { name: "Dr. Nitish Singh", affiliation: "FoPS", email: "nitish.phy@srmu.ac.in" },
    { name: "Dr. Rahul K Vishwakarma", affiliation: "FoCS", email: "rahulk.vishwakarma@srmu.ac.in" }
  ];

  const advisoryCommitteeNational = [
    { name: "Prof. (Dr.) B. M. Dixit", designation: "Dir. (INSH)", affiliation: "SRMU", email: "director.insh@srmu.ac.in" },
    { name: "Prof. (Dr.) Apurva Anand", designation: "Dir. (IoT)", affiliation: "SRMU", email: "director.engg@srmu.ac.in" },
    { name: "Prof. (Dr.) Tabish Kidwai", designation: "Dir. (IBST)", affiliation: "SRMU", email: "director.ibst@srmu.ac.in" },
    { name: "Prof. (Dr.) R.S. Bajpai", designation: "HoD. (DEEE)", affiliation: "SRMU", email: "dean.ee@srmu.ac.in" },
    { name: "Prof. (Dr.) Abhishek Saxena", designation: "Dean (FoCE)", affiliation: "SRMU", email: "dean.ce@srmu.ac.in" },
    { name: "Prof. (Dr.) Rajesh Porval", designation: "Dean (FoME)", affiliation: "SRMU", email: "dean.me@srmu.ac.in" },
    { name: "Prof. (Dr.) V. N. Pathak", designation: "Dean (FoMSS)", affiliation: "SRMU", email: "dean.maths@srmu.ac.in" },
    { name: "Prof. (Dr.) R. G. Singh", designation: "Dean (FoPS)", affiliation: "SRMU", email: "dean.phy@srmu.ac.in" },
    { name: "Dr. Shobhit Sinha", designation: "HoD (DCSIS)", affiliation: "SRMU", email: "hod.cse@srmu.ac.in" },
    { name: "Dr. Sadhana Singh", designation: "HoD (FoCS)", affiliation: "SRMU", email: "dean.cy@srmu.ac.in" },
    { name: "Dr. Kavita Sahu", designation: "Asstt. Prof. (DoCSE)", affiliation: "Dr. Harsingh Gour Vishwavidyalaya, Sagar, M.P." }
  ];

  const advisoryCommitteeInternational = [
    { name: "Dr. Saifullah Khalid", designation: "Principal Scientist", affiliation: "IBMM Research, Khartoum, Sudan", email: "skhalid@ibmmacl.org" },
    { name: "Dr. Rashad Abaszade", designation: "Turan International Research Institute", affiliation: "Azerbaijan" },
    { name: "Dr. Shri Krishna Pandey", designation: "Head, Quality Assurance", affiliation: "Symbiosis International University, Dubai, UAE", email: "skpandey@siu-dubai.ac.ae" },
    { name: "Dr. Shruti Pandey", affiliation: "Missouri University of Science and Technology Rolla, Missouri, USA", email: "spz8c@mst.edu" },
    { name: "Prof (Dr.) Shamimul Qamar", affiliation: "Faculty of Sciences & Managements, King Khalid University, Abha, KSA", email: "Sqamar@kku.edu.sa" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* Page Hero */}
      <PageHero
        title="Editorial Board"
        subtitle="Editorial leadership, editors, and advisory committee members of the journal."
        badge="Editorial Board"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Editorial Board" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-left">

        {/* ================= SECTION: PATRONS ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Patrons:
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
            {patrons.map((patron, idx) => (
              <div
                key={idx}
                className="academic-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 bg-white relative overflow-hidden group"
              >
                <MemberAvatar image={patron.image} name={patron.name} size="lg" />

                <div className="space-y-2 z-10 flex-1">
                  <h3 className="text-lg font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors">
                    {patron.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700">
                    {patron.designation}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start text-xs text-slate-500 font-medium pt-1">
                    <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                    <span>{patron.affiliation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION: EDITOR-IN-CHIEF ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Editor-in-Chief
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="academic-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 bg-white relative overflow-hidden group border-2 border-blue-100 hover:border-amber-400/80">
              <MemberAvatar image={editorInChief.image} name={editorInChief.name} size="lg" />

              <div className="space-y-2.5 z-10 flex-1">
                <h3 className="text-xl font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors">
                  {editorInChief.name}
                </h3>
                <div className="text-xs font-semibold text-slate-800">
                  {editorInChief.designation}
                </div>
                <div className="flex items-center justify-center sm:justify-start text-xs text-slate-500 font-medium">
                  <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                  <span>{editorInChief.affiliation}</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`mailto:${editorInChief.email}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-[#0f4a85] text-xs font-semibold border border-blue-200/80 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>{editorInChief.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION: DEPUTY EDITORS-IN-CHIEF ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Deputy Editors-in-Chief
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
            {deputyEditorsInChief.map((deputy, idx) => (
              <div
                key={idx}
                className="academic-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 bg-white relative overflow-hidden group"
              >
                <MemberAvatar image={deputy.image} name={deputy.name} size="lg" />

                <div className="space-y-2 z-10 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors">
                    {deputy.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700">
                    {deputy.designation}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start text-xs text-slate-500 font-medium">
                    <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                    <span>{deputy.affiliation}</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`mailto:${deputy.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-[#0f4a85] text-xs font-semibold border border-blue-200/80 transition-colors"
                    >
                      <Mail className="w-3 h-3 text-amber-600" />
                      <span>{deputy.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION: ASSOCIATE EDITORS ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Associate Editors
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {associateEditors.map((member, idx) => (
              <div
                key={idx}
                className="academic-card rounded-2xl p-5 bg-white flex flex-col items-center text-center space-y-3 group hover:border-[#0f4a85]/40"
              >
                <MemberAvatar image={member.image} name={member.name} size="md" />
                <div className="min-w-0 w-full space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  {member.affiliation && (
                    <div className="text-[11px] font-semibold text-slate-700">
                      {member.affiliation}
                    </div>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0f4a85] text-[10px] font-medium border border-blue-100 transition-colors break-all"
                    >
                      <Mail className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION: ADVISORY COMMITTEE (NATIONAL) ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Advisory Committee (National)
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {advisoryCommitteeNational.map((member, idx) => (
              <div
                key={idx}
                className="academic-card rounded-2xl p-5 bg-white flex flex-col items-center text-center space-y-3 group hover:border-amber-400/60"
              >
                <MemberAvatar image={member.image} name={member.name} size="md" />
                <div className="min-w-0 w-full space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  {member.designation && (
                    <div className="text-[11px] font-semibold text-slate-700">
                      {member.designation}
                    </div>
                  )}
                  {member.affiliation && (
                    <div className="text-[10px] text-slate-500 leading-tight">
                      {member.affiliation}
                    </div>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0f4a85] text-[10px] font-medium border border-blue-100 transition-colors break-all"
                    >
                      <Mail className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION: ADVISORY COMMITTEE (INTERNATIONAL) ================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[100px]"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f4a85] tracking-tight">
                Advisory Committee (International)
              </h2>
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {advisoryCommitteeInternational.map((member, idx) => (
              <div
                key={idx}
                className="academic-card rounded-2xl p-5 bg-white flex flex-col items-center text-center space-y-3 group hover:border-blue-400/60"
              >
                <MemberAvatar image={member.image} name={member.name} size="md" />
                <div className="min-w-0 w-full space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  {member.designation && (
                    <div className="text-[11px] font-semibold text-slate-700">
                      {member.designation}
                    </div>
                  )}
                  {member.affiliation && (
                    <div className="text-[10px] text-slate-500 leading-tight">
                      {member.affiliation}
                    </div>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0f4a85] text-[10px] font-medium border border-blue-100 transition-colors break-all"
                    >
                      <Mail className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
