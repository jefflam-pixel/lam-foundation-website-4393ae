"use client";

import Link from "next/link";
import { useState } from "react";

export default function StructurePage() {
  return (
    <>
      {/* ── HeroMinimal ── */}
      <section className="py-32 sm:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Foundation</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            How We're <span className="text-blue-600">Structured</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Learn about the organizational structure that enables Light Ahead Movement to effectively serve students and build stronger communities through our nonprofit mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all duration-300">
              Get Involved
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── FeatureGrid ── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Organization</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Departments</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our streamlined structure ensures every student receives the support they need while maximizing our impact in communities nationwide.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Programs</h3>
              <p className="text-gray-500 leading-relaxed">Direct services and support programs designed specifically for student success, including mentorship, scholarships, and educational resources.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18h13.5m-13.5 0a2.25 2.25 0 0 0-2.25 2.25v13.5a2.25 2.25 0 0 0 2.25 2.25M5.25 6h13.5v13.5H5.25V6ZM12 7.875v9.75m-3.375-7.5h6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Outreach</h3>
              <p className="text-gray-500 leading-relaxed">Building partnerships with schools, local organizations, and community leaders to expand our reach and strengthen support networks for students.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0-1 3m0 3h-8.5m8.5-3a2.25 2.25 0 0 0-2.25-2.25H6m0 0a2.25 2.25 0 0 1-2.25 2.25m2.25 0h7.5m0 0v6h-7.5v-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operations & Administration</h3>
              <p className="text-gray-500 leading-relaxed">Ensuring efficient management of resources, compliance with nonprofit regulations, and transparent financial stewardship of donor contributions.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75-7.478h.375a3 3 0 0 1 3 3v.375H21a.75.75 0 0 1 .75.75 2.25 2.25 0 0 1-.1.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H8.625a1.125 1.125 0 0 0-1.125 1.125v17.25a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 .75-.75V18.75a1.5 1.5 0 0 1 3 0v.375a.75.75 0 0 0 .75.75H20.25a3 3 0 0 0 3-3v-.375Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Fundraising</h3>
              <p className="text-gray-500 leading-relaxed">Securing sustainable funding through grants, donations, and partnerships to support our growing programs and student initiatives.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-500 leading-relaxed">Monitoring program effectiveness, measuring student outcomes, and maintaining high standards across all our educational and support initiatives.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communications</h3>
              <p className="text-gray-500 leading-relaxed">Sharing our mission and impact through digital platforms, community events, and awareness campaigns to inspire more students and supporters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SplitContent ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Governance & Oversight</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our Board of Directors provides strategic guidance and ensures accountability in all our operations. Composed of education professionals, community leaders, and student advocates, they bring diverse expertise to support our mission.
              </p>
              <p className="text-gray-500 leading-relaxed">
                With quarterly reviews and annual strategic planning sessions, our governance structure maintains transparency while adapting to the evolving needs of the students we serve. Every decision is made with student success as our primary consideration.
              </p>
            </div>
            {/* Image side */}
            <div className="relative overflow-hidden rounded-2xl lg:order-2">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Board meeting and leadership team discussing student programs" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── StatsRow ── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">7</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Key Departments</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">12</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Board Members</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">45</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Staff & Volunteers</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">24/7</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Student Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SplitContent ── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Students collaborating and working together on projects" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            {/* Text side */}
            <div className="lg:order-2">
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Collaboration</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Working Together</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our structure emphasizes collaboration between departments, ensuring that every student benefits from coordinated support across all areas of our organization. Regular cross-departmental meetings and shared goals keep everyone aligned.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From initial outreach to ongoing mentorship, our integrated approach means students receive comprehensive support that addresses their academic, personal, and professional development needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTABanner ── */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Our Structure</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Whether as a volunteer, board member, or community partner, there are many ways to become part of our organizational structure and help us support more students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300">
              Get Involved
            </Link>
            <Link href="/mission" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Learn Our Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}