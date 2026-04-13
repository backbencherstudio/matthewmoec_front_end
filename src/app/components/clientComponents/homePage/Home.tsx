import React from 'react';
import HeroSection from "../homePage/Hero";
import TrustedStores from './TrustedStores';
import GivingBack from './GivingBack';
import WhyPeopleUse from './WhyPeopleUse';
import TakeEveryWhere from './TakeEveryWhere';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TrustedStores></TrustedStores>
            <GivingBack></GivingBack>
            <WhyPeopleUse></WhyPeopleUse>
            <TakeEveryWhere></TakeEveryWhere>
        </div>
    );
};

export default Home;