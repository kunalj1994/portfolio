import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import "./styles/WorkDetails.css";

export interface WorkProject {
  title: string;
  category: string;
  tools: string;
  images: string[];
  description?: {
    details: string;
    list: string[];
  };
  techStack: string;
}

interface WorkDetailsProps {
  project: WorkProject;
  onClose: () => void;
}

const WorkDetails = ({ project, onClose }: WorkDetailsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number>(0);
  const goToNextRef = useRef(() => {});

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      goToNextRef?.current();
    }, 2500);

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, []);

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === project.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    goToNextRef.current = goToNext;
  }, [goToNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  return createPortal(
    <div
      className="work-details-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <div className="work-details-modal" role="dialog" aria-modal="true" aria-labelledby="work-details-title">
        <button className="work-details-close" onClick={onClose} aria-label="Close project details">
          <MdClose />
        </button>

        <div className="image-carousel-track-container">
          <div
            className="image-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
            {project.images.map((image, i) => (
              <div className="work-details-image image-carousel-slide" key={i}>
                <img src={image} alt={project.title} />
              </div>
            ))}
          </div>
          <div className="image-bottom-container ">
            <button
              className="image-carousel-arrow"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable">
              <MdArrowBack />
            </button>

            <div className="image-carousel-dots">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
            <button className="image-carousel-arrow" onClick={goToNext} aria-label="Next project" data-cursor="disable">
              <MdArrowForward />
            </button>
          </div>
        </div>
        <div className="work-details-content">
          <span className="work-details-category">{project.category}</span>

          <h2 id="work-details-title">{project.title}</h2>

          <div className="work-details-divider" />
          <div className="work-details-container">
            <div className="work-details-section">
              <h3>Overview</h3>
              <p>{project.description?.details}</p>
            </div>
            <div>
              <h3>Tech Stack</h3>
              <p>
                {project.techStack.split(",").map((ts, i) => (
                  <span className="tech-stack" key={i}>
                    {ts}
                  </span>
                ))}
              </p>
            </div>
            <div className="work-details-section">
              <h3>Features</h3>
              <p>
                <ul>
                  {project.description?.list.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default WorkDetails;
