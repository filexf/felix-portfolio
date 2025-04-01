import photoIcon from "../assets/icons/Main-icons/Photography-icon-white.svg"
import webDevIcon from "../assets/icons/Main-icons/Web-development-icon.svg"
import designIcon from "../assets/icons/Main-icons/Designs-icon.svg"

export const cardData = [
  {
    title: "Web Development",
    icon: webDevIcon,
    text: `
              Web development is the perfect blend of creativity and logic, which deeply
              resonates with my passion for art and storytelling. Coming from a
              photography background, I bring a unique perspective to creating
              user-centric applications that are as visually compelling as they are
              functional. `,
    path: "/applications",
  },
  {
    title: "Photography",
    icon: photoIcon,
    text: `When I discovered photography a few years ago, it was as if I had
    found the perfect medium to bridge my passions. Suddenly, I could
    freeze a moment in time, capturing not just the visual elements
    but also the mood, the story, and the essence of what made that
    moment extraordinary.`,
    path: "/photos",
  },
  {
    title: "Design",
    icon: designIcon,
    text: `During my time as a photographer, I had the opportunity to make 2
              books depicting 5 months of adventure through Southeast Asia. I
              wrote the story, used my own photos and edited all by myself, they
              sold by more than 500 copies. It taught me a lot about how to work
              a very big project.`,
    path: "/books",
  },
];
