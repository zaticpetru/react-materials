import { CustomError } from "./CustomError";

const isCustomErrorResponse = (error: unknown): error is CustomError => {
  return error != null && (error as CustomError).fancyDetails !== undefined;
};

const isErrorResponse = (error: unknown): error is Error => {
  return error != null && error instanceof Error;
};

export { isCustomErrorResponse, isErrorResponse };
