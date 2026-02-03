import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-background min-h-screen text-text selection:bg-primary selection:text-white">
            <Header />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default App
