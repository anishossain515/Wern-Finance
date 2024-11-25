import "./App.css";
import NavbarArea from "./Components/Navbar";
import Hero from "./Components/Hero";
import Vision from "./Components/Vision";
import Offer from "./Components/Offer/Offer";
import Debit from "./Components/Debit";
import FindCard from "./Components/FindCard";
import FeedBack from "./Components/FeedBack/FeedBack";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
function App() {
  return (
    <main>
      <NavbarArea />
    
        <div className="md:space-y-[128px] sm:space-y-[100px] space-y-20">
          <Hero />
          <Vision />
          <Offer />
          <Debit />
          <FindCard />
          <FeedBack />
          <Faq />
        </div>
     <Footer/>
    </main>
  );
}

export default App;
