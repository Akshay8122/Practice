import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    throw new Error("number is greater than 5");
  }
  return (
    <div>
      <button onClick={handleClick}>Count Me</button>
      <p>current count is:{count}</p>
    </div>
  );
}

export default Count;
