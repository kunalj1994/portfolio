import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Terawe Technologies</h4>
                <h5>Lead Software Engineer</h5>
              </div>
              <h3>Aug 22 - Jan 26</h3>
            </div>
            <p>
              Led AI solution development for law-enforcement and education use cases, translating ambiguous
              requirements into deployable software and AI workflows. Designed a Federated Multi-Tenant AI Platform
              spanning customer-deployed and centrally hosted Gov Cloud environments, separating customer data from
              shared application services, AI models, and compute while defining secure authentication and
              inter-instance communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finoa GmbH</h4>
                <h5>Sr. Software Engineer</h5>
              </div>
              <h3>Feb 22 - Aug 22</h3>
            </div>
            <p>
              Built high-throughput backend services for real-time cryptocurrency data ingestion, processing millions of
              price records in PostgreSQL. Optimized data pipelines through in-memory caching and batched writes,
              reducing database load by over 40%. Designed modular TypeScript microservices and asynchronous
              job-processing workflows, with CI/CD automation, Grafana observability, and real-time alerting to improve
              production reliability and operational efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Uberall GmbH</h4>
                <h5>Squad Lead Engineering</h5>
              </div>
              <h3>Jun 21 - Dec 21</h3>
            </div>
            <p>
              Led a team of five engineers building a local business discovery and advertising platform. Designed and
              developed serverless backend services using Node.js, TypeScript, and AWS Lambda, alongside responsive
              React applications. Drove technical architecture, feature delivery, and cross-functional collaboration,
              while mentoring engineers and contributing to hiring and technical interviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Microsoft Corporation</h4>
                <h5>Sr. Software Engineer</h5>
              </div>
              <h3>Apr 18 - Apr 21</h3>
            </div>
            <p>
              Led CI/CD automation and deployment reliability initiatives across engineering teams, reducing deployment
              time by 60% through reusable Groovy and PowerShell automation frameworks. Designed multi-stage Jenkins
              pipelines with automated validation, rollback safeguards, and zero-touch deployments. Built self-healing
              automation to recover failed jobs and eliminate stale processes, reducing response time for critical
              failures by over 40%. Replaced legacy update operations with an idempotent Admin API workflow that
              improved performance by 2× and was adopted across the organization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UHG - Optum</h4>
                <h5>Software Engineer</h5>
              </div>
              <h3>Feb 16 - Apr 18</h3>
            </div>
            <p>
              Developed Node.js backend services and REST APIs integrating MongoDB and external systems, alongside
              frontend applications using AngularJS. Built automated testing frameworks using Mocha, Chai, Cucumber, and
              Selenium, and integrated Jenkins CI/CD pipelines to streamline application builds, validation, and
              delivery. Created a JavaScript framework that converted Excel-driven test data into Gherkin scripts,
              automating UI validation and improving testing efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
