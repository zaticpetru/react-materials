import { useRouteError } from "react-router-dom";
import { isCustomErrorResponse } from "types/error/utils";

export const LowerErrorElement = () => {
  const error = useRouteError();

  // We can create special functions that will check if the error is a specific type
  if (isCustomErrorResponse(error)) {
    // And provide specific error details
    return (
      <div className="card">
        <h1>An error has occurred</h1>
        <p>But we caught it for you earlier, because we treat custom errors</p>
        <p>Here your fancy data: {error.fancyDetails}</p>
      </div>
    );
  }

  throw error;
  // this will swallow the error and not trigger the error element of the parent
  // return null
};
