import { useState, useEffect } from "react";
import { CodeBlock } from "../Components/CodeBlock";

const fetchProductInfo = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data: unknown = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const FetchingData = ({ id = "1" }: { id?: string }) => {
  const [productInfo, setProductInfo] = useState<unknown>(null);
  const [isError, setIsError] = useState(false);

  // sync with an external system
  // this is the recommended way to use useEffect for fetching
  useEffect(() => {
    let ignore = false;
    fetchProductInfo(id)
      .then((result) => {
        if (!ignore) {
          // change state, cause a re-render
          setProductInfo(result);
        }
      })
      .catch(() => {
        // change state, cause a re-render
        setIsError(true);
      });
    // clean-up function, prevents race condition
    // called every time id changes
    return () => {
      ignore = true;
    };
    // call this function every time id changes
  }, [id]);

  if (isError) {
    throw new Error("Error when fetching product info");
  }

  return (
    <>
      {productInfo ? (
        <CodeBlock
          code={JSON.stringify(productInfo, null, 4)}
          type="Good"
          additionalMessage="using useEffect to fetch data"
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};
