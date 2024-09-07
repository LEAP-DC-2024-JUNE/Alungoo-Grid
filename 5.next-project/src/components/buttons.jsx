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
      {arr.map((button) => {
        return <div>{button}</div>;
      })}
    </div>
  );
};
