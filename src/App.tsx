import { Section } from './components/common/Section';
import blueDrip from './images/bluedrip.png'
import yellowDrip from './images/yellowdrip.png'
import pinkdrip from './images/pinkdrip.png'
import colors from './utils/colors';

import Hero from './components/hero/Hero';
import Presenters from './components/presenters/Presenters';
import VideoSection from './components/video/VideoSection';
import SponsorsSection from './components/sponsors/SponsorsSection';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      <Hero />
      <Presenters/>
      <VideoSection/>
      <SponsorsSection/>
      <Footer/>
      {/* <Section backgroundImage={blueDrip} backgroundColor={colors.yellow}  />
      <Section backgroundImage={yellowDrip} backgroundColor={colors.pink} />
      <Section backgroundImage={pinkdrip} backgroundColor={colors.blueSecondary} /> */}
    </div>
  );
}

export default App;
