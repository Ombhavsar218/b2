import type { WishMessage } from '../types';

export const primaryBirthdayMessage = {
  heading: "HAPPY BIRTHDAY.",
  subheading: "TO MY FAVOURITE HUMAN IN THIS UNIVERSE.",
  letter: [
    "Happy Birthday, Brother!",
    "I hope this year brings you happiness, success, new opportunities, and everything you've been dreaming about.",
    "I hope you get to visit places you've always wanted to see, do things that make you happy, and create memories you'll never forget.",
    "Thank you for all the laughs, the chaos, the memories, and for simply being you.",
    "No matter how big this universe is or where life takes us, you'll always be an important part of mine.",
    "Here's to another year of adventures, happiness, and making the most of life.",
    "Happy Birthday!"
  ],
  surpriseMessage: {
    title: "A Little Something From the Heart",
    subtitle: "Just between us...",
    body: [
      "If you're reading this, I wanted to remind you how proud I am of the person you are becoming.",
      "Through every bump in the road, every wild idea, and every late night conversation, you've remained genuine, kind, and hilariously yourself.",
      "May this next lap around the sun bring you closer to that dream garage, unforgettable road trips, and boundless joy.",
      "Always in your corner, through every chapter of this galaxy."
    ],
    photo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    caption: "Brothers through every storm and every sunset."
  }
};

export const starWishes: WishMessage[] = [
  {
    id: "wish-1",
    author: "Mom & Dad",
    relationship: "Parents",
    message: "Watching you grow into the incredible, kind-hearted, driven man you are today is our greatest joy. May all your dreams take flight!",
    starColor: "#E8D5A5"
  },
  {
    id: "wish-2",
    author: "Your Best Friend",
    relationship: "Partner in Crime",
    message: "To the only guy who can turn a 10-minute gas stop into a 2-hour comedy show. Happy Birthday brother, keep living life in the fast lane!",
    starColor: "#B9A9FF"
  },
  {
    id: "wish-3",
    author: "Grandma",
    relationship: "Family",
    message: "May your year be blessed with health, abundant smiles, warm laughter, and delicious home-cooked feasts whenever you visit.",
    starColor: "#B9D9FF"
  },
  {
    id: "wish-4",
    author: "The Road Trip Crew",
    relationship: "Friends",
    message: "Here's to the next cross-country adventure, blasting your favorite playlists, and discovering hidden diners at midnight!",
    starColor: "#E8D5A5"
  }
];

export const secretGalaxyContent = {
  heading: "YOU FOUND A LITTLE SOMETHING.",
  subtitle: "Some things are meant just for you.",
  confessionTitle: "Top Secret Sibling Confessions",
  confessions: [
    {
      title: "The Broken Lamp Mystery (2014)",
      text: "Yes, it was actually me who kicked the soccer ball indoors, but you took the blame like a true legend. I owe you forever."
    },
    {
      title: "The Missing Hoodie",
      text: "I didn't 'lose' your favorite oversized hoodie—I just claimed diplomatic ownership because it's the coziest thing ever."
    },
    {
      title: "The Best Co-Pilot Ever",
      text: "Seriously though, no one else has your taste in music, your patience when we miss an exit, or your ability to make any boring day an adventure."
    }
  ],
  personalNote: "No matter how many stars exist across all galaxies, having you as my brother is the greatest cosmic stroke of luck. Keep shining bright."
};
