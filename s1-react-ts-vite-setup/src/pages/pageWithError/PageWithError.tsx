import { useSearchParams } from "react-router-dom";
import { CustomError } from "types/error/CustomError";

export const PageWithError = () => {
  const [searchParams] = useSearchParams();

  if (searchParams.get("custom")) {
    const error: CustomError = {
      fancyDetails: "👌👌👌📈📈📈",
    };
    throw error;
  }
  throw new Error("This is not a router error :D ");

  return <div></div>;
};
