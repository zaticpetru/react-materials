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

  useEffect(() => {
    let ignore = false;
    fetchProductInfo(id)
      .then((result) => {
        if (!ignore) {
          setProductInfo(result);
        }
      })
      .catch(() => {
        setIsError(true);
      });
    return () => {
      ignore = true;
    };
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
