
export interface GalleryImage {
  id: number;
  src: string;
  photographer: string;
  alt: string;
  span?: 'col' | 'row' | 'both';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/Achinya/IMG_9510.jpeg",
    photographer: "Achintya Singh",
    alt: "Student Project",
    span: "both"
  },
  {
    id: 2,
    src: "/IMG_5953-Enhanced-NR.jpg",
    photographer: "Vivek Kumar",
    alt: "Student Festival",
  },
  {
    id: 3,
    src: "/Archita/_MG_7532-Enhanced-NR.jpg",
    photographer: "Archita",
    alt: "Group Dance",
    span: "row"
  },
  {
    id: 4,
    src: "/Archita/ILC00174-Enhanced-NR.jpg",
    photographer: "Archita",
    alt: "Open Mic",
  },
  {
    id: 5,
    src: "/Archita/ILC00690.jpg",
    photographer: "Archita",
    alt: "Fashion Show",
    span: "col"
  },
  {
    id: 6,
    src: "/Archita/ILC00753.jpg",
    photographer: "Archita",
    alt: "Chords & Co event",
  },
  {
    id: 7,
    src: "/Archita/ILC06671.jpg",
    photographer: "Archita",
    alt: "Nukkad Natak",
  },
  {
    id: 8,
    src: "/Meenakshi/PHOTO-2025-05-26-21-14-13.jpg",
    photographer: "Meenakshi",
    alt: "Manipal",
  },
  {
    id: 9,
    src: "/Meenakshi/PHOTO-2025-05-26-21-15-21.jpg",
    photographer: "Meenakshi",
    alt: "Manipal",
  },
  {
    id: 10,
    src: "/Anirudh/PHOTO-2025-05-26-21-18-18.jpg",
    photographer: "Anirudh Maddodi",
    alt: "Revels",
  },
  {
    id: 11,
    src: "/Rashii/PHOTO-2025-05-26-21-17-14.jpg",
    photographer: "Rashii Singh",
    alt: "Student Plaza",
  },
];
