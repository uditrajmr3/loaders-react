import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 var(--primary-hover), 0 2px 0 var(--primary-hover), 0 3px 0 var(--primary-hover), 0 4px 0 var(--primary-hover),
      0 5px 0 var(--primary-hover), 0 6px 0 var(--primary-hover), 0 7px 0 var(--primary-hover), 0 8px 0 var(--primary-hover), 0 9px 0 var(--primary-hover),
      0 60px 30px rgba(100, 100, 100, 0.3);
  }
`;

const LoaderContainer = styled.div`
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const LoadingText = styled.h1`
  display: flex;
`;

const LoadingSpan = styled.span`
  position: relative;
  font-family: "Lato", sans-serif;
  top: 20px;
  color: var(--primary);
  display: inline-block;
  font-size: 5rem;
  text-shadow: 0 1px 0 var(--primary-hover), 0 2px 0 var(--primary-hover),
    0 3px 0 var(--primary-hover), 0 4px 0 var(--primary-hover),
    0 5px 0 var(--primary-hover), 0 6px 0 transparent, 0 7px 0 transparent,
    0 8px 0 transparent, 0 9px 0 transparent,
    0 10px 10px rgba(100, 100, 100, 0.5);
  animation: ${bounce} 0.4s ease infinite alternate;
  animation-delay: ${(props) => props.$delay}s;
`;

const Loader = () => {
  const loadingText = "LOADING";

  return (
    <LoaderContainer>
      <LoadingText>
        {loadingText.split("").map((letter, index) => (
          <LoadingSpan key={index} $delay={index * 0.1}>
            {letter}
          </LoadingSpan>
        ))}
      </LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
