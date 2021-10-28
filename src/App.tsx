import Hero from './components/HeroSection/HeroSection';
import Presenters from './components/PresentersSection/PresentersSection';
import VideoSection from './components/VideoSection/VideoSection';
import CustomersSection from './components/CustomersSection/CustomersSection';
import Footer from './components/Footer/Footer';

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
