import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

type CustomError = {
  fancyDetails: string;
};

const isErrorResponse = (error: unknown): error is Error => {
  return error instanceof Error;
};

const isCustomErrorResponse = (error: unknown): error is CustomError => {
  return (error as CustomError).fancyDetails !== undefined;
};

function ErrorPage() {
  const unknownError = useRouteError();
  // console.error(unknownError);

  let errorDetails = <p>Please try again latter</p>;
  if (isRouteErrorResponse(unknownError)) {
    errorDetails = (
      <div>
        <p>It was a Router error</p>
        <p>Status: {unknownError.status}</p>
        <p>{unknownError.statusText}</p>
        <p>{unknownError.data}</p>
      </div>
    );
  }

  if (isErrorResponse(unknownError)) {
    errorDetails = (
      <div>
        <p>{unknownError.message}</p>
      </div>
    );
    console.log("WE KNOW THE TYPE");
  }

  if (isCustomErrorResponse(unknownError)) {
    errorDetails = (
      <div>
        <p>{unknownError.fancyDetails}</p>
      </div>
    );
    console.log("IT IS CUSTOM YEY");
  }

  return (
    <div id="error-page">
      <h1>An error has occurred</h1>
      {errorDetails}
      <Link to="/">Go home</Link>
    </div>
  );
}

export default ErrorPage;
