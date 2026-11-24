import type { MemoryItem, DreamCar } from '../types';

export const siteData = {
  brotherName: "Bro", // Brother's name

  // Page 1: Home
  home: {
    tagline: "IN A UNIVERSE FULL OF STARS...",
    mainHeading: "THERE'S ONLY ONE YOU.",
    birthdayLine: "HAPPY BIRTHDAY,",
    shortMessage: "Today, the universe celebrates you.",
    buttonText: "LET'S BEGIN",
    bgImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=2000&q=85",
  },

  // Page 2: A Message For You
  message: {
    heading: "YOU DESERVE YOUR OWN UNIVERSE OF HAPPINESS.",
    paragraphs: [
      "May your days be filled with happiness, your dreams find their way to reality, and your life be filled with moments worth remembering.",
      "May you always find reasons to smile, courage to chase what you want, and people who make every journey worthwhile.",
      "Keep dreaming big. Keep being yourself. And never forget how special you are."
    ],
    buttonText: "NEXT",
    bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
  },

  // Page 3: Our Memories (ONLY page with photos of us together)
  memories: {
    heading: "OUR LITTLE CORNER OF THE UNIVERSE.",
    subtitle: "Some memories are too special to ever fade.",
    items: [
      {
        id: "mem-1",
        image: "/b1.jpeg",
        caption: "One of those moments we'll always remember.",
        date: "Summer Road Trip",
        rotation: -2,
      },
      {
        id: "mem-2",
        image: "/b2.jpeg",
        caption: "Nothing special was happening. That's what made it special.",
        date: "Sunday Afternoon",
        rotation: 1.5,
      },
      {
        id: "mem-3",
        image: "/b5.jpeg",
        caption: "Another memory added to our collection.",
        date: "Weekend Getaway",
        rotation: -1,
      },
      {
        id: "mem-4",
        image: "/b4.jpeg",
        caption: "Somehow, every moment becomes a story with you.",
        date: "Late Night Talks",
        rotation: 2,
      },
      {
        id: "mem-5",
        image: "/b3.jpeg",
        caption: "Lost somewhere up in the hills and laughing the entire way.",
        date: "Mountain Pass",
        rotation: -1.5,
      },
      {
        id: "mem-6",
        image: "/b6.jpeg",
        caption: "No matter how much time passes, some things never change.",
        date: "Sunset Drive",
        rotation: 1,
      }
    ] as MemoryItem[],
    closingMessage: "Here's to all the memories we've made and all the ones still waiting for us.",
    buttonText: "THINGS YOU LOVE",
    bgImage: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2000&q=85",
  },

  // Page 4: Things You Love (Cars & Passions)
  thingsYouLove: {
    heading: "THINGS THAT MAKE YOU HAPPY.",
    message: "Never stop loving the things that make you excited, dreaming about the things you want, and chasing the moments that make life feel special.",
    bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=85", // Range Rover scenic background
    heroCarCaption: "Range Rover — Standing commanding under quiet skies.",
    cars: [
      {
        name: "Range Rover",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        tagline: "Presence, royalty, and quiet power."
      },
      {
        name: "Porsche",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
        tagline: "Pure curves, precision, and soul."
      },
      {
        name: "Lamborghini",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
        tagline: "Unapologetic drama on open roads."
      },
      {
        name: "Ferrari",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
        tagline: "A scarlet symphony of speed."
      },
      {
        name: "Nissan GT-R",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
        tagline: "The timeless legend."
      },
      {
        name: "Mustang",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
        tagline: "Deep rumble echoing off canyon walls."
      }
    ] as DreamCar[],
    buttonText: "THE ROAD AHEAD",
  },

  // Page 5: The Road Ahead
  roadAhead: {
    heading: "YOUR JOURNEY IS ONLY BEGINNING.",
    steps: [
      "More dreams to chase.",
      "More places to explore.",
      "More reasons to smile.",
      "More memories to make.",
      "More adventures waiting.",
      "More happiness than you can imagine."
    ],
    closingQuote: "I hope the road ahead takes you to everything you've ever dreamed of.",
    buttonText: "ONE LAST THING",
    bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85",
  },

  // Page 6: Final Birthday Message
  finalWish: {
    heading: "HAPPY BIRTHDAY, BROTHER.",
    paragraphs: [
      "Whatever happens, wherever life takes you, and however much we grow older, you'll always be my brother and one of the most important people in my life.",
      "I hope life gives you beautiful opportunities, unforgettable adventures, genuine happiness, and the strength to chase every dream.",
      "Thank you for all the memories, laughter, arguments, and moments that make our bond what it is.",
      "I may not say it all the time, but I'm always wishing the best for you."
    ],
    closing: "Happy Birthday. Love you, bro.",
    footerNote: "MADE WITH LOVE, JUST FOR YOU.",
    bgImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=2000&q=85",
  }
};
