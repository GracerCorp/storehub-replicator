import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Index = () => {
  // Add refs for elements that will be animated on scroll
  const heroImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    const elements = [
      heroImageRef.current,
      featuresRef.current,
      logosRef.current
    ];

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Mock data for features
  const features = [
    {
      title: "ระบบ POS ใช้งานง่าย",
      description: "ออกแบบให้ใช้งานง่าย ไม่ซับซ้อน พร้อมคู่มือและวิดีโอสอนการใช้งาน",
      isOrange: true
    },
    {
      title: "จัดการสต๊อกเรียลไทม์",
      description: "ตรวจสอบและจัดการสต๊อกสินค้าแบบเรียลไทม์ ป้องกันของหมด",
      isOrange: false
    },
    {
      title: "รองรับการขยายสาขา",
      description: "รองรับการขยายธุรกิจไปยังหลายสาขา พร้อมระบบจัดการแบบรวมศูนย์",
      isOrange: false
    },
    {
      title: "รายงานยอดขายละเอียด",
      description: "วิเคราะห์ยอดขาย สินค้าขายดี และพฤติกรรมลูกค้าด้วยรายงานแบบละเอียด",
      isOrange: false
    },
    {
      title: "รองรับมือถือและแท็บเล็ต",
      description: "ใช้งานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ทำงานได้ทุกที่",
      isOrange: false
    },
    {
      title: "การชำระเงินหลากหลาย",
      description: "รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด บัตรเครดิต และ QR Payment",
      isOrange: false
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      quote: "Gserve ช่วยให้ร้านของเราจัดการสต๊อกสินค้าและยอดขายได้อย่างมีประสิทธิภาพมากขึ้น ประหยัดเวลาและลดข้อผิดพลาด",
      author: "คุณสมศรี",
      position: "เจ้าของร้าน",
      companyName: "ร้านกาแฟบ้านสุข",
      imageSrc: "https://images.unsplash.com/photo-1512901707305-326e571c3b3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      quote: "ใช้งานง่าย รวดเร็ว พนักงานใหม่เรียนรู้ได้ไวมาก การสรุปรายงานยอดขายช่วยให้เราวางแผนธุรกิจได้ดีขึ้น",
      author: "คุณรัตนา",
      position: "ผู้จัดการ",
      companyName: "ร้านอาหารรสเด็ด",
      imageSrc: "https://images.unsplash.com/photo-1546656592-7df029c5e639?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      quote: "ขยายสาขาจาก 1 เป็น 3 สาขาในเวลาไม่ถึงปี ด้วยความช่วยเหลือจากระบบจัดการของ Gserve ที่ควบคุมทุกอย่างจากที่เดียว",
      author: "คุณนิติพล",
      position: "CEO",
      companyName: "ฟิตเนสอินไซด์",
      imageSrc: "https://images.unsplash.com/photo-1589378835398-3b8636515e2a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  // Mock partner logos
  const partnerLogos = [
    '/partner/Ellipse 4006.png',
    '/partner/Ellipse 4007.png',
    '/partner/Ellipse 4008.png',
    '/partner/Ellipse 4009.png',
    '/partner/Ellipse 4010.png',
    '/partner/Ellipse 4011.png',
    '/partner/Ellipse 4012.png',
    '/partner/Ellipse 4013.png',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:py-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 text-center lg:text-left z-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dineflow-dark-gray">
                  <span className="text-dineflow-brown block mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>DineFlow POS</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.4s' }}>ระบบ POS จัดการร้าน</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.6s' }}>ง่าย ครบ จบในระบบเดียว</span>
                </h1>

                <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                  ยกระดับธุรกิจของคุณด้วยระบบ POS ที่ใช้งานง่าย รวดเร็ว และเชื่อถือได้
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Button className="px-6 py-6 bg-dineflow-brown hover:bg-dineflow-light-brown text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '1s' }}>
                    ทดลองใช้ฟรี 14 วัน <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="px-6 py-6 bg-white hover:bg-gray-50 text-dineflow-dark-gray font-semibold text-lg rounded-lg shadow-sm transition-all duration-300 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                    ดูวิธีการใช้งาน
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-2 lg:relative">
              <div
                ref={heroImageRef}
                className="mt-8 img-reveal shine-effect relative z-10 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="DineFlow POS System Interface"
                  className="w-full h-auto transition-scale"
                />
              </div>

              {/* Floating Form */}
              <div className="lg:absolute lg:-bottom-12 lg:-right-8 mt-8 lg:mt-0 z-20 transform transition-transform hover:-translate-y-2 duration-300">
                <LeadForm />
              </div>

              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-dineflow-brown/10 rounded-full blur-2xl"></div>
              <div className="hidden lg:block absolute -bottom-10 -right-10 w-60 h-60 bg-dineflow-purple/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block bg-gradient-to-r from-dineflow-brown to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Feature ที่โดดเด่น</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">เมื่อใช้งาน DineFlow POS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ระบบ POS ที่ออกแบบมาเพื่อธุรกิจของคุณ ช่วยให้การทำงานง่ายขึ้น</p>
          </div>

          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 img-reveal max-w-6xl mx-auto"
          >
            <FeatureCard
              title="ระบบ POS ใช้งานง่าย"
              description="ออกแบบให้ใช้งานง่าย ไม่ซับซ้อน พร้อมคู่มือและวิดีโอสอนการใช้งาน"
              orangeBackground={true}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            />

            <FeatureCard
              title="จัดการสต๊อกเรียลไทม์"
              description="ตรวจสอบและจัดการสต๊อกสินค้าแบบเรียลไทม์ ป้องกันของหมด"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              }
            />

            <FeatureCard
              title="รองรับการขยายสาขา"
              description="รองรับการขยายธุรกิจไปยังหลายสาขา พร้อมระบบจัดการแบบรวมศูนย์"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              }
            />

            <FeatureCard
              title="รายงานยอดขายละเอียด"
              description="วิเคราะห์ยอดขาย สินค้าขายดี และพฤติกรรมลูกค้าด้วยรายงานแบบละเอียด"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              }
            />

            <FeatureCard
              title="รองรับมือถือและแท็บเล็ต"
              description="ใช้งานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ทำงานได้ทุกที่"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              }
            />

            <FeatureCard
              title="การชำระเงินหลากหลาย"
              description="รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด บัตรเครดิต และ QR Payment"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              }
            />
          </div>

          <div className="mt-12 text-center">
            <Button className="px-8 py-6 bg-gradient-to-r from-dineflow-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300">
              ดูฟีเจอร์ทั้งหมด
            </Button>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-dineflow-brown to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">ชมการทำงาน</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">หน้าตา DineFlow POS เป็นอย่างไร?</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">ระบบ POS ที่ออกแบบเพื่อความง่ายในการใช้งาน ครบครันด้วยฟีเจอร์ที่ตอบโจทย์ธุรกิจทุกประเภท</p>
          </div>

          {/* Main Slideshow */}
          <div className="max-w-5xl mx-auto relative group">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              {/* Slide 1 */}
              <div className="relative">
                <img
                  src="/images/pos/messageImage_1744299778817_0.jpg"
                  alt="DineFlow POS Interface - หน้าจอหลัก"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">หน้าจอหลักของ DineFlow POS</h3>
                  <p className="text-sm text-white/80">ดูภาพรวมร้านได้ในหน้าเดียว พร้อมฟังก์ชันที่ใช้งานบ่อยในการเข้าถึงที่รวดเร็ว</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="relative w-24 h-16 rounded-lg overflow-hidden border-2 border-dineflow-brown">
                <img
                  src="/images/pos/messageImage_1744299778817_0.jpg"
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dineflow-brown/20"></div>
              </button>
              <button className="relative w-24 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-dineflow-brown/50 transition-all">
                <img
                  src="/images/pos/messageImage_1744299750351_0.jpg"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all"></div>
              </button>
              <button className="relative w-24 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-dineflow-brown/50 transition-all">
                <img
                  src="/images/pos/messageImage_1744299722149_0.jpg"
                  alt="Thumbnail 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all"></div>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">ใช้งานง่าย</h4>
                <p className="text-gray-600 text-sm">อินเทอร์เฟซที่เรียบง่าย เข้าใจได้ทันที</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">ทำงานได้ทุกที่</h4>
                <p className="text-gray-600 text-sm">ใช้งานได้ทั้งบนมือถือและแท็บเล็ต</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">อัพเดทต่อเนื่อง</h4>
                <p className="text-gray-600 text-sm">รับฟีเจอร์ใหม่ๆ อัตโนมัติ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">รีวิวจากลูกค้า</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">ลูกค้าพูดถึงเราอย่างไร</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ประสบการณ์จริงจากผู้ประกอบการที่ใช้ DineFlow POS</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div className="flex flex-nowrap testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      companyName={testimonial.companyName}
                      imageSrc={testimonial.imageSrc}
                      className="h-full transform transition-all duration-300 hover:-translate-y-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 rounded-full bg-dineflow-brown"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm mb-8">ธุรกิจชั้นนำที่ไว้วางใจเรา</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      "1560179707-f14e90ef3623",
                      "1541746972996-4e0b0f43e02a",
                      "1542744173-8e7e53415bb0",
                      "1516387938699-a93567ec168e",
                      "1606857521015-7f9fcf423740"
                    ][i - 1]}?w=120&h=60&fit=crop&q=80`}
                    alt={`Client Logo ${i}`}
                    className="h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">สำหรับทุกธุรกิจ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">ระบบ POS DineFlow</h2>
            <h3 className="text-2xl font-semibold text-dineflow-orange mb-4">รองรับธุรกิจทุกประเภท</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">ไม่ว่าคุณจะทำธุรกิจประเภทใด DineFlow POS ก็พร้อมเป็นผู้ช่วยที่ดีที่สุดของคุณ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Restaurant Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">ร้านอาหาร</h4>
                <p className="text-gray-600 text-center text-sm">จัดการออเดอร์ เมนูอาหาร และการจองโต๊ะได้อย่างมีประสิทธิภาพ พร้อมระบบแจ้งเตือนครัวอัตโนมัติ</p>
              </div>
            </div>

            {/* Retail Store Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">ร้านค้าปลีก</h4>
                <p className="text-gray-600 text-center text-sm">บริหารสต็อกสินค้า ติดตามยอดขาย และจัดการสมาชิกได้ง่าย พร้อมระบบสแกนบาร์โค้ดที่รวดเร็ว</p>
              </div>
            </div>

            {/* Cafe Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">คาเฟ่</h4>
                <p className="text-gray-600 text-center text-sm">จัดการเมนูเครื่องดื่ม ควบคุมวัตถุดิบ และติดตามยอดขายได้แบบเรียลไทม์ พร้อมระบบสมาชิก</p>
              </div>
            </div>

            {/* Bar Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">บาร์</h4>
                <p className="text-gray-600 text-center text-sm">ควบคุมสต็อกเครื่องดื่ม จัดการบิล และติดตามยอดขายได้ง่าย พร้อมระบบจัดการโปรโมชั่น</p>
              </div>
            </div>

            {/* Spa Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">สปา</h4>
                <p className="text-gray-600 text-center text-sm">จัดการการจอง ตารางพนักงาน และแพ็คเกจบริการได้ง่าย พร้อมระบบแจ้งเตือนลูกค้า</p>
              </div>
            </div>

            {/* Fitness Card */}
            <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V12a2 2 0 10-4 0v2.5"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-dineflow-dark-gray text-center mb-3">ฟิตเนส</h4>
                <p className="text-gray-600 text-center text-sm">จัดการสมาชิก ตารางคลาส และการจองคอร์สเทรนเนอร์ได้ง่าย พร้อมระบบเช็คอินอัตโนมัติ</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="group px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:scale-105">
              <span className="flex items-center">
                ดูธุรกิจทั้งหมดที่รองรับ
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-dineflow-dark-gray mb-4">แบรนด์ชั้นนำที่ไว้วางใจเลือกใช้บริการ DineFlow POS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ร่วมเป็นส่วนหนึ่งกับแบรนด์ชั้นนำที่ไว้วางใจเรา</p>
          </div>

          <div
            ref={logosRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center img-reveal max-w-5xl mx-auto"
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="w-full max-w-[300px] aspect-[3/2] relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br rounded-lg shadow-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-dineflow-brown to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">คำถามที่พบบ่อย</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">คำถามที่พบบ่อย</h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-1');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>DineFlow เหมาะกับธุรกิจประเภทใดบ้าง?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-1" className="px-6 pb-6 hidden">
                <p className="text-gray-600">ระบบของเรารองรับหลากหลายธุรกิจ เช่น ร้านอาหาร คาเฟ่ บาร์ ร้านเหล้า มินิมาร์ท ร้านค้าแฟชั่น รวมถึงธุรกิจบริการอื่น ๆ ที่ต้องการระบบ POS ที่ยืดหยุ่นและใช้งานง่าย</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-2');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>รองรับการเชื่อมต่ออุปกรณ์ POS หรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-2" className="px-6 pb-6 hidden">
                <p className="text-gray-600">รองรับ 100%! DineFlow สามารถเชื่อมต่อกับอุปกรณ์ POS มาตรฐานได้ครบถ้วน เช่น เครื่องพิมพ์ใบเสร็จ เครื่องสแกนบาร์โค้ด ลิ้นชักเก็บเงิน และหน้าจอลูกค้า</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-3');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>ระบบมีการจัดการสต็อกสินค้าหรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-3" className="px-6 pb-6 hidden">
                <p className="text-gray-600">มีครบถ้วน! ระบบสต็อกแบบเรียลไทม์ สามารถติดตามสินค้าเข้า-ออก ตรวจสอบปริมาณคงเหลือ และแจ้งเตือนเมื่อใกล้หมด ช่วยให้คุณบริหารจัดการคลังสินค้าได้อย่างแม่นยำ</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-4');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>มีรายงานยอดขายหรือแดชบอร์ดวิเคราะห์ไหม?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-4" className="px-6 pb-6 hidden">
                <p className="text-gray-600">มีทั้งรายงานมาตรฐานและแดชบอร์ดสำหรับผู้บริหาร สามารถดูยอดขายตามวัน เวลา สินค้า หรือพนักงาน ช่วยให้วางแผนการตลาดและบริหารร้านได้ง่ายขึ้น</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-5');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>ใช้งานยากไหม? ต้องอบรมก่อนหรือเปล่า?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-5" className="px-6 pb-6 hidden">
                <p className="text-gray-600">ไม่ยากเลย! DineFlow ถูกออกแบบให้ใช้งานง่าย อินเทอร์เฟซเป็นมิตรต่อผู้ใช้ และเรามีคู่มือการใช้งาน พร้อมบริการอบรมฟรีให้กับทุกแพ็กเกจ</p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-6');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>หากเจอปัญหา มีทีมซัพพอร์ตหรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-6" className="px-6 pb-6 hidden">
                <p className="text-gray-600">แน่นอน! เรามีทีมซัพพอร์ตที่ดูแลคุณอย่างใกล้ชิด ผ่าน Line, โทรศัพท์ หรือรีโมตออนไลน์ ให้ความช่วยเหลือรวดเร็วในเวลาทำการ</p>
              </div>
            </div>
          </div>

          {/* Why Choose DineFlow Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-dineflow-dark-gray mb-8 text-center">ทำไมต้องเลือก DineFlow?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ปรับได้ตามสไตล์ร้านคุณ
                </h3>
                <p className="text-gray-600">DineFlow ไม่ใช่ระบบสำเร็จรูปแบบตายตัว แต่สามารถปรับแต่งได้ทุกขั้นตอนให้เหมาะกับวิธีการทำงานจริงของร้านคุณ</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ระบบเสถียร ใช้งานลื่นไหล
                </h3>
                <p className="text-gray-600">สร้างบนเทคโนโลยีสมัยใหม่ ใช้งานได้ต่อเนื่องแม้ในช่วงพีคของร้าน ไม่มีล่ม ไม่มีค้าง</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ราคาสมเหตุสมผล
                </h3>
                <p className="text-gray-600">แพ็กเกจหลากหลาย เลือกได้ตามขนาดร้าน ไม่มีค่าธรรมเนียมแอบแฝง และไม่มีสัญญาผูกมัดระยะยาว</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ฟีเจอร์ครบถ้วน
                </h3>
                <p className="text-gray-600">รองรับทุกความต้องการ เช่น ระบบจัดการโต๊ะ ระบบสั่งจอง ระบบจ่ายล่วงหน้า สต็อกสินค้า รายงานเรียลไทม์</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ทีมงานดูแลใกล้ชิด
                </h3>
                <p className="text-gray-600 text-center text-sm">ไม่ใช่แค่ระบบ แต่เราคือทีมงานที่เข้าใจร้านอาหาร พร้อมให้คำแนะนำ แก้ไข และพัฒนาให้เหมาะกับธุรกิจคุณ</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300">
              ติดต่อเจ้าหน้าที่
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dineflow-brown to-amber-500 relative overflow-hidden">
        {/* Add animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-up">พร้อมเริ่มต้นใช้งาน DineFlow POS หรือยัง?</h2>
            <p className="text-white text-lg mb-8 opacity-90">ติดต่อเราเพื่อรับคำปรึกษาฟรี และทดลองใช้งานฟรี 14 วัน</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="group px-8 py-6 bg-white hover:bg-yellow-50 text-dineflow-brown font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  ทดลองใช้ฟรี 14 วัน
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              <Button
                variant="outline"
                className="group px-8 py-6 bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  ดูราคาแพ็คเกจ
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="text-center mt-8 text-white/80">
              <p>Powered by Gracer Company Limited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sticky CTA Button - visible on scroll */}
      <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-32 sticky-cta">
        <div className="flex flex-col items-end space-y-2">
          <Button className="group px-6 py-4 bg-gradient-to-r from-dineflow-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <span className="flex items-center">
              <span className="mr-2">ทดลองใช้ฟรี</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button className="md:hidden px-6 py-4 bg-white text-dineflow-brown font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <span>ติดต่อเรา</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* UI Demo Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ระบบ DineFlow POS ใช้งานง่าย เหมาะกับร้านอาหารทุกประเภท
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ออกแบบมาเพื่อตอบโจทย์ร้านอาหารโดยเฉพาะ ใช้งานง่าย รวดเร็ว และมีฟีเจอร์ครบครัน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <span className="text-dineflow-brown">01.</span> หน้าจอรับออเดอร์อัจฉริยะ
                </h3>
                <p className="text-gray-600 mb-4">
                  รับออเดอร์ได้รวดเร็ว แก้ไขรายการอาหารง่าย พร้อมระบบแนะนำเมนูและโปรโมชั่น
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1606976428769-1519a70f8c2c?w=600&h=400&fit=crop" 
                  alt="DineFlow POS Order Screen" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <span className="text-dineflow-brown">02.</span> ระบบชำระเงินที่ยืดหยุ่น
                </h3>
                <p className="text-gray-600 mb-4">
                  รองรับการชำระเงินหลากหลายรูปแบบ ทั้งเงินสด บัตรเครดิต และ QR Payment
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop" 
                  alt="DineFlow POS Payment System" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>

            <div className="space-y-6 md:mt-12">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <span className="text-dineflow-brown">03.</span> จัดการโต๊ะและพื้นที่ร้าน
                </h3>
                <p className="text-gray-600 mb-4">
                  ระบบจัดการโต๊ะแบบ Real-time พร้อมแสดงสถานะโต๊ะและเวลารับประทานอาหาร
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&h=400&fit=crop" 
                  alt="DineFlow Table Management" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <span className="text-dineflow-brown">04.</span> รายงานและวิเคราะห์ข้อมูล
                </h3>
                <p className="text-gray-600 mb-4">
                  ดูรายงานยอดขาย สินค้าขายดี และพฤติกรรมลูกค้าแบบ Real-time
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="DineFlow Analytics Dashboard" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-dineflow-brown/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">ความปลอดภัยสูง</h4>
                <p className="text-gray-600">ระบบเข้ารหัสข้อมูลทั้งหมด พร้อมระบบสำรองข้อมูลอัตโนมัติ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">ทำงานได้แม้ไม่มีเน็ต</h4>
                <p className="text-gray-600">ระบบ Offline Mode ช่วยให้ธุรกิจดำเนินต่อได้แม้อินเทอร์เน็ตมีปัญหา</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dineflow-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">อัพเดทฟรีตลอดชีพ</h4>
                <p className="text-gray-600">รับฟีเจอร์ใหม่ๆ และการอัพเดทความปลอดภัยโดยอัตโนมัติ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
