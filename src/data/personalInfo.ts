import type { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Bro", // Brother's name
  nickname: "Bro",
  birthdayDate: "November 24",
  birthYear: "2000",
  heroTagline: "Today, the universe celebrates you.",
  shortBio: "One of a kind. No duplicates in this galaxy.",
  introduction: "Today is about celebrating you, all the things that make you who you are, all the memories we've made, and all the adventures waiting ahead. So here's a little universe dedicated to you.",
  personalPhotos: {
    hero: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
    casual: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
    adventure: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80",
    laughing: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
  },
  funFacts: [
    {
      id: "fact-1",
      icon: "ShieldAlert",
      text: "Professional at annoying people.",
      detail: "Possesses a master's degree in turning any serious conversation into pure comedy."
    },
    {
      id: "fact-2",
      icon: "Utensils",
      text: "Food disappears suspiciously fast.",
      detail: "Especially if it's pizza, fries, or snacks someone explicitly labeled in the fridge."
    },
    {
      id: "fact-3",
      icon: "Car",
      text: "Can talk about cars for hours.",
      detail: "Will explain exhaust notes and suspension geometry even if nobody asked."
    },
    {
      id: "fact-4",
      icon: "MessageSquare",
      text: "Always has something to say.",
      detail: "Equipped with instant comebacks and spontaneous wisdom at 2 AM."
    },
    {
      id: "fact-5",
      icon: "HeartHandshake",
      text: "One of the best people to have around.",
      detail: "Reliable, generous, and always shows up when it genuinely matters."
    },
    {
      id: "fact-6",
      icon: "Compass",
      text: "Spontaneous road trip instigator.",
      detail: "Will randomly say 'let's go grab food' and end up 80 miles down the highway."
    }
  ],
  attributes: [
    { label: "Designation", value: "Chief Chaos & Heart of the Family" },
    { label: "Superpower", value: "Making everyone laugh when least expected" },
    { label: "Favourite Soundtrack", value: "Late night drives & synthwave playlists" },
    { label: "Dream Garage", value: "Range Rover SV & Porsche 911 GT3" },
    { label: "Comfort Food", value: "Woodfired pizza & midnight burgers" },
    { label: "Go-to Expression", value: "\"Trust me, it's going to be legendary\"" },
    { label: "Signature Habit", value: "Checking the rearview mirror twice just to admire the road" },
    { label: "Galaxy Rating", value: "10 / 10 Star Celestial Being" }
  ]
};
