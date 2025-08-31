import Image from "next/image";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SalonPage() {
  return (
    <div className={`${jost.className} flex min-h-screen bg-white`}>
      {/* Sticky Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Services</h2>

          {/* Navigation Items */}
          <nav className="space-y-6">
            {/* Hair - Active */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Image src="/hair-icon.svg" alt="Hair" width={24} height={24} />
              </div>
              <span className="text-sm font-medium text-gray-800">Hair</span>
              <div className="w-16 h-0.5 bg-amber-400"></div>
            </div>

            {/* Makeup */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Image
                  src="/makeup-icon.svg"
                  alt="Makeup"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">Makeup</span>
            </div>

            {/* Manicure Pedicure */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Image
                  src="/manicure-icon.svg"
                  alt="Manicure Pedicure"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Manicure Pedicure
              </span>
            </div>

            {/* Skincare */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Image
                  src="/skincare-icon.svg"
                  alt="Skincare"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Skincare
              </span>
            </div>

            {/* Facial */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Image
                  src="/facial-icon.svg"
                  alt="Facial"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">Facial</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Hair</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stylish hair cuts, gorgeous styling, incredible color services and
              best hair treatments. Choose your dream service!
            </p>
          </div>

          {/* Haircut Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Haircut</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Steps Cutting
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      Rs 1500
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A graduated haircut in which the hair takes the form of
                    cascading steps
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Kids Cutting
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      Rs 1000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A haircut on a child age 10 & under
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Layers Cutting
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      Rs 1500
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A layered haircut creates the appearance of length and
                    volume
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Korean Cutting
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      Rs 2000
                    </span>
                  </div>
                  <p className="text-gray-600">
                    A Korean hairstyle for men with short, medium, and long hair
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-amber-200 hover:bg-amber-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors" >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
