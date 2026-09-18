import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Search,
  FileText,
  UserRound,
  Eye,
  X,
  Download,
  ExternalLink,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import { featuredTemplateArticles } from '../data/journalDocData';

export default function Papers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Disable background scrolling when PDF modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPdf]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPdf(null);
      }
    };

    if (selectedPdf) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedPdf]);

  const filteredArticles = featuredTemplateArticles.filter((art) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    return (
      art.title?.toLowerCase().includes(query) ||
      art.abstract?.toLowerCase().includes(query) ||
      art.doi?.toLowerCase().includes(query) ||
      art.paperId?.toLowerCase().includes(query) ||
      art.authors?.some((author) =>
        author.name?.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}
      <PageHero
        title="Journal Papers & Research Publications"
        subtitle="Explore peer-reviewed open-access articles and research publications."
        badge="Research Papers · 2026"
        breadcrumbs={[
          {
            name: 'Papers',
            path: '/papers',
          },
          {
            name: 'Research Publications',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* =====================================================
            SEARCH
        ===================================================== */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full sm:w-80">

            <Search
              className="
                w-4
                h-4
                text-slate-400
                absolute
                left-3.5
                top-3
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, author, DOI..."
              className="
                w-full
                pl-10
                pr-4
                py-3
                text-sm
                rounded-xl
                bg-white
                border
                border-slate-300
                focus:outline-none
                focus:border-[#0f4a85]
                focus:ring-2
                focus:ring-blue-100
                text-slate-800
              "
            />

          </div>
        </div>

        {/* =====================================================
            RESEARCH PAPERS
        ===================================================== */}
        <div className="space-y-6">

          {filteredArticles.map((article) => {
            const firstAuthor =
              article.authors?.[0]?.name || 'Author';

            return (
              <article
                key={article.id}
                className="
                  relative
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  px-5
                  sm:px-7
                  py-6
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                "
              >

                {/* =================================================
                    TOP ROW
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    gap-4
                  "
                >

                  {/* =================================================
                      MAIN CONTENT
                  ================================================= */}
                  <div className="min-w-0 flex-1">

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">

                      <span
                        className="
                          inline-flex
                          items-center
                          px-3
                          py-1.5
                          rounded-md
                          bg-[#111827]
                          text-white
                          text-xs
                          font-semibold
                        "
                      >
                        Research Paper
                      </span>

                      <span
                        className="
                          inline-flex
                          items-center
                          px-3
                          py-1.5
                          rounded-md
                          bg-[#dbe7f5]
                          text-slate-700
                          text-xs
                          font-medium
                        "
                      >
                        Peer Reviewed
                      </span>

                      <span
                        className="
                          inline-flex
                          items-center
                          px-3
                          py-1.5
                          rounded-md
                          border
                          border-[#d6b9b0]
                          bg-[#f8efec]
                          text-slate-600
                          text-xs
                          font-medium
                        "
                      >
                        Open Access
                      </span>

                    </div>

                    {/* =================================================
                        TITLE
                    ================================================= */}
                    <button
                      type="button"
                      onClick={() => {
                        if (article.path) {
                          setSelectedPdf({
                            path: article.path,
                            title: article.title,
                            doi: article.doi,
                          });
                        }
                      }}
                      className="
                        block
                        w-full
                        text-left
                        text-xl
                        sm:text-2xl
                        font-bold
                        leading-tight
                        text-[#111827]
                        hover:text-[#0f4a85]
                        transition-colors
                        pr-0
                        lg:pr-10
                        cursor-pointer
                      "
                    >
                      {article.title}
                    </button>

                    {/* Author */}
                    <div className="flex items-center gap-2 mt-4">

                      <UserRound
                        className="
                          w-5
                          h-5
                          text-slate-500
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-semibold
                          text-slate-800
                        "
                      >
                        {firstAuthor}
                      </span>

                    </div>

                    {/* =================================================
                        META INFORMATION
                    ================================================= */}
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-2
                        gap-y-2
                        mt-4
                        text-sm
                        text-slate-600
                      "
                    >

                      {/* Subject */}
                      {article.subject && (
                        <>
                          <span>
                            <strong className="text-slate-700">
                              Subject:
                            </strong>{' '}
                            {article.subject}
                          </span>

                          <span className="text-slate-300">
                            |
                          </span>
                        </>
                      )}

                      {/* Stream */}
                      {article.stream && (
                        <>
                          <span>
                            <strong className="text-slate-700">
                              Stream:
                            </strong>{' '}
                            {article.stream}
                          </span>

                          <span className="text-slate-300">
                            |
                          </span>
                        </>
                      )}

                      {/* Paper ID */}
                      {article.paperId && (
                        <span>
                          <strong className="text-slate-700">
                            Paper ID:
                          </strong>{' '}
                          {article.paperId}
                        </span>
                      )}

                    </div>

                    {/* =================================================
                        KEYWORDS
                    ================================================= */}
                    {article.keywords && (
                      <div
                        className="
                          mt-4
                          text-sm
                          text-slate-600
                        "
                      >
                        <strong className="text-slate-700">
                          Keywords:
                        </strong>{' '}

                        {Array.isArray(article.keywords)
                          ? article.keywords.join(', ')
                          : article.keywords}
                      </div>
                    )}

                  </div>

                  {/* =================================================
                      DOI
                  ================================================= */}
                  {article.doi && (
                    <div
                      className="
                        shrink-0
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-700
                        lg:max-w-[280px]
                      "
                    >

                      <span
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-orange-100
                          text-orange-600
                          flex
                          items-center
                          justify-center
                          text-xs
                          font-bold
                        "
                      >
                        doi
                      </span>

                      <span
                        className="
                          font-medium
                          break-all
                        "
                      >
                        {article.doi}
                      </span>

                    </div>
                  )}

                </div>

                {/* =====================================================
                    BOTTOM ACTIONS
                ===================================================== */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    mt-6
                    pt-5
                    border-t
                    border-slate-100
                  "
                >

                  {/* Abstract */}
                  <button
                    type="button"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      border
                      border-slate-300
                      bg-white
                      text-sm
                      font-medium
                      text-slate-700
                      hover:bg-slate-50
                      transition-colors
                    "
                  >
                    <FileText className="w-4 h-4" />

                    Abstract
                  </button>

                  {/* =================================================
                      VIEW ARTICLE
                  ================================================= */}
                  <button
                    type="button"
                    onClick={() => {
                      if (article.path) {
                        setSelectedPdf({
                          path: article.path,
                          title: article.title,
                          doi: article.doi,
                        });
                      }
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-[#0f4a85]
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-blue-800
                      transition-colors
                      cursor-pointer
                    "
                  >
                    <Eye className="w-4 h-4" />

                    View Article
                  </button>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            NO RESULTS
        ===================================================== */}
        {filteredArticles.length === 0 && (
          <div
            className="
              text-center
              py-16
              bg-white
              rounded-2xl
              border
              border-slate-200
            "
          >

            <FileText
              className="
                w-10
                h-10
                mx-auto
                text-slate-300
                mb-3
              "
            />

            <p className="text-sm text-slate-500">
              No research articles match your search criteria.
            </p>

          </div>
        )}

        {/* =====================================================
            TEMPLATE BANNER
        ===================================================== */}
        <div
          className="
            mt-10
            p-6
            sm:p-8
            rounded-2xl
            bg-white
            border
            border-slate-200
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-blue-50
                text-[#0f4a85]
                flex
                items-center
                justify-center
                shrink-0
                border
                border-blue-100
              "
            >
              <FileText className="w-6 h-6" />
            </div>

            <div>

              <h4
                className="
                  text-sm
                  sm:text-base
                  font-bold
                  text-slate-900
                "
              >
                Publishing in IJSPAST
              </h4>

              <p
                className="
                  text-xs
                  text-slate-500
                  mt-1
                "
              >
                Download the camera-ready template with Times New Roman
                & Helvetica formatting rules.
              </p>

            </div>

          </div>

          <a
            href="/template"
            className="
              px-5
              py-2.5
              rounded-xl
              text-xs
              font-bold
              text-white
              bg-[#0f4a85]
              hover:bg-blue-800
              transition-colors
              shrink-0
            "
          >
            View Template Specs
          </a>

        </div>

      </div>

      {/* =========================================================
          PDF MODAL (PORTAL TO DOCUMENT.BODY)
      ========================================================= */}
      {selectedPdf &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-[999999]
              flex
              items-center
              justify-center
              bg-slate-950/80
              backdrop-blur-sm
              p-2
              sm:p-4
              md:p-6
              animate-in
              fade-in
              duration-200
            "
            onMouseDown={(e) => {
              // Close only when clicking the backdrop overlay
              if (e.target === e.currentTarget) {
                setSelectedPdf(null);
              }
            }}
          >
            {/* =====================================================
                MODAL CONTAINER
            ===================================================== */}
            <div
              className="
                relative
                w-full
                max-w-[1300px]
                h-[92vh]
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                border
                border-slate-200
                flex
                flex-col
                animate-in
                zoom-in-95
                duration-200
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}
              <div
                className="
                  h-14
                  sm:h-16
                  flex
                  items-center
                  justify-between
                  px-4
                  sm:px-6
                  bg-white
                  border-b
                  border-slate-200
                  shrink-0
                  z-10
                "
              >
                {/* Left: Icon and Title */}
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <div
                    className="
                      w-9
                      h-9
                      rounded-xl
                      bg-blue-50
                      text-[#0f4a85]
                      flex
                      items-center
                      justify-center
                      shrink-0
                      border
                      border-blue-100
                    "
                  >
                    <FileText className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {typeof selectedPdf === 'object'
                        ? selectedPdf.title
                        : 'Research Paper PDF'}
                    </h3>

                    {typeof selectedPdf === 'object' && selectedPdf.doi && (
                      <p className="text-xs text-slate-500 truncate">
                        DOI: {selectedPdf.doi}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Actions & Close Button */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Open in New Tab */}
                  <a
                    href={
                      typeof selectedPdf === 'object'
                        ? selectedPdf.path
                        : selectedPdf
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      hidden
                      sm:inline-flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-lg
                      text-xs
                      font-semibold
                      text-slate-700
                      bg-slate-100
                      hover:bg-slate-200
                      hover:text-[#0f4a85]
                      transition-colors
                    "
                    title="Open in new window"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    New Tab
                  </a>

                  {/* Download */}
                  <a
                    href={
                      typeof selectedPdf === 'object'
                        ? selectedPdf.path
                        : selectedPdf
                    }
                    download
                    className="
                      hidden
                      sm:inline-flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-lg
                      text-xs
                      font-semibold
                      text-slate-700
                      bg-slate-100
                      hover:bg-slate-200
                      hover:text-[#0f4a85]
                      transition-colors
                    "
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedPdf(null)}
                    className="
                      w-9
                      h-9
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-100
                      text-slate-600
                      hover:bg-red-50
                      hover:text-red-600
                      transition-colors
                      cursor-pointer
                    "
                    aria-label="Close PDF"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* =================================================
                  PDF VIEWER IFRAME
              ================================================= */}
              <div className="flex-1 w-full h-full bg-slate-200 relative">
                <iframe
                  src={
                    typeof selectedPdf === 'object'
                      ? selectedPdf.path
                      : selectedPdf
                  }
                  title="Research Paper PDF"
                  className="
                    w-full
                    h-full
                    border-0
                    block
                  "
                />
              </div>
            </div>
          </div>,
          document.body
        )}

    </div>
  );
}