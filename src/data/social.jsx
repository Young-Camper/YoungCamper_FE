const mediaUrl = import.meta.env.VITE_MEDIA_URL


const socialData = [
  {
    "id" : 1,
    "name": "Youngcamp Instagram",
    "link": "https://www.instagram.com/youngcamp_dgu/",
    "image": `${mediaUrl}Home/InstaIcon.png`,
    "bgimage": `${mediaUrl}Home/Club/clubEmpty.png`
  },
  {
    "id" : 2,
    "name": "Youngcamp Youtube",
    "link": "https://www.dongguk.edu/main#none",
    "image": `${mediaUrl}Home/YoutubeIcon.png`,
    "bgimage": `${mediaUrl}Home/Club/clubEmpty.png`
  },
  {
    "id" : 3,
    "name": "Dongguk Univ Instagram",
    "link": "https://www.instagram.com/dongguk_university/",
    "image": `${mediaUrl}Home/InstaIcon.png`,
    "bgimage": `${mediaUrl}Home/Club/clubEmpty.png`
  },
  {
    "id" : 4,
    "name": "Dongguk Univ Website",
    "link": "https://www.dongguk.edu/main#none",
    "image": `${mediaUrl}Home/WebIcon.png`,
    "bgimage": `${mediaUrl}Home/Club/clubEmpty.png`
  }
]

export default socialData;