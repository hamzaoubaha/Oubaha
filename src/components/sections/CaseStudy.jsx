import { caseStudy } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import Tag from '../shared/Tag';
import './CaseStudy.css';

const CaseStudy = () => {
  const { title, subtitle, problem, solution, process, result, technologies } = caseStudy;

  return (
    <section id="case-study" className="section section--alt case-study">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Case Study"
            title="Inside the"
            titleAccent="Process"
            subtitle={subtitle}
          />
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection delay={0.1}>
          <div className="case-study__project-title">
            <h3 className="case-study__name">{title}</h3>
            <div className="case-study__tags">
              {technologies.map((t, i) => (
                <Tag key={t} label={t} color={['accent','emerald','purple','gold'][i % 4]} size="md" />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Problem + Solution */}
        <div className="case-study__two-col">
          <AnimatedSection delay={0.15} direction="left">
            <div className="case-study__box case-study__box--problem">
              <div className="case-study__box-icon">01</div>
              <h4 className="case-study__box-title">{problem.heading}</h4>
              <p className="case-study__box-text">{problem.text}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="right">
            <div className="case-study__box case-study__box--solution">
              <div className="case-study__box-icon">02</div>
              <h4 className="case-study__box-title">{solution.heading}</h4>
              <p className="case-study__box-text">{solution.text}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Process */}
        <AnimatedSection delay={0.2}>
          <h4 className="case-study__process-title">The Process</h4>
          <div className="case-study__process">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={0.1 * i} direction="up">
                <div className="case-study__step">
                  <div className="case-study__step-num font-mono">{step.step}</div>
                  <div className="case-study__step-connector" />
                  <div className="case-study__step-content">
                    <h5 className="case-study__step-title">{step.title}</h5>
                    <p className="case-study__step-text">{step.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Result */}
        <AnimatedSection delay={0.3}>
          <div className="case-study__result">
            <h4 className="case-study__result-heading">{result.heading}</h4>
            <p className="case-study__result-text">{result.text}</p>
            <div className="case-study__metrics">
              {result.metrics.map(m => (
                <div key={m} className="case-study__metric">
                  <span className="gradient-text">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudy;
