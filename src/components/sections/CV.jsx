import { Download, Eye, FileText, CheckCircle } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';
import './CV.css';

const CV_FEATURES = [
  "Modern & Clean Layout",
  "Professional Experience",
  "Key Skills & Tech Stack",
  "Contact Information",
];

const CV = () => {
  const cvPath = `${import.meta.env.BASE_URL}hamza_CV.pdf`;

  return (
    <section id="cv" className="section cv">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Career"
            title="Professional"
            titleAccent="Resume"
            subtitle="Explore my professional background, skills, and the journey that shaped me as a developer."
          />
        </AnimatedSection>

        <div className="cv__single-container">
          <AnimatedSection className="cv-card cv-card--premium">
            <div className="cv-card__badge">Official Resume</div>

            <div className="cv-card__header">
              <div className="cv-card__header-content">
                <h3 className="cv-card__name">{personal.name}</h3>
                <p className="cv-card__role">{personal.role}</p>
              </div>
            </div>

            <div className="cv-card__body">
              <div className="cv-card__preview-info">
                <FileText size={48} className="cv-card__preview-icon" />
                <div className="cv-card__preview-text">
                  <h4>Curriculum Vitae</h4>
                  <p>PDF Format • Morocco</p>
                </div>
              </div>

              <div className="cv-card__info">
                <h4 className="cv-card__title-ar">السيرة الذاتية المهنية</h4>
                <p className="cv-card__desc-ar">المستند الكامل يوضح مساري المهني، المهارات التقنية، وأبرز المشاريع التي عملت عليها.</p>
                <ul className="cv-card__points">
                  {CV_FEATURES.map(p => (
                    <li key={p}><CheckCircle size={14} color="var(--color-emerald)" /> {p}</li>
                  ))}
                </ul>
              </div>

              <div className="cv-card__actions">
                <a href={cvPath} target="_blank" rel="noopener noreferrer" className="cv-card__btn-anchor">
                  <Button variant="outline" size="md" icon={<Eye size={16} />} fullWidth>
                    Preview CV
                  </Button>
                </a>
                <a href={cvPath} download className="cv-card__btn-anchor">
                  <Button variant="primary" size="md" icon={<Download size={16} />} fullWidth>
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CV;
