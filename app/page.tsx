import { About } from "./ui/about";
import Adress from "./ui/adress";
import { BestSellers } from "./ui/best-sellers";
import Clients from "./ui/clients";
import { Delivery } from "./ui/delivery";
import { Hero } from "./ui/hero";
import { PaymentMethods } from "./ui/payment-method";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BestSellers />
      <Clients />
      <About />
      <Delivery />
      <PaymentMethods />
      <Adress />
    </div>
  );
}
