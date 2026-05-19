import { Link } from 'react-router-dom';
import { StickyBanner } from '../components/StickyBanner';
import { githubUrl } from '../data/links';

export function Resume() {
  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <section className="resume-page" aria-labelledby="resume-heading">
        <div className="section-label">resume</div>
        <div className="resume-copy">
          <h1 id="resume-heading">asaad khwaja</h1>
          <p className="resume-title">applied ai engineer</p>
          <div className="resume-grid">
            <div>
              <h2>focus</h2>
              <p>
                Building measurable, debuggable AI systems across retrieval,
                agents, evaluation, and production workflows.
              </p>
            </div>
            <div>
              <h2>systems</h2>
              <p>
                RAG pipelines, agent evaluation harnesses, model-serving APIs,
                data workflows, traces, and regression checks.
              </p>
            </div>
            <div>
              <h2>tools</h2>
              <p>Python, TypeScript, React, FastAPI, Docker, LangGraph.</p>
            </div>
            <div>
              <h2>links</h2>
              <p>
                <a href={githubUrl} rel="noreferrer" target="_blank">
                  github
                </a>{' '}
                · <Link to="/blog">blog</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
