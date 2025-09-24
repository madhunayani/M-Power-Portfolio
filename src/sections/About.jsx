import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const resumeFile = '/Madhu_Nayani_Resume.pdf';

const AboutSectionWrapper = styled.section`
  padding: 10rem 4%;
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
    color: var(--primary-black);
  }
`;

const SkillsContainer = styled.div``;

const SubHeading = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--primary-white);
`;

// --- FIX #1: ENLARGED SKILL BOXES ---
const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  div {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #333;
    padding: 0.9rem 1.5rem; /* Increased padding */
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.05rem; /* Increased font size */
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
  // --- FIX #2: SKILL ARRAYS RESTORED ---
  const mernSkills = [ "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST API", "Authentication", "Authorization", "JWT", "OAuth 2.0", "HTML5", "CSS3", "Git", "GitHub", "Responsive Design", "Redux", "Docker", "CI/CD", "AWS", "Vercel", "Postman", "ES6+", ];
  const dataScienceSkills = [ "Python", "LangChain", "RAG", "Ollama", "OpenAI API", "LlamaIndex", "BERT", "GPT", "LLaMA", "Prompt Engineering", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Vector Databases", "Chroma DB", "FAISS", "Matplotlib", "Azure AI Search", ];

  return (
    <AboutSectionWrapper id="driver-seat">
      <AboutContainer>
        <TextContent>
          <Fade direction="up" duration={500} triggerOnce>
            <h2>The Driver's Seat 🏁</h2>
            <p>I'm a Full Stack Developer who thrives at the intersection of high-performance code and elegant design. My toolkit is the MERN stack, but my philosophy is drawn from the world of precision automotive engineering. I build robust, scalable, and intelligent web applications that are built to perform under pressure.</p>
            {/* --- FIX #3: BUTTON TEXT UPDATED --- */}
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

