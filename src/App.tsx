import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import NewsEvents from './components/NewsEvents';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <NewsEvents />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
