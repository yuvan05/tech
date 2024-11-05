export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  image: string;
}

export interface LiveSession {
  id: number;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  spots: number;
  image: string;
}

export interface Category {
  icon: React.ElementType;
  name: string;
  count: string;
}