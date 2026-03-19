"use client";

import Link from "next/link";
import { useState } from "react";

export default function TargetAudiencePage() {
  return (
    <div>
      {/* ── HeroSplit ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Who We Serve</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Empowering Students to Create Positive Change
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                At Light Ahead Movement, we focus on reaching students who are passionate about making a difference in their communities and the world around them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all duration-300">
                  View Our Programs
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Diverse group of students collaborating" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FeatureGrid ── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Student Demographics</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Understanding Our Student Community</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We serve a diverse range of students at different stages of their educational journey, each bringing unique perspectives and energy to our movement.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High School Students</h3>
              <p className="text-gray-500 leading-relaxed">Motivated teenagers looking to make an impact in their local communities while building leadership skills and preparing for their futures.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">University Students</h3>
              <p className="text-gray-500 leading-relaxed">College and university students passionate about social justice, environmental causes, and creating sustainable change in their communities.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graduate Students</h3>
              <p className="text-gray-500 leading-relaxed">Advanced students and young professionals who want to leverage their expertise and networks to drive meaningful social impact initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── StatsRow ── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">2,500+</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Students Reached</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">150+</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Schools Engaged</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">45+</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Cities Impacted</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">95%</p>
              <p className="text-gray-400 mt-2 font-medium text-sm uppercase tracking-wide">Positive Feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SplitContent ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Student Characteristics</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What Unites Our Student Community</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">Our students share common values and aspirations that drive them to seek meaningful ways to contribute to positive change. They are curious, passionate, and committed to learning and growing while making a difference.</p>
              <p className="text-gray-500 leading-relaxed">They come from diverse backgrounds, study various subjects, and have different life experiences, but they all share a desire to be part of something bigger than themselves and to use their energy and talents for the greater good.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl lg:order-2">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Students engaged in community service" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FeatureGrid ── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Student Motivations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Students Join Our Movement</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Understanding what drives our student community helps us better serve their needs and create meaningful opportunities for engagement and impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Making a Difference</h3>
              <p className="text-gray-500 leading-relaxed">Students want to contribute to causes they care about and see tangible results from their efforts in improving communities and lives.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.311-.06m0 0a5.99 5.99 0 013.528 0A17.696 17.696 0 0112 18.5a17.49 17.49 0 01-3.528-2.94m0 0c.018-.026.037-.052.056-.078a13.13 13.13 0 011.462-1.462c.026-.019.052-.037.078-.056" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Development</h3>
              <p className="text-gray-500 leading-relaxed">They seek opportunities to develop leadership skills, communication abilities, and practical experience that will benefit their future careers.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Connection</h3>
              <p className="text-gray-500 leading-relaxed">Students value connecting with like-minded peers who share their values and commitment to creating positive social change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TestimonialSection ── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-8">Student Voice</p>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
            "Being part of Light Ahead Movement has given me the opportunity to turn my passion for social justice into real action. The support and resources they provide have been incredible."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
              SM
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Sarah Martinez</p>
              <p className="text-gray-500 text-sm">University Student, Environmental Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTABanner ── */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Join Our Student Movement?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Connect with fellow students who are passionate about creating positive change. Discover opportunities to make a real impact in your community and beyond.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300">
              Explore Programs
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}