
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  url: string;
  size: 'big' | 'small';
}

export const articles: Article[] = [
  {
    id: 1,
    title: "At the Student Plaza",
    excerpt: "Sometimes it's a Band, and sometimes a Dance Crew— but you can say for sure that there's always something happening at the Plaza.",
    image: "/Articles/1.jpg",
    url: "#",
    size: "big"
  },
  {
    id: 2,
    title: "The Sky Calls, and we Answer",
    excerpt: "The workshops are where you build dreams, and the sky, where you find them taking you.",
    image: "/Articles/2.jpg",
    url: "#",
    size: "small"
  },
  {
    id: 3,
    title: "Student of the Year might not be Real— but, this is",
    excerpt: "The dance floor is where you find yourself, with your shining shoes and popping moves.",
    image: "/Articles/3.jpg",
    url: "#",
    size: "small"
  },
  {
    id: 4,
    title: "Colour-Colour, which Colour do you choose?",
    excerpt: "Still waiting to take off your jacket and put on your magic wings? Get your glitter and colours ready!",
    image: "/Articles/4.jpg",
    url: "#",
    size: "small"
  },
  {
    id: 5,
    title: "Andaz Apna Apna!",
    excerpt: "Do you hear that? Bollywood's calling. Maybe being dramatic will finally pay off!",
    image: "/Articles/5.jpg",
    url: "#",
    size: "small"
  },
  {
    id: 6,
    title: "These are the Days you will Remember.",
    excerpt: "Living through your 'Good Old Days' in the smallest moments. Stop and smile, you're going to remember this.",
    image: "/Articles/6.jpg",
    url: "#",
    size: "small"
  }
];
