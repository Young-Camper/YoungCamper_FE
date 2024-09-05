const mediaUrl = import.meta.env.VITE_MEDIA_URL;

export const timetable = [
  {
    id: 1,
    name: "수계습의",
    time: "17:00",
    index: "",
    is_event: false,
    cover_image: "",
  },
  {
    id: 2,
    name: "수계식",
    time: "17:30",
    index: "",
    is_event: false,
    cover_image: "",
  },
  {
    id: 3,
    name: "쉬는시간",
    time: "18:00",
    index: "",
    is_event: false,
    cover_image: "",
  },
  {
    id: 4,
    name: "MC 섭이",
    time: "18:20~",
    index: "1부",
    is_event: true,
    cover_image: `${mediaUrl}Performance/arti_MCsobi.jpg`,
  },
  {
    id: 5,
    name: "뉴진스님",
    time: "~19:05",
    index: "1부",
    is_event: true,
    cover_image: `${mediaUrl}Performance/arti_newjeansnim.jpg`,
  },
  {
    id: 6,
    name: "쉬는시간",
    time: "19:05",
    index: "",
    is_event: false,
    cover_image: "",
  },
  {
    id: 7,
    name: "디제잉 공연",
    time: "19:15",
    index: "",
    is_event: false,
    cover_image: "",
  },
  {
    id: 8,
    name: "트리플에스",
    time: "19:30",
    index: "2부",
    is_event: true,
    cover_image: `${mediaUrl}Performance/arti_tripleS.jpg`,
  },
  {
    id: 9,
    name: "케이윌",
    time: "20:00",
    index: "2부",
    is_event: true,
    cover_image: `${mediaUrl}Performance/arti_kwill.jpg`,
  },
  {
    id: 10,
    name: "다이나믹 듀오",
    time: "20:30",
    index: "2부",
    is_event: true,
    cover_image: `${mediaUrl}Performance/arti_dynamicduo.jpg`,
  },
  {
    id: 11,
    name: "퇴장",
    time: "21:00",
    index: "",
    is_event: false,
    cover_image: "",
  },
];

export const lineup = [
  {
    id: 1,
    name: "MC 섭이",
    time: "18:20~",
    music: [],
    artist_image: `${mediaUrl}Performance/arti_MCsobi.jpg`,
  },
  {
    id: 2,
    name: "뉴진스님",
    time: "~19:05",
    music: [],
    artist_image: `${mediaUrl}Performance/arti_newjeansnim.jpg`,
  },
  {
    id: 3,
    name: "트리플에스",
    time: "19:30",
    music: [
      {
        title: "Rising",
        youtubeURL: "https://www.youtube.com/watch?v=3TQd2ahq6oU",
      },
      {
        title: "Girls Never Die",
        youtubeURL: "https://www.youtube.com/watch?v=2tda_TCjz8w",
      },
    ],
    artist_image: `${mediaUrl}Performance/arti_tripleS.jpg`,
  },
  {
    id: 4,
    name: "케이윌",
    time: "20:00",
    music: [
      {
        title: "내게 어울릴 이별 노래가 없어",
        youtubeURL: "https://www.youtube.com/watch?v=JZ9ysYY-qqI",
      },
      {
        title: "Love Blossom",
        youtubeURL: "https://www.youtube.com/watch?v=iRGOb6aKcgw",
      },
    ],
    artist_image: `${mediaUrl}Performance/arti_kwill.jpg`,
  },
  {
    id: 5,
    name: "다이나믹 듀오",
    time: "20:30",
    music: [
      // {
      //   title: "고백",
      //   youtubeURL: "https://www.youtube.com/watch?v=k6CBMCI07WY",
      // },
      // {
      //   title: "불꽃놀이",
      //   youtubeURL: "https://www.youtube.com/watch?v=Yb0nyLIfqf8",
      // },
      {
        title: "거기서 거기",
        youtubeURL: "https://www.youtube.com/watch?v=Fs_p7BHfzO0",
      },
      {
        title: "죽일놈",
        youtubeURL: "https://www.youtube.com/watch?v=CqBAVQOkui0",
      },
    ],
    artist_image: `${mediaUrl}Performance/arti_dynamicduo.jpg`,
  },
];
