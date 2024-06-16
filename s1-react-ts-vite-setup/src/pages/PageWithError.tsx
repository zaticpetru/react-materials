import { useSearchParams } from "react-router-dom";

type CustomError = {
  fancyDetails: string;
};

function PageWithError() {
  const [searchParams] = useSearchParams();

  console.log(searchParams);
  if (searchParams.get("custom")) {
    const error: CustomError = {
      fancyDetails: "👌👌👌📈📈📈",
    };
    throw error;
  } else {
    throw new Error("This is not a router error :D ");
  }

  return <div></div>;
}

export default PageWithError;
