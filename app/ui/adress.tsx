import SectionHeader from "./components/section-headers";

export default function Adress() {
  return (
    <section className="min-h-screen mx-auto max-w-6xl px-4 xl:0">
      <div className="my-12">
        <SectionHeader
          title="Donde encontrarnos"
          description="Puedes encontrarnos en la siguiente direccion"
          align="center"
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169560.38627283246!2d-71.82394074143642!3d10.621899019503534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89998e7a5bd625%3A0xce0904e0ea8de74b!2sMaracaibo%2C%20Zulia!5e0!3m2!1ses!2sve!4v1736723361678!5m2!1ses!2sve"
        className="border-0 mx-auto rounded w-full h-[400px] md:w-[600px] md:h-[450px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
