import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          fill
          quality={100}
          priority
          src="/heroflowers.jpg"
          alt="Beautiful flower arrangement"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bienvenido a KauGifts
            </h2>
            <p className="text-xl text-white mb-6">
              Descubre los mejores arreglos de flores y regalos de la ciudad.
              Mas que regalos, momentos de felicidad
            </p>
            <Link
              href="/damas"
              className="bg-white text-[#a86e89] hover:bg-[#e8d8e0] py-3 px-3 rounded font-semibold"
            >
              Catalogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
