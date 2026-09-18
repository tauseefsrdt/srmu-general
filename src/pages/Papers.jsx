import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Download,
  FileText,
  Quote,
  UserRound,
  Eye,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import { featuredTemplateArticles } from '../data/journalDocData';

export default function Papers() {
  const [searchQuery, setSearchQuery] = useState('');

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
      {/* Page Hero */}
      <PageHero
        title="Journal Papers & Research Publications"
        subtitle="Explore peer-reviewed open-access articles and research publications."
        badge="Research Papers · 2026"
        breadcrumbs={[
          { name: 'Papers', path: '/papers' },
          { name: 'Research Publications' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Search */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />

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

        {/* Research Papers */}
        <div className="space-y-6">
          {filteredArticles.map((article) => {
            const firstAuthor = article.authors?.[0]?.name || 'Author';

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
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

                  {/* Main Content */}
                  <div className="min-w-0 flex-1">

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="
                        inline-flex
                        items-center
                        px-3
                        py-1.5
                        rounded-md
                        bg-[#111827]
                        text-white
                        text-xs
                        font-semibold
                      ">
                        Research Paper
                      </span>

                      <span className="
                        inline-flex
                        items-center
                        px-3
                        py-1.5
                        rounded-md
                        bg-[#dbe7f5]
                        text-slate-700
                        text-xs
                        font-medium
                      ">
                        Peer Reviewed
                      </span>

                      <span className="
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
                      ">
                        Open Access
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      to={`/articles/${article.id}`}
                      className="
                        block
                        text-xl
                        sm:text-2xl
                        font-bold
                        leading-tight
                        text-[#111827]
                        hover:text-[#0f4a85]
                        transition-colors
                        pr-0 lg:pr-10
                      "
                    >
                      {article.title}
                    </Link>

                    {/* Author */}
                    <div className="flex items-center gap-2 mt-4">
                      <UserRound className="w-5 h-5 text-slate-500" />

                      <span className="text-sm font-semibold text-slate-800">
                        {firstAuthor}
                      </span>
                    </div>

                    {/* Meta Information */}
                    <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-2
                      gap-y-2
                      mt-4
                      text-sm
                      text-slate-600
                    ">
                      {article.subject && (
                        <>
                          <span>
                            <strong className="text-slate-700">
                              Subject:
                            </strong>{' '}
                            {article.subject}
                          </span>

                          <span className="text-slate-300">|</span>
                        </>
                      )}

                      {article.stream && (
                        <>
                          <span>
                            <strong className="text-slate-700">
                              Stream:
                            </strong>{' '}
                            {article.stream}
                          </span>

                          <span className="text-slate-300">|</span>
                        </>
                      )}

                      {article.paperId && (
                        <span>
                          <strong className="text-slate-700">
                            Paper ID:
                          </strong>{' '}
                          {article.paperId}
                        </span>
                      )}
                    </div>

                    {/* Keywords */}
                    {article.keywords && (
                      <div className="mt-4 text-sm text-slate-600">
                        <strong className="text-slate-700">
                          Keywords:
                        </strong>{' '}
                        {Array.isArray(article.keywords)
                          ? article.keywords.join(', ')
                          : article.keywords}
                      </div>
                    )}

                  </div>

                  {/* DOI */}
                  {article.doi && (
                    <div className="
                      shrink-0
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-700
                      lg:max-w-[280px]
                    ">
                      <span className="
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
                      ">
                        doi
                      </span>

                      <span className="font-medium break-all">
                        {article.doi}
                      </span>
                    </div>
                  )}

                </div>

                {/* Bottom Actions */}
                <div className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  mt-6
                  pt-5
                  border-t
                  border-slate-100
                ">

                  {/* Abstract */}
                  <Link
                    to={`#`}
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
                  </Link>



                  {/* Cite */}


                  {/* View */}
                  <a
                    href={article.path}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    "
                  >
                    <Eye className="w-4 h-4" />
                    View Article
                  </a>

                </div>
              </article>
            );
          })}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="
            text-center
            py-16
            bg-white
            rounded-2xl
            border
            border-slate-200
          ">
            <FileText className="w-10 h-10 mx-auto text-slate-300 mb-3" />

            <p className="text-sm text-slate-500">
              No research articles match your search criteria.
            </p>
          </div>
        )}

        {/* Template Banner */}
        <div className="
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
        ">
          <div className="flex items-center gap-4">
            <div className="
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
            ">
              <FileText className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Publishing in IJSPAST
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                Download the camera-ready template with Times New Roman
                & Helvetica formatting rules.
              </p>
            </div>
          </div>

          <Link
            to="/template"
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
          </Link>
        </div>

      </div>
    </div>
  );
}