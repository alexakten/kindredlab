export interface ProjectProps {
  client: string;
  year: string;
  tags: string[];
  thumbnail: string;
  description: string; // Short description for case pages
  content: string[]; // Array of paragraphs for detailed case study
  images: string[]; // Array of image URLs for more images
}

export const projectsData: ProjectProps[] = [
  {
    client: "Qura",
    year: "2024",
    tags: ["Web Design", "Web Dev", "UX/UI", "Product Design"],
    thumbnail: "/images/qura/qura-1.png",
    description:
      "Qura is a healthcare startup revolutionizing patient care through innovative technology.",
    content: [
      "We helped Qura redesign their user interface to improve user experience and increase engagement.",
      "The project involved UX/UI research, wireframing, and developing the front-end to match their branding.",
    ],
    images: ["/images/qura/qura-2.png", "/images/qura/qura-3.png"],
  },
  {
    client: "Airbon",
    year: "2024",
    tags: ["Web Design", "Web Dev", "Branding"],
    thumbnail: "/images/airbon/airbon-1.png",
    description:
      "Airbon is an innovative air purification brand that provides cleaner air for urban spaces.",
    content: [
      "Airbon required a complete branding overhaul, including their website and marketing materials.",
      "We designed a fresh new look with a user-friendly interface and optimized it for e-commerce.",
    ],
    images: ["/images/airbon/airbon-2.png", "/images/airbon/airbon-3.png"],
  },
  {
    client: "MycoMine",
    year: "2024",
    tags: ["Web Design", "Web Dev", "Branding", "Content"],
    thumbnail: "/images/mycomine/mycomine-1.png",
    description:
      "MycoMine focuses on sustainable waste management using bioremediation technology.",
    content: [
      "We built a brand new digital platform for MycoMine, highlighting their innovative green technology.",
      "The design focused on showcasing their environmental mission while ensuring a smooth user experience.",
    ],
    images: [
      "/images/mycomine/mycomine-2.png",
      "/images/mycomine/mycomine-3.png",
    ],
  },
  {
    client: "Payable",
    year: "2024",
    tags: ["Web Design", "Web Dev", "Branding"],
    thumbnail: "/images/payable/payable-3.png",
    description:
      "Payable is a fintech startup aimed at simplifying payment solutions for small businesses.",
    content: [
      "Our team developed a responsive and secure payment interface, tailored for small business owners.",
      "We integrated multiple payment solutions, ensuring that the platform remained user-friendly and scalable.",
    ],
    images: ["/images/payable/payable-2.png", "/images/payable/payable-3.png"],
  },
  // Add other projects similarly
];
