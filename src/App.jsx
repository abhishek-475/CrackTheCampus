import Hero from "./components/sections/Hero"
import Header from "./components/layout/Header"
import Stats from "./components/sections/Stats"
import Features from "./components/sections/Features"
import Testimonials from "./components/sections/Testimonials"
import Companies from "./components/sections/Companies"
import Courses from "./components/sections/Courses"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <Stats />
          <Testimonials />
          <Companies />
          <Courses />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
