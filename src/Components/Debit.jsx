import { Button } from "@nextui-org/react";
import React from "react";
import { Arrow } from "./Utilities/Icons";

function Debit() {
  return (
    <section className="md:mt-[128px] sm:mt-[100px] mt-20">
      <div className="max-w-[1400px] mx-auto flex md:flex-row flex-col-reverse gap-10 items-center justify-between px-5">
        <div className="lg:space-y-6 space-y-3">
          <h2 className="font-bold lg:text-[40px] text-3xl">Wern Debit Card</h2>
          <p className="text-[#ADB2B1] lg:text-base text-sm max-w-[424px]">
            More than just a card, it's a bridge to a new financial experience.
            Embrace the simplicity and security of spending your Cardano with
            the Wern Card.
          </p>
          <div>
            <Button className="bg-[#772AB3] text-white font-medium py-6 px-8 rounded-[64px]" endContent={<Arrow/>}>
             Create New Card
            </Button>
            <p className="font-bold text-[#772AB3] pl-5 pt-[5px]">Will be available soon</p>
          </div>
        </div>

        <div>
            <img src="/debit.png" alt="debit" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Debit;
