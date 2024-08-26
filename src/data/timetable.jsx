// 라인업 오픈 전 커버 이미지
import timetable1700 from "../assets/images/timetable/timetable1700.png";
import timetable1820 from "../assets/images/timetable/timetable1820.png";
import timetable1930 from "../assets/images/timetable/timetable1930.png";
import timetable2000 from "../assets/images/timetable/timetable2000.png";
import timetable2030 from "../assets/images/timetable/timetable2030.png";

// 라인업 오픈 후 커버 이미지
import artist1700 from "../assets/images/timetable/timetable1700.png";
import artist1820 from "../assets/images/timetable/timetable1820.png";
import artist1930 from "../assets/images/timetable/timetable1930.png";
import artist2000 from "../assets/images/timetable/timetable2000.png";
import artist2030 from "../assets/images/timetable/timetable2030.png";

// 연예인 모달 이미지
import MCsobi from "../assets/images/timetable/arti_MCsobi.jpg";
import newjeansnim from "../assets/images/timetable/arti_newjeansnim.jpg";
import tripleS from "../assets/images/timetable/arti_tripleS.jpg";
import kwill from "../assets/images/timetable/arti_kwill.jpg";
import dynamicDuo from "../assets/images/timetable/arti_dynamicduo.jpg";

export const timetable = [
  {
    id: 1,
    name: "입장마감",
    time: "16:40",
    index: "",
    is_event: false,
    temp_cover: "",
    cover_image: "",
  },
  {
    id: 2,
    name: "수계식",
    time: "17:00",
    index: "",
    is_event: true,
    temp_cover: timetable1700,
    cover_image: artist1700,
  },
  {
    id: 3,
    name: "쉬는시간",
    time: "18:00",
    index: "",
    is_event: false,
    temp_cover: "",
    cover_image: "",
  },
  {
    id: 4,
    name: "공연",
    time: "18:20",
    index: "1부",
    is_event: true,
    temp_cover: timetable1820,
    cover_image: artist1820,
  },
  {
    id: 5,
    name: "쉬는시간",
    time: "19:20",
    index: "",
    is_event: false,
    temp_cover: "",
    cover_image: "",
  },
  {
    id: 6,
    name: "공연",
    time: "19:30",
    index: "2부",
    is_event: true,
    temp_cover: timetable1930,
    cover_image: artist1930,
  },
  {
    id: 7,
    name: "공연",
    time: "20:00",
    index: "2부",
    is_event: true,
    temp_cover: timetable2000,
    cover_image: artist2000,
  },
  {
    id: 8,
    name: "공연",
    time: "20:30",
    index: "2부",
    is_event: true,
    temp_cover: timetable2030,
    cover_image: artist2030,
  },
  {
    id: 9,
    name: "퇴장",
    time: "21:00",
    index: "",
    is_event: false,
    temp_cover: "",
    cover_image: "",
  },
];

export const lineup = [
  {
    id: 1,
    name: "MC 섭이",
    time: "18:20",
    etc: "흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다",
    music: "뭘까..",
    artist_image: MCsobi,
  },
  {
    id: 2,
    name: "뉴진스님",
    time: "18:20",
    etc: "흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다",
    music: "뭘까..",
    artist_image: newjeansnim,
  },
  {
    id: 3,
    name: "트리플에스",
    time: "19:30",
    etc: "흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다",
    music: "뭘까..",
    artist_image: tripleS,
  },
  {
    id: 4,
    name: "케이윌",
    time: "20:00",
    etc: "흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다",
    music: "뭘까..",
    artist_image: kwill,
  },
  {
    id: 5,
    name: "다이나믹 듀오",
    time: "20:30",
    etc: "흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다흥을 잃은 중생들이여 내가 왔도다",
    music: "뭘까..",
    artist_image: dynamicDuo,
  },
];
