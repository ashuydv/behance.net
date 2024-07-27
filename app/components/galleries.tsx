import React from 'react';
import Card from './card'; // Make sure this import matches your file name

type CardData = {
  image?: string;
  videoUrl?: string;
  link: string;
  title: string;
  views: string;
  likes: string;
  creators: string;
  platforms: string;
};

type Props = {};

const Gallery = (props: Props) => {
  const arr: CardData[] = [
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/b44c13199421009.Y3JvcCwxNDAwLDEwOTUsMCw0MjY.png",
      "link": "https://www.behance.net/gallery/199421009/AGES?tracking_source=search_projects|fine+art&l=0",
      "title": "AGES",
      "views": "123",
      "likes": "226",
      "creators": "",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/ab3241200386929.Y3JvcCwxMjAwLDkzOCwwLDIz.png",
      "link": "https://www.behance.net/gallery/200386929/This-is-a-dream-state?tracking_source=search_projects|fine+art&l=1",
      "title": "This is a dream state",
      "views": "249",
      "likes": "1.5k",
      "creators": "Katarina Galić",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/8525f7202735315.Y3JvcCw2MzM2LDQ5NTUsMCwzMjMw.jpg",
      "link": "https://www.behance.net/gallery/202735315/Portrait-Fine-Art-Fashion-Retouch?tracking_source=search_projects|fine+art&l=2",
      "title": "Portrait / Fine Art / Fashion / Retouch",
      "views": "171",
      "likes": "2k",
      "creators": "Maryia Buhai",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/a4fd7d201934491.Y3JvcCwyMjU5LDE3NjcsMTIzLDA.jpg",
      "link": "https://www.behance.net/gallery/201934491/DOYLE?tracking_source=search_projects|fine+art&l=3",
      "title": "DOYLE",
      "views": "209",
      "likes": "1.4k",
      "creators": "",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/80216d202083801.Y3JvcCwxMjc4LDEwMDAsMTEwLDA.jpg",
      "link": "https://www.behance.net/gallery/202083801/Zurich-Traces-of-Light?tracking_source=search_projects|fine+art&l=4",
      "title": "Zurich - Traces of Light",
      "views": "198",
      "likes": "1.4k",
      "creators": "Lothar Groene",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/00cc20196973551.Y3JvcCw3OTIsNjIwLDY0LDk.png",
      "link": "https://www.behance.net/gallery/196973551/Fine-Liner-Brushes-Patterns-Procreate?tracking_source=search_projects|fine+art&l=5",
      "title": "Fine Liner Brushes & Patterns - Procreate",
      "views": "269",
      "likes": "2.1k",
      "creators": "Patricia Roberts",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/bb6ceb202171987.Y3JvcCw0NzI5LDM2OTgsMCw5NzE.jpg",
      "link": "https://www.behance.net/gallery/202171987/In-light-setting?tracking_source=search_projects|fine+art&l=6",
      "title": "In light setting.",
      "views": "52",
      "likes": "108",
      "creators": "Joachim Weitz",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/0a81be201726307.Y3JvcCwzNjAwLDI4MTUsMCw0Mjc.jpg",
      "link": "https://www.behance.net/gallery/201726307/Midsummer-crown?tracking_source=search_projects|fine+art&l=7",
      "title": "Midsummer crown",
      "views": "158",
      "likes": "530",
      "creators": "",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/cc6b7f203302657.Y3JvcCwzMDA0LDIzNDksMCwzODY.png",
      "link": "https://www.behance.net/gallery/203302657/Have-faith-in-myself?tracking_source=search_projects|fine+art&l=8",
      "title": "Have faith in myself",
      "views": "73",
      "likes": "191",
      "creators": "Katarina Galić",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/a34716201440213.Y3JvcCwxMTgzLDkyNiwyMTMsMA.jpg",
      "link": "https://www.behance.net/gallery/201440213/Merging-Worlds?tracking_source=search_projects|fine+art&l=9",
      "title": "Merging Worlds",
      "views": "254",
      "likes": "5.6k",
      "creators": "Navid Baraty",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/17dad5203102321.Y3JvcCwzNzYwLDI5NDEsNzM1LDA.jpg",
      "link": "https://www.behance.net/gallery/203102321/The-Noise-and-Solitude-of-the-City?tracking_source=search_projects|fine+art&l=10",
      "title": "The Noise and Solitude of the City",
      "views": "36",
      "likes": "127",
      "creators": "Taka Hiro",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/fa593d154794757.Y3JvcCwyMzUxLDE4MzksMzE0LDk4.jpg",
      "link": "https://www.behance.net/gallery/154794757/Jarrones?tracking_source=search_projects|fine+art&l=11",
      "title": "Jarrones",
      "views": "984",
      "likes": "8.4k",
      "creators": "",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/81e1eb201564889.Y3JvcCwxNzQ2LDEzNjYsMTUxLDA.jpg",
      "link": "https://www.behance.net/gallery/201564889/The-Tree?tracking_source=search_projects|fine+art&l=12",
      "title": "The Tree.",
      "views": "61",
      "likes": "214",
      "creators": "Renato Pozzoli",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/2ac253202632423.Y3JvcCwxNDAwLDEwOTUsMCwyMA.jpg",
      "link": "https://www.behance.net/gallery/202632423/Capital?tracking_source=search_projects|fine+art&l=13",
      "title": "Capital",
      "views": "14",
      "likes": "50",
      "creators": "Serdar Şencan",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/f5c0a1202819919.Y3JvcCw5ODYsNzcxLDEwNywyNTM.jpg",
      "link": "https://www.behance.net/gallery/202819919/My-Art?tracking_source=search_projects|fine+art&l=14",
      "title": "My Art",
      "views": "27",
      "likes": "96",
      "creators": "Liza Kara",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/fd65fd200581745.Y3JvcCwzMzgxLDI2NDUsMjc2LDA.png",
      "link": "https://www.behance.net/gallery/200581745/D-R-A-U-M-U-R?tracking_source=search_projects|fine+art&l=15",
      "title": "D R A U M U R",
      "views": "392",
      "likes": "3.4k",
      "creators": "Brynjar Agustsson",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/8568d1201906749.Y3JvcCw1MDAwLDM5MTAsMCw1NDQ.jpg",
      "link": "https://www.behance.net/gallery/201906749/CREAM-TRUCK-FINE-ART-PRINT?tracking_source=search_projects|fine+art&l=16",
      "title": "C.R.E.A.M TRUCK FINE ART PRINT",
      "views": "207",
      "likes": "1.1k",
      "creators": "CLOG TWO",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/084209200212187.Y3JvcCwxOTIzLDE1MDQsMzgsMTIz.jpg",
      "link": "https://www.behance.net/gallery/200212187/DROOL-kaleidoscopic-world-posters?tracking_source=search_projects|fine+art&l=17",
      "title": "DROOL kaleidoscopic world posters",
      "views": "331",
      "likes": "2k",
      "creators": "",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/9fa3fc148962961.Y3JvcCwyNTMxLDE5ODAsMjQ0LDcxNA.jpg",
      "link": "https://www.behance.net/gallery/148962961/My-paintings-Vol1?tracking_source=search_projects|fine+art&l=18",
      "title": "My paintings Vol.1",
      "views": "585",
      "likes": "4.9k",
      "creators": "Jose Elgueta",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/e6bacc198901463.6687f6ad18ed6.jpg",
      "link": "https://www.behance.net/gallery/198901463/-2024?tracking_source=search_projects|fine+art&l=19",
      "title": "花 · 2024",
      "views": "86",
      "likes": "1.1k",
      "creators": "Aya C",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/92c986200384541.Y3JvcCwxNzQ1LDEzNjUsMjYzLDA.jpg",
      "link": "https://www.behance.net/gallery/200384541/THE-GUARDIAN?tracking_source=search_projects|fine+art&l=20",
      "title": "THE GUARDIAN",
      "views": "103",
      "likes": "893",
      "creators": "Kristopher Ho",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/1ca936201964461.Y3JvcCwzNDU2LDI3MDMsMCwxNzE.jpg",
      "link": "https://www.behance.net/gallery/201964461/Infrascapes-nature-colors?tracking_source=search_projects|fine+art&l=21",
      "title": "Infrascapes nature colors",
      "views": "34",
      "likes": "73",
      "creators": "David Cordero",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/2248e6191428845.65cb7da852753.png",
      "link": "https://www.behance.net/gallery/191428845/Geometric-Ballet-or-Freeform-Improvisation?tracking_source=search_projects|fine+art&l=22",
      "title": "Geometric Ballet or Freeform Improvisation",
      "views": "291",
      "likes": "2k",
      "creators": "Katarina Galić",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/ee6e3b197620989.Y3JvcCw0MDYxLDMxNzYsMCw5NTQ.jpg",
      "link": "https://www.behance.net/gallery/197620989/Frequent-dystopia?tracking_source=search_projects|fine+art&l=23",
      "title": "Frequent dystopia",
      "views": "355",
      "likes": "7.3k",
      "creators": "Bade Fuwa",
      "platforms": "Behance"
    },
    {
      "image": "https://mir-s3-cdn-cf.behance.net/projects/404/bd3bdf203222443.Y3JvcCwxMzUwLDEwNTUsMCwxNTM.jpg",
      "link": "https://www.behance.net/gallery/203222443/abstract_6-2024?tracking_source=search_projects|fine+art&l=24",
      "title": "abstract_6 / 2024",
      "views": "16",
      "likes": "27",
      "creators": "Peter Toth",
      "platforms": "Behance"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15762808/file/original-88a555aac3b84ffc373601f5f144d820.jpg?resize=400x300&vertical=center",
      "title": "Thou damned whale",
      "link": "https://dribbble.com/AnnSophieDeSteur",
      "creators": "Ann-Sophie De Steur",
      "likes": "62",
      "views": "4.2k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15716747/file/original-ab3cda97aa0e53c74585ebb8ead0ff58.png?crop=400x286-1759x1305&resize=400x300&vertical=center",
      "title": "😎😎😎",
      "link": "https://dribbble.com/sebastianabboud",
      "creators": "Sebastian Abboud",
      "likes": "70",
      "views": "14.5k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15762718/file/still-5e46a5573d4aebc536baf267797fbe2d.png?resize=400x300&vertical=center",
      "title": "3D Explainer for Ami (Sound on 🔊)",
      "link": "https://dribbble.com/vedroxy",
      "creators": "Vedant Hegde",
      "likes": "171",
      "views": "15.9k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15707418/file/original-6c3985727cbf48976f0f17f82f357ca5.jpg?crop=0x0-1600x1200&resize=400x300&vertical=center",
      "title": "Grundens: Full Preview",
      "link": "https://dribbble.com/Skillinedesignco",
      "creators": "Skilline Design Co.",
      "likes": "94",
      "views": "13.7k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15646228/file/original-642cfd50529305278b021b9a228c56d2.jpg?resize=400x300&vertical=center",
      "title": "From ancient athletes to modern marvels",
      "link": "https://dribbble.com/studioMUTI",
      "creators": "MUTI",
      "likes": "243",
      "views": "41.4k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15718213/file/original-3acb18ee42f14423fb2639c08683db12.png?resize=400x300&vertical=center",
      "title": "MADE logotype - 3 ways",
      "link": "https://dribbble.com/bhurst",
      "creators": "brian hurst",
      "likes": "58",
      "views": "25.7k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15717801/file/original-298b7d7b0fb99c4dce46a59bdc4ec6b8.jpg?resize=400x300&vertical=center",
      "title": "Logo design ideas for a dress house fashion",
      "link": "https://dribbble.com/salihkucukaga",
      "creators": "Garage Design Studio",
      "likes": "95",
      "views": "20.5k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15710175/file/still-7dde633212d3975c258af655e200cd23.png?resize=400x300&vertical=center",
      "title": "Multiple Alarm",
      "link": "https://dribbble.com/GeexArts",
      "creators": "Geex Arts",
      "likes": "263",
      "views": "26.5k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15736776/file/original-1e2bc0d00c31d9b431a0b76e6bc4b6f3.jpg?resize=400x300&vertical=center",
      "title": "AKQA Perspectives",
      "link": "https://dribbble.com/raydaklam",
      "creators": "Ray Dak Lam",
      "likes": "72",
      "views": "8.3k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15768626/file/original-054741457f8a2e2ae67481ee1f8f4120.jpg?crop=0x0-2534x1900&resize=400x300&vertical=center",
      "title": "Cool Story Bro",
      "link": "https://dribbble.com/mateusz-witczak",
      "creators": "Mateusz Witczak",
      "likes": "58",
      "views": "4.1k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15612583/file/original-3b0d2cb8a99e88a92c72e2711baf9421.jpg?resize=400x300&vertical=center",
      "title": "The National - London, UK Poster",
      "link": "https://dribbble.com/DKNG",
      "creators": "DKNG",
      "likes": "267",
      "views": "39.2k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15775331/file/original-f129a419d3b64efdf769146e0cf8da34.jpg?resize=400x300&vertical=center",
      "title": "Illustration for Outside Voices",
      "link": "https://dribbble.com/urancd",
      "creators": "Uran Duo",
      "likes": "57",
      "views": "4.9k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15704591/file/original-001aaed8370e11233203da98e7723bd3.png?resize=400x300&vertical=center",
      "title": "The Creative Watch",
      "link": "https://dribbble.com/thecreativepain",
      "creators": "Tyler Pate",
      "likes": "86",
      "views": "23.4k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15735158/file/original-acda58fed90877d13d04637c82b77c3e.jpg?resize=400x300&vertical=center",
      "title": "Michael Jordan",
      "link": "https://dribbble.com/Benoit_Drigny",
      "creators": "Benoit Drigny",
      "likes": "73",
      "views": "14.8k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15567043/file/original-2cd9a776d7d745282eb1e3e21e95f710.png?resize=400x300&vertical=center",
      "title": "Dinosaur",
      "link": "https://dribbble.com/Folio",
      "creators": "Folio Illustration Agency",
      "likes": "160",
      "views": "23.6k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15740788/file/original-9d6d44506226a9bb9d754ccb44466137.png?resize=400x300&vertical=center",
      "title": "Datsun vibes",
      "link": "https://dribbble.com/thecreativepain",
      "creators": "Tyler Pate",
      "likes": "129",
      "views": "9.8k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15715037/file/original-ac0c08931e4a01f8c11e1a5247acc543.jpg?resize=400x300&vertical=center",
      "title": "Overprint Grids",
      "link": "https://dribbble.com/rikcat",
      "creators": "Rik Catlow",
      "likes": "65",
      "views": "15.8k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15390835/file/original-89bfa095fa4764a5a630509ba7e03a78.jpg?resize=400x300&vertical=center",
      "title": "The Tamed Tiger Label Illustration",
      "link": "https://dribbble.com/coric_design",
      "creators": "Coric Design",
      "likes": "92",
      "views": "18.9k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15784920/file/original-ed41407f20f04ab291e585de0c9baf7d.png?resize=400x300&vertical=center",
      "title": "Dragönsteel Alts",
      "link": "https://dribbble.com/simplebits",
      "creators": "Dan Cederholm",
      "likes": "63",
      "views": "6.2k",
      "platforms": "Dribbble"
    },
    {
      "image": "https://cdn.dribbble.com/userupload/15636154/file/original-09eb0fec455d35cabf5b1b2fe2906369.jpg?resize=400x300&vertical=center",
      "title": "Color Lush 'Revisit' (2024)",
      "link": "https://dribbble.com/pavlov",
      "creators": "Pavlov Visuals",
      "likes": "131",
      "views": "27k",
      "platforms": "Dribbble"
    }
  ]

  return (
    <section className="text-gray-600 border body-font">
      <div className="px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {arr.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
