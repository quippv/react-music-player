import styled from "styled-components";

const ControlContainer = styled.div`
  position: relative;
  top: -15px;
  left: 120px;
  width: 200px;

  i {
    font-size: 30px;
    color: rgb(129, 129, 129);
    margin-right: 30px;
    cursor: pointer;
    user-select: none;

    &:hover {
      filter: brightness(80%);
    }

    &.main-button {
      font-size: 40px;
      position: relative;
      top: 3px;
    }
  }

  @media (max-width: 480px) {
    top: -10px;
    left: 100px;
  }
`;

export default function Control({
  isPlay,
  handleSong,
  handleNext,
  handlePrev,
}: {
  isPlay: boolean;
  handleSong: () => void;
  handleNext: () => void;
  handlePrev: () => void;
}) {
  return (
    <ControlContainer>
      <i className="fas fa-backward" title="Previous" onClick={handlePrev} />
      <i
        className={`fas fa-${isPlay ? "pause" : "play"} main-button`}
        title={isPlay ? "Pause" : "Play"}
        onClick={handleSong}
      />
      <i className="fas fa-forward" title="Next" onClick={handleNext} />
    </ControlContainer>
  );
}
