import { LegacyRef } from "react";
import styled from "styled-components";
import { SongType } from "../data";

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  top: -50px;
  left: 50px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    left: 29px;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Artist = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin: 5px 0 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export default function Song({
  song,
  audioRef,
}: {
  song: SongType;
  audioRef: LegacyRef<HTMLAudioElement>;
}) {
  return (
    <>
      <ImageContainer>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/${song.id}.jpg`}
          alt={song.title}
        />
      </ImageContainer>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
      <audio
        src={`${process.env.PUBLIC_URL}/assets/music/${song.id}.mp3`}
        ref={audioRef}
      />
    </>
  );
}
