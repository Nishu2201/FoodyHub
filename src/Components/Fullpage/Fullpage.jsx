import React from 'react'

import HeroSection from '../HeroSection/HeroSection.jsx';
import ServiceSection from '../Services/ServiceSection.jsx';
import FeaturedSection from '../Featured/FeaturedSection.jsx';
import ManuSection from '../Manu/ManuSection.jsx';
import SurveySection from '../Survey/SurveySection.jsx';
import ContactSection from '../Contact/ContactSection.jsx';

export default function Fullpage(){
    return(
        <div>
        <HeroSection />
        <FeaturedSection />
        <ManuSection />
        <ServiceSection />
        <SurveySection />
        <ContactSection />
        </div>
    )
}