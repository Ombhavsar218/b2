import type { CarItem, HobbyCategory } from '../types';

export const carsCollection: CarItem[] = [
  {
    id: "rr-vogue",
    name: "Range Rover Vogue / Autobiography",
    badge: "The Crown Jewel",
    category: "range-rover",
    tagline: "Timeless royalty and effortless commanding elegance.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=80",
    quote: "One day, this dream will be parked in your driveway."
  },
  {
    id: "rr-sv",
    name: "Range Rover SV",
    badge: "Special Vehicle Operations",
    category: "range-rover",
    tagline: "Uncompromising bespoke luxury crafted for the boldest journeys.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=80",
    quote: "Some dreams have four wheels and an unmistakable presence."
  },
  {
    id: "rr-sport",
    name: "Range Rover Sport",
    badge: "Dynamic Power",
    category: "range-rover",
    tagline: "Athletic silhouette meeting raw prestige on every winding road.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
    quote: "Until then, keep dreaming—the journey has already started."
  },
  {
    id: "porsche-911",
    name: "Porsche 911 GT3",
    badge: "Precision & Soul",
    category: "sports",
    tagline: "Pure automotive perfection engineered to turn asphalt into art.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=80",
    quote: "Curves, downshifts, and the sound of pure mechanical joy."
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán STO",
    badge: "The Raging Bull",
    category: "supercar",
    tagline: "Unapologetic drama sculpted by wind tunnels and Italian passion.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80",
    quote: "For the moments when ordinary is simply not an option."
  },
  {
    id: "ferrari-f8",
    name: "Ferrari F8 Tributo",
    badge: "Maranello Heritage",
    category: "supercar",
    tagline: "A symphonic tribute to speed, scarlet curves, and racing pedigree.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80",
    quote: "Redline at sunset. Nothing else comes close."
  },
  {
    id: "nissan-gtr",
    name: "Nissan GT-R Nismo",
    badge: "Godzilla",
    category: "legend",
    tagline: "All-wheel grip defying physics, born on the legendary circuits.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80",
    quote: "A machine that speaks the universal language of speed."
  },
  {
    id: "ford-mustang",
    name: "Ford Mustang Shelby GT500",
    badge: "American Muscle",
    category: "sports",
    tagline: "Deep V8 rumble echoing off canyon walls on open American roads.",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1400&q=80",
    quote: "You can feel the heartbeat of this engine in your chest."
  }
];

export const hobbiesList: HobbyCategory[] = [
  {
    id: "music",
    title: "Soundtracks & Late Night Beats",
    subtitle: "Rhythms that fuel the soul",
    description: "Whether it is nighttime driving tunes, deep electronic beats, or nostalgic anthems that get blasted on repeat, music is the rhythm of your adventures.",
    items: [
      {
        title: "Night Drive Waves",
        description: "Bass that hits just right when the highway opens up and city lights blur into streaks of neon.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        tag: "Audio Vibe"
      },
      {
        title: "Headphone Sanctuary",
        description: "Getting lost in sound with noise cancellation on, tuning out the noise of the world.",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
        tag: "Focus"
      }
    ]
  },
  {
    id: "travel",
    title: "Open Horizons & Uncharted Routes",
    subtitle: "The urge to wander",
    description: "From alpine passes to seaside sunsets, you're always ready to pack a bag and see what lies beyond the horizon.",
    items: [
      {
        title: "Mountain Highway Escapes",
        description: "Crisp air, winding hairpins, and scenic overlooks where clouds roll beneath your feet.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        tag: "Altitude"
      },
      {
        title: "Coastal Sunset Drives",
        description: "Watching the sun melt into the ocean with the windows down and ocean mist in the air.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        tag: "Pacific Coast"
      }
    ]
  },
  {
    id: "cinema",
    title: "Cinema & Great Stories",
    subtitle: "Cinematic immersion",
    description: "Big screen visuals, gripping sound design, and iconic thrillers that leave everyone quoting lines for weeks.",
    items: [
      {
        title: "IMAX Thrillers & Epics",
        description: "The thrill of massive sound, Christopher Nolan scale scores, and mind-bending plots.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        tag: "Cinematic"
      }
    ]
  },
  {
    id: "food",
    title: "Food & Culinary Quests",
    subtitle: "Because good food is non-negotiable",
    description: "Hunting down the crispiest crust, the juiciest burger, and the coffee shop that brews liquid gold.",
    items: [
      {
        title: "Wood-Fired Perfection",
        description: "Smoked crust, melting mozzarella, and zero leftovers guaranteed.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        tag: "Cuisine"
      },
      {
        title: "Morning Espresso Ritual",
        description: "Dark roast aromas that kickstart any adventure before sunrise.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
        tag: "Brew"
      }
    ]
  }
];
