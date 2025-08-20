import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Committee } from "./pages/committee";
import { Submissions } from "./pages/submissions";
import { Sponsors } from "./pages/sponsors";
import { Registration } from "./pages/registration";
import { HowToReach } from "./pages/how-to-reach";
import { NearbyPlaces } from "./pages/nearby-places";
import { Contact } from "./pages/contact";
import { MPChary } from "./pages/mp-chary";
import { HotelsNearVit } from "./pages/hotels-near-vit";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Router>
          <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex flex-col font-jetbrains">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/committee" element={<Committee />} />
                <Route path="/submissions" element={<Submissions />} />
                <Route path="/mp-chary" element={<MPChary />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/how-to-reach" element={<HowToReach />} />
                <Route path="/hotels-near-vit" element={<HotelsNearVit />} />
                <Route path="/nearby-places" element={<NearbyPlaces />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App