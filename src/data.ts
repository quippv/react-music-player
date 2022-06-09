export type SongType = {
  id: string;
  title: string;
  artist: string;
  cover?: string;
  music?: string;
};

export const songs: Array<SongType> = [
  {
    id: "music-1",
    title: "We Are One",
    artist: "Vexento",
  },
  {
    id: "music-2",
    title: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    id: "music-3",
    title: "Seven Nation Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    id: "music-4",
    title: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    id: "music-5",
    title: "Front Row (Remix)",
    artist: "Metric/Jacinto Design",
  },
];
