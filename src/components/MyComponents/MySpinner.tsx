// This spinner is used in the form submission
import React from "react";

interface MySpinnerProps {
  className?: string;
}

const MySpinner: React.FC<MySpinnerProps> = ({ className }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spinner {
          width: 24px;
          height: 24px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #3498db; /* Blue color for the spinner */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MySpinner;
