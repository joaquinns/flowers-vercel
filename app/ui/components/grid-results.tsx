"use client";
import { useEffect, useState } from "react";
import { Card } from "./card";

// esto es un mockup
const PRODUCTS = [
  {
    id: "1",
    name: "Ramo de Rosas Blancas",
    price: 29.99,
    description: "Esto es un ejemplo de descripcion",
    quantity: 1,
  },
  {
    id: "2",
    name: "Arreglo de Lirios",
    description: "Esto es un ejemplo de descripcion",
    price: 34.99,
    quantity: 1,
  },
  {
    id: "3",
    name: "Caja de Chocolates Gourmet",
    description: "Esto es un ejemplo de descripcion",
    price: 24.99,
    quantity: 1,
  },
  {
    id: "4",
    name: "Ramo de Girasoles",
    description: "Esto es un ejemplo de descripcion",
    price: 27.99,
    quantity: 1,
  },
  {
    id: "5",
    name: "Orquídeas en Maceta",
    description: "Esto es un ejemplo de descripcion",
    price: 39.99,
    quantity: 1,
  },
  {
    id: "6",
    name: "Arreglo de Flores Silvestres",
    description: "Esto es un ejemplo de descripcion",
    price: 32.99,
    quantity: 1,
  },
  {
    id: "7",
    name: "Ramo de Tulipanes",
    description: "Esto es un ejemplo de descripcion",
    price: 28.99,
    quantity: 1,
  },
  {
    id: "8",
    name: "Set de Velas Aromáticas",
    description: "Esto es un ejemplo de descripcion",
    price: 19.99,
    quantity: 1,
  },
];

const PRODUCTS_MEN = [
  {
    id: "1",
    name: "Reloj de Pulsera",
    price: 59.99,
    description: "Un reloj elegante y funcional para cualquier ocasión.",
    quantity: 1,
  },
  {
    id: "2",
    name: "Set de Afeitado de Lujo",
    description:
      "Incluye maquinilla, brocha, y crema de afeitar de alta calidad.",
    price: 44.99,
    quantity: 1,
  },
  {
    id: "3",
    name: "Audífonos Inalámbricos",
    description: "Calidad de sonido superior y diseño ergonómico.",
    price: 89.99,
    quantity: 1,
  },
  {
    id: "4",
    name: "Botella Térmica",
    description: "Mantiene las bebidas calientes o frías por horas.",
    price: 24.99,
    quantity: 1,
  },
  {
    id: "5",
    name: "Juego de Herramientas",
    description: "Set completo con las herramientas esenciales para el hogar.",
    price: 49.99,
    quantity: 1,
  },
  {
    id: "6",
    name: "Cartera de Cuero",
    description: "Elegante y duradera, con varios compartimentos.",
    price: 39.99,
    quantity: 1,
  },
  {
    id: "7",
    name: "Billetera Inteligente",
    description: "Cuenta con rastreador integrado y protección RFID.",
    price: 34.99,
    quantity: 1,
  },
  {
    id: "8",
    name: "Set de Cuidado para Barba",
    description: "Incluye aceite, bálsamo y peine para barba.",
    price: 34.99,
    quantity: 1,
  },
];

export const GridSearchResults = ({
  query,
  man,
}: {
  query?: string;
  man?: boolean;
}) => {
  const [filteredProducts, setFilteredProducts] = useState(
    man ? PRODUCTS_MEN : PRODUCTS
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialProducts, setInitialProducts] = useState(
    man ? PRODUCTS_MEN : PRODUCTS
  );

  // esto es un mockup
  useEffect(() => {
    if (query) {
      const queryMapped = query.toLocaleLowerCase();
      const filtered = initialProducts.filter((product) => {
        return product.name.toLocaleLowerCase().includes(queryMapped);
      });
      setFilteredProducts(filtered);
    }
  }, [initialProducts, query]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      {query
        ? filteredProducts.map((product) => (
            <Card
              product={product}
              key={product.id}
              id={product.id.toString()}
              title={product.name}
            />
          ))
        : initialProducts.map((product) => (
            <Card
              product={product}
              key={product.id}
              id={product.id.toString()}
              title={product.name}
            />
          ))}
    </div>
  );
};
