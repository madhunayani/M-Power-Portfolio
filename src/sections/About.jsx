import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/animations/GlitchText';
import { SplitText } from '../components/animations/SplitText';
import { ShinyText } from '../components/animations/ShinyText';

const resumeFile = '/Madhu_Nayani_Resume.pdf';

const AboutSectionWrapper = styled.section`
  padding: 10rem 4%;
  position: relative;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const TextContent = styled.div`
  h2 {
    font-family: var(--font-display);
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #81C4FF;
  color: #81C4FF;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C4FF, #16588E);
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: #0d0d0d;
    border-color: #81C4FF;
    box-shadow: 0 5px 25px rgba(129, 196, 255, 0.5), 0 0 40px rgba(231, 34, 46, 0.3);
    transform: translateY(-3px);
  }
`;

const SkillsContainer = styled(motion.section)`
  padding: 2.5rem;
  border-radius: 12px;
  border: 2px solid #81C4FF;
  background: linear-gradient(135deg, rgba(22, 88, 142, 0.2), rgba(13, 13, 13, 0.9));
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #81C4FF, #16588E, #E7222E);
  }
`;

const SubHeading = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #81C4FF, #E7222E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillBadge = styled(motion.div)`
  background: rgba(22, 88, 142, 0.3);
  border: 2px solid #81C4FF;
  padding: 0.9rem 1.5rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.05rem;
  border-radius: 6px;
  cursor: pointer;
  color: #81C4FF;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C4FF, #E7222E);
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: #0d0d0d;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(129, 196, 255, 0.4);
    border-color: #E7222E;
  }
`;

const About = () => {
  const mernSkills = ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST API", "Authentication", "Authorization", "JWT", "OAuth 2.0", "HTML5", "CSS3", "Git", "GitHub", "Responsive Design", "Docker", "CI/CD", "AWS", "Vercel", "Postman", "ES6+"];
  const dataScienceSkills = ["Python", "LangChain", "RAG", "Ollama", "OpenAI API", "LlamaIndex", "BERT", "GPT", "LLaMA", "Prompt Engineering", "TensorFlow", "CNN", "RNN", "LSTM", "Vector Databases", "Chroma DB", "FAISS", "Azure AI Search"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <AboutSectionWrapper id="driver-seat">
      <AboutContainer>
        <TextContent>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlitchText text="The Driver's Seat" />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I'm a Full Stack Developer and AI trailblazer with Gen AI horsepower, engineering web apps the way automakers build supercars—every line of code is turbocharged for maximum speed, precision, and elegance. My MERN toolkit runs like a finely-tuned engine, optimized for fierce acceleration and relentless scalability. Crafted to perform under peak pressure, my systems don't just run—they roar past limits, fusing the intelligence of cutting-edge AI with the art of automotive innovation. If adrenaline-fueled innovation gives you a rush, buckle up for a ride into the future.
            </motion.p>
            <DownloadButton 
              href={resumeFile} 
              download="Madhu_Nayani_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              The Driver Dossier
            </DownloadButton>
          </motion.div>
        </TextContent>

        <SkillsContainer
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubHeading>
            <SplitText text="The MERN Toolbox" type="words" duration={0.6} />
          </SubHeading>
          <SkillsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mernSkills.map((skill) => (
              <SkillBadge key={skill} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                {skill}
              </SkillBadge>
            ))}
          </SkillsGrid>

          <SubHeading style={{ marginTop: '2.5rem' }}>
            <SplitText text="The AI & Data Toolbox" type="words" duration={0.6} delay={0.2} />
          </SubHeading>
          <SkillsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dataScienceSkills.map((skill) => (
              <SkillBadge key={skill} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                {skill}
              </SkillBadge>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </AboutContainer>
    </AboutSectionWrapper>
  );
};

export default About;
