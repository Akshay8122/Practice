import { useEffect, useState } from "react";
import useErrorboundry from "../hooks/useErrorboundry";

const Api = () => {
  const [data, setData] = useState(null);
  const throwEror = useErrorboundry();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/usersd")
      .then((res) => res.json())
      .then(setData)
      .catch((Error) => {
        throwEror(new Error("Async Error"));
      });
  }, [throwEror]);
  console.log(data);
  //   return data;

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Api;
