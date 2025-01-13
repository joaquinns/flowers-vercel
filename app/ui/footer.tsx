import { InstagramIcon } from "./icons/instagram-icon";
import { WhatsappIcon } from "./icons/whatsapp-icon";

export const Footer = () => {
  return (
    <footer className="bg-[#e8d8e0] text-[#2c2c2c] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-[#a86e89]">
              Kaugifts | Flores y Regalos
            </h2>
            <p className="mt-2">
              Tu mejor opcion al momento de flores y regalos en Maracaibo
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-[#a86e89] hover:text-[#f54296]">
              <WhatsappIcon />
            </a>
            <a href="#" className="text-[#a86e89] hover:text-[#f54296]">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm font-semibold">
          © 2025 Kaugift
        </div>
      </div>
    </footer>
  );
};
