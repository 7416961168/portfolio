import tour1 from './images/tour1.jpg';
import tour2 from './images/tour2.jpg';
import tour3 from './images/tour3.jpg';
import tour4 from './images/tour4.jpg';
import tour5 from "./images/tour5.jpg";

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'With Less cost round the world,save your money..!!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Have a great enjoyment..!!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'By tourism we can feel free from our regular tensions',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Kerala',
    info: ` Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world.`,
    location: 'Kerala',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'USA',
    info: ` Being one of the most important and developed countries in today's world, it has a huge number of tourists visiting each year. From pristine and beautiful beaches to a rich and natural landscape of mountains and forests, the USA is one of the most beautiful and fascinating countries to explore.`,
    location: 'USA',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title:'Sri Lanka',
    info: `Sri Lanka is well known for its rich Buddhist culture as well as other religions. Being a religious country, Sri Lanka has many places with religious and historic significance, which attract tourists from all over the world.`,
    location: 'Sri Lanka',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'Hyderbad',
    info: ` Hyderabad is the capital and largest city of the South Indian state of Telangana. It was ruled by the Qutub Shahis, Mughals and the Nizams which shaped its history. The city is noted for its monuments which includes the masterpiece of Charminar and the fort of Golconda.`,
    location: 'Hyderbad',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'december 5th, 2022',
    title: 'Agra',
    info: `It is famous for its Mughal architecture and for being home to one of the Seven Wonders of the World, the Taj Mahal - a monument of incredible elegance and architectural perfection`,
    location: 'New Delhi',
    duration: 20,
    cost: 4600,
  },
];
