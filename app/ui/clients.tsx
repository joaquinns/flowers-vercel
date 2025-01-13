import CustomCarousel from "./components/carousel";
import SectionHeader from "./components/section-headers";
import { SubHero } from "./components/Subhero";

export default function Clients() {
  return (
    <section className="min-h-screen max-w-6xl px-4 xl:px-0 mx-auto">
      <div className="my-8">
        <SubHero
          imgURL="/bgopiniones.jpg"
          title="+5000 entregas realizadas"
          altImage="imagen de los clientes"
        />
        <div className="my-16">
          <SectionHeader title="Nuestros clientes" align="center" />
        </div>
        <CustomCarousel />
      </div>
    </section>
  );
}
