export const DeleteButton = () => {
  const handleClick = async () => {
    await fetch(`http://127.0.0.1:3001/api/expenses/${expense.id}`, {
      method: "DELETE",
    });
  };
  return <div></div>;
};
