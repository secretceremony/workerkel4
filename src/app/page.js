import Image from "next/image";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SalonPage() {
  return (
    <div
      className={`${jost.className} flex min-h-screen bg-white max-w-6xl mx-auto`}
    >
      {/* ===== SIDEBAR DENGAN LINK NAVIGASI ===== */}
      <div className="w-48 sticky top-0 h-screen overflow-y-auto border-r">
        <div className="p-6">
          <nav className="space-y-6">
            <a
              href="#hair"
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/hair.svg" alt="Hair" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Hair</span>
              <div className="w-16 h-0.5 bg-[#FCCAB8]"></div>
            </a>

            <a
              href="#makeup"
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/makeup.svg" alt="Makeup" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Makeup</span>
            </a>

            <a
              href="#manicure"
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src="/manicure.svg"
                  alt="Manicure Pedicure"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-sm font-medium text-gray-800 text-center">
                Manicure Pedicure
              </span>
            </a>

            <a
              href="#skincare"
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src="/skincare.svg"
                  alt="Skincare"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Skincare
              </span>
            </a>

            <a
              href="#facial"
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image src="/facial.svg" alt="Facial" width={50} height={50} />
              </div>
              <span className="text-sm font-medium text-gray-800">Facial</span>
            </a>
          </nav>
        </div>
      </div>

      {/* ===== KONTEN UTAMA YANG BISA DI-SCROLL ===== */}
      <div className="flex-1 p-8 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* --- SECTION 1: HAIR --- */}
          <section id="hair" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Hair</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stylish hair cuts, gorgeous styling, incredible color services
                and best hair treatments. Choose your dream service!
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Haircut</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Steps Cutting
                      </h3>
                      <span className="text-sm font-medium text-gray-800">
                        Rp 1500
                      </span>
                    </div>
                    <p className="text-gray-600">
                      A graduated haircut in which the hair takes the form of
                      cascading steps.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Kids Cutting
                      </h3>
                      <span className="text-sm font-medium text-gray-800">
                        Rp 1000
                      </span>
                    </div>
                    <p className="text-gray-600">
                      A haircut on a child age 10 & under.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Layers Cutting
                      </h3>
                      <span className="text-sm font-medium text-gray-800">
                        Rp 1500
                      </span>
                    </div>
                    <p className="text-gray-600">
                      A layered haircut creates the appearance of length and
                      volume.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Korean Cutting
                      </h3>
                      <span className="text-sm font-medium text-gray-800">
                        Rp 2000
                      </span>
                    </div>
                    <p className="text-gray-600">
                      A Korean hairstyle for men with short, medium, and long
                      hair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 2: MAKEUP --- */}
          <section id="makeup" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Makeup</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional makeup services for any occasion, from weddings to
                parties. Look your absolute best!
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Makeup Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
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
                <div className="bg-gray-50 p-6 rounded-lg">
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
          </section>

          {/* --- SECTION 3: MANICURE PEDICURE --- */}
          <section id="manicure" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Manicure & Pedicure
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pamper your hands and feet with our relaxing and beautifying
                nail services.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nail Care
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
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
                <div className="bg-gray-50 p-6 rounded-lg">
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

          {/* --- SECTION 4: SKINCARE --- */}
          <section id="skincare" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Skincare
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Revitalize your skin with our range of professional skincare
                treatments.
              </p>
            </div>
             <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Skin Treatments
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
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

          {/* --- SECTION 5: FACIAL --- */}
          <section id="facial" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Facial
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience our custom facials designed to meet your specific skin needs.
              </p>
            </div>
             <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Facial Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
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

          {/* --- Tombol Booking di bagian paling bawah --- */}
          <div className="text-center">
            <button className="bg-[#FCCAB8] hover:bg-[#FCCAB8]/80 text-gray-800 font-semibold py-3 px-8 rounded-md transition-colors">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}