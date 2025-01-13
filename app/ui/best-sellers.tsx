import { Card } from "./components/card";
import SectionHeader from "./components/section-headers";

const PRODUCTS = [
  {
    id: "1",
    name: "Ramo de Rosas Blancas",
    price: 29.99,
    description:
      "Esto es un ejemplo de descripcion, esto es una descripcion de ejemplo",
    quantity: 1,
  },
  {
    id: "2",
    name: "Arreglo de Lirios",
    description:
      "Esto es un ejemplo de descripcion, esto es una descripcion de ejemplo",
    price: 34.99,
    quantity: 1,
  },
  {
    id: "3",
    name: "Caja de Chocolates Gourmet",
    description:
      "Esto es un ejemplo de descripcion, esto es una descripcion de ejemplo",
    price: 24.99,
    quantity: 1,
  },
];

export const BestSellers = () => {
  return (
    <section className="relative min-h-screen mx-auto max-w-6xl px-4 xl:px-0">
      <div className="my-16">
        <SectionHeader title="Destacados" align="center" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {PRODUCTS.map((product) => (
          <Card
            key={product.id}
            product={product}
            id={product.id}
            description={product.description}
            title={product.name}
          />
        ))}
      </div>
    </section>
  );
};
