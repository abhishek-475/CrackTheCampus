import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import Companies from "./components/sections/Companies/Companies";
import Features from "./components/sections/Features/Features";
import Stats from "./components/sections/Stats/Stats";
import Courses from "./components/sections/Courses/Courses";
import Testimonials from "./components/sections/Testmonials/Testimonials";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-900">
      <Header />

      <main id="main-content">
        <Hero />
        <Companies />
        <Features />
        <Stats />
        <Courses />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;