import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import context
import { TerminalProvider } from "./contexts/TerminalContext";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import BlogTerminalPortfolio from "./pages/BlogTerminalPortfolio";
import BlogModernJavascript from "./pages/BlogModernJavascript";
import BlogCleanCode from "./pages/BlogCleanCode";
import BlogCssGrid from "./pages/BlogCssGrid";
import BlogApiDesign from "./pages/BlogApiDesign";
import Social from "./pages/Social";
import SocialGithubPage from "./pages/SocialGithub";
import SocialLinkedinPage from "./pages/SocialLinkedin";
import SocialYouTubePage from "./pages/SocialYouTube";
import SocialXPage from "./pages/SocialX";
import SocialFacebookPage from "./pages/SocialFacebook";
import SocialNpmPage from "./pages/SocialNpm";


function App() {
  return (
    <TerminalProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />

            {/* Social routes */}
            <Route path="/social" element={<Social />} />
            <Route path="/social/github" element={<SocialGithubPage />} />
            <Route path="/social/linkedin" element={<SocialLinkedinPage />} />
            <Route path="/social/youtube" element={<SocialYouTubePage />} />
            <Route path="/social/x" element={<SocialXPage />} />
            <Route path="/social/facebook" element={<SocialFacebookPage />} />
            <Route path="/social/npm" element={<SocialNpmPage />} />

            {/* Blog routes with nested routing */}
            <Route path="/blog" element={<Blog />}></Route>

            {/* Individual blog post routes */}
            <Route
              path="/blog/terminal-portfolio"
              element={<BlogTerminalPortfolio />}
            />
            <Route
              path="/blog/modern-javascript"
              element={<BlogModernJavascript />}
            />
            <Route path="/blog/clean-code" element={<BlogCleanCode />} />
            <Route path="/blog/css-grid" element={<BlogCssGrid />} />
            <Route path="/blog/api-design" element={<BlogApiDesign />} />

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </TerminalProvider>
  );
}

export default App;
