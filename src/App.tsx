import Hero from './components/heroSection/HeroSection';
import Presenters from './components/presentersSection/PresentersSection';
import VideoSection from './components/videoSection/VideoSection';
import CustomersSection from './components/customersSection/CustomersSection';
import Footer from './components/footer/Footer';

import './index.css';



function App() {
  return (
    <>
      <main>
        <Hero />
        <Presenters/>
        <VideoSection/>
        <CustomersSection/>
      </main>
      <Footer/>
    </>
  )
};

export default App;
