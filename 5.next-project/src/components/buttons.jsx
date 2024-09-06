import { WorkCard } from "./workcard";

export const Buttons = () => {
  const arr = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwind",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];

  return (
    <div>
      <WorkCard chips={arr} />
    </div>
  );
};
