import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import We from './components/We';


function App() {
  return (
    <div className="min-w-[450px]">
      <Header />
      <Hero />
      <We />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;
