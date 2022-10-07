import { v4 as uuidv4 } from 'uuid';

const continentsData = [
  {
    id: uuidv4(),
    name: 'Africa',
    image: '/images/africa.svg',
    counNum: 54,
  },
  {
    id: uuidv4(),
    name: 'Asia',
    image: './images/asia.svg',
    counNum: 48,
  },
  {
    id: uuidv4(),
    name: 'Europe',
    counNum: 44,
    image: '/images/europe.svg',
  },
  {
    id: uuidv4(),
    name: 'Oceania',
    counNum: 14,
    image: '/images/oceania.svg',
  },
  {
    id: uuidv4(),
    name: 'North America',
    counNum: 23,
    image: '/images/north-america.svg',
  },
  {
    id: uuidv4(),
    name: 'South America',
    counNum: 12,
    image: '/images/south-america.svg',
  },
  {
    id: uuidv4(),
    name: 'Antarctica',
    counNum: 0,
    image: '/images/antarctica.svg',
  },
];

export default continentsData;
