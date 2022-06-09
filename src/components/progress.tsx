import { RefObject, useEffect, useRef, useState, MouseEvent } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px;
  height: 4px;
  width: 90%;
`;

const ProgressBar = styled.div`
  background: #242323;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
`;

const DurationWrapper = styled.div`
  position: relative;
  top: -25px;
  display: flex;
  justify-content: space-between;
`;

export default function Progress({
  music,
  nextSong,
}: {
  music: RefObject<HTMLAudioElement>;
  nextSong: () => void;
}) {
  // * progress
  const [progress, setProgress] = useState<{
    currentTime: string;
    duration: string;
    percent: number;
  }>({ currentTime: "00:00", duration: "00:00", percent: 0 });

  // * ref progress bar
  const bar = useRef<HTMLDivElement>(null);

  // * updating music
  useEffect(() => {
    if (music.current) {
      music.current.ontimeupdate = (e: Event) => {
        const currentTime = Math.floor(music.current?.currentTime!);
        const duration = Math.floor(music.current?.duration!);

        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds: string | number = Math.floor(duration % 60);
        if (durationSeconds < 10) {
          durationSeconds = `0${durationSeconds}`;
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds: string | number = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
          currentSeconds = `0${currentSeconds}`;
        }

        setProgress({
          currentTime: `${currentMinutes}:${currentSeconds}`,
          duration: durationSeconds
            ? `${durationMinutes}:${durationSeconds}`
            : "00:00",
          percent: (currentTime / duration) * 100,
        });
      };

      music.current.onended = (e: Event) => {
        nextSong();
      };
    }
  }, [music, nextSong]);

  // * handling progress bar
  const handleProgressBar = (e: MouseEvent<HTMLDivElement>) => {
    if (music.current) {
      const width = bar.current?.clientWidth!;
      const clickX = e.nativeEvent.offsetX;
      const { duration } = music.current;
      music.current.currentTime = (clickX / width) * duration;
    }
  };

  return (
    <ProgressContainer ref={bar} onClick={handleProgressBar}>
      <ProgressBar style={{ width: `${progress.percent}%` }} />
      <DurationWrapper>
        <span>{progress.currentTime}</span>
        <span>{progress.duration}</span>
      </DurationWrapper>
    </ProgressContainer>
  );
}
