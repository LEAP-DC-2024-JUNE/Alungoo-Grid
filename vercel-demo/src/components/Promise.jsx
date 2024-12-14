import { useState, useEffect } from "react";

export function Promise() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch(`http://dev.to/api/a`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => {
        setError(true);
      })
      .finally(() => console.log("ajillahgui bn"));
  };

  useEffect(() => {
    fetchData();
  }, []);
}
return <div>{error == true && <div>Aldaa garlaa!</div>}</div>;
