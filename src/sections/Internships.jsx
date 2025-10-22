import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/animations/GlitchText';

const InternshipsContainer = styled.section`
  padding: 6rem 4%;
  position: relative;
`;

const SectionTitleWrapper = styled(motion.div)`
  font-family: var(--font-display);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

const InternshipCard = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(22, 88, 142, 0.25), rgba(13, 13, 13, 0.95));
  border: 2px solid #81C4FF;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #81C4FF, #16588E, #E7222E);
    opacity: 1;
  }
  
  &:hover {
    border-color: #E7222E;
    box-shadow: 0 15px 50px rgba(129, 196, 255, 0.4), 0 0 70px rgba(231, 34, 46, 0.3);
    transform: translateX(10px);
  }
`;

const InternshipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  flex: 1;
  min-width: 250px;
`;

const InternshipTitle = styled(motion.h3)`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  color: #81C4FF;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: color 0.3s;
  
  ${InternshipCard}:hover & {
    color: #E7222E;
  }
`;

const InternshipDate = styled(motion.div)`
  font-family: 'Roboto Condensed', sans-serif;
  color: #0d0d0d;
  font-style: italic;
  font-size: 1rem;
  padding: 0.6rem 1.3rem;
  border-radius: 25px;
  background: linear-gradient(135deg, #81C4FF, #16588E);
  white-space: nowrap;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(129, 196, 255, 0.4);
  
  ${InternshipCard}:hover & {
    background: linear-gradient(135deg, #E7222E, #c41e26);
    box-shadow: 0 4px 25px rgba(231, 34, 46, 0.5);
  }
`;

const SubTitle = styled(motion.h4)`
  font-family: 'Roboto Condensed', sans-serif;
  color: #16588E;
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ResponsibilityList = styled(motion.ul)`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;
`;

const ResponsibilityItem = styled(motion.li)`
  margin-bottom: 1.3rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 2.5rem;
  position: relative;
  transition: all 0.3s;
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #81C4FF;
    font-weight: bold;
    font-size: 1.5rem;
    transition: all 0.3s;
  }
  
  &:hover {
    color: #f5f5f5;
    padding-left: 3rem;
  }
  
  &:hover::before {
    color: #E7222E;
    transform: translateX(5px);
  }
`;

const Badge = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, #E7222E, #c41e26);
  color: #ffffff;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-left: 1rem;
  box-shadow: 0 4px 15px rgba(231, 34, 46, 0.4);
`;

const Internships = () => {
  const responsibilities = [
    "Designed a scalable web hosting architecture using AWS Elastic Beanstalk for seamless deployment and management",
    "Improved response time and scalability through auto-scaling groups and load balancers",
    "Delivered a client-friendly explanation of the solution architecture with cost optimization strategies",
    "Explained complex architecture in a client-facing presentation with real-world implementation scenarios"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <InternshipsContainer id="test-bench">
      <SectionTitleWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlitchText text="The Test Bench" />
      </SectionTitleWrapper>

      <InternshipCard
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
      >
        <InternshipHeader>
          <TitleWrapper>
            <InternshipTitle>
              AWS APAC Solutions Architecture Virtual Experience
              <Badge whileHover={{ scale: 1.1 }}>AWS</Badge>
            </InternshipTitle>
          </TitleWrapper>
          <InternshipDate>December 2024</InternshipDate>
        </InternshipHeader>

        <SubTitle>on Forage</SubTitle>

        <ResponsibilityList
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {responsibilities.map((responsibility, index) => (
            <ResponsibilityItem key={index} variants={itemVariants}>
              {responsibility}
            </ResponsibilityItem>
          ))}
        </ResponsibilityList>
      </InternshipCard>
    </InternshipsContainer>
  );
};

export default Internships;
