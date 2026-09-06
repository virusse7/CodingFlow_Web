import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/layout/Navbar/Navbar";
import Services from "./components/sections/Services/Services";
import Work from "./components/sections/Work/Work";
import Process from "./components/sections/Process/Process";
import Collaboration from "./components/sections/Collaboration/Collaboration";
import Pricing from "./components/sections/Pricing/Pricing";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Services />
        <Pricing />
        <Work />
        <Process />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
