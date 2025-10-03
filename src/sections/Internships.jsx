import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

const InternshipsContainer = styled.section`
  padding: 6rem 4%;
  background-color: var(--background-color, #111);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  color: var(--accent-blue);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

const InternshipCard = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
`;

const InternshipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
`;

const InternshipTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  color: var(--primary-white);
  margin-bottom: 0.5rem;
`;

const InternshipDate = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--accent-blue);
  font-style: italic;
`;

const ResponsibilityList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
  margin-top: 1.5rem;
  li {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Internships = () => {
  return (
    <InternshipsContainer id="test-bench">
      <Fade direction="up" duration={500} triggerOnce>
        <SectionTitle>The Test Bench 🏭</SectionTitle>
        <InternshipCard>
          <InternshipHeader>
            <InternshipTitle>AWS APAC Solutions Architecture Virtual Experience</InternshipTitle>
            <InternshipDate>December 2024</InternshipDate>
          </InternshipHeader>
          <h4>on Forage</h4>
          <ResponsibilityList>
            <li>Designed a scalable web hosting architecture using AWS Elastic Beanstalk...</li>
            <li>Improved response time and scalability through auto-scaling...</li>
            <li>Delivered a client-friendly explanation of the solution...</li>
            <li>Explained complex architecture in a client-facing presentation...</li>
          </ResponsibilityList>
        </InternshipCard>
      </Fade>
    </InternshipsContainer>
  );
};

export default Internships;
