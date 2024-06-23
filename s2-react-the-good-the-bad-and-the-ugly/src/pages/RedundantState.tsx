import { BadExample } from "../Components/BadExample";
import { UglyExample } from "../Components/UglyExample";
import { GoodExample } from "../Components/GoodExample";

export const RedundantState = () => {
  return (
    <>
      <GoodExample />
      <BadExample />
      <UglyExample />
    </>
  );
};
