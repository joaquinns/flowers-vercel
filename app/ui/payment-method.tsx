import { BankIcon } from "./icons/bank-icon";
import BinanceIcon from "./icons/binance-icon";
import { MobileIcon } from "./icons/mobile-icon";
import { MoneyIcon } from "./icons/money-icon";
import { PaypalIcon } from "./icons/paypal-icon";
import { ZelleIcon } from "./icons/zelle-icon";

export const PaymentMethods = () => {
  return (
    <section className="w-full">
      <div className="min-h-[45vh] flex flex-col justify-center gap-12 items-center bg-slate-800 p-4 lg:px-0">
        <h3 className="text-slate-100 text-2xl lg:text-4xl font-bold py-4 lg:px-0">
          Metodos de Pago
        </h3>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <PaypalIcon width="60" height="60" />
            <p className="text-center font-semibold">Paypal</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <ZelleIcon width="60" height="60" />
            <p className="text-center font-semibold">Zelle</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <MoneyIcon width="60" height="60" />
            <p className="text-center font-semibold">Efectivo</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <BinanceIcon />
            <p className="text-center font-semibold">Binance</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <BankIcon />
            <p className="text-center font-semibold">COP</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <MobileIcon />
            <p className="text-center font-semibold">Pago Movil</p>
          </div>
        </div>
      </div>
    </section>
  );
};
