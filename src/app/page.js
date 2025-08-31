"use client";

import Image from "next/image";
import { Jost } from "next/font/google";
import { useState, useEffect } from "react";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SalonPage() {
  const [activeSection, setActiveSection] = useState("hair");

  // This effect adds a scroll listener to update the active section
  useEffect(() => {
    // Define the IDs of your manual sections here
    const sectionIds = ["hair", "makeup", "manicure", "skincare", "facial"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 150; // Triggers highlight slightly before the section hits the top

      let currentSectionId = activeSection;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition + offset) {
          currentSectionId = id;
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // This function handles the click-to-scroll behavior
  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`${jost.className} flex min-h-screen bg-white max-w-6xl mx-auto`}
    >
      {/* --- Sticky Sidebar --- */}
      <aside className="w-48 sticky top-0 h-screen overflow-y-auto border-r border-gray-200">
        <div className="p-6">
          <nav className="space-y-6">
            {/* -- Hair Nav Item -- */}
            <div
              onClick={() => handleNavClick("hair")}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/hair.svg" alt="Hair" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Hair</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "hair" ? "bg-[#FCCAB8]" : "bg-transparent"
                }`}
              ></div>
            </div>

            {/* -- Makeup Nav Item -- */}
            <div
              onClick={() => handleNavClick("makeup")}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/makeup.svg" alt="Makeup" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Makeup</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "makeup" ? "bg-[#FCCAB8]" : "bg-transparent"
                }`}
              ></div>
            </div>

            {/* -- Manicure Nav Item -- */}
            <div
              onClick={() => handleNavClick("manicure")}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/manicure.svg" alt="Manicure" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-center text-gray-800">Manicure Pedicure</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "manicure" ? "bg-[#FCCAB8]" : "bg-transparent"
                }`}
              ></div>
            </div>

            {/* -- Skincare Nav Item -- */}
            <div
              onClick={() => handleNavClick("skincare")}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/skincare.svg" alt="Skincare" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Skincare</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "skincare" ? "bg-[#FCCAB8]" : "bg-transparent"
                }`}
              ></div>
            </div>

            {/* -- Facial Nav Item -- */}
            <div
              onClick={() => handleNavClick("facial")}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/facial.svg" alt="Facial" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Facial</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "facial" ? "bg-[#FCCAB8]" : "bg-transparent"
                }`}
              ></div>
            </div>
          </nav>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* ========== HAIR SECTION ========== */}
          <section id="hair" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Hair</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stylish hair cuts, gorgeous styling, incredible color services and
                best hair treatments. Choose your dream service!
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Haircut</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Steps Cutting */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Steps Cutting</h3>
                    <span className="text-sm font-medium text-gray-800">Rp 1500</span>
                  </div>
                  <p className="text-gray-600">A graduated haircut in which the hair takes the form of cascading steps.</p>
                </div>
                {/* Layers Cutting */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Layers Cutting</h3>
                    <span className="text-sm font-medium text-gray-800">Rp 1500</span>
                  </div>
                  <p className="text-gray-600">A layered haircut that creates the appearance of length and volume.</p>
                </div>
                {/* Kids Cutting */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Kids Cutting</h3>
                    <span className="text-sm font-medium text-gray-800">Rp 1000</span>
                  </div>
                  <p className="text-gray-600">A professional and friendly haircut experience for children age 10 & under.</p>
                </div>
                {/* Korean Cutting */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Korean Cutting</h3>
                    <span className="text-sm font-medium text-gray-800">Rp 2000</span>
                  </div>
                  <p className="text-gray-600">Trendy Korean hairstyles for men with short, medium, or long hair.</p>
                </div>
              </div>
            </div>
            {/* Book Appointment Button */}
          <div className="text-center justify-center">
            <button className="bg-[#FCCAB8] hover:bg-[#FCCAB8]/80 text-gray-800 font-semibold py-3 px-8 rounded-md transition-colors">
              Book an Appointment
            </button>
          </div>
          </section>

          {/* ========== MAKEUP SECTION ========== */}
          <section id="makeup" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Makeup</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From natural looks to glamorous transformations, our artists enhance your beauty for any occasion.
              </p>
            </div>
            {/* Add makeup services here */}
          </section>

          {/* ========== MANICURE SECTION ========== */}
          <section id="manicure" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Manicure Pedicure</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pamper your hands and feet with our rejuvenating nail services for healthy, beautiful results.
              </p>
            </div>
            {/* Add manicure services here */}
          </section>

          {/* ========== SKINCARE SECTION ========== */}
          <section id="skincare" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Skincare</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Achieve radiant, healthy skin with our personalized treatments and expert care.
              </p>
            </div>
            {/* Add skincare services here */}
          </section>

          {/* ========== FACIAL SECTION ========== */}
          <section id="facial" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Facial</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Relax and unwind with our range of facials designed to address your specific skin concerns.
              </p>
            </div>
            {/* Add facial services here */}
          </section>

        </div>
      </main>
    </div>
  );
}