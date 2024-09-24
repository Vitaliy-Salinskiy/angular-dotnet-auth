import { IBasicSelect, ITravelCard } from '../interfaces';

export const headerLinks = [
  {
    iconName: 'ionAirplane',
    label: 'Find Flight',
    path: '/flights',
  },
  {
    iconName: 'ionBed',
    label: 'Find Stays',
    path: '/stays',
  },
];

export const accountLinks = [
  {
    iconName: 'ionPersonSharp',
    label: 'My Profile',
  },
  {
    iconName: 'ionCard',
    label: 'Payments',
  },
  {
    iconName: 'ionSettings',
    label: 'Setting',
  },
  {
    iconName: 'ionHelpBuoy',
    label: 'Support',
  },
  {
    iconName: 'ionLogOut',
    label: 'Log Out',
    isLogout: true,
  },
];

export const footerData = [
  {
    title: 'Our Destinations',
    items: ['Canada', 'Alaska', 'France', 'Iceland'],
  },
  {
    title: 'Our Activities',
    items: [
      'Northern Lights',
      'Cruising & sailing',
      'Multi-activities',
      'Kayaking',
    ],
  },
  {
    title: 'Travel Blogs',
    items: [
      'Bali Travel Guide',
      'Sri Lanka Travel Guide',
      'Peru Travel Guide',
      'Bali Travel Guide',
    ],
  },
  {
    title: 'About Us',
    items: ['Our Story', 'Work with us'],
  },
  {
    title: 'Contact Us',
    items: ['Our Story', 'Work with us'],
  },
];

export const socialLinks = [
  {
    iconName: 'ionLogoFacebook',
    path: 'https://www.facebook.com',
  },
  {
    iconName: 'ionLogoTwitter',
    path: 'https://www.twitter.com',
  },
  {
    iconName: 'ionLogoYoutube',
    path: 'https://www.youtube.com',
  },
  {
    iconName: 'ionLogoInstagram',
    path: 'https://www.instagram.com',
  },
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const roomsAndGuestsData: IBasicSelect<string>[] = [
  { value: '1', label: '1 Room, 1 Guest' },
  { value: '2', label: '1 Rooms, 2 Guests' },
  { value: '3', label: '2 Rooms, 2 Guests' },
  { value: '4', label: '2 Rooms, 3 Guests' },
  { value: '5', label: '3 Rooms, 4 Guests' },
  { value: '6', label: '4 Rooms, 5 Guests' },
  { value: '7', label: '5 Rooms, 5 Guests' },
];

export const recentSearches = [
  {
    id: 1,
    image: 'assets/turkey.png',
    title: 'Istanbul, Turkey',
    places: 325,
  },
  {
    id: 2,
    image: 'assets/maldives.png',
    title: 'Malé, Maldives',
    places: 325,
  },
  {
    id: 3,
    image: 'assets/turkey.png',
    title: 'Istanbul, Turkey',
    places: 325,
  },
  {
    id: 4,
    image: 'assets/maldives.png',
    title: 'Malé, Maldives',
    places: 325,
  },
];

export const travelData: ITravelCard[] = [
  {
    id: 1,
    title: 'Melbourne',
    description: 'An amazing journey',
    price: 700,
    image: 'assets/travel-1.png',
  },
  {
    id: 2,
    title: 'London',
    description: 'London eye adventure',
    price: 350,
    image: 'assets/travel-2.png',
  },
  {
    id: 3,
    title: 'Melbourne',
    description: 'An amazing journey',
    price: 700,
    image: 'assets/travel-1.png',
  },
  {
    id: 4,
    title: 'London',
    description: 'London eye adventure',
    price: 350,
    image: 'assets/travel-2.png',
  },
];
