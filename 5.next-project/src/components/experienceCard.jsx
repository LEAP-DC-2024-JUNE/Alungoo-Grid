export const experienceCard = () => {
  return (
    <div className="flex drop-shadow-md">
      {element.imgsrc}
      <p>
        {element.title}.<li className=" list-disc">{element.description}</li>
      </p>
      <p>{element.dates}</p>
    </div>
  );
};
