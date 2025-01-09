import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,rgba(249,242,223,1),rgba(249,242,223,0.2))]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
