import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Committee } from "./pages/committee";
import { Submissions } from "./pages/submissions";
import { Sponsors } from "./pages/sponsors";
import { Registration } from "./pages/registration";
import { Contact } from "./pages/contact";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex flex-col font-jetbrains">
          <Navbar />
          <main className="pt-16 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App