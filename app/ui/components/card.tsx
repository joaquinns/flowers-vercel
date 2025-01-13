"use client";
import { useCart } from "@/app/context/useCart";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartAddIcon } from "../icons/cart-add";

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  imgURL?: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
}

export const Card = ({
  product,
  title = "Titulo de ejemplo",
  description = "Esto es el ejemplo de una descripcion, puneta lambre bicho esto funciona? cabron conte cabron habla claro, brrrrrrr. Menos mal ya terminamos esa mierda de juego",
  imgURL,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToCart } = useCart();
  const path = usePathname();
  const isMenPage = path === "/hombres";
  const dynamicButtonClasses = isMenPage
    ? "text-white bg-blue-800/90 hover:bg-blue-600/90"
    : "bg-[#d79ebc] hover:bg-[#ca79a4] ";

  const notify = (name: string) =>
    toast.success(`Se ha añadido: ${name} al carrito`, {
      icon: "✅",
      className: "font-semibold text-slate-950 text-sm",
    });

  return (
    <article className="relative flex flex-col justify-center items-center text-slate-900 transition-all ease-in-out duration-300 max-w-[400px] mx-auto h-full">
      <Toaster position="top-center" />
      <Image
        className="rounded"
        height={260}
        width={400}
        alt="card image"
        src={imgURL ? imgURL : "/heroflowers.jpg"}
        blurDataURL={imgURL ? imgURL : "/heroflowers.jpg"}
        loading="lazy"
        style={{ height: "260px", objectFit: "cover" }}
      />
      <div>
        <h3 className="p-2 text-xl font-bold">{title}</h3>
        <div className="px-2 font-semibold">
          <span className="text-lg">$10</span>
        </div>
        <div className="p-2 flex-1 relative">
          <p
            className={`text-base ${
              isExpanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {description}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="text-sm text-primary hover:underline mt-2"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
          notify(product.name);
        }}
        className={`py-2 px-4 ${dynamicButtonClasses} transition-all ease-in-out duration-200 rounded ml-auto font-semibold flex gap-2 justify-center items-center`}
      >
        <CartAddIcon />
        Agregar
      </button>
    </article>
  );
};
