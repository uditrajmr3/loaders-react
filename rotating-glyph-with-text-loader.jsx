import styled, { keyframes } from "styled-components";

// Rotation animation for the spinner
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Container for the entire loading component
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: transparent;
  color: #ffffff;
`;

// Spinner container
const SpinnerContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
`;

// Individual spinner line
const SpinnerLine = styled.div`
  position: absolute;
  width: 3px;
  height: 56px;
  background-color: #ffffff;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform-origin: 15px 55px;
  animation: ${rotate} 1.2s linear infinite;
  opacity: ${(props) => props.opacity};
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg);
`;

// Loading text
const LoadingText = styled.div`
  font-size: 54px;
  font-weight: 600;
  letter-spacing: 1px;
`;

// Main Loading component
const NeonLoader = () => {
  // Create 12 lines for the spinner with different opacities and rotations
  const spinnerLines = [];
  for (let i = 0; i < 12; i++) {
    const rotation = i * 30; // 360 / 12 = 30 degrees between each line
    const opacity = 0.1 + i * 0.075; // Gradually increase opacity

    spinnerLines.push(
      <SpinnerLine
        key={i}
        rotation={rotation}
        opacity={opacity}
        style={{
          animationDelay: `${-1.2 + i * 0.1}s`, // Stagger the animation
        }}
      />
    );
  }

  return (
    <LoadingContainer>
      <SpinnerContainer>{spinnerLines}</SpinnerContainer>
      <LoadingText>Loading</LoadingText>
    </LoadingContainer>
  );
};

export default NeonLoader;
