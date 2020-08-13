import colobok from './img/1.jpg';
import ryaba from './img/2.jpg';
import repka from './img/3.jpg';
import pigs from './img/4.jpg';
import bears from './img/5.jpg';

export const data = [
  {
    "id": 1,
    "title": "Колобок",
    "authors": [
      {
        "authorID": 1,
        "authorName": "Иван",
        "authorSurname": "Иванов"
      }
    ],
    "pagesNum": 50,
    "publisher": "Глубинка",
    "yearPub": 1989,
    "yearSell": '2007-01-05',
    "ISBN": "5-9285-0281-8",
    "img": colobok
  },
  {
    "id": 2,
    "title": "Курочка Ряба",
    "authors": [
      {
        "authorID": 1,
        "authorName": "Федор",
        "authorSurname": "Федоров"
      }
    ],
    "pagesNum": 55,
    "publisher": "Глубинка New",
    "yearPub": 1992,
    "yearSell": '2007-02-05',
    "ISBN": "5-9285-0281-8",
    "img": ryaba
  },
  {
    "id": 3,
    "title": "Репка",
    "authors": [
      {
        "authorID": 1,
        "authorName": "Петр",
        "authorSurname": "Петров"
      }
    ],
    "pagesNum": 60,
    "publisher": "Старина",
    "yearPub": 1950,
    "yearSell": '2007-03-05',
    "ISBN": "5-9285-0281-8",
    "img": repka
  },
  {
    "id": 4,
    "title": "Три поросенка",
    "authors": [
      {
        "authorID": 1,
        "authorName": "Семен",
        "authorSurname": "Семенов"
      }
    ],
    "pagesNum": 65,
    "publisher": "Старина и Ко",
    "yearPub": 1960,
    "yearSell": '2007-10-07',
    "ISBN": "5-9285-0281-8",
    "img": pigs
  },
  {
    "id": 5,
    "title": "Маша и медведи",
    "authors": [
      {
        "authorID": 1,
        "authorName": "Михаил",
        "authorSurname": "Михайлов",
      },
      {
        "authorID": 2,
        "authorName": "Мария",
        "authorSurname": "Михайлова"
      },
    ],
    "pagesNum": 70,
    "yearPub": 2007,
    "yearSell": '2007-12-05',
    "img": bears,
  }
];