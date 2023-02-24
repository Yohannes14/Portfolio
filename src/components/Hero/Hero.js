import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <leftSection>
      <SectionTitle main center>
        Hello there <br/>
        I'm Yohannes Degu
      </SectionTitle>
      <SectionText>
        Frontend Developer |react js/react native/css/tailwindcss styles component php

      </SectionText>
      <Button onClick ={() => window.location ='https://google.com'}>contact</Button>
    </leftSection>

  </Section>
);

export default Hero;