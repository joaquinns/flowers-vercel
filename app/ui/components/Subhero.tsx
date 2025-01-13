import Image from "next/image";
import SectionHeader from "./section-headers";

interface SubheroProps {
  title: string;
  imgURL: string;
  altImage: string;
}

export const SubHero = ({ title, imgURL, altImage }: SubheroProps) => {
  return (
    <section className="relative h-[40vh] w-full">
      <div className="absolute inset-0">
        <Image
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
          priority
          src={imgURL}
          alt={altImage}
        />
        <div className="absolute inset-0  bg-black/60 " />
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <SectionHeader title={title} align="center" color="text-slate-100" />
      </div>
    </section>
  );
};
