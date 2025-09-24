import React from 'react';
import styled from 'styled-components';

// The resume file path is preserved
const resumeFile = '/Madhu_Nayani_Resume.pdf';

// The Parallax wrapper has been replaced with a standard styled-component
const AboutSectionWrapper = styled.section`
  padding: 10rem 4%;
  background-color: var(--background-color); /* Uses your theme's background */
  transition: background-color 0.3s ease; /* Smooth transition for theme switching */
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
    font-family: var(--font-display); /* Uses theme's display font */
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: none;
    color: var(--accent-blue); /* Uses theme's accent color for pop */
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary, rgba(255, 255, 255, 0.7)); /* Uses theme's secondary text color */
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
  letter-spacing: 1px;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  div {
    background-color: rgba(255, 255, 255, 0.05); /* Adjusted for better contrast */
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--accent-blue);
      color: var(--accent-blue);
      transform: translateY(-3px);
    }
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
  letter-spacing: 1.5px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-blue);
    color: var(--primary-black);
    box-shadow: 0 5px 15px rgba(0, 174, 239, 0.4);
  }
`;

const About = () => {
  const mernSkills = [ "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST API", "Authentication", "Authorization", "JWT", "OAuth 2.0", "HTML5", "CSS3", "Git", "GitHub", "Responsive Design", "Redux", "Docker", "CI/CD", "AWS", "Vercel", "Postman", "ES6+", ];
  const dataScienceSkills = [ "Python", "LangChain", "RAG", "Ollama", "OpenAI API", "LlamaIndex", "BERT", "GPT", "LLaMA", "Prompt Engineering", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Vector Databases", "Chroma DB", "FAISS", "Matplotlib", "Azure AI Search", ];

  return (
    // The Parallax component has been removed
    <AboutSectionWrapper id="driver-seat">
      <AboutContainer>
        <TextContent>
          <h2>The Driver's Seat 🏁</h2>
          <p>
            I'm a Full Stack Developer who thrives at the intersection of high-performance code and elegant design. My toolkit is the MERN stack, but my philosophy is drawn from the world of precision automotive engineering. I build robust, scalable, and intelligent web applications that are built to perform under pressure.
          </p>
          <DownloadButton 
            href={resumeFile} 
            download="Madhu_Nayani_Resume.pdf"
          >
            Download Logbook (Resume)
          </DownloadButton>
        </TextContent>

        <SkillsContainer>
          <SubHeading>The MERN Toolbox 🧰</SubHeading>
          <SkillsGrid>
            {mernSkills.map(skill => (<div key={skill}>{skill}</div>))}
          </SkillsGrid>

          <SubHeading style={{ marginTop: '2.5rem' }}>The AI & Data Toolbox 🧰</SubHeading>
          <SkillsGrid>
            {dataScienceSkills.map(skill => (<div key={skill}>{skill}</div>))}
          </SkillsGrid>
        </SkillsContainer>
      </AboutContainer>
    </AboutSectionWrapper>
  );
};

export default About;
