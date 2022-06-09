import { useRef, useState } from "react";
import styled from "styled-components";
import Control from "./components/control";
import Progress from "./components/progress";
import Song from "./components/song";
import { songs } from "./data";

const PlayerContainer = styled.div`
  height: 500px;
  width: 400px;
  background: #e7e7e7;
  border-radius: 20px;
  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    width: 95vw;
  }
`;

function App() {
  // * check if playing
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // * store current song's index
  const [songIndex, setSongIndex] = useState<number>(0);

  // * reference for audio
  const music = useRef<HTMLAudioElement>(null);

  // * handling for play and pause
  const handleSong = () => {
    setIsPlaying((prevState) => {
      if (prevState) {
        music.current?.pause();
        return false;
      }

      music.current?.play();
      return true;
    });
  };

  // * function to play a song
  const playSong = () => {
    setTimeout(() => {
      setIsPlaying(true);
      music.current?.play();
    }, 500);
  };

  // * handling next song
  const handleNextSong = () => {
    setSongIndex((prevState) => {
      if (prevState >= songs.length - 1) {
        return 0;
      }

      return (prevState += 1);
    });
    playSong();
  };

  // * handling previous song
  const handlePrevSong = () => {
    setSongIndex((prevState) => {
      if (prevState <= 0) {
        return songs.length - 1;
      }

      return (prevState -= 1);
    });
    playSong();
  };

  return (
    <PlayerContainer>
      <Song song={songs[songIndex]} audioRef={music} />
      <Progress music={music} nextSong={handleNextSong} />
      <Control
        isPlay={isPlaying}
        handleSong={handleSong}
        handleNext={handleNextSong}
        handlePrev={handlePrevSong}
      />
    </PlayerContainer>
  );
}

export default App;
