import Image from "next/image";
import { Italiana, Dancing_Script } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Kelompok6Page() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 bg-[#A8BBA3]">
      <div className="flex items-center py-3">
        <div className="relative">
          <Image alt="Cake" width={200} height={200} src="/cake-slice.png" />
        </div>
        <div className="flex flex-col text-center">
          <h1
            className="text-5xl"
            style={{ fontFamily: italiana.style.fontFamily }}
          >
            SIGMA BAKERY
          </h1>
          <p
            className="text-2xl"
            style={{ fontFamily: `${dancingScript.style.fontFamily}` }}
          >
            Homemade Cake
          </p>
        </div>
      </div>
    </div>
  );
}
