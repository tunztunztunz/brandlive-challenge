import Hero from './components/hero/HeroSection';
import Presenters from './components/presenters/Presenters';
import VideoSection from './components/video/VideoSection';
import CustomersSection from './components/customers/CustomersSection';
import Footer from './components/footer/Footer';



function App() {
  return (
    <main>
      <Hero />
      <Presenters/>
      <VideoSection/>
      <CustomersSection/>
      <Footer/>
    </main>
  );
}

export default App;
