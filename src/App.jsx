import Hero from "./components/sections/Hero/Hero"
import Header from "./components/layout/Header/Header"
import Stats from "./components/sections/Stats/Stats"
import Features from "./components/sections/Features/Features"
import Testimonials from "./components/sections/Testmonials/Testimonials"
import Companies from "./components/sections/Companies/Companies"
import Courses from "./components/sections/Courses/Courses"
import Footer from "./components/layout/Footer/Footer"

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
