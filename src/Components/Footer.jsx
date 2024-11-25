import React from "react";

const listA = ['Investors','Features','Book a demo','Security']
const listB = ['Credits Cards','Gift Cards','Savings accounts','NFT']
const listC = ['Free rewards','Documentation','Affiliate program']
const listD =['Changelog','License','Site Maps','News']
function Footer() {
  const LinkList = (head,list) => {
    return(
      <div className="space-y-4">
        <h5 className="font-bold">{head}</h5>

        <ul className="space-y-2">
          {list.map((item,index)=>(
            <li key={index} className="text-[#ADB2B1]">{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  return ( 
    <footer className="md:mt-[128px] sm:mt-[100px] mt-20 md:pb-[549px] pb-[400px] pb-96">

      <section className="bg-[#2928343D]/25 ">

        <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 gap-5 grid-cols-2 max-w-[1400px] mx-auto md:px-[100px] sm:px-16 px-8 pt-[60px] pb-[135px] ">

          <div className="space-y-2.5 col-span-2">
            <img src="/FooterLogo.png" alt="FooterLogo" />
            <p className="text-[#ADB2B1] max-w-[287px]">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>

          {LinkList('About us',listA)}
          {LinkList('Products',listB)}
          {LinkList('Useful Links',listC)}
          {LinkList('Social',listD)}
        </div>

      </section>
    </footer>
  );
}

export default Footer;
