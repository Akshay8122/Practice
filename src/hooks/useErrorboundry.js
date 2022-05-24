import { useCallback, useState } from "react";

const useErrorboundry = () => {
  const [error, setError] = useState();
  console.log("hello", error);

  return useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};
export default useErrorboundry;
