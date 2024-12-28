import React, { useState } from 'react';
import './SpinWheel.css';
import { useNavigate } from 'react-router-dom';

const SpinWheel = () => {
  const options = ["Question set 1", "Question set 2", "Question set 3", "Spin again"];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const segmentAngle = 360 / options.length;
  const colors = options.map((_, index) => `hsl(${(index * 360) / options.length}, 70%, 60%)`);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // Generate a high-resolution random spin value
    const randomFactor = Math.random() + Math.random(); // Adds additional entropy
    const randomSpin = Math.floor(randomFactor * 360) + 360*5; // Minimum 5 full rotations
    const totalRotation = rotation + randomSpin;
    const normalizedRotation = totalRotation % 360;

    const selectedSegmentIndex = Math.floor(
      (options.length - Math.floor(normalizedRotation / segmentAngle)) % options.length
    );

    setRotation(totalRotation);

    setTimeout(() => {
      setSelectedOption(options[selectedSegmentIndex]);
      setIsSpinning(false);
    }, 3000); // Spin duration
  };

  const handleOpen = () => {
    if (selectedOption) {
      if (selectedOption === "Spin again") {
        setSelectedOption(null);
      } else {
        navigate(`/${selectedOption.replace(/\s+/g, '-').toLowerCase()}`); // Route to a detailed page
      }
    }
  };

  return (
    <div className="spin-wheel-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={spinWheel}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="wheel-segment"
            style={{
              backgroundColor: colors[index],
              transform: `rotate(${index * segmentAngle}deg)`,
            }}
          >
            <span
              className="wheel-text"
              style={{
                transform: `rotate(${segmentAngle / 2}deg) translateY(-50%)`,
              }}
            >
              {option}
            </span>
          </div>
        ))}
      </div>

      <div className="center-arrow"></div>

      {selectedOption && (
        <div className="popout">
          <h2>{selectedOption}</h2>
          <button onClick={handleOpen}>{selectedOption === "Spin again" ? "Spin Again" : "Open"}</button>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
