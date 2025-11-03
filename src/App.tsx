import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { Productivity } from "./pages/Productivity";
import { Blog } from "./pages/Blog";
import { Careers } from "./pages/Careers";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F8FAFB' }}>
        <Header />
        <main className="flex-1" style={{ backgroundColor: '#F8FAFB' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route
              path="/productivity"
              element={<Productivity />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}