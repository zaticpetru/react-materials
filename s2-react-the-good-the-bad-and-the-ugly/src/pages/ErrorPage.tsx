import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { isCustomErrorResponse, isErrorResponse } from "types/error/utils";
import { BASE_URL } from "../utils";

function ErrorPage() {
  // React router returns an error with type unknown
  const unknownError = useRouteError();
  // console.error(unknownError);

  let errorDetails = <p>Please try again latter</p>;

  // We can create special functions that will check if the error is a specific type
  if (isCustomErrorResponse(unknownError)) {
    // And provide specific error details
    errorDetails = (
      <div>
        <p>It was my fancy error</p>
        <p>{unknownError.fancyDetails}</p>
      </div>
    );
  }
  // React router also has such a function to check for Route errors and the type is ErrorResponse
  // export type ErrorResponse = {
  //   status: number;
  //   statusText: string;
  //   data: any;
  // };

  if (isRouteErrorResponse(unknownError)) {
    errorDetails = (
      <div>
        <p>It was a Router Error</p>
        <p>Status: {unknownError.status}</p>
        <p>{unknownError.statusText}</p>
        <p>{unknownError.data}</p>
      </div>
    );
  }
  // See in src\types\error\utils.ts
  if (isErrorResponse(unknownError)) {
    errorDetails = (
      <div>
        <p>It was a basic Error</p>
        <p>{unknownError.message}</p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>An error has occurred</h1>
      {errorDetails}
      <Link to={BASE_URL}>Go home</Link>
    </div>
  );
}

export default ErrorPage;
