import { BadExample } from "../Components/BadExample";
import { UglyExample } from "../Components/UglyExample";
import { GoodExample } from "../Components/GoodExample";

export const RedundantState = () => {
  return (
    <div className="flex-column">
      <GoodExample />
      <BadExample />
      <UglyExample />
    </div>
  );
};
