import { Accordion, AccordionItem } from "@nextui-org/react";
import React, { useState } from "react";
import { FaqData } from "./Utilities/Data";

function Faq() {
  const [selectedKeys, setSelectedKeys] = useState("0");
  return (
    <section className="md:mt-[128px] sm:mt-[100px] mt-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-bold text-[40px] text-center">FAQs</h2>

        {/* Accordion component */}
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {FaqData.map(({ q, a }, index) => (
            <AccordionItem
              key={index}
              aria-label={q}
              title={
                <span className="font-bold font-Poppins md:text-2xl sm:text-xl">
                  {q}
                </span>
              }
            >
              <span className="text-[#ADB2B1] font-Poppins">{a}</span>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
