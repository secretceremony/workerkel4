import Image from "next/image";

export default function ProfileBar() {
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="flex items-center justify-between py-3 border-t border-b border-blue-200">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image 
              alt="Profile" 
              width={50} 
              height={50} 
              src="/profile.png"
              className="rounded-full border-4 border-[#178F8D]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-black text-base">Chelsea Immanuela</p>
            <div className="flex items-center gap-1">
              <Image 
                alt="Location" 
                width={16} 
                height={16} 
                src="/location-icon.svg"
                className="text-[#178F8D]"
              />
              <p className="text-black text-sm">Jakarta</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Sun"
            width={32}
            height={32}
            src="/sun.svg"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}