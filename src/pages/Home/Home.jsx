import Banner from './Home Components/Banner';
import WhoWeAre from './Home Components/WhoWeAre';
import WhatWeOffer from './Home Components/WhatWeOffer';
import HowWeCanHelpYou from './Home Components/HowWeCanHelpYou';
import OurCommitment from './Home Components/OurCommitment';
import OurExperts from './Home Components/OurExperts';
import ContactUs from './Home Components/ContactUs';
import { useState } from 'react';
import BannerCarousels from './Home Components/BannerCarousels';

const Home = () => {
  const [offer, setOffer] = useState(0);
  return (
    <>
      {/* <Banner /> */}
      <BannerCarousels />
      <WhoWeAre />
      <WhatWeOffer setOffer={setOffer} />
      <HowWeCanHelpYou offer={offer} setOffer={setOffer} />
      <OurCommitment />
      <OurExperts />
      <ContactUs />
    </>
  );
};

export default Home;
