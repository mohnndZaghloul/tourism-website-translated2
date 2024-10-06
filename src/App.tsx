import "./App.css";
import "./i18n";
import Hero from "./components/templates/Hero";
import Nav from "./components/templates/Nav";
import Services from "./components/templates/Services";
import Footer from "./components/templates/Footer";
import SpecialOffers from "./components/templates/SpecialOffers";

function App() {
  return (
    <main className="text-justify text-darkText">
      <Nav />
      <Hero />
      <SpecialOffers />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
