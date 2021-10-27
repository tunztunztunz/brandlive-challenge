import { Section } from './components/common/Section';
import blueDrip from './images/bluedrip.png'
import yellowDrip from './images/yellowdrip.png'
import pinkdrip from './images/pinkdrip.png'
import colors from './utils/colors';

import Hero from './components/hero/Hero';



function App() {
  return (
    <div>
      <Hero />
      {/* <Section backgroundImage={blueDrip} backgroundColor={colors.yellow}  />
      <Section backgroundImage={yellowDrip} backgroundColor={colors.pink} />
      <Section backgroundImage={pinkdrip} backgroundColor={colors.blueSecondary} /> */}
    </div>
  );
}

export default App;
