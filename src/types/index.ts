export interface MemoryItem {
  id: string;
  image?: string;
  images?: string[];
  caption?: string;
  title?: string;
  category?: string;
  date?: string;
  location?: string;
  description?: string;
  rotation?: number;
  featured?: boolean;
}

export interface DreamCar {
  name: string;
  image: string;
  tagline?: string;
}

export interface CarItem {
  id: string;
  name: string;
  badge?: string;
  category: 'range-rover' | 'sports' | 'supercar' | 'legend';
  tagline: string;
  image: string;
  quote: string;
}

export interface HobbyCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: {
    title: string;
    description: string;
    image: string;
    tag?: string;
  }[];
}

export interface FutureDreamItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  quote?: string;
}

export interface WishMessage {
  id: string;
  author: string;
  relationship: string;
  avatar?: string;
  message: string;
  starColor?: string;
}

export interface PersonalInfo {
  name: string;
  nickname: string;
  birthdayDate: string;
  birthYear: string;
  heroTagline: string;
  shortBio: string;
  introduction: string;
  personalPhotos: {
    hero: string;
    portrait: string;
    casual: string;
    adventure: string;
    laughing: string;
  };
  funFacts: {
    id: string;
    icon: string;
    text: string;
    detail?: string;
  }[];
  attributes: {
    label: string;
    value: string;
  }[];
}
