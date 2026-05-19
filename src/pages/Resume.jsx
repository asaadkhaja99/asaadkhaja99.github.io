import { StickyBanner } from '../components/StickyBanner';
import { githubUrl } from '../data/links';

const skills = [
  ['GenAI', 'RAG, LLM agents/workflows, evaluation and red-teaming (Garak)'],
  ['ML/AI', 'PyTorch, Scikit-learn, TensorFlow, vLLM, Optuna, Hydra'],
  ['Backend/MLOps', 'FastAPI, Docker, Kafka, PySpark, MLflow, GitLab CI/CD, Langfuse'],
  ['Frameworks', 'LangChain, LangGraph, Pydantic AI'],
  ['Languages', 'Python, SQL, Bash, Java (familiar)'],
];

const experience = [
  {
    title: 'Associate AI Engineer (AI Apprenticeship Programme)',
    company: 'AI Singapore',
    location: 'Singapore',
    dates: 'May 2025 - Feb 2026',
  },
  {
    title: 'QA Engineer (Intern)',
    company: 'Screening Eagle Dreamlab',
    location: 'Singapore',
    dates: 'Jan 2025 - May 2025',
  },
];

const projects = [
  {
    title: 'Rabbit Hole (Academic PDF Deep Dive)',
    href: 'https://github.com/asaadkhaja99/rabbit-hole',
    meta: 'Honourable Mention, Gemini 3 Hackathon SG, Jan 2026',
    bullets: [
      'Architected a hierarchical RAG framework using Google File Search and Gemini 3 Flash, enabling users to recursively explore complex academic concepts through context-aware explanations that persist across conversation threads with visual graph navigation.',
      'Implemented multimodal equation annotation using Gemini 3 Pro Image to generate handwritten-style explanations of mathematical formulas, eliminating manual context switching by rendering inline annotations directly within PDFs.',
    ],
  },
  {
    title: 'AI Audio Fact-Checker',
    href: 'https://github.com/BrianIsaac/uhmm-achtually',
    meta: '2nd Place - Exa Sponsor Track, Cursor Hackathon SG, Oct 2025',
    bullets: [
      'Engineered a low-latency fact-checking pipeline for Zoom/Teams calls using Groq (LLaMA 3.3) and Whisper speech-to-text.',
      'Designed a non-blocking audio ingestion buffer and async claim extraction service to cross-reference spoken claims against live web search results.',
    ],
  },
];

export function Resume() {
  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <section className="resume-page" aria-labelledby="resume-heading">
        <div className="section-label resume-label">Resume</div>
        <div className="resume-copy">
          <h1 id="resume-heading">Shaik Asaaduddin Khwaja</h1>
          <div className="resume-contact" aria-label="contact details">
            <span>Singaporean</span>
            <a href="mailto:shaik.asaad00@gmail.com">shaik.asaad00@gmail.com</a>
            <a href={githubUrl} rel="noreferrer" target="_blank">
              github.com/asaadkhaja99
            </a>
            <a
              href="https://linkedin.com/in/shaik-asaad"
              rel="noreferrer"
              target="_blank"
            >
              linkedin.com/in/shaik-asaad
            </a>
          </div>

          <div className="resume-sections">
            <section className="resume-section" aria-labelledby="summary-heading">
              <h2 id="summary-heading">Summary</h2>
              <p>
                Applied AI Engineer with experience shipping generative AI applications. Cambridge Physics (2024); AWS Certified ML Engineer - Associate.
              </p>
            </section>

            <section className="resume-section" aria-labelledby="education-heading">
              <h2 id="education-heading">Education</h2>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <h3>University of Cambridge</h3>
                  <span>Oct 2021 - Jun 2024</span>
                </div>
                <p>United Kingdom</p>
                <p>Bachelor of Arts (Hons), Natural Sciences - Physics</p>
              </article>
            </section>

            <section className="resume-section" aria-labelledby="skills-heading">
              <h2 id="skills-heading">Technical Skills</h2>
              <dl className="resume-skills">
                {skills.map(([category, items]) => (
                  <div key={category}>
                    <dt>{category}</dt>
                    <dd>{items}</dd>
                  </div>
                ))}
                <div>
                  <dt>Certifications</dt>
                  <dd>
                    <a
                      href="https://www.credly.com/badges/72bf58e5-3c2a-4820-80dc-008b175963f2/public_url"
                      rel="noreferrer"
                      target="_blank"
                    >
                      AWS Certified Machine Learning Engineer - Associate
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="resume-section" aria-labelledby="experience-heading">
              <h2 id="experience-heading">Experience</h2>
              {experience.map((role) => (
                <article className="resume-entry" key={role.title}>
                  <div className="resume-entry-heading">
                    <h3>{role.title}</h3>
                    <span>{role.dates}</span>
                  </div>
                  <p>
                    {role.company}, {role.location}
                  </p>
                </article>
              ))}
            </section>

            <section className="resume-section" aria-labelledby="projects-heading">
              <h2 id="projects-heading">Projects</h2>
              {projects.map((project) => (
                <article className="resume-entry" key={project.title}>
                  <div className="resume-entry-heading">
                    <h3>
                      <a href={project.href} rel="noreferrer" target="_blank">
                        {project.title}
                      </a>
                    </h3>
                    <span>{project.meta}</span>
                  </div>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
