export const Header = ({ setInputValue }) => {
  return (
    <div className=" bg-slate-400 flex justify-between">
      <p>Header</p>
      <input
        type="text"
        className=" bg-slate-100 border-2 border-black"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
      ></input>
    </div>
  );
};
