import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import WorkImage from "./WorkImage";
import WorkDetails, { WorkProject } from "./WorkDetails";

const projects = [
  {
    title: "Finance App",
    category: "Banking Platform",
    tools: "Account & Portfolio Management, Transactions Analysis, Insights, Budgeting",
    images: [
      "/images/projects/fin-2.png",
      "/images/projects/fin-3.png",
      "/images/projects/fin-4.png",
      "/images/projects/fin-1.png",
      "/images/projects/fin-5.png",
      "/images/projects/fin-6.png",
    ],
    description: {
      details:
        "Designed and developed a personal finance platform that consolidates bank accounts and cash balances from multiple financial institutions into a unified dashboard. Built an account aggregation experience that provides users with a centralized view of their financial position across institutions, including account-level balances, institution-level summaries, and consolidated cash visibility.",
      list: [
        "Multi-Institution Banking Aggregation — Integrated multiple financial institutions through Plaid APIs, consolidating bank accounts, balances, and account-level information into a unified dashboard.",
        "Financial Analytics & Spending Insights — Developed interactive spending visualizations, category-wise expense breakdowns, historical spending trends, and monthly financial summaries.",
        "Budgeting & Expense Management — Built expense tracking and budget monitoring workflows across multiple institutions and categories with spending limits, remaining-budget calculations, daily allowances, and spending comparisons.",
        "Account Management & Transaction Tracking — Implemented institution-specific account views, transaction histories, balance tracking, and savings account interest monitoring with synchronized financial data.",
      ],
    },
    techStack:
      "React Native,Expo,TypeScript,Node.js,JWT,Passport.JS,NestJS,Plaid APIs,MongoDB,Mongoose,Redis,RabbitMQ,REST APIs,Microservices,Event-Driven Architecture,Docker,Azure App Service,Azure Container Registry",
  },
  {
    title: "Travel App",
    category: "Real-Time Travel & Mobility Platform",
    tools:
      "Trip Planning, Live Flight Tracking, GTFS & GTFS-RT, Transit Monitoring, Itinerary Management, Offline-First Storage",
    images: [
      "/images/projects/tra-3.png",
      "/images/projects/tra-1.png",
      "/images/projects/tra-2.png",
      "/images/projects/tra-4.png",
      "/images/projects/tra-5.png",
      "/images/projects/tra-6.png",
      "/images/projects/tra-7.png",
      "/images/projects/tra-8.png",
      "/images/projects/tra-9.png",
      "/images/projects/tra-10.png",
      "/images/projects/tra-11.png",
    ],
    description: {
      details:
        "Designed and developed a comprehensive travel and mobility platform that combines trip planning, itinerary management, and real-time transportation tracking. Integrated flight tracking services and public transit data feeds to provide live visibility into flights, trains, and buses, including schedules, vehicle positions, delays, and service updates. Built centralized trip workflows for managing destinations, transportation, activities, and travel information, complemented by offline-first data storage and intelligent photo organization.",
      list: [
        "Real-Time Flight Tracking — Integrated aviation data APIs to track flight status, departure and arrival times, delays, estimated arrival times, flight routes, and aircraft information.",
        "Real-Time Public Transit Tracking — Integrated GTFS and GTFS-Realtime (GTFS-RT) feeds to process transit schedules, vehicle positions, trip updates, arrival predictions, and service alerts across train and bus networks.",
        "Trip Planning & Itinerary Management — Developed centralized trip management workflows for organizing destinations, transportation, accommodations, activities, and travel schedules.",
        "Offline-First Architecture & Media Management — Implemented local data persistence using SQL-Lite, background synchronization, image importing, and perceptual-hashing-based duplicate detection for efficient offline photo management.",
      ],
    },
    techStack:
      "React Native,Expo,TypeScript,Node.js,Express,NestJS,REST APIs,GTFS,GTFS-Realtime,Protocol Buffers,Flight Tracking APIs,WebSockets,RabbitMQ,Redis,Event-Driven Architecture,Microservices,SQL-Lite,MongoDB,Mongoose,JWT,Passport.js,Perceptual Hashing,Offline-First Architecture,Docker,Azure App Service,Azure Container Registry",
  },
  {
    title: "AI Email Classifier",
    category: "AI-Powered Email Intelligence",
    tools:
      "Semantic Email Clustering, Novelty Detection, Dynamic Topic Discovery, Hierarchical Clustering, Email Classification, Topic Evolution",
    images: [
      "/images/projects/ema-4.png",
      "/images/projects/ema-1.png",
      "/images/projects/ema-2.png",
      "/images/projects/ema-3.png",
      "/images/projects/ema-5.png",
    ],
    description: {
      details:
        "Designed and developed an AI-powered email classification system that organizes emails using semantic representations rather than relying solely on predefined rules or keyword matching. Implemented embedding-based clustering to discover recurring topics, identify emerging categories, and organize related communications into dynamically evolving topic groups. Developed cluster-level representations and similarity analysis to support topic discovery, classification, and monitoring of changes in email patterns.",
      list: [
        "Semantic Email Clustering — Generated high-dimensional semantic representations of emails and grouped related messages using embedding-based similarity, enabling topic discovery beyond traditional keyword-based classification.",
        "Dynamic Topic Discovery & Novelty Detection — Developed mechanisms to identify emails that do not fit existing topic clusters, supporting the discovery of emerging subjects and the evolution of existing categories.",
        "Hierarchical Topic Organization — Built hierarchical cluster representations to analyze relationships between discovered topics, identify semantically related categories, and visualize the broader structure of email collections.",
        "Cluster State & Topic Evolution — Maintained persistent cluster representations, including centroids, cluster sizes, representative email indices, topic keywords, and creation/update timestamps to support incremental topic analysis.",
        "Semantic Analytics & Visualization — Developed PCA-based cluster projections and pairwise cosine-similarity heatmaps to inspect topic separation, identify related clusters, and analyze the semantic organization of email collections.",
      ],
    },
    techStack:
      "Python, Natural Language Processing, Text Embeddings, Vector Representations, NumPy, Scikit-learn, PCA, Cosine Similarity, Hierarchical Clustering, Semantic Search, Novelty Detection, Matplotlib, Semantic Clustering",
  },
  {
    title: "Investment Decision Engine",
    category: "Quantitative Portfolio Optimization",
    tools:
      "Convex Optimization, Mean-Variance Portfolio Construction, Transaction-Cost Modeling, Covariance Shrinkage, Signal Research, Scenario Analysis, Unit Testing",
    images: ["/images/projects/inv-2.png", "/images/projects/inv-1.png"],
    description: {
      details:
        "Architected a broker-style decision engine that turns an amount, a risk level, and a yearly return goal into buy, hold, and sell recommendations with hold horizons and plain-language reasons, using paper trading and human approval before any real user. The system is two layers on shared plumbing: a ranking layer that scores stocks from technical signals and third-party research, and a convex optimization layer that converts forecasts, holdings, costs, and risk limits into trades.",
      list: [
        "Convex Optimization Layer — Mean-variance optimizer in cvxpy with transaction costs inside the objective, a self-financing budget constraint, per-stock caps, cash buffer, turnover limits, and risk-profile presets, grounded in Lobo-Fazel-Boyd and Boyd et al. Verified on closed-form cases; found and fixed a bug where fees were treated as free.",
        "Risk Model & Goal Feasibility — Ledoit-Wolf shrinkage on a 20-stock, 105-month dataset cut the covariance condition number from 120.7 to 45.2. A minimum-risk return-goal mode reports 'goal unreachable at this risk level' instead of failing silently.",
        "Stock Ranking Layer — Designed to keep signals and horizons separate (trend, volatility, liquidity, third-party ratings) rather than blending them into one score, and to keep a signal only if it beats simple baselines net of trading costs, drawing on Gu-Kelly-Xiu and Avramov et al.",
        "Sharp-Drop Handling — Event-triggered monitor that, when a holding drops sharply, simulates continued-fall, bounce, and flat scenarios net of fees to set a pre-computed exit level and a higher re-entry level, with a gap to avoid whipsaw churn.",
        "Engineering Practice — pytest suite covering zero and prohibitive costs, monotone turnover, budget accounting, limits, and infeasibility; moved from OSQP to Clarabel after OSQP left the budget constraint loose by about 1e-4.",
      ],
    },
    techStack:
      "Python,cvxpy,Clarabel,NumPy,pandas,scikit-learn,Matplotlib,yfinance,pytest,Convex Optimization,Quadratic Programming",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <>
      <div className="work-section" id="projects">
        <div className="work-container section-container">
          <h2>
            My <span>Projects</span>
          </h2>

          <div className="carousel-wrapper">
            {/* Navigation Arrows */}
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable">
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable">
              <MdArrowForward />
            </button>

            {/* Slides */}
            <div className="carousel-track-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}>
                {projects.map((project, index) => (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <button
                          className="carousel-details"
                          onClick={() => setSelectedProject(project)}
                          aria-label={`View details for ${project.title}`}
                          data-cursor="disable">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">{project.category}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                        </button>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.images?.[0] || ""} alt={project.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedProject && <WorkDetails project={selectedProject} onClose={closeModal} />}
    </>
  );
};

export default Work;
