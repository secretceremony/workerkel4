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
      className={`${jost.className} flex min-h-screen bg-[#FFFBF9] max-w-6xl mx-auto`}
    >
      {/* --- Sticky Sidebar --- */}
      <aside className="w-48 sticky top-0 h-screen overflow-y-auto border-r border-[#FEE9E1]">
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
              <span className="text-sm font-medium text-[#5C4B46]">Hair</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "hair" ? "bg-[#F4C8B5]" : "bg-transparent"
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
              <span className="text-sm font-medium text-[#5C4B46]">Makeup</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "makeup" ? "bg-[#F4C8B5]" : "bg-transparent"
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
              <span className="text-sm font-medium text-center text-[#5C4B46]">Manicure Pedicure</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "manicure" ? "bg-[#F4C8B5]" : "bg-transparent"
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
              <span className="text-sm font-medium text-[#5C4B46]">Skincare</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "skincare" ? "bg-[#F4C8B5]" : "bg-transparent"
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
              <span className="text-sm font-medium text-[#5C4B46]">Facial</span>
              <div
                className={`w-16 h-0.5 transition-all duration-300 ${
                  activeSection === "facial" ? "bg-[#F4C8B5]" : "bg-transparent"
                }`}
              ></div>
            </div>
          </nav>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto p-8">
          {/* ========== HAIR SECTION ========== */}
          <section id="hair" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#5C4B46] mb-4">Hair</h1>
              <p className="text-lg text-[#7B6A66] max-w-2xl mx-auto">
                Stylish hair cuts, gorgeous styling, incredible color services and
                best hair treatments. Choose your dream service!
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#5C4B46] mb-6">Haircut</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Steps Cutting */}
                <div className="border-t border-[#FEE9E1] pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#5C4B46]">Steps Cutting</h3>
                    <span className="text-sm font-medium text-[#5C4B46]">Rp 1500</span>
                  </div>
                  <p className="text-[#7B6A66]">A graduated haircut in which the hair takes the form of cascading steps.</p>
                </div>
                {/* Layers Cutting */}
                <div className="border-t border-[#FEE9E1] pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#5C4B46]">Layers Cutting</h3>
                    <span className="text-sm font-medium text-[#5C4B46]">Rp 1500</span>
                  </div>
                  <p className="text-[#7B6A66]">A layered haircut that creates the appearance of length and volume.</p>
                </div>
                {/* Kids Cutting */}
                <div className="border-t border-[#FEE9E1] pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#5C4B46]">Kids Cutting</h3>
                    <span className="text-sm font-medium text-[#5C4B46]">Rp 1000</span>
                  </div>
                  <p className="text-[#7B6A66]">A professional and friendly haircut experience for children age 10 & under.</p>
                </div>
                {/* Korean Cutting */}
                <div className="border-t border-[#FEE9E1] pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#5C4B46]">Korean Cutting</h3>
                    <span className="text-sm font-medium text-[#5C4B46]">Rp 2000</span>
                  </div>
                  <p className="text-[#7B6A66]">Trendy Korean hairstyles for men with short, medium, or long hair.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
                <button className="bg-[#F4C8B5] hover:bg-opacity-80 text-[#5C4B46] font-semibold py-3 px-8 rounded-md transition-colors">
                    Book an Appointment
                </button>
            </div>
          </section>

          {/* ========== MAKEUP SECTION ========== */}
          <section id="makeup" className="pt-12 mb-16 bg-[#FEE9E1] rounded-lg p-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#5C4B46] mb-4">Makeup</h1>
              <p className="text-lg text-[#7B6A66] max-w-2xl mx-auto">
                Complete your service with beautiful makeup and simply be amazing with complete look.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Makeup Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="border-t border-[#FEE9E1] pt-4">
                  </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Bridal Makeup
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 1.500.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Complete makeup package for the bride on her special day.
                  </p>
                </div>
                <div className="p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Party Makeup
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 500.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Stunning makeup for parties, graduations, and other events.
                  </p>
                </div>
              </div>
            </div>
            {/* Add makeup services here */}
          </section>

          {/* ========== MANICURE SECTION ========== */}
          <section id="manicure" className="pt-12 mb-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#5C4B46] mb-4">Manicure Pedicure</h1>
              <p className="text-lg text-[#7B6A66] max-w-2xl mx-auto">
                Pamper your hands and feet with our rejuvenating nail services for healthy, beautiful results.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nail Care
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Classic Manicure
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 120.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Nail shaping, cuticle care, hand massage, and regular
                    polish.
                  </p>
                </div>
                <div className="p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Gel Pedicure
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 250.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A long-lasting pedicure with gel polish that stays shiny for
                    weeks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========== SKINCARE SECTION ========== */}
          <section id="skincare" className="pt-12 mb-16 bg-[#FEE9E1] rounded-lg p-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#5C4B46] mb-4">Skincare</h1>
              <p className="text-lg text-[#7B6A66] max-w-2xl mx-auto">
                Achieve radiant, healthy skin with our personalized treatments and expert care.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Skin Treatments
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Deep Cleansing
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 300.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A thorough cleansing to remove impurities and refresh the skin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========== FACIAL SECTION ========== */}
          <section id="facial" className="pt-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#5C4B46] mb-4">Facial</h1>
              <p className="text-lg text-[#7B6A66] max-w-2xl mx-auto">
                Relax and unwind with our range of facials designed to address your specific skin concerns.
              </p>
            </div>
           <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Facial Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Hydrating Facial
                    </h3>
                    <span className="text-sm font-medium text-gray-800">
                      Rp 350.000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Intensely moisturizes and nourishes dehydrated skin for a radiant glow.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}