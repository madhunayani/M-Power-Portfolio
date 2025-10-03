import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const resumeFile = '/Madhu_Nayani_Resume.pdf';

// --- CHANGE #1: Background removed to show global pattern ---
const AboutSectionWrapper = styled.section`
  padding: 10rem 4%;
  /* The previous carbon fiber background styles have been removed */
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
    color: var(--accent-blue);
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary, rgba(255, 255, 255, 0.7));
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: 1px solid var(--accent-blue);
  color: var(--accent-blue);
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: var(--accent-blue);
    color: #0d0d0d; /* Using the new dark color for text */
  }
`;

// --- CHANGE #2: Blueprint grid removed ---
const SkillsContainer = styled.section`
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  
  /* The grid background is replaced with a simple, dark panel color */
  background-color: rgba(15, 17, 21, 0.5); /* Semi-transparent dark panel */
  backdrop-filter: blur(5px); /* Optional: Adds a "glassy" effect */
`;

const SubHeading = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--primary-white);
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  div {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #333;
    padding: 0.9rem 1.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.05rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    &:hover {
      border-color: var(--accent-blue);
      color: var(--accent-blue);
      transform: translateY(-3px);
    }
  }
`;

const About = () => {
  const mernSkills = [ "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST API", "Authentication", "Authorization", "JWT", "OAuth 2.0", "HTML5", "CSS3", "Git", "GitHub", "Responsive Design", "Docker", "CI/CD", "AWS", "Vercel", "Postman", "ES6+", ];
  const dataScienceSkills = [ "Python", "LangChain", "RAG", "Ollama", "OpenAI API", "LlamaIndex", "BERT", "GPT", "LLaMA", "Prompt Engineering", "TensorFlow", "CNN", "RNN", "LSTM", "Vector Databases", "Chroma DB", "FAISS", "Azure AI Search", ];

  return (
    <AboutSectionWrapper id="driver-seat">
      <AboutContainer>
        <TextContent>
          <Fade direction="up" duration={500} triggerOnce>
            <h2>The Driver's Seat 🏁</h2>
            <p>I'm a Full Stack Developer and AI trailblazer with Gen AI horsepower, engineering web apps the way automakers build supercars—every line of code is turbocharged for maximum speed, precision, and elegance. My MERN toolkit runs like a finely-tuned engine, optimized for fierce acceleration and relentless scalability. Crafted to perform under peak pressure, my systems don’t just run—they roar past limits, fusing the intelligence of cutting-edge AI with the art of automotive innovation. If adrenaline-fueled innovation gives you a rush, buckle up for a ride into the future.</p>
            <DownloadButton href={resumeFile} download="Madhu_Nayani_Resume.pdf">
              The Driver Dossier 📂
            </DownloadButton>
          </Fade>
        </TextContent>
        <SkillsContainer>
          <Fade direction="up" duration={500} triggerOnce>
            <SubHeading>The MERN Toolbox 🧰</SubHeading>
            <SkillsGrid>
              {mernSkills.map(skill => (<div key={skill}>{skill}</div>))}
            </SkillsGrid>
          </Fade>
          <Fade direction="up" duration={500} delay={200} triggerOnce>
            <SubHeading style={{ marginTop: '2.5rem' }}>The AI & Data Toolbox 🧰</SubHeading>
            <SkillsGrid>
              {dataScienceSkills.map(skill => (<div key={skill}>{skill}</div>))}
            </SkillsGrid>
          </Fade>
        </SkillsContainer>
      </AboutContainer>
    </AboutSectionWrapper>
  );
};

export default About;
