const Test = async () => {
  const data = await fetch("https://dev.to/api/articles?per_page=1").then(
    (response) => response.json()
  );
  console.log(data);

  return <div>test page shu</div>;
};
export default Test;

// const Test1 = () => {
//   fetch("https://dev.to/api/articles?per_page=1")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   return <div>test page shu</div>;
// };
// export default Test1;
