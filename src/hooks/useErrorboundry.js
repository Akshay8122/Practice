// import { useState } from "react";
const useErrorboundry = () => {
  // using state
  // const [error, setError] = useState();
  // console.log("hello", error);

  //  using variable
  let setError;

  return (e) => {
    setError(() => {
      throw e;
    });
  };
};

// return (
//   (e) => {
//     setError(() => {
//       throw e;
//     });
//   },
//   [setError]
// );

export default useErrorboundry;
